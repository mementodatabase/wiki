---
title: "Library"
---

In Memento, the fundamental data structure is the library. A library contains data ***[entries](Entry.md)***, each of which is made up of typed ***[fields](Field.md)*** each of which contains a value.

Memento is relational; a library is equivalent to a **table**, and an entry is equivalent to a  **row**. Libraries can be linked together in similar fashion to relational tables.

The set of a library's fields may be subdivided into ***pages***. By default, fields fall into the page named "MAIN". Fields may be again subdivided by ***subheaders***, which allow visual separation within a page.

When a value is stored for some field types, an external file is created or referenced, so the user's database consists of his or her libraries and its associated files.

In addition to fields, a library can contain ***[aggregation functions](Library Edit screen#AGGREGATION tab.md)*** to be displayed in entry lists.

A library can also be set up to ***[ autofill](Library Edit screen#AUTOFILL tab.md)*** certain fields from Internet-based sources.

[**Libraries may be password-protected and encrypted**](Library Protection.md) to protect the privacy of their contents.

The set of a user's libraries may be subdivided into [***groups***](Library Groups.md). By default, libraries fall into the group named My Libraries.

In the Mobile Edition, libraries are stored locally and may or may not be synchronized with [***the Memento Cloud***](Cloud storage and Teamwork.md) along with their associated files. The Desktop Edition, however, works on libraries and files stored in the Memento Cloud.

Libraries may be [**imported from and exported to comma-delimited (CSV) files**](Importing and exporting data.md), which are often exported from or used to then import into other database products or spreadsheet file formats.

If the user is logged into a Google account, his or her libraries may be [**synchronized with Google Sheets files**](Synchronizing data.md) stored on the user's Google Drive. To do this, the library must already exist, so if the user wants to create a new library from a Google Sheet, the user must first create the library and its fields to match those of the Google Sheet and then set up the new library to synchronize with the Google Sheets file.

   1. See Also
**[Libraries List screen](Libraries List screen.md)**

**[Library Edit screen](Library Edit screen.md)**
