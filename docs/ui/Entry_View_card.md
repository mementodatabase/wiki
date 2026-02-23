---
title: "Entry View card"
---

The Entry View card displays the values of the nonempty fields of the current or selected entry.

The parts of the Entry View card are:

## Card Header bar
At the top of the card is the Header bar.

### Exit button
At the leftmost edge of the bar is the Exit (left-arrow) button. Touching it exits the card back to the underlying screen, normally the Entries List screen.

### Entry Name
The center portion of the bar contains the Entry Name. If there is only one field with the Role of Entry Name, then it is the value of that field. If there are multiple such fields, it is the concatenation of those fields, separated by spaces.

### Edit button
Toward the right edge of the bar is the Edit (pencil) button. Touching it opens the Entry Edit card on the Entry.

### Share button
The next button to the right is the Share button. When pressed, the Share button opens a list of applications on the device that support the Share interface. This enables the user to coy the contents of the entry elsewhere via a sharing application.

### Action Menu
At the far right of the Header bar is the Action (3-dot) menu button. When pressed, the following options are listed:

**Delete** — The user is prompted as to whether the entry, identified by the value of the Entry Name field, should actually be deleted. If **Yes** is selected, the Entry will be moved to the **Recycle Bin**, and the following entry is displayed, and the card is dismissed, returning to the underlying screen. If **No** is selected, the current entry will be redisplayed.

**Copy** — The Entry Edit card is displayed for the current entry, allowing the user to adjust the values for a new entry. When the new entry is completed, the entry will be **added** to the library.

**Info** — The creation and last modification dates & times of the current entry are displayed in a pop-up dialog. When the **OK** button is pressed, the dialog is dismissed.

**Save as PDF** — The user is prompted to enter the local device file path for the PDF file to be created. By default, the **PDF** subdirectory of the Memento Files directory is proposed. The File contains a page for each page of fields in the library entry, with field names and values on each page, and the Entry Name field prepended to the first page.

## Card Body
The body of the card is used to display fields and their values.

### Page tabs
If additional pages have been added to the library, there will be a row of tabs at the top of the card body, one for each page &mdash; MAIN and those that have been added. If no additional pages have been added, there will be no tab row, but the MAIN page will be displayed.

### Subheader dividers
If one or more subheaders have been added to the library page being viewed, each will provide a horizontal divider to break the display of fields into sections.

### Fields and their values
The fields of the current page are then displayed in the order in which they are defined.

Normally, each field is displayed on its own row. Each field's name is displayed at the top of the row left-justified, with its value displayed below that, also left-justified.

If a field's setting **One row with prev** is set on, it will be displayed to the right and, if possible, on the same row as the previous field. If that isn't possible (because the previous field was itself a **One row with prev** field), it will be displayed on the right and on the row below the previous field.

Each page will scroll as needed, and the user will tap tabs as needed to switch between pages.

## Card Footer bar
At the bottom of the card is a Footer bar.

### Scroll buttons
At the left of the bar are left & right buttons, allowing the user to move backward & forward from entry to entry.

### Entry number & count
In the middle of the bar, the relative entry number and the full count of entries are displayed.

### Meta Comment
To the right is a Meta Comment (speech balloon) button, if the library is in the Memento Cloud. When pressed, Meta comments may be entered regarding the entry.

The comment, along with the user's ID and the time & date, are remembered with the entry. The comment text may be changed or deleted in the future, but the ID, time, and date may not.

### Favorite indicator/button
At the right of the bar is a Favorite (5-pointed star) button, empty by default, for a nonfavorite, and solid if marked as a favorite.
