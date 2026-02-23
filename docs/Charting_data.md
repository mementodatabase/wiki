---
title: "Charting data"
---

The Charts List screen primarily presents a list of defined charts and allows the user to view the chart of choice based on the library data.

You can visualize your data using different graphics. Memento supports the following types of graphics: Pie, Line, Bar, Columns, Area, Scatter, and Stepped Area.

## Building a chart
In the **[Library Entries List screen](ui/Library_Entries_List_screen.md)**, a Right Side Menu may or may not be visible, depending on the platform and device. If it is not visible, pull it out by swiping from the right edge to the left. Select Charts.

Press the Add icon (**+**) and select the type of the chart you want to build; this opens the chart settings screen.

Select the fields of the library whose values are to be used for building the chart.

Charts requires an active connection to the Internet for building charts.
All code and data are processed and rendered in the browser. No data is sent to any server.

## Pie Chart Edit card
Build a pie chart with the following parameters:

**Category** — Field, the values of which are sectors on a pie chart. When category is a field of date or date/time type, the values can be grouped by hour, date, month or year.

**Values** — record number or numeric field that define sector size.

**Function** — Defines sector size calculation method. The default function is Sum. Sector size equals the sum of all value fields of the category’s records.

**Example Tasks** — Objective: Show number of tasks by priority
Category: Priority
Values: Number of entries
[600px](Image:Task_Priorities_Pie_Chart-20160911.png.md)

## Line/Area Chart Edit card
Build a line or area chart with the following parameters:

**Axis Х** — Field of values to be placed on axis X

**Axis Y** — Field of values that define the point the chart line will go through

**Function** — Defines method for calculating the value on axis Y. The default method is Sum.
The value on axis Y for X equals the sum of all Y-fields in the records with X-field equal to X.

**Series** — Used for building charts with multiple lines. The value of this field defines the line a certain record belongs to.

If the *X-field* is a number or date, you can specify axis type – *discrete* or *continuous*.

***Discrete* axis** — contains only those X values that are present in the records.
The discrete axis will appear as: 1,4,7.

***Continuous* axis** — contains all values of type X in ascending order.
For example, if the type of a field X is numeric and the library contains records with values 1,4,7.
The continuous axis will appear as: 1,2,3,4,5,6,7,8,9.

**Example Purchases** — Objective: Show amounts of funds spent by day.
Axis Х: Purchase Date
Axis Y: Price
[600px](Image:Expenditures_by_Day-20160911.png.md)

## Bar/Column Chart Edit card
Build a bar or column chart using the following variables:

**Columns** — Field the values of which are bars on the chart

**Values** — Field the values of which define the size of the bar

**Series** — Field for splitting records into individual data sets. Each data set will have its own bar for the respective value of the bar field.

**Example Music Collection** — Objective: Show the number of tracks bought each month grouped by genre.
Columns: Purchase Date, Group by month
Values: Number of entries
Series: Genre
[600px](Image:_Music_Purchases_by_Date-20160911.png.md)

## Scatter Chart Edit card
A scatter chart is used to map correlation between sets of numbers. Each entry of the library will be presented on the chart as a point.

Data sources:
**Axis Х** — Field for defining the coordinate of the point on axis X, Ease of Use, in this case

**Axis Y** — Field for defining the coordinate of the point on axis Y, Database Function, in this case
[600px](Image:_Database_Function_vs_Ease_of_Use-20160911.png.md)
