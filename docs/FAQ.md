---
title: "FAQ"
---

**This page has not been updated since 2016 and so is VERY obsolete, and is NO LONGER being updated. The FAQ is useful ONLY for historical reference and will be removed from the wiki, or its contents will be updated to current by the end of 2021.**

## Creating and editing a library
### What is the template library?
The template library is a set of pre-defined cards allowing quick database creation based on field layouts. The fields can then be customized, removed or added to suit user preference. Within the template library, you have additional options to create a blank database, browse the online catalogue of thousands of user-uploaded templates.

To access the templates library, open the 3-dot menu in the upper-right corner of the Libraries List screen, and then press ***Add Library***.

### How can another Memento user access a template from my library?
Edit the relevant library &mdash; from the Libraries List screen, press the 3-dot menu from your library icon or from the library's Entries List screen, open the 3-dot menu from the upper-right corner of the screen and select ***Edit the library***. Then, open the 3-dot menu inn the upper-right corner of the screen and select ***Share***, name the template, select the related category, and give a small description to help others.

Additionally, within the Library Edit screen, 3-dot menu > ***Export***, choose a suitable name, and click ***Save***. This creates a ***.template*** file which can later be transferred using a file management application.

### Can I change the type of a field?
**No**, once a field is created, its type cannot be changed.

**Note** — If you want to change a field's type, and you also want to preserve the data from the field, you could create a new field with the field type you want, sync the database with Google Sheets, copy the data to the new field within Sheets, and re-sync back to Memento. After verifying the results, you can delete the original field.
If you don't care to preserve data, merely delete the field within the Library Edit screen and create a new one with the type you want.

### Can the value of one field affect the visibility of other fields when creating or editing an entry?
**Yes**; if you have a field with choices (Checkbox, Single-choice list, Multiple-choice list, Radio buttons, Checkboxes), you can enable dependencies based on the choice(s). The choice field is called the ***gating*** field, and fields that are dependent on it are called ***dependent*** fields.

To enable dependencies, do the following in the Library Edit screen:
1. Create a gating field with choice values (**Items**).
Example: Gender, with items **Male** and **Female**
1. Add a dependent field, and select ***Dependencies of the field***; this brings up the ***Dependencies List card***.
1. Press the blue plus (**+**) button to add a dependency; this brings up the ***Add a dependency*** card.
1. Select the field upon which to be dependent and press the ***OK*** button; this will bring up the ***Create dependency*** card.
1. Choose whether the dependency is only when editing an entry (the default) or also when viewing an entry.
1. Then choose the value(s) of the gating field (the Items) that will cause the dependent field to be visible (perhaps **Female**) and press the checkmark in the upper-left corner of the card.

Now, when the corresponding choice(s) is|are selected (**Female**, perhaps), the previously hidden dependent field(s) become visible.

### Can I create relationships between libraries?
**Yes**; when you're creating or editing a library:
1. Add a field of type ***Link to Entry***
1. Select the Link Order &mdash; many-to-many, one-to-many, or one-to-one
1. Within **Advanced Parameters**, select the target library
This allows manual selection of entries from the linked library during entry creation or edit.

### Can multiple fields be visible on a list of entries?
**Yes**, an entries list row can hold four field roles: Entry Name, Entry Description, Entry Status, and Thumbnail; not all roles apply to all fields types.

Each role places the results is a specific area within the list view. Regular Field doesn't appear on the list and can only be viewed within the Entry View or Entry Edit card.


### Can I attach a thumbnail to my entries?
**Yes**, if you set up an Image field in the library. When selected, the ***Thumbnail*** role becomes available, and the image appears at the left side of the list row.

**[BELOW NOT YET UPDATED](BELOW_NOT_YET_UPDATED.md)**

## Working with entries
### Can I search using wildcards?
Yes, wildcards can be used for partial word searching. By using the asterisk symbol ( * ), you can generate a wildcard search and find specific words throughout a record. 

Here are some examples:
- String Result: Memento is the best database application on android
- Search: Memento*  (finds any field beginning with 'Memento')
- Search: *database* (finds 'database' throughout the field)
- Search: *best* *application* (finds fields containing both 'best' and 'application' within the field)

### Can I search libraries using barcodes?
Yes, before you can scan barcodes, you must first:
1. Install “Barcode Scanner” by ZXing Team (also available to download through Memento interface).
1. Set up a field with the Barcode field type
When the above criteria have been filled, open the context menu > ''Barcode search';' then scan the barcode.

### Can I copy an existing entry?
Yes, you can copy an entry by opening the relevant library, and then:
1. Long press the required entry > *Copy*
1. A new entry is created using existing data (edit if applicable)
1. Press *Done*.

### Can I send an entry via email?
Yes, entries can be sent by opening the relevant library, and then:
1. Long press the required entry > *Send* icon
1. Select your preferred email client (Gmail, Outlook, etc.)
1. Enter recipient(s) and send
Formatting options. You can customize what information is displayed when using this feature by:
1. Open menu within library > *Send all > Formatting...*
1. Select what information you want from which field
Commonly used settings can be stored as a template by selecting the “+” at the top left and naming the template.

