const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const XML_FILE = './wiki_export.xml';
const OUT_DIR = './md';

// Namespaces to skip (Talk, User, MediaWiki, Template, Help, File, Category, etc.)
const SKIP_NS = new Set(['-2','-1','1','2','3','4','5','6','7','8','9','11','13','15']);

// Strip cell attributes like rowspan="3", colspan="2", style="...", etc.
// Returns the cell text content only.
function stripCellAttrs(cell) {
  // MediaWiki: if cell contains | then everything before the last | is attributes
  // e.g. 'rowspan="3" | text' => 'text'
  // But we must not strip when it's just 'text | more text' (inline pipes in content are rare)
  // The pattern: attributes contain = signs, so check for that
  const m = cell.match(/^([^|]*=[^|]*)\|\s*(.*)$/);
  if (m) return m[2].trim();
  return cell.trim();
}

function convertTables(text) {
  const lines = text.split('\n');
  const out = [];
  let inTable = false;
  let headerDone = false;
  let rowCount = 0;
  // rowspan carry: sparse array of {text, remaining} indexed by column
  let rowspanCarry = [];
  // Buffer for accumulating cells of the current row (MediaWiki allows
  // row cells to span multiple lines within a |- block)
  let pendingCells = null; // null = no row started, [] = row in progress
  let pendingIsHeader = false;

  function flushRow() {
    if (pendingCells === null) return;
    const parsed = pendingCells;
    pendingCells = null;

    if (pendingIsHeader) {
      const cells = parsed.map(c => c.text);
      out.push('| ' + cells.map(c => `**${c}**`).join(' | ') + ' |');
      rowCount++;
      out.push('| ' + cells.map(() => '---').join(' | ') + ' |');
      headerDone = true;
      return;
    }

    // Merge rowspan carry with parsed cells
    const finalCells = [];
    let parsedIdx = 0;
    const newCarry = [];
    const maxCols = rowspanCarry.length + parsed.length + 5;

    for (let col = 0; col < maxCols; col++) {
      const carry = rowspanCarry[col];
      if (carry && carry.remaining > 0) {
        finalCells.push(carry.text);
        const rem = carry.remaining - 1;
        newCarry[col] = rem > 0 ? { text: carry.text, remaining: rem } : null;
        continue;
      }
      if (parsedIdx >= parsed.length) break;
      const p = parsed[parsedIdx++];
      finalCells.push(p.text);
      if (p.rowspan > 1) {
        newCarry[col] = { text: p.text, remaining: p.rowspan - 1 };
      }
    }

    // Update carry
    for (let col = 0; col < Math.max(rowspanCarry.length, newCarry.length); col++) {
      if (newCarry[col] !== undefined) rowspanCarry[col] = newCarry[col];
      else if (!rowspanCarry[col] || rowspanCarry[col].remaining <= 0) delete rowspanCarry[col];
    }

    out.push('| ' + finalCells.join(' | ') + ' |');
    rowCount++;
    if (rowCount === 1 && !headerDone) {
      out.push('| ' + finalCells.map(() => '---').join(' | ') + ' |');
      headerDone = true;
    }
  }

  function parseCells(raw, isHeader) {
    const sep = isHeader ? /\s*!!\s*/ : /\s*\|\|\s*/;
    return raw.split(sep).map(cell => {
      const rsMatch = cell.match(/rowspan\s*=\s*["']?(\d+)["']?/i);
      const rowspan = rsMatch ? parseInt(rsMatch[1]) : 1;
      return { text: stripCellAttrs(cell), rowspan };
    });
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table start
    if (/^\{\|/.test(line)) {
      inTable = true;
      headerDone = false;
      rowCount = 0;
      rowspanCarry = [];
      pendingCells = null;
      continue;
    }

    // Table end
    if (/^\|\}/.test(line)) {
      flushRow();
      inTable = false;
      headerDone = false;
      rowspanCarry = [];
      out.push('');
      continue;
    }

    if (!inTable) {
      out.push(line);
      continue;
    }

    // Caption — skip
    if (/^\|\+/.test(line)) continue;

    // Row separator |- : flush current row, start new one
    if (/^\|\-/.test(line)) {
      flushRow();
      continue;
    }

    // Header cells starting with !
    if (/^!/.test(line)) {
      if (pendingCells === null) {
        pendingCells = [];
        pendingIsHeader = true;
      }
      const raw = line.replace(/^!\s*/, '');
      pendingCells.push(...parseCells(raw, true));
      continue;
    }

    // Data cells starting with |
    if (/^\|/.test(line)) {
      if (pendingCells === null) {
        pendingCells = [];
        pendingIsHeader = false;
      }
      const raw = line.replace(/^\|\s*/, '');
      pendingCells.push(...parseCells(raw, false));
      continue;
    }

    // Non-table line inside table — flush and output
    flushRow();
    out.push(line);
  }

  flushRow();
  return out.join('\n');
}

function wikitextToMarkdown(text) {
  if (!text) return '';

  let md = text;

  // Headers
  md = md.replace(/^======\s*(.+?)\s*======\s*$/gm, '###### $1');
  md = md.replace(/^=====\s*(.+?)\s*=====\s*$/gm, '##### $1');
  md = md.replace(/^====\s*(.+?)\s*====\s*$/gm, '#### $1');
  md = md.replace(/^===\s*(.+?)\s*===\s*$/gm, '### $1');
  md = md.replace(/^==\s*(.+?)\s*==\s*$/gm, '## $1');
  md = md.replace(/^=\s*(.+?)\s*=\s*$/gm, '# $1');

  // Definition lists (before list processing)
  md = md.replace(/^:?;\s*([^:]+?)\s*:\s*(.+)$/gm, '**$1** — $2');
  md = md.replace(/^:?;\s*(.+)$/gm, '**$1**');
  md = md.replace(/^:{1,3}\s*/gm, '');

  // Bold & Italic
  md = md.replace(/'{5}(.+?)'{5}/g, '***$1***');
  md = md.replace(/'{3}(.+?)'{3}/g, '**$1**');
  md = md.replace(/'{2}(.+?)'{2}/g, '*$1*');

  // Remove Category links [[Category:...]] and [Category:...](...)
  md = md.replace(/\[\[Category:[^\]]*\]\]/gi, '');
  md = md.replace(/\[Category[^\]]*\]\([^)]*\)/gi, '');

  // Links [[Page|Text]] or [[Page]]
  md = md.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '[$2]($1.md)');
  md = md.replace(/\[\[([^\]]+)\]\]/g, '[$1]($1.md)');

  // External links [url text]
  md = md.replace(/\[https?:\/\/(\S+)\s+([^\]]+)\]/g, '[$2](https://$1)');
  md = md.replace(/\[http:\/\/(\S+)\s+([^\]]+)\]/g, '[$2](http://$1)');

  // Lists (must match * followed by space/end, not bold **)
  md = md.replace(/^\*\*\*(?=\s)/gm, '      -');
  md = md.replace(/^\*\*(?=\s)/gm, '   -');
  md = md.replace(/^\*(?=\s)/gm, '-');
  md = md.replace(/^###\s/gm, '      1. ');
  md = md.replace(/^##\s/gm, '   1. ');
  md = md.replace(/^#\s/gm, '1. ');

  // Code blocks
  md = md.replace(/<syntaxhighlight[^>]*>([\s\S]*?)<\/syntaxhighlight>/gi, '```\n$1\n```');
  md = md.replace(/<source[^>]*>([\s\S]*?)<\/source>/gi, '```\n$1\n```');
  md = md.replace(/<code>(.*?)<\/code>/gi, '`$1`');
  md = md.replace(/<pre>([\s\S]*?)<\/pre>/gi, '```\n$1\n```');

  // Tables - convert MediaWiki to Markdown
  md = convertTables(md);

  // HTML tags
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<\/?[a-z][^>]*>/gi, '');

  // Templates {{...}} — remove simple ones
  md = md.replace(/\{\{[^}]+\}\}/g, '');

  // Horizontal rule
  md = md.replace(/^----+$/gm, '---');

  // Clean up extra blank lines
  md = md.replace(/\n{3,}/g, '\n\n');

  return md.trim();
}

