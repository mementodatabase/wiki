---
title: "Glossary"
---

The following terms include those that are Memento-specific and those that relate to the user of databases and mobile applications.

1. Terms
## A
**Action** — A JavaScript script stored within a library that is set to run upon the pressing of the Play icon (like a YouTube Play icon) by the user
See [Actions](scripting/Actions.md)

**Aggregation** — In Memento, the set of operations and views that apply to the entire library or to each entry group in the library as well as to the entire library. Operations include sum, average, maximum, and minimum. Views include showing entries from related libraries when they are related to the shown entries of the current library.

**Autofill** — In Memento, the act of filling in data from an appropriate external data source when an entry is created

## C
**Calendar view** — The [view](#view) of listed library entries in which the format of the list is that of a calendar of events.

**Card** — (Mobile term)
Synonyms: [Dialog](#dialog), [Form](#form)
In the mobile edition, a proper subset of a screen that pops up modally in front of a screen to support the collection of information or performance of a task, and upon completion, returns to the "underlying" screen. That is, it is *modal*; when the card pops up, the user is in the card mode; when the card is completed or dismissed, the user is returned to the screen mode.

**Cards view** — (Mobile feature)
In the mobile edition, in ***Card view***, the Display of entries in a list in the form of cards, shown 2-up on the list screen, and showing the same information as is shown in ***List view*** &mdash; namely, thumbnail (if any), entry name, entry description, and entry status. *See [View](#view).*

## D
**Database** — A general term for an organized set of data, gathered and organized for a purpose, generally comprising multiple libraries. One could consider the set of libraries within a Group to be a database; or perhaps each set of libraries that are linked together to formulate a solution; or the entire Memento Cloud for a given user.

**DBMS** — (Relational database term)
Stands for **D**ata**B**ase **M**anagement **S**ystem.
A relational DBMS (or RDBMS) is an app, often a server app, that stores information on a database in a [relational](#Relational) manner and allows access to it using queries to the DBMS.

**Dialog** — Synonyms: [Card](#card), [Form](#form) (In Mobile Memento, the term *card* is preferred.)
A proper subset of a screen that pops up modally "in front of" a screen to support the collection of information or performance of a task, and upon completion, returns to the "underlying" screen.

**Display** — (Mobile term)
In the **mobile edition**, the way Memento is presented to the user, as a part of the device and its operating system. A app's screen is generally shown on the display.

**Dropdown panel** — A [panel](#panel) that consists of a button that drops a menu down, each item identifying a subordinate panel that will drop down, based on the name displayed in the dropdown menu item.

## E
**Entry** — Synonyms: [Record](#record), [Row](#row)
A unit of fielded data within a library
An instance or occurrence of data across fields or columns

**Entry color** — A way that works on both editions of Memento is to use a JavaScript field. Don't fear, as the script is the most trivial of trivial things, JavaScript-wise, though you do need to know what 6-character codes define what colors (though you really should learn that anyway).

See a detailed explanation of color codes at [About:Color codes](About:Color_codes.md).

For the color codes, look at ***https://htmlcolorcodes.com/***. Scroll down liberally to get to a section suited to your interest.

For a script, all you do is put down the color code in double-quotes. So, Medium Gray is **"#808080"**. Just look them up.

**Entries List Footer Bar** — A display bar at the foot of a list of entries. It often includes the number of entries in the list and might contain aggregation information, as well.
Context - [Entries List screen](ui/Library_Entries_List_screen.md)

**Entries List Group Bar** — A display bar within a list of entries. It is a header bar for a sublist of entries whose grouping values match. It may contain the number of entries in the sublist and other aggregation information for the sublist.
Context - [Entries List screen](ui/Library_Entries_List_screen.md)

**Entries List Header Bar** — A display bar at the head of a list of entries. It may include the number of entries in the list as well as aggregation information.
Context - [Entries List screen](ui/Library_Entries_List_screen.md)

## F
**Field** — A typed data item occupying a position within a library or table
Context - [Library](Glossary.md#Library)

**Filter** — The restriction of a list of library entries to those whose values match certain filtration criteria
Context - [Entries List screen, right-side menu](ui/Library_Entries_List_screen.md#rightsidemenu)

**Filter tabs** — The ability to set filters up as tabs on the Entries List screen to allow the combination of filters and quick switching between them
Context - [Entries List screen, right-side menu](ui/Library_Entries_List_screen.md#rightsidemenu)

**Form** — Synonyms: [Card](#card), [Dialog](#dialog) (In Mobile Memento, the term *card* is preferred.)
A proper subset of a screen that pops up "in front of" a screen to support the collection of information or performance of a task, and upon completion, returns to the "underlying" screen.

## G
**Group** — A *library group*, or subdivision of the libraries in a database. Groups simplify lists of libraries. They are merely containers; there is no functionality defined for groups.
Context - [Libraries List screen](ui/Libraries_List_screen.md)

The act of summarizing a list of entries by the values of a field of the library.
A set of such matching entries.
Context - [Entries List screen, right-side menu](ui/Library_Entries_List_screen.md#rightsidemenu)

## H
** Hamburger Menu** — In the upper-left corner of the Libraries List screen is an icon resembling a hamburger -- 3 lines representing a burger patty between 2 buns -- which when pressed deploys a pulldown menu consisting of 4 sections... a list of library groups, beginning with the default group (My Libraries), and continuing with any groups the user may have added.
Context - [Libraries List screen](ui/Libraries_List_screen.md)

## K
**Kanban view** — In the mobile edition, the [view](#view) of listed library entries in which the format of the list is that of a set of columns with entries listed within certain of the columns. The metaphor used is that of a bulletin board with sticky notes stuck in certain of the columns, generally to manage a set of tasks whose status may change frequently and are thus indicated by moving the sticky note (entry) from one column to another.

**Kebab menu** — In the mobile edition, in the upper-right corner of the Library Entries List screen is an icon resembling a shish kebab -- a line representing a roasting spit and 3 dots representing 3 morsels -- which when pressed deploys the [right-side menu], including an initial menu option to edit the library -- that, to display and optionally change the structure of the library, mostly consisting of field definitions.
Context - [Library Entries List screen](ui/Library_Entries_List_screen.md)

## L
**Library** — Synonym: [Table](#table)
A container for entries (records, rows) of fielded data

**List** — A list is just a list &mdash; a sequence of items of whatever sort. There are a few primary lists of interest in Memento, starting with the list of libraries and the list of entries within a Library. Each of these is a dedicated screen.

**List view** — The view of listed entries in which the format of the list is that of a textual list.

## P
**Page (Memento)** — A subdivision of the set of fields of a library. The initial page for a library is on a tab called MAIN. The user can add more pages; each will have a name and a tab; and each will have its own set of fields. Each entry in a library contains all fields across all pages.
Context - the [Entry View card](ui/Entry_View_card.md), [Entry Edit card](ui/Entry_Edit_card.md)

**Page (Wiki)** — As in any wiki, the information is organized primarily in Web pages. The secondary organizing unit in wikis is the category.
Context - the [Memento Wiki](Memento_Wiki.md)

**Pane** — (Desktop term)
Any [window](#window) may be subdivided into ***panes***, which are **tiled** regions within the screen or window each of which has its own distinct content.
In the desktop edition, a Memento window is at all times subdivided into panes.

**Pane section** — (desktop term)
In the desktop edition, within a [window](#window) [pane](#pane), the **content** is often broken up into [sections](#pane_section). A pane section is generally made up of a title, text, hyperlinks, and white space to visually separate the section from others. For example, the Memento opening window contains a center pane that is broken up into 3 sections &mdash; New Library, Recent, and Help.

**Panel** — (Desktop term)
In the desktop edition, [window](#window) [panes](#pane) are frequently broken up into tiled [panels](#panel). A panel may take the form of a [static panel](#static_panel),  a [tabbed panel](#tabbed_panel), or a [dropdown panel](#dropdown_panel). In any of these cases, a panel may contain buttons, dropdown lists, prompting text, text fields, etc.

## R
**Record** — Synonyms: [Entry](#entry), [Row](#row) (In Memento, the term *entry* is preferred.)
A unit of fielded data within a library

**Relational** — In databases, *relational* data means data arranged in rows & columns, as in a table or spreadsheet, where field names are represented by the column headings and entries or records are represented by rows in the table or sheet.

**Right-side Menu** — :; Context - [Library Entries List screen](ui/Library_Entries_List_screen.md) : On the right edge of an Entries List screen is a menu that can be pulled out, part way or fully, by dragging from the right edge to the left. This menu contains options affecting the view of entries.

**Row** — Synonyms: [Entry](#entry), [Record](#record) (In Memento, the term *entry* is preferred.)
A unit of fielded data within a library.

## S
**Screen &mdash; the content of a mobile display or desktop window** — (Mobile term)
As Memento is an application running natively on a device, its screen normally consumes the device's entire display, making the terms *screen* & *display* essentially synonymous. In certain circumstances &mdash; such as on devices that support multitasking &mdash; a Memento screen may occupy only a portion of the device's display.

**Sort** — The ordering of a list of entries of library data by the values of one or more fields of the library
**Context - Memento Entries List** — An Action one can perform on the entries in an Entries List.
See [right-side menu](#right-side menu).

**SQL** — (Relational database term)
Stands for **S**tructured **Q**uery **L**anguage. It is a high-level language used to access a relational [DBMS](#DBMS).

**Static panel** — A [panel](#panel) containing only buttons (including dropdown buttons) & hyperlinks -- no dropdowns or tabs.

**Subheader** — A grouping of fields within a [library page](Page.md)

## T
**Tabbed panel** — A [panel](#panel) that is broken up into multiple subordinate panels, displayed one at a time, with a tab for each at the top of the panel to enable the user to select a tab (subordinate panel) based on the name displayed in the tab.

**Table** — Synonym: Library (In Memento, the term *library* is preferred.)
A container for rows (entries, records) of fielded data
In Memento, also the name of a view on the Entries List screen
See [Library Entries List screen](ui/Library_Entries_List_screen.md)

**List view** — The [view](#view) of listed library entries in which the format of the list is that of a table of field values.
In the desktop edition, the values of fields in the table are **editable**, so it's no longer merely a view.

**Team** — A new category of tariffs for Memento Business users, allowing centralized control over accounts and PRO licenses

**Trigger** — A JavaScript stored within a library that is set to run upon the occurrence of certain phases of certain events that an entry goes through during its processing
See [Triggers](scripting/Triggers.md)

## U
**User group** — A collection of user accounts that share access privileges for Team Business users

## V
**View** — One of several **format**s for the presentation of **a list of entries**.
In the **mobile edition**, the following views are available: [List view](#list_view), [Cards view](#cards_view), [Table view](#table_view), [Kanban view](#kanban_view), & [Calendar view](#calendar_view).
In the **desktop edition**, the following views are available: [List view](#list_view), [Table view](#table_view), & [Calendar view](#calendar_view).

## W
**Window** — (Desktop term)
In the **desktop edition**, the way Memento is presented to the user, as a part of the machine's operating system.

1. Appendix: How various terms relate to each other
### Memento vs Relational nomenclature
In Memento, terminology varies from that of other [DBMS](Glossary.md#DBMS) disciplines, notably *relational* DBMSes (or [RDBMSes](Glossary.md#RDBMS)). The following table shows the equivalencies between these:
| **Memento** | **Relational** | **Definition** |
| --- | --- | --- |
| [Database](Glossary.md#Database) | Database | A generic term meaning the base of all interrelated data regarding a person's pursuit, an application, or a subject area. |
| [Library](Glossary.md#Library) | [Table](Glossary.md#Table) | Entries & fields or rows & columns of data |
| [Field](Glossary.md#Field) | Field (or [Column](Glossary.md#Column)) | A typed data item occupying a position within a library or table |
| [Entry](Glossary.md#Entry) | [Record](Glossary.md#Record)
(or row) | An instance or occurrence of data across fields or columns |
| [Entry name](Glossary.md#Entry_name) | [Primary key](Glossary.md#Primary_key) | The field or ordered set of fields (Column or ordered set of columns) that identify an entry or record |
| [Link to entry](Glossary.md#Link_to_entry) | [SQL](Glossary.md#SQL) | The means by which libraries or tables are related to each other |