### Is it possible to create a checkbox that is viewable within the library list view?
Yes, this can be done during field creation (or editing):
1. Create a field using the Boolean field type  
1. Within the *"Where you can edit"*, select the option *"list entries"* 
The checkbox will appear at the left of the entry, allowing update within the list view. 

### Where are the images attached to entries stored?
1. Within Memento’s main interface, access the context menu > Settings
1. Within the General sub-section > File Storage
1. Select File storage folder.

### My device doesn't have enough free internal memory; can I move the database to the SD card?
Yes, you can move the whole database:
1. Within Memento’s main interface, access the context menu > Settings
1. Within the General sub-section > Database Location > Select SD Card

### How do I change the sort order from ascending to descending?
Within the related Memento library:
1. Open context menu > *Sort*
1. Select the down triangular arrow of the related field and reverse to an up arrow > Select Save

### What limits are there on the number of entries I can store?
There are no limitations within Memento, however, the maximum number of entries are dependent on hardware restrictions and available storage space. 

Larger lists (for example: 10,000 records) will require longer loading times to populate and can be optimized by removing some details from the field layout.

## Appearance
### If I don’t like the light theme can I change it?
Yes, there are two themes available; these can be alternated from the main interface:
1. Access the context menu > Settings
1. View sub-section > Theme > Black Theme

### Can I create my own icons for the library?
Yes, any image available on your device can be used as an icon:
1. When creating or editing a library, touch the icon in the upper left corner
1. At the bottom select *Create your own icon* > *Select image for icon*

### Can I change the Memento font size?
Yes, there are 5x customizable font categories:

Entry name, Entry description, Entry status, Field name & Field Value, these can be accessed through:
1. Within Memento’s main interface, access the context menu > Settings
1. View sub-section > Font size

### Can I open a library from my device's home screen?
Yes, it’s possible to create shortcuts to individual libraries. Within the related Memento library:
1. Open library > menu > *Create Shortcut*
This places the library shortcut (including its icon) on the next available space on the device's home screen.

## Import, synchronization and backup
### Can I import my CSV data into Memento?
Yes, but before you import the data you must ensure:
- The CSV file must be placed into the Memento directory
- Memento fields are set up with exactly the same headers as the CSV

To begin the import:
1. Within the related Memento library > Open context menu > Settings
1. Data operations sub-section > Import from CSV > Select CSV file

### Can I view or edit my database on a PC?
Yes, you can use Memento Desktop Version: http://mementodatabase.com/#desktop

### Can I share or move my library over multiple devices?
Yes, you can use [sync with Memeno Cloud for this](Cloud_storage_and_Teamwork.md).

### Do the photos attached to entries get uploaded to Google Drive?
Yes, but the option isn't enabled by default, to enable it:
1. Within your library, open context menu > Settings
1. Google Docs sub-section Synchronizing Files > Select "Google Drive"

### The date/time doesn't display correctly when I sync with Google Drive, is there a fix?
Yes, you can format the date format by doing the following:
1. Within the main Memento interface > Settings
1. Under *Settings Import/Export/Sync* > *Select Date Format*
1. Change setting to *Current Locale*

### How do I fix the 400 Bad Requested error during sync with Google Drive?
This error usually occurs when using special characters within the field name; ensure you have the latest version of Memento installed. 
If the latest update is unable to resolve the problem, try searching and removing special characters from the library (and try only letters & numbers).

## Calculations
### Can I use JavaScript for my calculation?
Yes, use the JavaScript field type. The final value assigned will be the result of the calculation.

### Can I use calculations for multiple fields?
Yes, Memento can perform an array of calculations:
1. While creating a library, add a *Calculation* field type
1. Within the Expression sub-section, add either field or function and operator(s)
An example (quantity x price): #{price} * #{quantity} the resulting field would be the total.

### Can I find the total value for a specific field within a library?
Yes, Memento can display the sum total of a specified field:
1. Within the library edit screen, select the *Aggregation* tab > click on the **+** button.
1. Select the function ("Sum").
1. Select the field required.
Memento allows for a custom string to be displayed (example “Total:”) and can be aligned left or right and is displayed at the bottom of the library list view.

### Can I perform calculations with dates & times?
Yes, there are a few formulas that can be used to calculate dates:

- To calculate a date by adding days, months or years to a given date, use: dateadd(#{date1},d,m,y), where #{date1} is the value of a date field and d,m,y are integers.
- For date/time calculations, use: dateadd(#{datetime1},s,m,h,d,m,y), where #{datetime1} is the value of a date/time field.
- To calculate the number of days between two dates, use: datediff(#{date1},#{date2}) 
- To calculate the number of seconds between two date/time values, use: #{datetime1}-#{datetime2}

## Privacy
### What permissions does Memento use on my device?
There are three main permissions currently used for Memento:
1. Your Personal Information: for contacts fields
1. Your Location: For Google Maps co-ordinates
1. Your Accounts: To allow sync with Google Drive

## Protection
### Is it possible to encrypt a library?
Yes, you can encrypt your library by doing the following:
1. Within the library, open menu > *Protection*
1. Enter master password twice and *OK* to confirm
1. Tick the *Encrypt the contents* box and *OK* to confirm
String fields will be encrypted using AES and searching encrypted entries is disabled.
