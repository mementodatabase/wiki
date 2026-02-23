---
title: "Tutorial:Simple To Do List Enhancements"
---

This tutorial page walks through implementation of enhancements to the Simple To Do List.

## Show only incomplete tasks
This enhancement is done by a user viewing the list of tasks to be done, not by the library editor. It can be done two ways. The first is simpler.

### Group the tasks by Done?
Separate the tasks that are completed from those that are still to be done.

While viewing the list of tasks, open the Right-Side Menu by swiping from the right side of the screen to the left.

Select the **Group** option from the menu.

A card will be displayed showing a list of fields in the library as radio buttons. Select the **Done?** field, saying to group together tasks whose Done? boxes have the same value. The card will exit right away.

Now, only group bars are shown, one for each value of Done? in at least one entry of the library. Touch the **No** bar to see tasks that are not yet done, and touch the **Yes** bar to see completed tasks. To see all the tasks, either open both bars or select the Group option again and select the **No grouping** option.

### Filter the tasks by Done? being unchecked
The following accomplishes more or less the same thing, showing only the tasks that are yet to be completed.

This enhancement is done by a user viewing the list of tasks to be done, not using the library editor.

While viewing the list of tasks, open the Right-Side Menu by swiping from the right side of the screen to the left. If the list is already grouped, turn that off by bringing out the Tools menu again and this time selecting Group and then No Grouping.

Select the Filters option from the Tools menu.

A card entitled **New filter** will appear, with a blank containing "User filter" for the filter name.

Enter a filter name, such as "Incomplete tasks", and press **OK**.

A card will be displayed showing a list of fields in the library. Select the Done? field and uncheck the box, saying to show only tasks whose Done? boxes are unchecked. Press the checkmark in the upper-left corner to save the filter and exit the card.

Now, only incomplete tasks tasks are shown, and as they are checked as done, they will disappear from the list the next time the list is generated. To once again see all the tasks, select the Filters option again and select the **No filter** option.

## Categorize tasks
By adding one more field (Category or Priority, Urgency, Importance, etc) to the library,
- The tasks can be grouped, sorted, or filtered by it.
- The Category field may appear in the list as an entry description or an entry status.
- Tasks may be moved between categories without having to edit the entry.

### What field type?
So, let's add a Priority field to the library. The first thing to decide is what field type to use. A Text field could be used, and Memento's Autocomplete feature for Text fields would help a little with that, but it is an inadequate choice in many ways.

Memento has a couple of multiple-choice field types &mdash; Multiple-choice List and Checkboxes &mdash; and if a task must really be able to be in multiple categories, they may be used, but they come at a cost, as sorting doesn't work on them and they present other anomalies, as well.

Ideally, a task can be in a specified category and in only one category, and if that is true, it can be used in Memento to maximum benefit for the user. We will assume that a task has at most one priority. That makes sense.

Given this, there are two field types to consider &mdash; Single-choice List and Radio Buttons. Radio buttons are simple and familiar to most users, so let's use that field type.

### Add the Radio Buttons field
Let's begin in the Library Edit screen. Press the blue **+** button in the lower-right corner, then select the **Field** menu option, and then select the field type **Radio Buttons** to add the field to the library. That brings up the Field Edit card.

While on the MAIN tab of the card, enter a name for the field. I suggest calling it **Priority**. Then touch to open **Where you can edit**, check all the boxes, and press **OK**. This allows the category to be changed from within the list.

Under Display Options, touch **Display in the list as** and select **Entry status** so the priority will be displayed in the entry's list bar.

### Add the priorities
Now select the ITEMS tab, press the blue **+** button in the lower-right corner, and begin entering the priorities you want. For this example, we'll use **High**, **Medium**, and **Low**, so these categories can be used to indicate the priority of the task. In fact, the field could also have been used to indicate local tasks vs tasks in other locations, his tasks vs her tasks, or whatever else. So, consider adding category fields as needed.

So, after pressing the button to add items, enter "High" and press OK, then the same for Medium and Low.

### Save and exit
Finally, press the checkmark in the upper-left corner of the card to save and exit the card and go back to the Library Edit screen and then press the checkmark in the upper-left corner of the screen to save and exit the screen and go back to the Entries List screen.

### Test using the category
If you have task entries already, note that there is a new 3.5-line icon now between the checkbox and the task name in the list. to give each task a Priority, press that icon and select the priority you want. Then add tasks, if you like, to have enough tasks with enough priorities to have a good test.

Now you can try sorting by Priority, grouping by Priority, and filtering by Priority; I tend to use grouping more than the others, though if you have more than one category-type field, grouping by one and sorting by the other can work well. You've already seen that a task can be moved from one category to another directly in the list.

