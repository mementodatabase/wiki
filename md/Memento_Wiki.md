---
title: "Memento Wiki"
---

The Memento Database Wiki was born very modestly in July, 2016, as mere links to the existing User Manual and FAQ. Initial development began in late July, with a main page fashioned from a marketing blurb. The page was then honed from that into a more proper main page. By the end of July, the main page and essential pages linked from it were created.

The month of August was consumed by refurbishment and normalization of those initial pages and the construction of the field type pages for the 29 field types in existence at the time.

Areas of new growth will be How & Techniques pages (including approaches, tips, and techniques), examples, additional overview pages, and articles, including tutorials, as initial versions of all Spec pages have been created.

Work continues...

The initial work is being done by user Bill Crews (Bill.Crews@gmail.com). During this initial stage of its development, users, developers, and group members can help by reading the pages, identifying any errors or unclear language, and including them along with suggestions in email messages to Bill. Alternatively, members can ask questions or make comments in the **[Memento Group](https://groups.google.com/forum/m/#!forum/mementodatabase)**.

      1. Update Wed 15 Apr 2020
The wiki has been fairly static for the last 3 years or so, with the main updates being in the What's New in Memento page, some examples pages, some JavaScript tips, and updates based on new features as they came out.

There will be a new surge of activity in the coming year, starting with a long-needed Memento JavaScript Tutorial.

#### The Memento JavaScript Tutorial
Now, I am guilty of feeling very strongly that Calculation fields should be dropped off the plank of a galleon in the deepest part of the Abyss. It is baroque beyond all reason, though a good very early effort by the developer to provide a bit of easy-to-learn scripting for Memento users. And support can't be removed for it without breaking everyone's code.

JavaScript, starting with JavaScript fields, was brought in to the rescue, but the kelp is dragging everyone under despite this valiant attempt. I'll release the tutorial in little pieces, hopefully in a sequence that makes sense to everyone as it comes out.

##### In the meantime
In the meantime, maybe you can use this Coronavirus hiatus time to check out the non-DOM, non-HTML, non-Web portions -- the fundamentals, basically objects, arrays, properties, strings, methods & functions, etc -- by surfing to the links at the end of the Tips:Using JavaScript in Memento wiki page, focusing only on the Mozilla Developer Network (bottom) portion of the table of links, avoid the tutorials in there, and focus on the Introduction to JavaScript and the JavaScript Guide -- but all the while making sure to skip over all the following things...

      1. **WHAT TO READ UNTIL THE MEMENTO JAVASCRIPT TUTORIAL SECTIONS COME OUT**
If you feel you need to use Memento JavaScript and learn both JavaScript (Memento subset of it) & how to use it with Memento --  until the Memento JavaScript Tutorials (the **MJTs**) come out -- **the *Grasshopper* Android app** (get from the Google Play store) will teach you JavaScript Fundamentals I & II. You should then be ready to tackle the wiki for the Memento part of it.

**TBD**

is the way to best learn, using parts of the official **MDN JavaScript Guide** as specified by the following procedure...

In the Introduction,
- Skip Where to find JavaScript Information.
- What is JavaScript? is good.
- JavaScript and Java is important.
- Skip JavaScript and the ECMAScript specification.
- Skip Getting started with JavaScript, for the following reasons (This is the best example of why we have to skip stuff, so I'll expound on it.)
   - It starts with "Getting started with JavaScript is easy: all you need is a modern Web browser". Well, yeah, it's easy relative to learning all of JavaScript for all Web development with several kinds of tools, like HTML, CSS, and so on.
   - However, the deal is that you only need to know a tiny portion of even the fundamentals plus learning a bit about Memento JavaScript fields and if you need more, then also the Memento JavaScript Library.
   - If you start doing what it says is so simple -- Yes, it is relatively simple -- but it seeks to teach you way more and mostly different information than what you need.

In the JavaScript Guide, (Skip means skip to learn just what you can get by with.) If you want to learn more but still avoid all that Web stuff, I'll use the word Skip (underlined, not bold).
- Skip the Introduction. You already read it above.
- Grammar is excellent. Please read.
- Control flow is good, Skip the error handling, try/catch/throw, & error objects.
- Loops and iteration is good, but Skip for..of. The Rhino JavaScript engine Memento uses to interpret JavaScript uses an older version of JavaScript that doesn't include support for for..of.
- Functions is good, but Skip the following subsections ...
   - Function scope
   - Closures
   - Arrow functions
- Expressions and operators is excellent.
- Numbers & dates is excellent.
- Text formatting is good but Skip Template literals & Regular expressions.
- Indexed collections is good, but Skip Typed arrays.
- Skip Keyed collections.
- Working with objects is good, but Skip Getter and setter.
- Skip Details of the object model.
- Skip the rest of the guide.

Then, read the following Memento Wiki pages in sequence:
- Scripting
- JavaScript field -- The next 5 pages are more complex. If you can get by with JavaScript fields, skip them...
   - Memento JavaScript Library
   - Actions
   - Custom Data Sources
   - Triggers
   - Trigger Examples
- Tips:Using JavaScript in Memento

Check back during the Coronavirus crisis for the tutorial and for incremental additions to it over time.

      1. Wiki Page Categories
Every wiki page is in at least one category. You can see the page's categories at the very bottom of each page. To see a list of all wiki pages by their categories (similar to a site map), see the **[:Category:Memento](:Category:Memento.md)** page.
