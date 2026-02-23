---
title: "User Interface"
---

1. The Mobile edition User Interface

This page discusses the [Mobile edition user interface](SpecSummary:Mobile edition UI.md).
For discussion of the Desktop edition user interface, read [The Desktop edition User interface](SpecSummary:Desktop edition UI.md)

      1. Major screens and cards
**The [Libraries List screen](Libraries List screen.md)** — Shows a list of libraries within the current group. It is the initial screen shown when Memento is started.

**The [Library Edit screen](Library Edit screen.md)** — Shows the structure of a library, its fields, pages, relationships, aggregations, and autofill rules. Allows add or edit of library structure. It is most often initiated from either the **[Libraries List screen](Libraries List screen.md)** or the **[Library Entries List screen](Library Entries List screen.md)**.

**The [Library Entries List screen](Library Entries List screen.md)** — Shows the entries within the current library. It is most often initiated by opening a library, generally from the **[Libraries List screen](Libraries List screen.md)**.

**The [Entry View card](Entry View card.md)** — Shows the fields within the current page of the current entry, with tabs for the other pages. It is generally initiated from an entries list screen, most often from the **[Library Entries List screen](Library Entries List screen.md)**.

**The [Entry Edit card](Entry Edit card.md)** — Shows the fields of the current page of the current entry prepared for editing, with tabs for the other pages. It is generally initiated from either an entries list screen or from the **[Entry View card](Entry View card.md)**.

      1. Other screens and cards
#### Lists of entries
There are other lists of entries besides the main **[Library Entries List screen](Library Entries List screen.md)**.

**The Library History screen** — Lists entries of the library that have been recently changed. Each entry in the list is shown with its Entry Name concatenation and how long ago it was last changed. It works like a special filter and can be called up from the **[Library Entries List screen](Library Entries List screen.md)**.

**The Favorite Entries List screen** — Lists entries of the library that have been marked as Favorites. Each entry in the list shows its Entry Name concatenation. It works like a special filter and can be called up from the **[Library Entries List screen](Library Entries List screen.md)**.

**The Recycle Bin screen** — Lists entries once in the library and now in the **Recycle Bin**. Each entry in the list shows its Entry Name concatenation and the date TBD entry was deleted. It works like a special filter and can be called up from the **[Library Entries List screen](Library Entries List screen.md)**.

#### Other lists
**The Charts List screen** — The **[Charts List screen](Charts List screen.md)** shows a list of previously-defined charts and allows edit, deletion, and the adding of new ones.

**The Attached Files card** — **[Attached Files card](Attached Files card.md)**

      1. Using sorting, grouping, filtering, aggregation, & charting together
to *slice & dice* the data to perform *Data Analysis* from the Entries List screen
| **Topics** | **Overviews** | **Specs** | **Guidance** |
| --- | --- | --- | --- |
| [Slicing & Dicing](Slicing & Dicing.md) |
[Aggregation](Aggregation.md)
| [Entries List screen](Library Entries List screen.md) |
[Charting data](Charting data.md)
| [How:Slice & Dice Library Data](How:Slice & Dice Library Data.md) |  |

   1. The Desktop edition User Interface