If you include Done as a Priority, you can simplify by eliminating the checkbox for Done?, but it'll one extra button push to check off completed tasks.

My shopping lists have a category for the stores I might visit, so I know what to buy at what store. My task lists have a category for the GTD (Getting Things Done) phase of a task and another to identify my tasks vs those of my wife. I'm sure you can think of more.

## Aggregate and chart tasks
If your tasks have something quantitative about them, like an estimate of the time or money it'll take to do them, then Memento's aggregation feature can really help.

Let's switch to bigger tasks now, like the tasks of a project &mdash; perhaps building a workshop add-on to your home. Once the time required for each task is estimated and entered into Memento, aggregation and charting can help you visualize the project.

Let's keep the tasks we've defined above, but before we begin, let's change the categories a bit.

### Categories of a different nature
It might be useful to be able to see the tasks that will be done by a particular person or contractor. It might also be useful to see the tasks that require electricity or water to already be on, foundation to have been laid, etc.

To do this, let's create two more category fields: Contractor and Phase. For Contractor, we can define items Painter, Electrician, Plumber, and General, for a general contractor. For Phase, let's define items Planning, Materials, Foundation, Plumbing, Construction, Electrical, and Painting. After doing Priority above, you should be able to add these on your own now.

Of course, with this example, much of the work done in each phase will be done by a particular contractor, but the general contractor will work in all phases, and there could be other crossover. It is assumed that the construction work will be done by the general contractor.

### Planned vs Actual
Let's say we'll measure work in days. Define an Integer field for Estimate and another for Actual. So, whenever a task is created, the user enters the task name and priority, identifies the phase the task will occur in and the contractor who'll do the work, and then will provide an estimate of the days it will take to complete the task. As each task is completed, the user can enter the actual number of days it took.

If you really wanted to, you could get rid of the Done? checkbox another way &mdash; by filtering on Actual being 0 instead of Done? being unchecked. Again, that makes it harder to check them off, but if you're going to enter actual days each time a task is completed anyway, it's actually a bit easier.

#### Getting Totals
Wouldn't it be nice to see estimated or actual totals by phase or by contractor? Now that we have the categories and the Estimate & Actual fields, we're ready to do that.

Touch the Aggregation tab at the top of the Library Edit screen to see the list of aggregation; there will be none so far.

Press the blue **+** button in the bottom-right off the screen to add an aggregation. The default function is Sum, and that's what we want, so leave that alone. Below that is the field to be summed; you can leave this set to whichever is there. A left-side display is the default; that's fine. Enter "Estimate" for the Prefix of Result. We'll begin on a new line, so just click on OK to be done.

Now do the same for Actual, but put it on the right side, call it "Actual", and do not start it on a new line.

### Viewing Your Tasks
When you press the checkmark button in the upper-left of the screen to end your edit session, you'll return to your list of tasks.

First, notice that you now have am aggregation bar at the bottom of your screen displaying the number of entries. To see estimates, actuals, and categories, go back and edit your tasks now to add those fields to them. Scatter your tasks among passes and contractors do you'll see data in each when you test. You'll see talks of the estimates and actuals in the bottom bar.

Use the Tools menu to see your tasks in various ways. My favorite might be to sort by Priority and group alternately by phase or contractor. However you group, you'll see subtotals of estimates and actuals by however you group &mdash; by phase or by contractor.

#### Add Over/Under Calculation
Edit the Library again, and this time add a JavaScript field called Over or Under. An edit card will be displayed for the JavaScript field.

In the script area, where the watermark JavaScript is filled in, press the + Field button and select the Actual field. You'll see, inserted for you "field('Actual')" (the double-errors are mine). Type a minis sign ("-"), then press + Field again and this time select the Estimate field.

That's it for the script; now just display in the list as Entry Status, and your done. Tasks that are under budget well show a negative number, on budget a zero, and over budget a positive number. I suggest setting the field to One row with prev to keep all estimates on the left and actuals on the right.

Of course, with grouping, you can see the variance by phase or by contractor and overall st the bottom.

#### Chart task estimates
Let's chart the estimates for visual effect.

Open the Tools menu again, and this time, press the Charts button. You'll see a list of the charts already defined; it'll likely be empty at this point. Press the blue **+** button in the lower-right corner to add a new chart. Select Columns for the type of chart. Enter the chart name "Estimates by Task". Select Task Name for Columns, Estimate for Values, Sum for Function, and None for Series. Leave all checkboxes unchecked.

Press the checkmark in the upper-left corner of the card, and you return to the charts list. Tap on the chart you just created to view it.
