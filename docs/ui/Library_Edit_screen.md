---
title: "Library Edit screen"
---

The Library Edit screen allows a user to define or edit the **structure** of a library, its fields, pages, aggregations, and autofill rules.

The screen has a checkmark in the upper-left corner and a 3-dot Action menu icon in the upper-right corner. **Press the checkmark to conclude a successful edit session and save the result.** The Action Menu has the following options:

**Cancel** — Abandon any edits since the session began and exit the Library Edit screen.

**Share** — Share the library as a template in the Memento Online Template Catalog. The user is prompted for the template name (default is the Library name), the template category, the language, and a description for the template.

**Export** — Export the library as a template to the local Memento directory. By default, it is stored as a file with the library name as the name with a .template extension. The user may change the file name before export.
---
The screen content comprises four tabs: MAIN, FIELDS, AGGREGATION, and AUTOFILL.

## MAIN tab
The MAIN tab allows the user to set the following settings.

**Color of library** — One of 20 colors may be chosen from a palette to be used as the color of the library's tile on the Library List screen.

**Put on the tile** — Any or all of 4 pieces of information may be selected to be placed on the library's tile on the Library List screen: library icon, number of entries, editing time, and Add Entry button.

**Entry Name** — Names of fields defined with role Entry Name, if any, are displayed. When displayed in an entries list, their values well be concatenated using a space separator. A different separator may be entered or changed to one of six presets.

**Entry Name is unique** — Set to Off by default, this may be set to On to specify that the Entry Name is to be unique.

**Entry Description** — Names of fields defined with role Entry Description, if any, are displayed, When displayed in an entries list, their values well be concatenated using a space separator. A different separator may be entered or changed to one of six presets.

**Entry thumbnail** — Names of defined Image fields, if any, are displayed, and any one (or none) of them may be selected to function as the entry's thumbnail image on the Entry List screen.

**Entry color** — Names of defined single-value selection (Single-choice List or Radio Button) fields, if any, are displayed, and any one (or none) of them may be selected to determine the color of the entry on the Entry List screen.

## FIELDS tab
The FIELDS library tab shows the library's pages as field tabs (displayed vertically), including the MAIN page and any other pages the user has previously defined, if any. The fields of the current page are displayed in order. Each field is shown in the following format:

| **Grab handle** | **Genre icon** | **Name
Type** | **
Role** | **Field Menu
button** |
| --- | --- | --- | --- | --- |

From left to right in the field display, we have the following.

**Grab handle** — The leftmost component of the field display is a grab handle. Using that, the field may be grabbed by touch or by mouse and dragged up or down to the desired position in field order.

**Genre icon** — This is an icon depicting the genre of the field type. FOR INSTANCE, all text field share the same icon.

**Field name** — This is the name of the field.

**Type name** — Below the field name is the field type.

**Role** — This is the role of the field: Name, Description, Status, or Thumbnail. If this component is black, the field plays no role or is a Regular Field.

**Field Menu button** — The rightmost component is a 3-dot menu button to bring up the Field Menu.

Also provided is an Add (**+**) button for adding a new page or for adding a new relationship, subheader, or field to the current page of the library.

**Add Field** — This action creates a new field on the current page. A list of field types is presented, and the user may select the type of field to be added. The **[Field Edit card](Field_Edit_card.md)** for that field type is presented, after which the field will be added to the bottom of the set of goals on the page.

**Add Subheader** — This action creates a new field subheader. The user is prompted for the subheader name. The subheader appears among the fields and may be repositioned among the fields in typical fashion.

**Add Page** — This action creates a new field page. The user is prompted for the page name. Initially, the MAIN page is the only page and thus the default page. Subsequently, a user-added page may be set as the default page.

**Add Relationship** — This action creates a relationship, implemented as a many-to-many Link To Entry field on the current page, to a library. A list of libraries is displayed, among which, the user is to select one to which to link. The Link To Entry field takes the name of the linked library.
---
### Field menu
Pressing the Field Menu button items the menu, which contains the following options.

**Move to page** — A list of pages (other than the current page) is displayed, and the user can select the page to which the field should be moved.

One row with prev
This setting causes the field to be displayed on both the Field View Card and the Field Edit Card on the right portion of the screen, generally on the same line with the previous field to its left.

**Add a field above** — This option is equivalent to the Add button described above except that the field will be positioned just above the current field.

**Add a field below** — This option is equivalent to the Add button described above except that the field will be positioned just below the current field.

**Change** — Open the Field Edit Card for this field.

**Delete** — After prompting to assure the user's intent, the field will be deleted.

## AGGREGATION tab
The AGGREGATION tab displays a list of aggregation functions that have been defined for this library. It allows the user to add an aggregation function to the library for display in Library Lists and Field Views.

### The Add Aggregation card on the Library Edit screen
While on the Library Edit screen in the AGGREGATION tab, pressing the Add (**+**) button at the bottom of the screen opens the Add Aggregation card.

**Function** — The user selects the desired function from the displayed choices: Sum, Max, Min, and Average. The default is Sum.

**Operand** — The user selects the desired field from the displayed list of fields eligible for aggregation functions. The default is the first (or only) eligible field.

**Prefix** — The user may provide a text string to prefix the display of the result. By default, the string is empty.

**Position** — The user selects whether to position the result on the left or right of the result box. By default, it is placed on the left.

**New line?** — By default, the result will be displayed at the beginning of a new line. The user may change that behavior.

**Result type** — The user may select the result type from the displayed choices: Real, Integer, Date, DateTime, or String. By default, the result is Real.

**Result Scale** — If the selected result type is Real, the user may select the scale of the result, between 0 and 10. By default, the scale is 4.

## AUTOFILL tab
The AUTOFILL tab displays a list of autofill rules that have been defined for this library. It allows the user to add an autofill rule.

### The Add Autofill Rule card on the Library Edit screen
When the Add Autofill Rule (**+**) button is pressed, the user is prompted as to whether the rule is to be By Barcode or By Title.

**By Barcode** — The user may select the desired Data Source from the list of choices: MusicBrainz (for albums), Google Books (for books), or Amazon. The user may then select the Barcode field to use from a list.

**By Title** — The user may select the desired Data Source from the list of choices: MusicBrainz (for albums), MusicBrainz (for music artists), Google Books (for books), The Movie DB (for movies), or The Movie DB (for TV). The user may then select the Text field to use from a list.