The primary display of the Memento desktop edition is as a screen occupying a Windows [window](Glossary#window.md). Desktop system user interfaces these days are windowed, and desktop Web browsers use tabbed windows.

      1. Layout: Panes & Toolbars
The Memento desktop edition window is typically subdivided into 3 primary [panes](Glossary#pane.md), primarily for libraries (on the left), for entries (in the center), and for field properties & values (on the right). Toolbars at the top or bottom of panes hold icons/buttons for the selection of options within the pane. On occasion, such as the opening window, when starting the app, the contents of a pane will be subdivided into sections of introductory text.

#### The Opening window
When Memento opens, below the canonical Windows Title bar and Menu bar, there are 2 panes -- a narrower one on the left and a wider one to the right containing 3 sections of text & links that form the home page of Memento, if you will. Read below about the left pane listing the Libraries  Groups.

The opening windows is an exception in that -- instead of a center pane and a right pane -- a large right pane acts as a home page of sorts, with the title "Welcome to the Memento Database Desktop". The right pane is made up of 3 sections separated by white space: New Library, Recent, and Help.
**The New Library section** — offers a link to to create a new library.
**The Recent section** — is a list of the 5 most-recently accessed libraries listed from most recent to least recent. Each recently-accessed library is accompanied by 2 hyperlinks: Open to open the library and Add an entry to add a new entry to the library.
**The Help section** — is made up of a list of hyperlinks to Help articles and a pair of hyperlinks -- to the Memento Wiki and to the Memento Users Forum.

The Memento [window](Glossary#Window.md) is populated in various ways, depending upon what is happening in the window. There are always a Windows title bar and a Windows main menu toolbar, and they always have the same format. Beyond that, windows are populated with tiled panes. Panes are often broken down into tiled toolbars. A pane's content may be presented in sections, each with a title, text, and hyperlinks.

#### The field view/edit window
When a library has been selected, its entries are displayed in the center pane. Once an entry has been selected, its fields & their values are displayed in the right pane. Memento opens, below the canonical Windows Title bar and Menu bar, there are 2 panes -- a narrower one on the left and a wider one to the right. Read below about the Libraries pane for the left pane. It doesn't change in format from opening until closing of the app. It will remain after activity begins, while the one on the right is displayed for the opening only.

The opening right pane has the title "Welcome to the Memento Database Desktop". The pane is made up of 3 sections: New Library, Recent, and Help.
**The New Library section** — offers a link to to create a new library.
**The Recent section** — is a list of the 5 most-recently accessed libraries listed from most recent to least recent. Each recently-accessed library is accompanied by 2 hyperlinks: Open to open the library and Add an entry to add a new entry to the library.
**The Help section** — is made up of a list of hyperlinks to Help articles and a pair of hyperlinks -- to the Memento Wiki and to the Memento Users Forum.

The Memento [window](Glossary#Window.md) is populated in various ways, depending upon what is happening in the window. There are always a Windows title bar and a Windows main menu toolbar, and they always have the same format. Beyond that, windows are populated with tiled panes. Panes are often broken down into tiled toolbars. A pane's content may be presented in sections, each with a title, text, and hyperlinks.
      1. The Libraries pane
After opening, the left pane has not changed; it is always the Libraries pane with the same menu buttons. 

The pane is made up of five buttons -- 2 dropdowns & 3 buttons each of which populates the center pane.

#### The top & primary dropdown button
**My libraries (dropdown list of libraries)** — is of libraries within the cloud account of the user. Each library may be downloaded to the device for subsequent use by the user.
**Shared with me (dropdown list of libraries)** — when clicked, will list the libraries that have been shared with the user, if any.
**Public libraries (dropdown list of libraries)** — is a dropdown menu of public libraries in the Memento cloud. After dropdown, when any of the buttons is clicked, the right pane is replaced by the base information about the corresponding public library, and a button is offered to download the public library.
**Search (button opening a center pane)** — replaces the right pane with a libraries search key entry field and an area for search results, once the search is conducted. All libraries are searched by default. A button defaulting to All libraries drops down when clicked to display a list of libraries in the cloud with a checkbox by each one, to enable the user to identify the specific libraries to search.
**Catalog templates (button when pressed opens both a center & a right pane)** — causes the right pane to be replaced with a list of categories of libraries in the Online Template Catalog, each of which has a button that causes the center pane with a list of the catalog libraries in that category. Pressing one of these will allow the user to download the template to the user's device.

#### The Entries pane
Once a library is open, the 3 panes described above are established. With the library open, the center pane will contain the library's entries list.

The pane has 3 sections: a toolbar at the top, content selection buttons at the bottom, and most of the pane is filled with the entries list, when the normal & default content button is selected.

##### Entries: A list of normal entries
The Entries button is selected by default when the pane is populated with data. By default, the view is the List view. The information is formatted as the entry name in a relatively large font across the top of the entry listing. Below that in a smaller, moderately large font is the entry description. Right justified at the right edge of the cell in a relatively smallest font is the entry status.

In all 3 cases, when there are multiple fields of that case, they are displayed in the sequence in which they appear in the Edit Library window.

The listed entries are scrolled when necessary to fit in the list section of the center pane. When an entry is selected, the right pane is populated with that entry's field values. **<< TBD: Add info re multiple entry selection. >>**

##### Favorites: A list of favorite entries
Only the entries marked as a Favorite are listed.

##### Recycle Bin: A list of entries in the entries recycle bin
asdf

#### Field pane
**TBD**
