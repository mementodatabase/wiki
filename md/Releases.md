---
title: "Releases"
---

1. Memento Android Edition
      1. Release 5.7.0, 2025-09-05
*New "Images" view in libraries – a new way to browse your data, showing all photos attached to entries instead of entries themselves.
*Image editing tools – transform, apply basic filters, add markup, and more directly to attached images.
*AI image generation – create images using multiple available models, including FLUX, GPT Image, and DALL·E 3.
*AI credits system – requests to AI models now require credits, managed within the app.
*AI in automation rules – integrate AI requests into your automation workflows.
*AI in scripts – use AI requests directly inside your custom scripts.
*Markdown support for rich text fields – enable by setting “Text format” to Markdown in field properties, with the ability to create links to other entries.
*Searchable choice fields – add a search input for single or multiple choice fields by enabling “Show search” in field properties.
*File storage explorer – browse all local files linked to your database and clean up unlinked ones.
*Added support for input masks in text fields.
*Restored IGDB.com as a data source for Autofill. This source provides detailed information about video games.

      1. Release 5.6.0, 2025-05-08
*Introducing a powerful no-code automation tool that streamlines workflows without writing a single line of code. Users can define custom rules that react to events like entry creation, updates, or deletions. The tool includes flexible triggers, multi-step tasks, user input forms, and batch processing to build smart, efficient processes.
*Automations can be found in the Automations menu in the library. Scripts have been moved to the Automations screen under the Scripts tab.
*Additionally, automation rules can be converted into scripts for more flexibility.
*Bug Fixes.

      1. Release 5.5.0, 2024-08-28
*Enhanced AI Assistant Capabilities: Users can now ask the AI Assistant to find entries in their library or generate responses based on library data.
*Voice Input for AI Assistant: Simply speak your prompt, and Memento will automatically create a structured entry from your voice input.
*SQL Explorer: Memento now supports SQL queries for retrieving library entries. Access the SQL Explorer by opening a library, tapping the search icon, and selecting the SQL icon. Additionally, users can utilize AI to generate SQL queries.
*SQL in Presets: Added the ability to use SQL queries in presets for displaying library entries. Presets can be created through the SQL Explorer.
*JavaScript: Added the sql() function for executing SQL queries from scripts. This function is limited to SELECT queries only.
*Script Editor Font Settings: Added font customization options for the script editor (accessible via Settings > Script Editor).
*Auto Theme: Introduced an automatic theme option that switches between dark and light modes based on the Android system settings.

      1. Release 5.4.0, 2024-07-06
