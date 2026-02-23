---
title: "Actions"
---

An ***Action*** is a specialized trigger which is initiated by the pressing of a toolbar button while viewing a Library Entries list or an Entry View card; it will be executed in the background mode. Functions and objects that are available for triggers are also available for actions. Action scripts use the same security parameters as trigger scripts.

To initiate an action, use the toolbar Action button on the Libraries List screen or on the Entry View card.

   1. Creating an Action
Each library can have multiple actions. To see a script of a specific library, open Library > Menu > Scripts. To create an action:
1. Click **+**, and select **Actions**.
1. Select the action context; it can be Library, Entry or Bulk actions menu

Adding an action to the Libraries List screen or Entry View card will make the button appear in the toolbar. The button to start a Bulk Action script will be available in the menu, if you select a few entries in the library.

   1. Arguments (parameters)
The script can have arguments, the values of which will be entered by the user.

To create arguments:
1. Open the Action Edit card, move to tab Arguments, and click **+**.
1. To get the values of the arguments, use function *arg(argumentName)*. The type of the result depends on the type of the argument, in similar fashion to the *field()* function for an entry.

   1. Functions and objects available for the script
Action scripts can use the same objects and functions as trigger scripts. If the action is in the Library context, then it can use function *lib()* to get the current library. If the action is in the Entry context, then it can use function *entry()* to get the current entry.

For the Bulk Action script, the selected entries are available via *selectedEntries()* function.
