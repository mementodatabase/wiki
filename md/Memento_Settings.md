---
title: "Memento Settings"
---

The following settings are global to the Memento installation on the current device.

   1. General
      1. Database Location
This setting allows the user to choose where databases should be stored locally. As of this writing, only the Mobile Edition Android platform supports local database storage.
---
#### *Android-specific*
A submenu is presented containing 2 or 3 immediate choices and a "Custom" choice.
**Internal Storage **(acts immediately)**** — Selecting this option causes the displayed directory pathname to become the database location going forward. This location is in primary local (internal) storage.
**External storage 0 **(acts immediately)**** — Selecting this option causes the displayed directory pathname to become the database location going forward. Despite the use of the word "external", this location is in secondary local (internal) storage.
**External storage 1 **(if SD card is installed, acts immediately)**** — Selecting this option causes the displayed directory pathname to become the database location going forward. This location is on the external SD card.
**Custom **...**** — A file folder selection card is presented, allowing the user to browse and select the directory in which the database should be located.

---

      1. File Storage
There are 3 settings for file storage.

**File storage folder** — A folder selection card is presented, allowing the user to select the directory to use for storage of files attached to libraries.

**Copy files to storage** — A checkbox, defaulted to Off, is presented, and the user may set this to On ***[to do what?](to do what?.md)***.

**Delete originals** — A checkbox, enabled only if **Copy files to storage** is set to On and defaulted to Off, is presented, and the user may set this to On to delete the original files after files are copied.

   1. Accounts
Manage the sounds to use on this device.

      1. Google Account
A list of Google accounts is presented, and the user can select which is to be used on this device going forward.

      1. Memento Account
A card is presented showing the login name of the current user, if any, and password as entry fields. These buttons are also shown:
**OK** — Accept the entered login name and password and log the user in.
**NEW ACCOUNT** — Accept the login and password for a new account. Leave the user logged into the new account.
**FORGOT PASSWORD?** — x

   1. View
      1. Theme
A submenu is presented, South the following options:
**Light theme** — The default light theme may be chosen.
**Dark theme** — The Senate dark theme may be chosen.

      1. Fonts
This setting allows certain default font settings to be set across entries in all libraries.

**Fonts in the list of entries** — The Font to use for each field role in a list bar is listed.
**Entry name** — : 
**Entry description** — : 
**Entry status** — : 

**Fonts in the entry** — The Fonts to use in entry cards are listed.
**Field name** — : 
**Field value** — : 

      1. Editing entries
This setting allows selection of parameters for the editing of entries.
**Show the soft keyboard** — Displays a card to show selection of the times to show the soft keyboard. The choices are **Don't show**, **When you create an entry**, and **Always**. **When you create an entry** is the default.
**File Manager** — Displays a card to keep the built-in file manager (the default) or choose a third-party file manager. At this time, the only alternate file manager is the OI File Manager.

   1. Backup
      1. Backup
In the Backup setting, the user can specify the backup directory, the backup filename, and whether or not to create backup copies of associated images, audio records, and other files.

      1. Restore
A restore is initiated by prompting the user to identify the backup file from which to restore.

      1. Auto backup
The Auto Backup setting allows the user to adjust details of the autobackup process.

      1. Directory for autobackup
A directory selection card is displayed, allowing the user to specify an alternate directory for autobackup.

      1. When to run autobackup
The choices are **Never**, **Every time**, **No more than once per hour**, and **No more than once a day**.

**After Memento is closed** — By default, autobackup will occur **No more than once per hour** after Memento is closed.

**Before sync with Google Sheets** — By default, autobackup will occur **Every time** sync with Google Sheets is run, before the sync.

**Before changing libraries** — By default, autobackup will occur **No more than once per hour** before changing libraries.

   1. Search
      1. Reindex (acts immediately)
Search indices will be reindexed, potentially enhancing performance for subsequent searches.

      1. Clear Search History (acts immediately)
The search history will be cleared, curtailing its display during searches.

   1. Security
I would tell you more about these, but then I'd have to shoot you. :-)
      1. Change Master Password
      1. Reset the master password
      1. App permissions
   1. Settings Import/Export/Sync
      1. Select Date format
A card is displayed with radio buttons allowing the user to select the date format to be used during sync, import, and export activities. Choices are **Current locale**, **User's date preference**, and a number of specific formats.

   1. Memento Server
      1. The address of Memento Server
A card is displayed with radio buttons for **Use Memento Cloud** and **Use Memento Private Server**. **Use Memento Cloud** is the default.

If **Use Memento Private Server** is selected, an entry field for **host.port** opens and may be entered.

   1. About
      1. About
A display card is presented, showing the device's Memento edition, version, license(s), the Memento URL, and copyright notice.
