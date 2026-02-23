---
title: "Tasker Integration"
---

Memento Database supports integration with the applications **Tasker** and **Locale**. Tasker is an application for Android which performs tasks (sets of actions) based on contexts (application, time, date, location, event, gesture) in user-defined profiles or in clickable or timer-driven home screen widgets.

You can create/edit Memento entries in response to specific events or changes in device status. For example, you can automatically save to libraries incoming SMS messages, information about calls, location history, and more.

   1. Creating an entry
1. You should have a library into which you plan to insert the events from Tasker.
1. Go to Tasker and open the dialog for creating a new task.
1. Select Plugin > Memento Database.
1. Select Configuration, and then select the library.
1. Add the values you want to enter in the fields of the new entry using variables from Tasker: http://tasker.dinglisch.net/userguide/en/variables.html

   1. Updating an entry
1. Follow the same steps as for creating an entry.
1. Select the option "Edit Entry".
1. Select the field that will be the key when editing entries. The values from Tasker will be entered into the entry where the value of the key field corresponds to the specified value. Variables from Tasker can be used as key fields.

All values coming into Memento, including key field values, must have the same format as for import of a CSV file.

   1. Events
Memento can serve as the source of these events for Tasker: **Create**, **Update**, and **Delete** an entry. While processing these events, Tasker can access the values of fields in the entry as variables of type **%field_name**.

Steps to create an event:
1. Start Tasker and open the dialogue to create a new event
1. Select **Plugin** > **Memento Database** and the appropriate type of event
1. Select **Configuration** and then the library

Events are generated only when the operations on the entries are done through the Memento front end. Events are not generated if the entries are changed via synchronization.
