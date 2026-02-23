---
title: "Library Entries List screen"
---

The entries in the open library are displayed as a list. To edit an entry, open its context menu and select ***Edit*** or open the menu in the Entry View card and select the Edit (pencil) icon.

To delete an entry, open its context menu and select ***Delete*** or open the menu in the Entry View card and select ***Delete***. After you delete an entry, it goes into the ***Recycle Bin*** of its library and can be restored at any time.

## Screen Components
The Library Entries List screen has the following parts:

### Exit Arrow
The left-pointing Exit Arrow in the upper left corner of the screen is a way to exit this screen, normally back to the **[Libraries List screen](Libraries_List_screen.md)**.

### Search
Pressing the magnifying-glass Search icon in the upper-right portion of the screen opens a text box at the top of the screen for entry of a search key. A list of recently-used search keys is displayed, allowing the user to readily repeat a recent search.

As the user types the search key, the list of recent search keys is replaced by a list of matching entry identifiers (concatenated Name fields) with the library. If one of them is selected, the entry is opened in an **[Entry View card](Entry_View_card.md)**.

If Enter is pressed instead, the search is executed based on the key value entered, and all entries containing a match in any searchable field are listed.

Search is supported not only for unencrypted libraries, but also for encrypted libraries.

#### Advanced search keys
You can use the asterisk (*****) to substitute for any number of characters in a row on the tail end of a keyword.

For example, if you search for ***gloss****, all entries containing words beginning with ***gloss*** will be found.

The query syntax supports the **OR** binary set operator. The operator must be entered using capital letters.

For example, if you search for **sqlite OR database**, all entries containing words **sqlite** or **database** will be found.

The query syntax supports a unary "**-**" operator that may be applied to basic term and term-prefix queries. Use **sqlite -database** to search for the set of entries that contain the term **sqlite** but do not contain the term **database**.

#### Examples
**String Result** — Memento is the best database application on android
**Search** — Memento*  (finds any field beginning with 'Memento')
**Search** — best application (finds fields containing both 'best' and 'application' within the field)

#### Searching libraries using barcodes
To enable scanning of barcodes:
1. Install “Barcode Scanner” by ZXing Team (also available to download through Memento interface).
1. Set up a field with the Barcode field type.
When the above criteria have been met, open the context menu > *Barcode search*; then scan the barcode.

### Action Menu
The 3-dot icon in the upper-right corner of the screen opens the Action Menu, with the following options:

