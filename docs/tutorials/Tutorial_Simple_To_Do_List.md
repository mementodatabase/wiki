---
title: "Tutorial:Simple To Do List"
---

Let's make a simple To Do List. It will require just one library with a couple of fields &mdash; the thing to do (a Text field) and a Checkbox field to indicate if it is done yet or not.

## Start Memento
So, first, let's start Memento. This will put you in the library group called **My Libraries**, showing a list of libraries in that group. You may have none, as yet. This is called the **Libraries List screen**.

## Add a Library
So, let's add a library. In the upper-right corner of the screen, note the icon with 3 vertical dots. Pressing that icon opens the **Action Menu**. So, let's open it and you will see a submenu; The top item is **Add Library**; press that to add the library.

That will bring up a **Select template** screen, including 5 buttons at the top and a list of templates. Press the first button, the one entitled **Empty Library**.

## Define the library
There are pages in this wiki where you can look to see all the parts of the screen you're seeing now &mdash; [Library Edit screen](../ui/Library_Edit_screen.md), if you feel strongly right now &mdash; but let's focus only on what we need.

### Define the library name
So, we are in the **MAIN** tab at a blank called **Library name**. Enter a name for your library &mdash; perhaps To Dos, To Do List, or Tasks; we'll call ours Tasks.

The other fields on the MAIN tab are not very important; just make sure **The entry name is unique** is set to Off; it is Off by default.

### Define the library fields
Now, let's define the library fields, so press the **FIELDS** tab. On this tab is a list of the fields defined for your library, which so far are none. So, press the blue **+** dot in the lower-right portion of the screen. To add a field, press **Field** on the submenu.

Now, a list of field types is displayed; select the **Text** field type.

This brings you to the [Field Edit card](../ui/Field_Edit_card.md); there is no need to go to that link right now, as we'll steer you where you need to go.

#### Define the Task Name field
Enter a name for the field to contain the To Do item. We'll call ours the **Task Name** field.

Of the other parameters, it is not overly important, but I would get in the habit of setting **Single-line text field** to On; it is Off by default. If you plan to write multi-line task names, leave it Off.

I generally set text fields to **Uppercase In the beginning of sentences**; if you agree, press **Uppercase** and then **In the beginning of sentences** on the submenu. It is not extremely important.

By default, the Display Option **Display in the list as** is set to **Entry Name** for the first field in a library; let's just leave it that way.

Now press the checkmark in the upper-left corner of the card to save the field definition and return to the FIELDS tab on the Library Edit screen.

Now, you'll see in the list of fields the Task Name field we just defined.

#### Define the Done? Field
We have one more field to define, so press the blue **+** dot in the lower-right portion of the screen again and then press **Field** on the submenu.

Now, a list of field types is displayed; select the **Boolean (Checkbox)** field type.

This brings you to the [Field Edit card](../ui/Field_Edit_card.md) again, but this time the one for a Checkbox field, so it's different.

Enter a name for the Checkbox field.. We'll call ours **Done?**.

Verify that the **Default value** is set to **No**; it should be, as that is the default default value for a Checkbox.

We want to be able to check or uncheck the **Done?** checkbox directly in the list; it would be too laborious to have to open the task, say to edit the task, check the **Done?** Checkbox, and then save the entry just to mark it as done. So, press the Advanced Parameter **Where you can edit** and check all the checkboxes in there (List entries, Card entry, and Table entries).

Now press the checkmark in the upper-left corner of the card to save the field definition and return to the FIELDS tab on the Library Edit screen.

Now, you'll see in the list of fields the Done? field we just defined.

### End by saving the library definition
Press the checkmark in the upper-left corner of the Library Edit screen.

Returning now to the Libraries List screen, you'll see our new Tasks library in the list.

## Test the library definition
Now let's enter some tasks and check off a couple of them, and see how it works.

### Open the Tasks library
Touch the Tasks library to open it. You'll see the list of entries in the library, which initially will be empty.

Press the blue **+** dot in the lower-right portion of the screen to add an entry. This opens the [Entry Edit card](../ui/Entry_Edit_card.md).

You may see a banner at the top of the screen now that offers to upload the library to the Memento Cloud. You could upload it if you like, but I suggest you press **NO, THANKS** and proceed; you can always upload it later, if you choose.

### Enter the first task
Press the blue **+** dot in the lower-right portion of the screen. An Entry Edit card will be displayed showing blanks for the two fields.

Enter a task to be done, like "Buy a loaf of bread", and press the checkmark in the upper-left corner of the card to save and exit the card, returning to the Entries List screen. Note, the newly entered task is displayed, and the Checkbox is unchecked.

Now, add another task &mdash; say, "Pick up $100 from the ATM".

Touch either checkbox to indicate that that task is done.

## End of the Simplest of To Do lists
You now have a To Do or Tasks list. You can view them and check them off as they are completed.

### Enhancements to consider
There are limitations to this simple library, but it gets the basic job done. To embellish this library, consider the following enhancements listed simplest to most complex:
- [Show only incomplete tasks](Tutorial:Simple_To_Do_List_Enhancements.md#Show_only_incomplete_tasks)
- [Prioritize or otherwise categorize tasks](Tutorial:Simple_To_Do_List_Enhancements.md#Categorize_tasks)
- [ Aggregate and chart tasks](Tutorial:Simple_To_Do_List_Enhancements.md#Aggregate_and_chart_tasks)