function sanitizeFilename(title) {
  return title.replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');
}

async function main() {
  console.log('Reading XML...');
  const xml = fs.readFileSync(XML_FILE, 'utf8');

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    isArray: (name) => ['page', 'revision'].includes(name),
  });

  console.log('Parsing XML...');
  const result = parser.parse(xml);
  const pages = result.mediawiki.page;

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  let exported = 0;
  let skipped = 0;

  for (const page of pages) {
    const ns = String(page.ns ?? '0');
    const title = page.title;

    if (SKIP_NS.has(ns)) {
      skipped++;
      continue;
    }

    // Get latest revision
    const revisions = Array.isArray(page.revision) ? page.revision : [page.revision];
    const latest = revisions[revisions.length - 1];
    const wikitext = latest?.text?.['#text'] || latest?.text || '';

    if (!wikitext || typeof wikitext !== 'string') {
      skipped++;
      continue;
    }

    const markdown = wikitextToMarkdown(wikitext);
    const filename = sanitizeFilename(title) + '.md';
    const filepath = path.join(OUT_DIR, filename);

    // Add frontmatter
    const content = `---\ntitle: "${title}"\n---\n\n${markdown}\n`;
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`✓ ${title}`);
    exported++;
  }

  console.log(`\nDone! Exported: ${exported}, Skipped: ${skipped}`);
}

main().catch(console.error);
