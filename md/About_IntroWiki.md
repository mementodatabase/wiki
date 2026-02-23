---
title: "About:IntroWiki"
---

***2021***
1. Introduction to the Memento Wiki
**Memento Database** consists of a set of database management apps & server software for mobile devices (Google Android devices & Apple iOS devices) -- called [***the Mobile edition***](About:The Mobile edition.md) -- and for personal computers and laptops (Microsoft Windows, Linux, Apple iOS) -- called [***the Desktop edition***](About:The Desktop edition.md), referred to as the Memento ***Platforms***.

   1. Organization
A Memento database is organized into [***Libraries***, ***Fields***, & ***Entries***](About:Libraries, Fields, & Entries.md), very similar to *tables* & *rows* in the relational database world. People often use more generic terms, like *records* for entries or rows. An aggregation of data related in addressing a subject area is usually called a *database*. A Memento ***Database*** would consist of a set of related (linked) libraries. The structure of a database can be represented in & exported to a Memento template file, or ***Template***.

You can synchronize your data across all your devices, computers, & their operating systems -- all your platforms -- via a Memento Cloud service. While Memento's apps are available for free or for a one-time charge, cloud services are offered by subscription over time. There are several cloud subscriptions available for free or for a fee per individual, with fees providing greater capacity in storage space. For free, an individual is very constrained; the free services are useful mainly for evaluation purposes. For organizations, features supporting teams are available for a fee per user over time.

Within an account's cloud, synchronization is pretty seamless & complete. With common data types, synchronization is very tight. So, the cloud may readily be used for backup & restoration of data.

Unfortunately the term *synchronization* is also used by Memento in referring to its ability for a library to be synchronized with a sheet of a Google Sheets file on a user's Google Drive. This capability can be very useful for various purposes, and it allows Sheets' data analysis & transformation capabilities to integrate with library data. However, data types & usage, though analogous & similar between the two, are nevertheless incompatible in various ways, causing the facility to be not useful for backup & restoration of data, except within some constraints. See [Synchronization with Google Sheets](Spec:Synchronization with Google Sheets.md) for details.

*Unintegrated text below*

[***Import/export from/to comma-delimited (CSV) files***](Importing and exporting data.md) enables coordinated use with external applications, like Microsoft Excel.

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

***2016***
Elements of a user's database &mdash; [***libraries***](Library.md) and associated files &mdash; may be synchronized across these [***platforms***](#Platforms.md) via an available cloud service. Libraries also may be [***synchronized with Google Sheets spreadsheets stored on the user's Google Drive***](Synchronizing data.md) to enable the user's data to be manipulated or analyzed by either tool, as needed. [***Import/export from/to comma-delimited (CSV) files***](Importing and exporting data.md) enables coordinated use with external applications, like Microsoft Excel.

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
