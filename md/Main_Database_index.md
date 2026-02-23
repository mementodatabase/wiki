---
title: "Main:Database index"
---

1. Memento & Industry database terminology (Read about *libraries, fields, & entries* here)
This is to get us on the same page regarding terms Memento users have used previously versus the terms chosen by Memento for its products. [Jump to the Desktop index](Main:Desktop index.md)

Sometimes some of us tend to use one set of terms for things, and some might use another set of terms for the same things, like "record" or (less often) "row" for a Memento entry and ...
***Is this an about page?***, like entry name, links to linking, template, cloud, editions, platforms

| **Term** | **Memento terms** | **Common industry terms** | **Relational terms** | **Generic terms** |
| --- | --- | --- | --- | --- |
| ***Field*** | A type of field instead of *field type*. A ***field*** is also used to refer to the data (datum, in actuality) that may have been entered into a *field*. | A ***field*** the name of a column in a table or library | ***field*** | *domain* when discussing the *data structure* and the name of a datum, or the data as displayed in a *library entry*, a *table row*, or a *database record*. The term *field* is universal. It is sometimes used to refer to the *domain* or *type* of field, or *field type*. |
| ***Record***
or
***Row***
or
***Entry*** | A generic term referring to an ordered set of *fields* of data within a library | A generic term referring to an ordered set of *fields* of data within a table or library | A generic term referring to an ordered set of *fields* of data within a table | *Records, rows, or entries* may have unique identifiers (entry names in Memento), allowing them to be identified & accessed with linkage by some means (Link to Entry *fields* & Find or Search functions. These identifiers are often indexed to optimize performance. |
| ***Library***
or
***Table***
(or
*sometimes Database)* | A collection of *entries* containing data. |
An *entry* may be identified by a possibly unique entry name.

An *entry* may be identified ***in other libraries*** by use of a Link to Entry *field*.
| A collection of *records* containing data. |
As *record* is a generic term, it may be identified by a possibly unique (unspecified) means.

A *record* may be identified ***in other tables*** by inclusion there of this (same) key, called a secondary key.
| A collection of *rows* containing data. |
A *row* may be identified by a possibly unique primary key.

A row may be identified ***in other tables*** by inclusion there of this (same) key.
| Use ***table*** outside Memento. Some people outside Memento unfortunately still use *database*, where we would use *library*. |
| ***Database*** | One or more related libraries | One or more related tables or libraries | One or more related tables | Use ***table*** outside Memento, ***library*** within. Some people outside Memento unfortunately still use *database*, where we would use *library*. |

The data used by a user base for a given scope

In Memento, use library. In the relational world, use table. Table is the most gernerally recognized term. (Some people outside Memento unfortunately still use database.
Database 	One or more related tables or libraries 	One or more related tables 	One or more related libraries 	Use table outside Memento. Some people outside Memento unfortunately still use database, where we would use library. 

The Memento Database application comprises *libraries* (often known outside Memento as tables), *entries* (often known outside Memento as rows), and *fields* (often known outside Memento as columns). A common generic term, recognized everywhere for either entries or rows is *records*.

In the Memento forum, "field" and "record" are often used and "column" and "row" is seldom used. So, it's best to stick with either Memento's "entry" (since it's their forum, after all), but when others use or seem to prefer the database industry's "record", we'll all know what is meant by that, and we can accommodate them when interacting with them, message by message in the forum.

      1. Databases and Libraries
Likewise, within the database industry overall, "database" is used to mean the entire set of data used by a hopefully identified user or group of users to accomplish the users' personal or professional objectives, comprising libraries, entries, and fields. So, a person might use one database at home and another at work, and though many libraries will be different between libraries (like Customers at work and Groceries at home), some libraries might be used both at home and at work, often the most common and generic libraries, like People or Organizations.

When a user's objectives are so small that a single library is enough, then in that case the database is the library. However, when a user's objectives require that libraries be linked together to accomplish the objectives, now the entire set of linked libraries constitute the database. That's why, whenever we go into Edit Library > Export to create a .template file, there's an option to include linked libraries. This makes the template a database export rather than merely a library export. For more on database exports, see [Export a database](How:Export a database.md).

Libraries can be linked so they can work together as a database. So, each library has a structure of fields & other things (see below for what things make up its structure), and each database has a structure of libraries & links between them (see About:Database structure#Examples for an example).

   1. The *Database index*, allowing quick access to Memento Database information
Yada (1-3 lines)

      1. Introduction
Yada (1-3 lines)

| **Overviews** | **About** |
| --- | --- |
| [Memento Database](Memento Database.md) |
[Memento Wiki](Memento Wiki.md)

[Glossary](Glossary.md)

[Useful links](Useful links.md)

[Releases](Releases.md)
| [How:Getting Started](How:Getting Started.md) |
[About:Bill's mementos](About:Bill's mementos.md)

[About:Bill's tutorials](About:Bill's tutorials.md)

[About:Bill's examples](About:Bill's examples.md)

[Tutorial:Simple To Do List](Tutorial:Simple To Do List.md)

[Tutorial:Simple To Do List Enhancements](Tutorial:Simple To Do List Enhancements.md)

[About:Color codes](About:Color codes.md)

[CaseStudy:Designing Memento databases:Photographic equipment](CaseStudy:Designing Memento databases:Photographic equipment.md)

      1. Libraries & templates ***(both editions, except maybe with templates)***
Yada (1-3 lines)

| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Library](Library.md) |
[Library Template](Library Template.md)
| [Libraries List screen](Libraries List screen.md) |
[Library Edit screen](Library Edit screen.md)

[Library Groups](Library Groups.md)

[Library Protection](Library Protection.md)
|  | [How:Add a Library](How:Add a Library.md) |

      1. Fields, pages, & subheaders ***(both editions)***
Yada (1-3 lines)

| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Field](Field.md) |
[Field Edit card](Field Edit card.md)

[Field Role](Field Role.md)

[Field Type](Field Type.md)

[Page](Page.md)
|  | ***Text fields*** |
[Text](Text field.md)
[Rich text (HTML)](Rich Text field.md)
[Phone number](Phone Number field.md)
[Email address](Email Address field.md)
[Hyperlink](Hyperlink field.md)
[Password](Password field.md)
[Barcode](Barcode field.md)

***Numeric* fields**
[Integer](Integer field.md)
[Integer values](Integer values field.md)
[Currency](Currency field.md)
[Real number](Real number field.md)
[Reading](Rating field.md)

***Choice* fields**
[Boolean](Boolean field.md)
[Single-choice list](Single-choice List field.md)
[Radio buttons](Radio Buttons field.md)
[Multiple-choice list](Multiple-choice List field.md)
[Checkboxes](Checkboxes field.md)
[Dynamic List](List field.md)

***Calculated expression* fields**
[JavaScript](JavaScript field.md)
[Calculation](Calculation field.md)

***Date* fields**
[Date](Date field.md)
[DateTime](DateTime field.md)

***Time* fields**
[Time](Time field.md)
[DateTime](DateTime field.md)

***Linking* fields**
[Link to entry](Link To Entry field.md)
[Link to file](Link To File field.md)

***Media* fields**
[Audio](Audio field.md)
[Image](Image field.md)
[Signature](Signature field.md)

***Miscellaneous* fields**
[Contact](Contact field.md)
[Location](Location field.md)
[Tags](Tags field.md)

***Special content* fields**
[Audio field](Audio field.md)
[Barcode field](Barcode field.md)
[Contact field](Contact field.md)
[Location field](Location field.md)
[Rich Text field](Rich Text field.md)
[Signature field](Signature field.md)

| [Field Dependencies](How:Field Dependencies.md) |
[Using JavaScript in Memento](Tips:Using JavaScript in Memento.md)

      1. Entries & entry lists ***(both editions)***
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Entry](Entry.md) |
[Data analysis](Data analysis.md)
| [Entry View card](Entry View card.md) |
[Entry Edit card](Entry Edit card.md)

[Libraries List screen](Libraries List screen.md)

[Entries List screen](Library Entries List screen.md)
| [How:Access a Previous Entry](How:Access a Previous Entry.md) |
[How:Slice & Dice Library Data](How:Slice & Dice Library Data.md)
|  |

      1. Linking
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Calculation field](Calculation field.md) |
[Link To Entry field](Link To Entry field.md)

