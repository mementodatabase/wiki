---
title: "Doc: Memento Database"
---

The **Memento Database** page is the first page in the Overview section of the index, it constitutes an introduction to the wiki and possibly to Memento itself.

*Editions
*Platforms
*Licenses (Pro client, Free cloud, Pro cloud, Team cloud)
*Memento products (Memento, Private Server)
*Elements (libraries, fields, entries, linking, scripting, the cloud, files
*Usage techniques (data analysis, 
*Administrative functions (installation, updates, removal, backup/restore, import/export, sync with Google Drive
*User interface (screens, cards, windows, pages
*Security, teams
*Application integration (Zapier, JavaScript Intent object)

is a database management software tool for mobile devices (Android) and personal computers (Microsoft Windows, Linux, Apple Macintosh). Elements of a user's database &mdash; [***libraries***](Library.md) and associated files &mdash; may be synchronized across these [***platforms***](#Platforms.md) via an available cloud service. Libraries also may be [***synchronized with Google Sheets spreadsheets stored on the user's Google Drive***](Synchronizing data.md) to enable the user's data to be manipulated or analyzed by either tool, as needed. [***Import/export from/to comma-delimited (CSV) files***](Importing and exporting data.md) enables coordinated use with external applications, like Microsoft Excel.

Data libraries may be linked, allowing any number of libraries to work together to form a database and provide a solution.

All data can be stored in the [***Memento Cloud***](Cloud storage and Teamwork.md). All such libraries, photos, and files are synchronized automatically between the cloud and local copies on Android devices. Users can provide access to their data to other users, enabling [***teamwork use***](Cloud storage and Teamwork.md).

      1. Targeted users & use cases
Memento's goals include serving:
**the casual, perhaps single-library user** — who just wants to throw up a grocery list or recipe repository
**the intermediate user** — who might want to have some related libraries tracking some activities
**the power user** — who might be pushing the boundaries in certain areas, like scripting, complex data structure, retail or barcode solutions, media solutions, contact applications, product catalogs, charting, or others
**the organizational user** — who might need teamwork collaboration, cross-platform compatibility, cloud storage & coordination, library protection, and others

Memento's online catalog of user templates contains thousands of predefined, ready-to-use libraries to use directly or serve as a starting place. It also gives users the opportunity to familiarize themselves with a large number of ways to use Memento to provide solutions.

      1. *[Platforms](Platforms.md)*
Memento was first implemented on the Android platform for smartphones and tablets, and Android continues to be a prime platform for Memento. The **Mobile Edition** operates off locally stored data that may or may not be synchronized to the Memento Cloud.

Users using Microsoft Windows, Linux, or Apple Macintosh use the Memento **Desktop Edition** to work with data stored in the Memento Cloud. Data and files are synchronized with mobile platforms through the Cloud.

      1. Primary data structures
User data is stored in Memento in ***[fields](Field.md)*** making up ***[entries](Entry.md)*** within a ***[library](Library.md)***. See ***[Terminology](Terminology.md)*** to see how this relates to other database technologies and tools. A collection of libraries is called a ***[group](Library Groups.md)***. A collection of fields within a Library structure is called a ***[page](Page.md)***. When data is entered into fields, an ***[entry](Entry.md)*** is created, so while a library's structure is made up of fields, the library's data is made up of entries.

      1. Programming languages
In general, **no knowledge of programming languages is required** to use Memento.

There is, however, a **[JavaScript field type](JavaScript field.md)** that can be used for scripting or calculation of a field value. JavaScript may also be used to perform functions **[at the touch of a button](Actions.md)** or **[at various junctures in the handling of a library entry](Triggers.md)**. Memento provides a rich **[API (Application Programming Interface)](Memento JavaScript Library.md)** for JavaScript programming. For a full description of the JavaScript language, read **[here](https://developer.mozilla.org/docs/Web/JavaScript)**. The implementation is based on [**the Rhino library**](https://www.mozilla.org/rhino/).

Memento also includes a proprietary scripting syntax for users to define an expression for a **[Calculation field](Calculation field.md)**. It is simpler and easier to learn than JavaScript and is generally more convenient to use, when scripting requirements are minimal.

Memento is implemented using the Java 8 language. If you have esoteric questions about field value limits, arithmetic operation details, etc, you could reference the [**Java 8 documentation**](https://docs.oracle.com/javase/specs/index.html), (but I don't recommend it).

      1. Essential features
- Storing entries with custom [**fields**](Field.md)
- [**Performing Data analysis**](Slicing & Dicing.md), including aggregation, charting, sorting, grouping, and filtering entries by any fields
- Displaying data in the form of a list, a set of cards, a table, on a map, or in a calendar
- [**Synchronization with Google Sheets**](Synchronizing data.md)
- [[Cloud storage and Teamwork|**Teamwork**'], by providing access to libraries to other users
- Access to data from [**several Android devices and from laptop and desktop computers**](Platforms.md); users can work with the same libraries on their phones, tablets, and PCs.
- Dozens of [**types of fields**](Field Type.md), including text, integer, real, boolean, date/time, rating, checkboxes, radio buttons, currency, image, signature, file, audio, contact, [**calculation**](calculation field.md), **[JavaScript](JavaScript field.md)**, geolocations with Google Maps coordinates, and others
- One-to-many, one-to-one, and many-to-many [**relationships between libraries**](Link To Entry field.md)
- [**Importing and exporting CSV files**](Importing and exporting data.md), permitting interoperation with popular programs like Microsoft Excel
- **[Populating database entries](Data Sources.md)** at the touch of a button with data from Web services and other sources
- **[Library Protection](Library Protection.md)** (encrypt entries using AES-128)
- [**Charts**](Charts List screen.md) &mdash; Pie, Line, Bar, Columns, Area, Scatter, Stepped Area
- [**aggregation**](Library.md)): sum, maximum, minimum, average
- Reminders
- [**Backing up and restoring data**](Backup & Restore.md)
- Sending entries via SMS, e-mail, and other available services
- [**Searching entries in libraries by barcode**](Barcode field.md)
- Online catalog of library templates -- thousands of templates available

   1. Find out more about Memento
- The Memento [user interface](User Interface.md)
- [Glossary](Glossary.md)
- [FAQ](FAQ.md)
- [Products & Services](Products & Services.md)