**More** — This option provides an alternate method of opening the [**Right Side Menu**](#"Slicing & Dicing" Entries &mdash; The Entries List Right Side Menu).

**Edit the Library** — Open the **[Library Edit screen](Library_Edit_screen.md)** for the current library

**Import and Export...** — There are two choices in a submenu:

**Import from CSV** — : After selecting the CSV file from the **[File Manager card](File_Manager_card.md)**, you will see a list of columns found in the file, which correspond to the entry fields. Press the Import button. When you import data from CSV files, new entries are created each time.

**Export to CSV** — : The user is promoted to enter a location on the device to which to create the CSV file with exported library data. By default, the new file will be created in the Files folder specified in [**Memento settings**](../Memento_Settings.md).

**Upload to Cloud** — 

**Link To Google Sheets** — 

**Protection** — 

**Send All** — The contents of the library may be sent via another application on the device. Choices are:
**Send as CSV** — : A CSV file containing the library's contents is created and passed to the selected application according to the default or other [**formatting template**](Formatting_Templates_screen.md).
**Send as text** — : The contents of the library are passed to the selected application according to the default or other [**formatting template**](Formatting_Templates_screen.md).
**Formatting...** — A field-by-field entry formatting card is shown, allowing the user to select formatting options for each field in turn:
- Send the field (or not). If so, then:
- Start the field on a new line (or not)
- Include the field name (or not)
- Include a colon after the filename (or not)
The user also may adjust the default formatting template and/or may create/select/delete other named formatting templates supporting the Share / Send All option. See **[Formatting Templates screen](Formatting_Templates_screen.md)**.

**Create Shortcut** — Create a shortcut on the device's home screen to open either the library's Entry List or its Add Entry card.

**Settings** — The **[Library Settings screen](Library_Settings_screen.md)** is opened for the current library.

**Help** — A Help submenu is displayed:
**Help Contents** — : This opens the Memento Wiki in the default Web browser.
**Forum** — : This opens the Memento Group in the default Web browser.
**FAQ** — : This opens the Memento FAQ in the default Web browser.
**About** — : This displays the Memento version/license card for the current edition on the current device.

### Entries List
Library entries are listed in the default or specified sort order, grouped if/as specified, and filtered if/as specified.

Besides the list, there is an Exit arrow in the upper-left corner, a Search button (magnifying glass icon) at the top, a 3-dot Action menu in the upper-right corner, and a right-side pullout menu.

**Touching the Exit arrow** — Exits the screen, generally back to a **[Libraries List screen](Libraries_List_screen.md)**.

**Touching the Search icon** — Allows entry of a Search key into a text box. Upon pressing OK, a Search within the Library is conducted and a list of matching entries displayed. In the entry list header box, the number of matching entries is shown.

**Touching the 3-dot Action menu icon** — Opens the [**Action menu**](#Action Menu).

**Touching an entry** — Opens the **[Entry View card](Entry_View_card.md)** for the entry

---
#### Entry display
Each entry is displayed in the list as follows:

| **Thumbnail
(if any)** | **Edit tools
(if any)** | **Concatenated Name field values
Description** | **Status
values** |
| --- | --- | --- | --- |

**Thumbnail** — If an Image field within the library has been assigned the Role of Thumbnail, the value of that field will be displayed as an Image, reduced in size.

**Edit tools** — Any field eligible for editing within a list will have an edit tool displayed. For a Boolean (checkbox) field, a checkbox will show the current value, and pressing the checkbox will toggle the value of the field. The other eligible field types have composite values, in which case, a button will be displayed, which, when pressed, will pop up a list of values that may be edited.

**Concatenated Name field values** — The value of the Name field is displayed. If there are multiple Name fields, their concatenation, with spaces separator(s) is displayed. The space for display of Name values is one line.

**Description** — The value of the Description field is displayed. If there are multiple Description fields, their concatenation, with spaces separator(s) is displayed. The space for display of Description values is two lines.

**Status values** — Any Status fields are displayed, one per line, at the right edge of the entry display.

---
#### The Entries List Right Side Menu &mdash; the Slicing & Dicing of entries
The Right Side Menu may appear differently depending on the size of the device. On tablets, an icon-only portion of the menu may always show, and the remainder, with text, may be dragged out from the right edge of the screen. On phones, the icon-only menu may not appear, but the full menu may still be dragged out from the right, with text. Once the menu is fully out, it may be put back in by dragging the main portion of the screen to the right.

Menu options are as follows:
---
##### View
Set the view of the Entries List to List or Table.
 The View icon indicates the current setting, and is either a 3-line icon with a dot preceding each line (indicating a list view) or a grid icon (indicating a table view).
**List View** — Set the view to List View. Entries are displayed as list items, with values only of fields with specific roles displayed.
**Card View** — Set the view to Card View. Entries are displayed as cards, side-by-side, with values only of fields with specific roles displayed.
**Table View** — Set the view to Table View. Entries are displayed as rows in a table, with (generally) all field values are displayed. The entry fields are presented as columns and entries as rows.
To resize columns, click on the column header.
To hide any column, click on the button in the top left corner of the table, and uncheck the appropriate field in the field list that appears.
**Map View** — This representation is available if the library contains a ***Location*** field. The library entries are displayed as markers on a presented map.
**Calendar View** — In this display view, all library entries are represented as time intervals on the calendar. The calendar is available for libraries that contain at least one ***Date/Time*** field.
The time interval is determined by the value of one or more entry fields. The following types of fields can be used to determine the time interval (see the option ***Use in Calendar as*** in the field settings):
- Date/Time may be the start or end of a time interval, depending on the value of the option **Use in Calendar as**.
- Time and All numeric fields can be used to set the duration of the time interval.
By default, the value of the first Date/Time field is used as the default start of the time interval, while 1 hour is set as the duration.

##### Cloud
If the library is currently not in the Memento Cloud, the Cloud icon will not contain a checkmark, and pressing it causes the Library to **immediately** be synced to the Cloud. If the library is in the cloud, the icon will contain a checkmark, and upon pressing it, the **[Cloud Library Status card](Cloud_Library_Status_card.md)** is displayed.
---

##### Sorting entries
The 3-line icon in which the lines are longer, medium, and shorter (from top to bottom) and are left-justified is the Sort icon. Press it to sort the list of entries by the values of one or more fields.

If you want to sort by one field, choose it and choose whether you want low values at the top (Ascending) or high values at the top (Descending).

If you want to sort by one field and within that by another field, first turn on **Sort by multiple fields**, which is off by default. Then choose the first field and its order, then the second and its order, and so on.

##### Grouping entries
The 3-dots-in-a-triangle icon causes the list of entries to become a list of groups of entries, groups by the values of a library field. After touching the icon, the user is prompted to select the field to group entries by; alternatively, the user may choose No Grouping, instead, which will return the list to individual (ungrouped) entries.

When The list is grouped, pressing a group element will open (and subsequently close) a list of only those entries of that group (whose values match that of the grouped field). The group element also serves to contain the values of **[aggregation functions](Library_Edit_screen.md#AGGREGATION_tab)**, such as subtotals.

##### Filtering entries
The 3-line icon in which the lines are longer, medium, and shorter (from top to bottom) and are centered is the Filter icon. Use filters to restrict the list to entries containing certain field values. Users may create any number of filters, save them with a Name for each, and activate any, all, or none of them at any time.

Each filter filters the list currently displayed.

Starting with release 4.0 of the mobile edition, selected filters may be positioned atop the list display as tabs. Each tab displays a list of entries filtered by the tab.

As before, each filter selected from the right-side menu applies to the displayed list. Therefore, for example, if there are 3 filter tabs (All, Beverages, and Vegetables); you currently have the Vegetables tab selected; and if you additionally choose the Frozen filter from the menu, you will be seeing only frozen vegetables entries in the list.

So, filter tabs enable quicker and more visual tab selection, and by combining filter tabs with direct filters, you can quickly pin down what you want to see.

##### Filter details
For the Mobile Edition of Memento, the Entries List screen utilizes a Right-side Toolbar for many of the functions related to "slicing & dicing", or data analysis. The Right-side Toolbar is always open partially on mobile devices with larger screens; on mobile devices with smaller screens, like most phones, the Right-side Toolbar is normally fully retracted. In either case, to fully extend the Right-side Toolbar, swipe from the right edge of the screen to the left; the toolbar will open as you drag.

Filtering on the Entries List screen is very powerful. A defined filter may be set for the screen overall (the Screen filter) or not, and the user may also set up tabs that appear across the top of the screen, each of which invokes a defined filter (a Tab filter). The user may set the Screen filter and a Tab filter concurrently, allowing the combined effect of two filters to operate simultaneously. All filters are defined in the same manner; it is the use of a filter for the screen or for a tab that makes it the Screen filter or a Tab filter.

The Filter option has a button and a menu; on devices with larger screens, the button is always visible; on devices with smaller screens, the button is hidden along with the Filter menu.

###### The Filter button
Pressing the Filter button does one of two things. If there are as yet no defined filters, the user is prompted to create a new filter with a card allowing entry of a filter name. Once that is obtained, the user is presented with another card, this one to select the value(s) of filterable fields. Once the checkmark is pressed on this card, the filter is stored under the specified name, and it is activated, showing the filter name at the top of the screen (making it the current Screen filter) and showing the list of filtered entries.

If there are already some defined filters, pressing the button will display a list of those filters plus a "No filter" option. This allows the user to move between filters or turn off filtering.

###### The Filter menu
By fully opening the Right-side Toolbar, the user sees the current filter (a filter name or "No filter") within the Filter button and a 3-dot Filter menu icon. Pressing the icon opens the Filter menu.

At any time, there will be the following menu options: Create filter, Order, and Tabs.

Create filter - Selecting the Create filter option presents the user with the Filter Name card and the Filter Field Value card for a new filter.

Order - Selecting the Order option presents the user with the Filter Order card that shows a list of defined filters, with an icon on the left of each that can be grabbed and dragged up or down to set its new position among the filters.

Tabs - Selecting the Tabs option presents the user with a Filter Tabs card, which lists the defined tabs plus an additional choice of an All tab, which indicates that no filter be used when this tab is pressed. Each tab has a checkbox, and the checked options will be shown as tabs across the top of the screen once the checkmark is pressed.

If a filter has been selected as the Screen filter, 3 more options will also appear: Edit, Copy, and Delete.

Edit - Selecting the Edit option presents the user once again with the Filter Name card and the Filter Field Value card for the Screen filter, allowing the user to change any of these settings.

Copy - This option works like the Create filter option except that the name defaults to the name of the copied filter with "Copy " prepended to it, and the Filter Field Value card defaults to the same values as those of the copied filter. This allows quick construction of similar but different filters.

Delete - Selecting the Delete option presents the user with a Filter Delete Confirmation card, showing the name of the Filter to be deleted and giving the user a chance to approve or disapprove the deletion.

###### Techniques
It is generally a good idea to show the **All** tab to let users quickly return to the full, unfiltered list, though for it to be fully unfiltered, the user has to also set the Screen filter to **No filter**.

It is good practice to order the filters that are not to be on any Tabs ahead of those that will appear on tabs; this will make them more accessible and less confusing for selection via the Filter button. If you have a lot of filters, ordering then alphabetically might be helpful for the user.

It is important for users to keep in mind that the Screen filter works ***concurrently*** with Tab filters, so, to return to an unfiltered list, the **All** tab must be selected ***and*** the Screen filter must be set to No filter.
---

##### History
The History option opens the Entry Edit History List screen, which shows for each entry the concatenated Name value and the date & time of last view or edit of the entry. As with the normal Entries List, the user may touch an entry to view it or select (touch and hold) an entry to perform other actions (like Edit) on the Entry.

##### Favorites
Pressing the Favorites icon invokes the built-in Favorites filter, which limits the list to those entries marked as a favorite.

##### Recycle bin
Pressing the Recycle Bin icon invokes the built-in Recycle Bin filter, which limits the list to this entries in the Recycle Bin.

##### Charts
Pressing the Chart icon opens the **[Charts List screen](Charts_List_screen.md)**. The Add (**+**) button superimposed on the lower-right portion of the screen enables the user to add a new chart definition to the list. Pressing it pops up one of several *Chart Spec Edit cards*: **Pie**, **Line**, **Area**, **Bar**, **Columns**, **Scatter**, or **Stepped Area**. Likewise, when an existing chart is selected from the list, the corresponding Chart Spec Edit card is opened.

##### Files
Even the Files icon is pressed, the Attached File List card is opened, showing existing attached files, if any. The list may be sorted or grouped.

---

## Selecting entries
Tapping an entry displays the Entry View card for that entry.

To select an entry for subsequent action, press and hold the entry; After about 2 seconds, it will turn blue, and next to the exit store in the upper-left corner, the number 1 will appear, indicating that there is 1 entry selected at this time. Once there is a selected entry, tapping other entries will select each one, adding one to the number selected in the upper-left corner.

Once one or more entries have been selected, a row of 6 buttons appears in the upper-right corner of the screen, and the*horizontal* 3-dot menu button or replaced by a vertical 3-dot button continuing 2 additional menu items:

**Save as PDF (Square Adobe Acrobat logo)** — Invokes the **Save as PDF** card, which shows the directory into which the file will be stored (by default, something like */storage/memento/pdf*), and the name of the file to which to save (by default, the Library name followed by a ".pdf" filename extension, such as *Order Items.pdf*).
By tapping a folder button, the user may select from a File Manager card a different directory. Also, the filename may be changed.
**Note:** Be sure the filename is a valid Android filename, as Memento library names may be any UTF-8 string.

**Select All (2 concentric squares, outer dotted, inner solid)** — selects the remainder of the entries in the list

**Edit (pencil)** — Edit the user taps an entry, the Entry Edit card is shown to allow editing of the entire entry.
If any entries are selected (by pressing & holding an entry), a list of fields names is shown; when the user chooses one, a field edit card appropriate to the field type is shown, allowing the user to enter a value. When OK is pressed on that card, the entered value will be set in all the selected entries.

**Share (standard icon)** — Share the entry.
 If only one entry is selected, a list of available apps with which to share is shown; when the user selects one, the entry is passed to the app for sharing.
If multiple entries are selected, a menu is shown, with the following options:

**Send as CSV** — The user is prompted to identify the app to use for sending the selected entries. When the user selects one, it is passed the entries for sending as a CSV file according to the default or other [**formatting template**](Formatting_Templates_screen.md).
**Note:** Interestingly, though they may be installed on the device, neither Google Sheets nor Microsoft Excel are in the list of apps.

**Send as text** — The user is prompted to identify the app to use for sending the selected entries. When the user selects one, it is passed the entries for sending as text according to the default or other [**formatting template**](Formatting_Templates_screen.md).

**Formatting...** — A field-by-field entry formatting card is shown, allowing the user to select formatting options for each field in turn:
- Send the field (or not). If so, then:
- Start the field on a new line (or not)
- Include the field name (or not)
- Include a colon after the filename (or not)
The user also may adjust the default formatting template and/or may create/select/delete other named formatting templates supporting the Share / Send All option. See **[Formatting Templates screen](Formatting_Templates_screen.md)**.

**Delete entr(y|ies)** — The selected entr(y|ies) (is|are) optionally deleted; The user will be prompted to confirm our cancel the deletion.
If only one entry is selected, the entry name of the entry is shown, to help ensure that only the right entry is deleted.
