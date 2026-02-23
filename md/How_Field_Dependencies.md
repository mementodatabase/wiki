---
title: "How:Field Dependencies"
---

1. Field Dependencies
If you have a field with choices (Checkbox (Boolean), Radio buttons, Checkboxes, Single-choice list, Multiple-choice list), you can enable dependencies of other fields based on the choice(s). The choice field is called the ***master*** field, and fields that are dependent on it are called ***dependent*** fields.

      1. Visibility dependencies
To make the ***visibility*** of a field dependent upon the values of a master field, do the following in the **Library Edit** screen:
1. Create a master field with choice values (items) (or a Checkbox (Boolean) field).
Example: Gender, with items Male and Female
1. Add a dependent field, and select **Dependencies of the field**; this brings up the **Dependencies list** card.
1. Press the blue plus (**+**) button to add a dependency; this brings up the **Add a dependency** card.
1. Select the field upon which to be dependent and press the **OK** button; this will bring up the **Create dependency** card.
1. Choose whether the dependency is only when editing an entry (the default) or also when viewing an entry.
1. Then choose the value(s) (the items) of the master field that will cause the dependent field to be visible (say, Female) and press the checkmark in the upper-left corner of the card.

Now, when the corresponding choice(s) is|are selected (Female, perhaps), the previously hidden dependent field(s) become visible.

      1. Content dependencies
The ***items*** (or *choices* or *content*) of the following types of fields can vary depending on other fields:
Radio buttons, Checkboxes, Single-choice list, & Multiple-choice list.

When you create a content dependency, you set, for each possible value of the master field, what items (or *choices*) of the dependent field will be available for selection.

To make the ***items*** of a choice field dependent upon the values of a master field, do the following in the **Library Edit** screen:
1. Create a master field with choice values (items) (or a Checkbox (Boolean) field).
Example: Gender, with items Male and Female
1. Add a dependent field, and select **Dependencies of the field**; this brings up the **Dependencies list** card.
1. Press the blue plus (**+**) button to add a dependency; this brings up the **Add a dependency** card.
1. Select the field upon which to be dependent and press the **OK** button; this will bring up the **Create dependency** card.
1. Choose whether the dependency is only when editing an entry (the default) or also when viewing an entry.
1. Then choose the item(s) of the dependent field that will cause the dependent field to be visible (perhaps Female) and press the checkmark in the upper-left corner of the card.
1. Then choose the value(s) of the master field that will cause the dependent field item to be visible (perhaps Female), select the value to set for that item, and press the checkmark in the upper-left corner of the card.
