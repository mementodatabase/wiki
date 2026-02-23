---
title: "Synchronizing data"
---

There are currently two facilities in Memento for synchronizing data. One is to the Memento Cloud. The other is to the Google Sheets application via files stored on Google Drive. They are generally quite separate services, used for mostly distinct purposes.

## Synchronization with the Memento Cloud
The Memento Desktop Edition accesses libraries and resources stored in the Memento Cloud, and there is no local copy explicitly stored on the device. Though there is a download that occurs, this is specifically a cached working copy; the cloud contains the real library.

The Memento Mobile Edition stores libraries and associated resources in local storage, whether internal to the device or on mounted external media. Each of these libraries, together with associated files, may be synced to the Memento Cloud, after which the local copy and that in the cloud will be kept in sync.

The Memento Cloud synchronization service is used to enable supported mobile devices to:
- Enable access to Memento libraries and associated resources across multiple devices and platforms as if they are local
- Share access to Memento libraries and associated resources with the public or with specific other accounts

Data analysis features, such as filters, grouping, charts, and sort order are client-specific, and are not synced via the Memento Cloud.

## Synchronization with Google Sheets
This service is used to:
- externalize some or all fields of a library's entries to enable viewing or processing using Google Sheets.
- sharing some or all fields of a library's entries with others who do not use Memento, but who may use Google Sheets.
- provide a worst-case form of backup, augmenting the internal backup/restore capabilities built into Memento.

Synchronization is performed on a library by library basis.

Keep in mind that &mdash; while Memento field names can include any UTF-8 characters &mdash; Google Sheets may be more restrictive, especially column names, so name your fields to support later sync or export/import.

To initiate Sheets synchronization for a library:
1. Link the library to a new Sheets file on Google Drive by opening the Library Entries List screen and then its Action menu. If the library is already set up to synchronize with a Sheets file, the option will be entitled "Sync with Google Sheets". If not, it will be entitled "Link To Google Sheets". Since we are initiating sync, select *Link to Google Sheets*.
1. A card will appear with an option *Link to new document*. If you want to create a new Google spreadsheet with records from the Memento library, select *Link to new document*. In this case, a new Google Sheets file will be created on the Google Drive (access to that account required) in the root (My Drive) directory, and a sheet row will be created for every library entry. You can then use Google Sheets to view, edit, add, and delete rows/entries.
1. To synchronize changes made in Memento and Google Sheets, open the library's Action menu and select *Sync with Google Sheets*.

### Synchronizing files (images, audio, etc) with Google Sheets
Synchronization of files attached to entries (images, audio recordings, etc) is turned on when connecting with a Google spreadsheet, or in the library settings.
- All files attached to entries of a library are uploaded to Google Drive, in a folder called Name_library.files
- Links to uploaded files are saved in a column of the Google spreadsheet with the name Name_field.http

### Notes
**New MEMENTO_ID column** — When the link to Google Sheets is created (called *binding*), an additional column will be created in the Sheet, with a title of **MEMENTO_ID**, to enable matching of rows to entries in Memento. **Do not modify or delete this column.**

**Matching locale settings** — The locale setting on your device should match the locale setting in Google Sheets.

**Editing the same rows/entries** — If you edit the same entries/rows in Memento and Google Sheets, you will be prompted to choose which version is correct.

**Adding a new field** — Whenever you add a new field for synchronization, the Sheet file on the Google Drive is created anew.

**Keep data together** — All entries in the Google Sheet should follow one after another. There should be no empty rows.

**Some one-direction-only field types** — Memento allows you to synchronize fields of all types.
However, Calculation, JavaScript, & Contact fields are synchronized in one direction only &mdash; from Memento to Google.