[Link To File field](Link To File field.md)
|  |  |  |

      1. Data Analysis (Slicing & dicing)
(Sorting, grouping, filtering, aggregation, & charting)
Yada

| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Slicing & Dicing](Slicing & Dicing.md) |
[Aggregation](Aggregation.md)
| [Entries List screen](Library Entries List screen.md) |
[Charting data](Charting data.md)
| [How:Slice & Dice Library Data](How:Slice & Dice Library Data.md) |  |

      1. Scripting, Calculation, & App Integration
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Scripting](Scripting.md) | [Calculation field](Calculation field.md) |
[JavaScript field](JavaScript field.md)

[Memento JavaScript Library](Memento JavaScript Library.md)

[Actions](Actions.md)

[Data Sources](Data Sources.md)

[Triggers](Triggers.md)
| [Tasker Integration](Tasker Integration.md) |
[Trigger Examples](Trigger Examples.md)

[How:Write scripts in JavaScript for Memento](How:Write scripts in JavaScript for Memento.md)

[Tips:Using JavaScript in Memento](Tips:Using JavaScript in Memento.md)
|  |

      1. Installation & settings
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
|  | [Memento Settings](Memento Settings.md) |  |  |

      1. Import, export, synchronization, backup, & restore
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Backup & Restore](Backup & Restore.md) | [Importing and exporting data](Importing and exporting data.md) |
[Formatting Templates screen](Formatting Templates screen.md)
| [Tips:File Attachments](Tips:File Attachments.md) |  |

      1. Cloud, platforms, & collaboration
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Platforms](Platforms.md) |
[Cloud storage and Teamwork](Cloud storage and Teamwork.md)
| [Cloud Library Status card](Cloud Library Status card.md) |  |  |

      1. Security
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Privacy Policy](Privacy Policy.md) |
[Library Protection](Library Protection.md)
|  |  |  |

      1. Products
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Memento Clients](Memento Clients.md) |
[Private Server](Private Server.md)

[Team for Business](Team for Business.md)
|  | [Tips:Team for Business](Tips:Team for Business.md) |  |

[Jump to the index](#Navigation index.md)

[Jump to the top](#The Memento Wiki.md)