*Linked Tree View: Users can now effortlessly navigate through interconnected entries from various libraries within a unified tree view interface, accessible on a single screen.
*Enhanced Visualization with Colorized Fields: Field values in both entry lists and entry view cards can now be dynamically colorized, allowing for intuitive visualization based on specified rules and field values. Where: Edit field > Colorize field value
*Added the ability to create and edit entries using AI-driven photo analysis.
*Added the ability to edit images created in drawing fields.
*Added the ability to display a secondary thumbnail icon in the entries list by selecting a second image field, along with the ability to customize thumbnail placeholders to suit specific preferences.
*The list field type now offers enhanced versatility with two distinct modes of operation: checklist or ordered list.
*All cloud libraries and template URLs in the online directory now have the hostname mementodb.com.
*JavaScript: Users can now automate processes by scheduling triggers to execute at predetermined times, leveraging the new "At scheduled time" trigger event.
*JavaScript: The script editor has been refined with added functionality, including the ability to undo and redo actions.
*JavaScript: Centralized script execution logs. Where: Open library > Menu > Scripts > Logs icon
*JavaScript: Added the ability to create Android notifications directly through scripts using the notification() method.
[Memento 5.4 Feature Roundup](https://medium.com/mementodatabase/whats-new-in-memento-database-5-4-0-b90a03d12799)

      1. Release 5.3.0, 2024-04-30
*Customizable shortcuts toolbar for a library. To enable: Open library > Menu > Settings > Show toolbar with shortcuts.
*Added the ability to display some text as a field description when viewing or editing an entry. To enable: Edit field > Field description.
*Added the ability to edit fields directly from a view entry by clicking on them. To enable: Edit field > Direct Edit.
*Added the ability to set line limits for entry names and descriptions in the list. Location: Edit library > Main tab > Entry name.
*Added the ability to reorder the images in the field.
*Added the ability to display the "Integer values" field type as a Slider.
*Added the ability to use the Claude 3 or ChatGPT4 models as AI Assistants.
*JavaScript: Added the ability to show dialogs in scripts. Refer to the new dialog() method.
*JavaScript: Added the ability to restrict access to running a script action for specific library users. Location: Edit script > View > Allowed Users.

      1. Release 5.2.0, 2023-12-10
*AI Assistant: Added the ability to create and edit entries using ChatGPT. Where: Open library > Menu > AI Assistants.
*AI Assistant: Introduced the capability to query ChatGPT based on entry data.
*Changes in the "Signature" field type. Renamed to "Drawing" with dual functionality – Drawing and Signature (configurable in the field settings).
*Added the ability to delete local files for libraries uploaded to the cloud, freeing up space in the device's internal memory. Where: Open library > Menu > Files > Local Cleanup.
*You can now create tabs corresponding to months or years, displaying entries with respective dates. How to enable: Edit library > Edit a date field > Show as tabs.
*JavaScript: Added the ability to set default values for an entry in triggers when copying or editing it. The default values are set via the [buildDefaultEntry()](https://wiki.mementodatabase.com/index.php?title=Memento_JavaScript_Library#buildDefaultEntry()) method.
*JavaScript: Added the ability to get and [set image caption](https://wiki.mementodatabase.com/index.php?title=Memento_JavaScript_Library#Entry_methods) values from scripts.
[Feature Overview Video - Watch on YouTube](https://www.youtube.com/watch?v=zIPy6-kw6vY)

      1. Release 5.1.0, 2023-10-10
*New field type - Embedded object. Store custom embedded objects with attributes directly within entries.
*Draft Entries. Save your progress while creating or editing entries for a smoother workflow.
*Added ability to change field type for existing libraries. Where: edit library > 3-dots menu next to the field > convert data type.
*AI Assistant by ChatGPT: Get AI-powered assistance in creating library structures and choice field items.
*JavaScript: Added the ability to read and write files in device storage via scripts for Android 12 and later.

      1. Release 5.0.0, 2023-05-04
*Widgets: A customizable object that allows users to visualize and organize data. They can be added to a dashboard or library. Memento now supports aggregation, chart, script, entries list, and shortcuts widgets. 
*Dashboards: Users can create custom dashboards in Memento Database that display data from different libraries in one place.
*Memento now allows users to create a simple user interface using scripts. This functionality is exclusive to scripted widgets. 
*Added ability to use a limited number of HTML tags in the results for the JavaScript and Calculation fields. How to enable: edit library > edit field > HTML mode.
*Added ability to create library entries using a step-by-step form. How to enable: edit library > main tab > create entry page by page.
*The new "count" aggregation function in the library allows users to view the total number of entries and set up field-based filters for a more precise count.

      1. Release 4.13.0, 2022-10-26
*New field type - Tree. The Tree field is a set of predefined items with folders that have a hierarchical tree structure. 
*Added ability to save library view options (view type, filter, sorting) as a preset and switch between them. 
*Added ability to select any folder for automatic backup.
*JavaScript: Added method fields() to the Library object to get all the library field names.
*JavaScript: Added ability to get the current username by system().user.
*JavaScript: Added method syncGoogleSheet() to the Library object to run synchronization with Google Sheet.

      1. Release 4.12.0, 2022-07-15
*New field type - Button. The button field is an interactive field type that lets you trigger certain actions - run script, open URL, share text.
*New field type - Lookup. The Lookup field allows you to pull field values from linked entries.
*Added ability to display choice field items as Tabs in the list of entries and filter entries by them. Edit library > Edit field > Show as Tab.
*The new permission for the cloud libraries - Ability to copy library structure. The users don't receive this permission for shared libraries by default.
*Added the ability to insert an image into the image field by URL.
*Updated JavaScript engine.

      1. Release 4.11.0, 2022-02-21
*Added ability to create a library from a CSV file directly. Where: Menu > Add library > Import from CSV.
*Prefilled entries. It is possible to create entries templates with prefilled field values. Where: library > Menu > Prefilled entries
*Added ability to turn off clustering on the map view.
*Subheader can have hint text now.
*Added ability to automatically create reminders in a Date/Time field. Where: Edit library > Edit field > Auto reminder.
*Added ability to display related entries as cards.
*Added the ability to make a field read-only, though such fields can still be changed via scripts. Where: Edit library > Edit field > Read only.

      1. Release 4.10.4, 2022-01-26
- Bug fixes.
- Marker clustering on the map view.

      1. Release 4.10.0, 2021-03-16
- [Text recognition](https://help.mementodatabase.com/?ht_kb=autofill-by-image) from images. Where: Editing library > *Autofill* > **+** > *By Image &beta;*. 
- Defining field validation. Where: Editing field > *Data validation*.
- Show the customizable *Quick access* toolbar at the bottom of the libraries list screen. Where: Libraries list > 3-dot Menu > *Quick tools*. The toolbar may be restricted due to the size of your device.
- Added ability to sync all libraries with the cloud with one button. Where: Libraries list > 3-dot menu > *Quick tools*.
- JavaScript: Shared scripts that can be reused in any other scripts. How: For a shared script, when adding, choose *Shared*, rather than *Trigger* or *Action*.
- JavaScript: Added an additional location for the action script button in the entries list. Where: Editing action > *Place of Action* **&nabla;** > *Entries in the list*.
- JavaScript: Added ability to set a filter for an action script. In this case, the action will be available only for entries that satisfy the filter, protecting other entries from being affected. Where: Editing script > *VIEW* > *Filter* **&nabla;**. How: Use the same method as for filtering entries in the list.
- JavaScript: Added ability to choose an icon for an action script button. Where: When adding or updating a new action, in the *VIEW* tab > *Select icon for the Play button*.

      1. Release 4.9.3, 2021-01-09
- Enhanced behavior for Single-Choice Lists (SCLs). If a default value hasn't been specified, but the field is a required field, then the default value is null. Otherwise, the default value used is that of the first item in the list. 
- Lots of bugs have been fixed.

      1. Release 4.9.2, 2020-11-25
*Bug fixes.
*Added ability to append tags when editing multiple entries.
*Added new event for triggers - Updating a field.

      1. Release 4.9.0, 2020-09-02
*New field type - List. The List field is a set of text strings with checkboxes.
*New field type - Tags. The Tags field is an editable text box where you can type in a word and perform search other entries by it.
*A new type of entries display – Kanban. Where: library > menu > View > Kanban.
*Added ability to group entries by each value of a multi-select field. How: library > menu > group > multiple-choice list field > split values.
*Added ability to set a field as Unique. Where: edit library > tab Main > Unique Fields.
*Added ability to set the background color for the entries which will be depending on a field value.
*JavaScript: Added method linksFrom(library name, field name) to the Entry object to get entries from the specified library that have links to the current entry from the specified field.

      1. Release 4.8.1, 2020-07-12
- Added ability to delete a comment
- Updated translation
- Performance improvements
- Minor bugs fixed

      1. Release 4.8.0, 2020-05-28
- **Added ability to copy entries to Google Docs and create reports based on templates**
- **Multi-level grouping of entries**
- **Manual sorting of entries (drag and drop)**
- Added ability to select a filter for widgets
- The table view can display images now

      1. Release 4.7.5, 2020-04-01
- Lots of bugs have been fixed.
- Updated translations

      1. Release 4.7.3, 2020-02-05
- Faster sync with Google Sheets file
- Bug fixes

      1. Release 4.7.2, 2019-11-28
- Performance improvements.
- Lots of bugs have been fixed.
- Updated translations.

      1. Release 4.7.0, 2019-10-08
*Added ability to move or copy entries to another library
*New field type - User. This type of field allows selecting one or more Memento Cloud users. All users who have access to the library through the cloud are available for selection.
*Added ability to provide write/delete permissions based on the value of the "User" field
*Added ability to set the full name and avatar of a Memento Cloud user
*"JavaScript" and "Calculation" fields can now be hidden and they will not be displayed to the user in the interface
*Added ability to combine field filtering conditions with the “OR” operation
*Filters improvement: Numeric fields - new condition "Between" has been added. Single-choice list/Multiple-choice list - conditions "Is one of", "Is not one of", "Equal", "Not equal" have been added.
*Scripts: new user() method that returns the current user as a JSUser object
- Quick switching between linked libraries
- Added ability to copy the password to the clipboard by long pressing on a "Password" field

      1. Release 4.6.7, 2019-08-28
- Lots of bug fixes.
- Updated translations.

      1. Release 4.6.5, 2019-06-27
- Duration - a new field type intended to store the duration in days, hours, minutes, seconds and milliseconds.
- Calculation of computable fields while editing a record.
- Possibility to set the size of captured photos for the "Image" field.
- Scripts: new trash() methods - delete and untrash() - restore for an Entry object in triggers.
- Scripts: the possibility to get the previous entry in JavaScript field: entry().prev(). The resulting entry can be read-only.
- Added a new data source for auto-completion - boardgamegeek.com, containing information about board games.
      1. Release 4.6.0, 2019-02-11
- Page size and orientation setup when saving entries in PDF.
- Filters and graphs synchronization between Android devices.
- Now it is possible to give access to your filters and graphs to any user of your library (only for Team tariffs).
- Backup files are now saved as zip archives.
- Attribute values of related entries can be exported and imported from CSV. The format of the name of a column with an attribute shall be as follows: link field name:attribute name.
- Barcode scanner is now built into the application.
- New type of action script - "Bulk Action". The button to start this script will be available in the menu, if you select a few entries in the library. The selected entries are available in the script via selectedEntries() function.

      1. Release 4.5.10, 2018-12-07
- Added ability to set the year for the date field
- Fixed RichText rendering issue
- For JavaScript fields, added ability to access the following entry properties: entry().id, entry().creationTime, entry().author

      1. Release 4.5.9, 2018-11-17
- Updated translations
- Fix crashes on Android 8 tablets

      1. Release 4.5.8, 2018-10-01
- Added fingerprint support for secured libraries
- Many bug fixes

      1. Release 4.5.5, 2018-08-02
- New field type &mdash; Color.
- Added mobygames.com as a data source for Autofill. This source contains information about computer games.
- Scripts: Added the global function email(), which sends an email message via SMTP in the background.
- Scripts: Added the method post() in object Http to send POST (HTTP) requests.
- Scripts: Added methods for access to HTTP headers. The Http object has the method headers() to set up headers for a request. The HttpResult object has the method headers(name) to read the result headers by name.
- Added the ability to choose the location of the image cache folder.

      1. Release 4.5.0, 2018-05-14
- Added ability to view the history of entry changes and roll back to one of the previous versions of the entry. The history is saved only for libraries in the cloud and only for PRO tariffs. Where: Open entry > menu > Version History.
- Added NFC support for Barcode fields. How to enable: Edit library > Edit Barcode field > Type.
- Added ability to use your own measurement units for numeric fields.
- Monospace fonts were added to the list of available fonts for entries and fields display.
- Combination by year, month, or day is available for entries grouping.
- Added new autofill source - Library. The source allows filling in entry fields with data from another library.

      1. Release 4.4.5, 2017-04-07
- Added ability to open a library template in the online catalog by a link.
- Sign in with Google.
- The dialog to control the Memento account is added.
- Ability to change names for Checkbox field values is added.
- JavaScript: Entry.id - a unique identifier of an entry, Library.findById(id) - search for an entry by id.
- JavaScript and Calculation fields can now define the color of the entry. The field must return a color in HEX format: #RRGGBB.
- Improved compatibility with Android 8 Oreo.

      1. Release 4.4.0, 2017-12-12
- Attributes for links within Link to Entry fields. Where: Edit library > Edit Link to Entry field > Tab Attributes.
- Added ability to select fields for quick search. How: Open library > Menu > Settings > Quick search in.
- Added ability to search in specific fields ( Quick filter ). How: Open library > Search icon > Filter icon.
- Added ability to save search criteria as a filter. How: Open library > Search icon > Filter icon > Save icon.
- Added new events for triggers: Linking an entry, Unlinking an entry.
- Scripts: Added method remind() in object Entry to set up a reminder.
- Scripts: Added new aggregation functions by fields from linked entries to Calculation fields: $sum(), $min(), $max(), $avg().
- Fixed shortcuts on Android 8 Oreo.
Compatible version of the Desktop Edition is 1.2.0.

      1. Release 4.3.7, 2017-08-30
- Added wizard for Creating new libraries.
- Updated translations.

      1. Release 4.3.6, 2017-07-07
- Improved support for right-to-left languages.

      1. Release 4.3.5, 2017-06-07
- Recurring Reminders. How: entry view card > 3-dot menu > Reminder. To set a recurring rule, click on 3-dot menu button in the date selection dialog.
- Added igdb.com as a data source for Autofill. This source contains information about computer games.
- Ability to choose a language for Autofill sources: TheMovieDB.org, Google Books, Amazon.
- Ability to copy (duplicate) a field definition.
- Added ability to change the size of the increment and decrement for numeric fields.
- Added new filter conditions for fields - is empty, is not empty.
- Added new event for triggers  - Opening a library.
- Fixed: Line Chart issue when multiple series are present.
- Accent insensitive search.
- Chinese search bug fixed.

      1. Release 4.3.0, 2017-03-02
- Added ability to include in scripts **JavaScript libraries and custom code from repositories at GitHub.com**. Where to find it: edit script > add JavaScript libraries > tab Repositories.
- **Initiate scripts from button**. Ability to request parameters from user to be passed to the script. How to create scripts: library > menu > Script > + > Action.
- Ability to **use scripts as a data source for Autofill fields**. How: edit library> tab Autofill > + > Script.
- Scripts: The following **properties added to the object Entry** - creationTime, lastModifiedTime, author.
- Scripts: The following **methods for connecting entries** to object Entry - link(name, entry) / unlink(name, entry)
- Scripts: **Function exit()** added, which stops script execution.
- Scripts: **Method recalc()** added to object Entry. Initiates recalculation of entry fields.
- Scripts: **Method set() of object Entry**: Second argument &mdash; for Link to Entry, Link to File, Checkboxes, and Multiple-choice List fields &mdash; can now be an array and can therefore represent multiple values to be set for the field.
- Added capability to turn off certain addresses during **import of field Coordinate**.
- Various big fixes.

      1. Release 4.2.0, 2016-12-28
- A new type of entries display – **[Card View](Library Entries List screen#View.md)**. Where: library > slide menu > View > Cards
- **[Integration with Tasker](Tasker Integration#Events.md)** extended. A possibility to create “Events” was added. The following event types are supported: entry creation, entry modification, entry removal.
- Added ability to combine related libraries to a single template when they are uploaded to an online directory or exported as a file.
- Added ability to [**carry out searching in an encrypted library**](Library Entries List screen#Search icon.md).
- **[JavaScript objects for triggers](Triggers#Built-in objects for certain Memento field types.md)**: References to Location and Contact fields now return objects that allow access to individual values from these fields.
- Support of scanning and **[QR Code](Barcode field#Advanced Parameters.md)** generation for Barcode field type was implemented. Where: editing field > Type > QR-code
- Horizontal **[mode of image display for the Image field type](Image field#Advanced Parameters.md)** was added. How: editing field > Orientation > Horizontal

      1. Release 4.1.0, 2016-11-21
- **[Team](Team for Business.md)** is a new category of tariffs for Business users. Team tariffs allow to have a centralized control over accounts and PRO licenses. Where: main slide menu > Cloud Storage > Users button. 
- User groups and control of access to certain library fields. These functions are available only for Team.
- Added ability to **[set a separator](Library Edit screen#MAIN tab.md)** for values of fields displayed in entry lists as the entry name or description. 
- Added ability to set captions for photos.
- Added ability to change the sequence of entries in fields like “Link to an entry”.
- **[A subheader for fields](Library Edit screen#FIELDS tab.md)** – a new library structure element. Fields located under subheader can be collapsed/expanded on entry cards. How: editing library > fields > + > subheader
- Added ability to hide aggregation results on the lower toolbar of the library. Hidden aggregation results will be displayed upon pressing the lower toolbar.

      1. Release 4.0.0, 2016-10-07
- **[Triggers](Triggers.md)**. A trigger is a script that defines the processing for an entry based on an event that is taking place. When a trigger script is executed, it may change an existing entry, create a new entry, execute an HTTP request, create a file, perform data balidation, etc.
- **[Tasker and Locale support](Tasker Integration.md)** via Locale plug-in
- All library comments are displayed in a single place. Where: libray > slide menu > Comments
- Fast switching of filters in the list of entries by Tabs. How: library > slide menu > Tabs
- Generation and display of a bar code when the user clicks the corresponding field in the entry card.
- Possibility to export and import library templates along with filters.
- Added ability to set unit of measure for numeric fields. Where: editing field > Unit of Measurement
- Option to set display format for [**date**](Date field#Advanced Parameters.md), [**time**](Time field#Advanced Parameters.md), and [**datetime**](DateTime field#Advanced Parameters.md) fields. Where: editing field > Date and time formats
- Possibility to set the time up to the second in fields Time and Date/Time. How to enable: select the seconds format in the format settings.
- Continuous barcode data entry. How: menu > view > List.

      1. Release 3.9.7, 2016-07-21
- Type of relationship for **[Link To Entry field](Link To Entry field.md)** type: One-to-one, One-to-Many, Many-to-Many.
- Added ability to open edit form by clicking on an entry. How to enable : library > menu > settings > edit mode
- Added ability manually enter location (latitude and longitude).
- Added Greek language.

      1. Release 3.9.6
- Improved file upload speed.
- Improved Android 6.0 compatibility.
- Added ability to set the divider for multi-choice fields.
- The new user permission for cloud - allow user view only for own entries in shared library.
- Fixed a bug in aggregation by linked entries (min, max) in calculated field.
- Fixed sorting by date.

      1. Release 3.9.0
- Javascript field
- Added ability to display the edit screen in full-screen mode (for tablets).
- Added ability to sort and rename filters.
- Added ability to use the value from the previous entry as a default value in added to the numeric field.
- Added ability to enable automatec sorting of elements for choice fields.

      1. Release 3.8.8
- Multiple dependencies for one field.
- Performance improvement.
- Minor bugs fixed.

      1. Release 3.8.5
- Support Android 6.0 runtime permission.
- Added switch function for calculated field.

      1. Release 3.8.0
- Receipt of notifications of all modifications in teh libraryies made by other users (only for subscribers). How: library > slide menu > Cloud > Notifications.
- Comment on entries uploaded to the cloud. How: card of entry > Comment button on the right-bottom of screen.
- Manager of files related to the library. It allows to download alll files from the cloud just with a press of a button. Also, search for lost files is available now (for example, if they were relocated to another catalog/media). Where: open a library > slide menu > Files.
- New field type - RichText. Rich text fields give you a Redactor-powered WYSIWYG editor.
- Preview of the results of calculations when editing the formula of a Calculation field.
- Access from calulations to the values of fields of related entries. For details, see Help.
- Now it is possible to place a shortcut of new entries quick createion on teh Launcher desktop. How: open a library > menu > Create Shortcut > Create entry.
- Sorting and use of aggregation formulas from the master library are now available for the list of related master entryes. How: edit a subordinate library > fields > master library > dots > Display aggregation.

      1. Release 3.7.0
- App widget. It displays all entries of the selected library. You can also add new entries to the library using this widget.
- New field types - Readio Buttons and Checkboxes.
Entry export to PDF. How: card of entry > menu > save as PDF, only for Android 4.4 or higher.
- Now it is possible to place two fields side-by-side. How: editing library > fields > dots > one row with prev.
- Editing of multiple entries. How: choose several entries (long -pressing of an entry evalbles the entry selection mode), press Edit button on the action toolbar and choose the field to be edited.
- Now the following fields are equipped with a filter: Contact, Link to Entry, Calculation with the text result.
- Call of the calculator for numberic fields. How: editing field > Calculator. Upon enabling of this option, the button of calculator opening will be displaed to the right of the input field.
- Thousands separators for numeric fields. How: editoing field > Thousands separators.
- Type of the Rating field -- tips for values. How: editing field > Tooltips. Tips are displaed on teh entry edit card and when the field is displayed in the form of entry description.
- Field fonts cusotmmization (size, colo, style). How: editing field > Font.

1. Memento Desktop Edition
      1. Release 3.7.1, 2025-10-29
- Web Forms. Collect data from people without requiring them to install the app. Create custom forms for adding records to your library directly from any browser, with access control options including public links (anyone with the link), password protection, or restriction to specific Memento users. To create a form, go to Menu > Data > Web Pages.

      1. Release 3.6.0, 2025-09-23
- Added AI Assistant for Library - Chat-based AI helper that can create entries from your descriptions, edit existing entries, search and analyze your data, and provide intelligent answers based on your library content.
- Markdown support for rich text fields - enable by setting "Text format" to Markdown in field properties, with the ability to create links to other entries.
- AI in automation rules - integrate AI requests into your automation workflows.
- AI in scripts - use AI requests directly inside your custom scripts.
- AI credits system - requests to AI models now require credits, managed within the app.
- Bug fixes.

      1. Release 3.5.1, 2025-07-17
- Added support for input masks in text fields.
- Added the ability to automatically resize images by setting a maximum allowed size in the field settings.
- Restored IGDB.com as a data source for Autofill. This source provides detailed information about video games.
- Bug fixes.

      1. Release 3.4.2, 2025-05-20
- Added support for exporting and importing library templates to and from a file.
- Added compatibility with scripts created by automation rules in the Android app.
- Bug fixes.

      1. Release 3.4.0, 2024-09-25
- New Themes: Choose from seven fresh looks for the app, including dark themes. Find them in the menu under Help > Theme.
- Custom Views: Create multiple personalized ways to view your library. Set up filters, sorting, and grouping to organize your data just how you like it.  Start creating your custom view by going to menu > View > Create View.
- SQL Explorer: Use SQL queries to find specific information in your library. Access this powerful tool from the menu under Data > SQL Explorer.
- JavaScript: Added the sql() function for executing SQL queries from scripts. This function is limited to SELECT queries only. For more details, please refer to the wiki.
- Bug fixes.

      1. Release 3.3.0, 2024-07-05
- Enhanced Visualization with Colorized Fields: Field values in both entry lists and entry view cards can now be dynamically colorized, allowing for intuitive visualization based on specified rules and field values.
- The list field type now offers enhanced versatility with two distinct modes of operation: checklist or ordered list.
- Added the ability to display a secondary thumbnail icon in the entries list by selecting a second image field, along with the ability to customize thumbnail placeholders to suit specific preferences.
- Added the ability to sort filters, and consolidated all filter editing into a single window.
- All cloud libraries and template URLs in the online directory now have the hostname mementodb.com.
- Fixed Google Map issues.

      1. Release 3.2.1, 2024-04-15
- Added the ability to display some text as a field description when viewing or editing an entry.
- Added the ability to set line limits for entry names and descriptions in the list.
- JavaScript: Added the ability to show dialogs in scripts. Refer to the new dialog() method.
- JavaScript: Added the ability to restrict access to running a script action for specific library users.

      1. Release 3.1.0, 2023-11-10
- Memento now uses a completely new local database engine for better performance. To take advantage, you'll need to download your libraries from the cloud again. Note that some settings won't transfer automatically. To keep your filters, sorting, and dashboards, export your workspace in the old version and import it in the new one (Menu > File > Workspace).
- AI Assistant by ChatGPT: Get AI-powered assistance in creating library structures.
- Added ability to move or copy entries to another library.
- Added the ability to download images attached to entries during CSV export.

      1. Release 2.1.0, 2023-10-10
- New field type - Embedded object. Store custom embedded objects with attributes directly within entries.
- Added the ability to export and import library settings (filters, sorting, etc.) and reports to a file (menu > File > Workspace).

      1. Release 2.0.0, 2023-07-07
- Widgets: A customizable object that allows users to visualize and organize data. They can be added to a dashboard or library. Memento now supports aggregation, chart, script, entries list, and shortcuts widgets. 
- Dashboards: Users can create custom dashboards in Memento Database that display data from different libraries in one place.
- Memento now allows users to create a simple user interface using scripts. This functionality is exclusive to scripted widgets.  
- Added ability to create library entries using a step-by-step form. 
- The new "count" aggregation function in the library allows users to view the total number of entries and set up field-based filters for a more precise count.

      1. Release 1.13.0, 2022-11-29
- New field type - Tree. The Tree field is a set of predefined items with folders that have a hierarchical tree structure. 
- Attribute values of related entries can be exported and imported from CSV. The format of the name of a column with an attribute shall be as follows: link field name:attribute name.
- JavaScript: Added method fields() to the Library object to get all the library field names.
- JavaScript: Added ability to get the current username by system().user.
- Bug fixes.

      1. Release 1.12.0, 2022-07-18
- New field type - Button. The button field is an interactive field type that lets you trigger certain actions - run script, open URL, share text.
- New field type - Lookup. The Lookup field allows you to pull field values from linked entries.
- The new permission for the cloud libraries - Ability to copy library structure. The users don't receive this permission for shared libraries by default.

      1. Release 1.10.3, 2022-01-26
- Added ability to change the application font: menu > help > theme > font.
- Added ability to copy a library structure: the library context menu > copy.
- Added ability to select the page for displaying related entries: edit library > relations.
- Fixed display of images in reports.
- Bug fixes.

      1. Release 1.10.1, 2021-05-31
- Bug fixes

      1. Release 1.10.0, 2021-04-08
- Defining field validation.
- Script: Shared scripts that can be reused in any other scripts.
- Script:  Added an additional location for the action script button in the entries list.
- Script: Added ability to set a filter for an action script. In this case, the action will be available only for entries that satisfy the filter.

      1. Release 1.9.6, 2020-10-27
- A new type of entries display – Table View
- Added new event for triggers – Updating a field.

      1. Release 1.9.0, 2020-09-21
- New field type – List. The List field is a set of text strings with checkboxes.
- New field type – Tags. The Tags field is an editable text box where you can type in a word and perform search other entries by it.
- Added ability to group entries by each value of a multi-select field. How: group > multiple-choice list field > split values.
- Added ability to set a field as Unique. 
- Added ability to search in specific fields.
- Call of the calculator for numberic fields. How: editing field > Calculator. Upon enabling of this option, the button of calculator opening will be displaed to the right of the input field.
- JavaScript: Added method linksFrom(library name, field name) to the Entry object to get entries from the specified library that have links to the current entry from the specified field.

      1. Release 1.8.4, 2020-06-30
- Manual sorting of entries (drag and drop).
- Added ability to delete a comment.
- Added a new filter condition for numeric fields - "Between".
- Bug fixes.

      1. Release 1.8.2, 2020-04-20
- Bug fixes.
- Added Croatian translation.

      1. Release 1.8.1, 2020-03-19
- Bug fixes.
- Added Slovenian translation.
- Updated translations.

      1. Release 1.8.0, 2020-03-17
- Refreshed UI.
- Added ability to group libraries.
- Bug fixes.

      1. Release 1.7.1, 2020-01-14
- Fixed Google Sign In.

      1. Release 1.7.0, 2019-11-07
- New field type - User. This type of field allows selecting one or more Memento Cloud users.
- Added ability to provide write/delete permissions based on the value of the "User" field.
- Added ability to set the full name and avatar of a Memento Cloud user.
- "JavaScript" and "Calculation" fields can now be hidden.

      1. Release 1.6.7, 2019-07-25
- Bug fixes.

      1. Release 1.6.6, 2019-07-04
- Duration - a new field type intended to store the duration in days, hours, minutes, seconds and milliseconds.
- Added a new data source for auto-completion - boardgamegeek.com, containing information about board games.
- Bug fixes.

      1. Release 1.6.1, 2019-05-04
- Added ability to create personal access tokens to access Memento Cloud API: Account > Access Tokens.
- Improved image loader.

      1. Release 1.6.0, 2019-03-22
- Calendar view that allows you to look through library entries in a calendar. Calendar view is available if there is at least one Date/Time field in the Library.
- Added ability to search among million icons and use them in your libraries. This feature is powered by IconFinder.
- New type of action script - Bulk Action. To start this script, choose the item with its name from the context menu of entries. The selected entries are available in the script via selectedEntries() function.
- Added Estonian translation
- Added Swedish translation
- Updated translations

      1. Release 1.5.0, 2018-11-19
- Added ability to display records on a map.
- Added ability to group entries by day, month, or year.
- Added ability to search library templates in the online catalog.
- The reports can display multiple photos in one field.
- Bug fixes.

      1. Release 1.4.5, 2018-08-01
- New field type - Color.
- Added mobygames.com as a data source for autofill. This source contains information about computer games.
- Scripts: Added global function email(), which send an email message via SMTP in the background.
- Scripts: Added method post() in object Http to send POST (HTTP) requests.
- Scripts: Added methods for access to HTTP-headers.
      1. Release 1.4.0, 2018-05-25
- Supports entry edit history
- Supports Autofill from libraries

      1. Release 1.3.0, 2018-04-07
- Customizable reports. Ability to print the entries and to export the entries to PDF/DOC/HTML.
- Sign in with Google.
- Increased speed of loading libraries with script fields.
- JavaScript: Entry.id - a unique identifier of an entry, Library.findById(id) - search for an entry by id.
- JavaScript and Calculation fields can now define the color of the entry. The field must return a color in HEX format: #RRGGBB.

      1. Release 1.2.0, 2018-01-08
- Attributes for the links. 
- Added new events for triggers: Linking an entry, Unlinking an entry.
- Scripts: Added new aggregation functions by fields from linked entries to calculation fields - $sum, $min, $max, $avg.
- Bug fixes.

      1. Release 1.1.0, 2017-09-18
- Added ability to post comments to entries.
- Added ability to specify an entry author during import of entries.
- Local database engine was updated.
- Bug fixes.

      1. Release 1.0.9, 2017-03-17
- Added ability to include in scripts JavaScript libraries and custom code from repositories at GitHub.com. 
- Initiate scripts from button. Ability to request parameters from user to be passed to the script. 
- Ability to use scripts as a data source for Autofill fields.
- Scripts: The following properties are added to the object Entry - creationTime, lastModifiedTime, author.
- Scripts: The following methods for connecting entries to object Entry - link(name, entry) / unlink(name, entry)
- Scripts: Function exit() is added, which stops script execution.
- Bug fixes.

      1. Release 1.0.7, 2016-11-21
- A subheader for fields – a new library structure element. Fields located under subheader can be collapsed/expanded on entry cards.
- Added ability to set captions for photos.
- Added ability to restrict access to certain library fields.

      1. Release 1.0.6, 2016-10-26
- Triggers. A Trigger is a script that defines the processing of an entry based on an Event that has taken place. 
When a trigger script is executed, it may change an existing entry, create a new entry, execute an http request, create a file, perform data validation, etc.
- Added ability to set unit of measure for numeric fields.
- Added ability to edit linked entries.

      1. Release 1.0.4, 2016-09-13
- Fixed a crash which could occur when using "Integer Values" field type.
- Using less memory while displaying thumbnails of entries.
- Fixed truncation of Real field type.
- Fixed sorting issues for Date field type.
- Fixed an issue where search query can't find entries, if it contains invisible characters.

      1. Release 1.0.3, 2016-07-13
- Type of relationship for "Link to entry" field types: One-to-one, One-to-Many, Many-to-Many.
- Added Bulgarian translation
- Added Chinese translation
- Updated Greek translation

      1. Release 1.0.2, 2016-07-13
- Added support for Memento Private Server

      1. Release 1.0.0, 2016-06-23
- The final version of the Release (1.0) has been released.

      1. Release 0.8.2, 2016-05-12
- Added a language selector: Help > Language.

      1. Release 0.8.0, 2016-05-06
- Added autofill from external sources - Google Books, musicbrainz.org, themoviedb.org
- Added bulk editing of entries
- Ability set up proxy for network connection.

      1. Release 0.7.5, 2016-04-16
- Added ability to edit some field types (checkbox , choice) directly from list.
- Added ability to set user permissions for library.
- Fixed a filter by date.
- Added option to open a library by URL.
- Added ability to upload template of library in the online-catalog.
- Added ability to use the value from the previous entry as a default value for a numeric field.

      1. Release 0.7.0, 2016-04-08
- Creating/editing a structure of library
- Online catalog of library templates
- Fixed a bug with thumbnails.

      1. Release 0.6.0, 2016-03-14
- Added Import and Export entries to CSV
- Added support for encrypted libraries
- Fixed left align for entries without colors
- Preserve the group nodes state.
- Fixed a bug with wrong decimal symbol for some languages.
- Added display count of entries.

      1. Release 0.5.7, 2016-03-02
- Grouping entries (multi-level)
- Color of entries
- Notifications about new versions.
- Fixed a security issue: possible to view subordinate library even when user isn't granted access to the them. 
- Fixed a security issue: edit entries through search, when user isn't granted access to edit.
- Fixed crash if library has custom icon
- Fixed a crash which could occur when using coordinate.
- Fixed a crash which could occur after editing of entry
