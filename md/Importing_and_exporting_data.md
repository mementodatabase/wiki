---
title: "Importing and exporting data"
---

Data import and export is supported via "comma-delimited values" (CSV) files. Such files were designed to enable data import to and export from fielded-data applications, mainly database and spreadsheet applications.

To import data from CSV files:
1. Locate the file to be imported to local storage &mdash; the SD card or internal storage.
1. In the Library Entries List screen, open the Action menu and select *Import and export*... > *Import from CSV*.
1. The File Manager card will pop up. Select the desired CSV file.
1. Columns of the file that match fields defined in the library, if any, will be listed. The card allows the user to change the field delimiter (comma by default) and/or text qualifier (double quote by default).
1. If there are any matching columns, press the *Import* button to perform the import.

When you import data from CSV files, new entries are created each time.

An entry can also be [saved to a file in Portable Document Format (PDF)](Entry View card#Action Menu.md).

   1. CSV file format
- The name of a column must match the name of the corresponding library field.
- The file must contain a column with the field that is the name of the entry.
- The file must be encoded in UTF-8 format.

   1. Data format notes
**Date** — The date must be in the same format as in the system settings. You can review and modify the date format required for importing in the application's general settings.

**Date/Time** — The values are separated with a space; the date comes first, and then comes time in the HH:MM format.

**Single-choice list** — The value being imported must already be in the parameters of the corresponding field.

**Boolean (Checkbox)** — The following values are acceptable for the truth value: true, yes, 1

**Location** — "latitude,longitude"

**Rating** — A number from 0 to 5.
