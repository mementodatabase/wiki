---
title: "Dev: Memento wiki authoring templates"
---

From the beginning, the Memento wiki was developed and continues to be developed with the assistance of wiki templates developed by ourselves.

To access these templates, go to Main Page > Special Pages > Uncategorized templates.

This page documents each of the templates, how they are used, and I'm some cases, how they are used together.

   1. Template documentation
      1. Note annotations
**BeginNote** — Initiate a note being taken in a wiki page
**EndNote** — Finish a note being taken in a wiki page
**NoteLine** — A single-line independent note

      1. Memento editions & their documentation in the wiki
**EditionA** — Info on all editions of Memento follows
**EditionD** — Info specific to the desktop edition follows
**EditionM** — Info specific to the mobile edition follows

      1. Field type spec support
Standard or default language for field type definition parameters & options

      1. Advanced parameters

**Field Data Validation** — Documentation is shown in 3 segments: the base (the initial text), the text specific to the field type being documented, and the wrap (the closing text). For example, documentation for a text field is done as follows:
```

```
Such threesomes provide the following standard language:

***(Initial text for all data validation fields) FieldDataValidationBase:***

***(For date fields) FieldDataValidationDate:***

***(For numeric fields) FieldDataValidationNumeric:***

***(For text fields) FieldDataValidationText:***

***(Closing text for all data validation fields) FieldDataValidationWrap:***

**FieldDepend** — provides the following standard language:

**FieldFont** — provides the following standard language:
**FieldFontCard** — provides the following standard language:

**FieldNameHint** — provides the following standard language:

**FieldOnCard** — provides the following standard language:

**FieldRequired** — provides the following standard language:

**FieldRoleRND** — provides the following standard language:

**FieldRoleRNDS** — provides the following standard language:

**FieldRoleRT** — provides the following standard language:

      1. Display Options

**FieldTypeReturnValues** — displays a table showing for each field type, the JavaScript object returned & examples of returned values, as follows:

**FieldWhereEdit** — provides the following standard *Where the field can be edited* text, as follows:```

```

      1. Linking sheets

**JavaScriptLinks** — provides sets of links to documentation of the use of JavaScript, as follows:```

```

**LinkSyncSheets** — 
**MenuOptionLinkSyncSheets** — 
**MenuOptionProtection** — 
**MenuOptionUploadToCloud

Specific

      1. Time & version stamping of wiki pages
**Stamp** — Pages that apply to all editions of Memento**

**Example Stamp** — ```
{{stamp|21-04-10|4.10.0|1.9.6}
```

**StampD** — Pages that apply only to the *Desktop* edition

**Example StampD** — ```

```

**StampM** — Pages that apply only to the *Mobile* edition

**Example StampM** — ```

```

      1. Miscellaneous
TBD above
TBD below
