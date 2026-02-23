---
title: "Data analysis"
---

For your data to be seen from various perspectives (dimensions) and summarized, or aggregated, in various ways at multiple levels, perform *data analysis* -- what a database user does in order to make sense or use of a set of data that may initially seem impermeable.

Relational systems are well-suited for data analysis. A Memento user may collect data of various sorts, linked together in various ways, and it can be hard to see truly useful views of that data that are effective in making decisions. We call the attempt to do so ***data analysis***, and Memento provides several good tools to enable it.

The following sections provide an overview to the process of data analysis. If you already know what you want to do and want to see specifically how to do it in Memento, see **[How:Analyze your data](How:Analyze_your_data.md)**.

## Preparing for maximal data analysis benefit
To prepare for subsequent analysis of the data, add related data and calculations to the data and then define aggregations of the data.

**Identify the library to center on for data analysis** — You can analyze the entries of any library, and the techniques described here work for analyzing the entries of any library or set of linked libraries.
However, given any set of related libraries, there is generally one that contains the primary transactional data, while the related libraries may act more like reference or master data. That primary transactional library is generally the one best suited for data analysis.
For example, in the group containing Customers, Products, and Orders, the Orders library provides the best opportunities for analysis, though you can also analyze customer-centered data or product-centered data-- just to lesser benefit.

**Fields for calculation** — First, your library as much as possible with information *derived* from entry data. In an entry for an order line item, for instance, calculate the total from the quantity and unit price. In library for a use of gasoline, calculate the cost of a tank from the number of gallons and cost per gallon, and calculate the cost per mile from the cost of the tank and the elapsed mileage.

**Calculate with related data** — Then, reach into related libraries to include data or calculate with data that would be useful during ad hoc data analysis.

**Aggregation** — Calculate useful information &mdash; such as totals, averages, maximums, and minimums &mdash; across all entries in the library. During data analysis, these calculations can become subcalculations for subsets of library entries in addition to the bottom calculations for the overall library.

## Slicing & dicing &mdash; ad hoc data analysis
Once the libraries are set up, and data is entered, the job of viewing the data and making sense of it is at hand. While viewing the list of library entries, the following activities will give you the best possible look at the data and any wisdom that may be contained within it.

**Filters** — First, you can restrict your investigation to a subset of the entries in the library. For example, you can filter to view orders only for a particular customer or gasoline only for your current car. Filters are defined & stored, so save those you may want to use later. Use filter tags to increase the speed of your analysis.

**Charts** — Another tool Memento provides for data analysis is charting the data. Memento charting is very flexible, providing visual views of the data. Since charts are also defined & stored, save those that might be the most helpful during subsequent analysis.

**Grouping** — Then, within the filtered or all data, you may want to see certain data separately from others, such as orders of certain products or fuel purchases from certain gas stations. If you group your order entries by product or your fuel purchase entries by gas station, you can then not only see them separately and quickly switch between them, but aggregations (counts, totals, averages, etc) will be displayed for each, in addition to aggregation of the entire set.

**Sorting** — With sorting, you can determine the order of entries, and if grouped, the order of the groups and the order of entries within groups. Sorting by numeric values can make the largest values stand out from the smallest, while grouping this way and that.

### Putting it all together
Use sorting carefully to enhance the effect of grouping.

If you don't already have an appropriate filter to use, consider grouping to accomplish the same thing. If that is insufficient, if you know you'll want to do that repeatedly in the future, or if you want to filter on one field while grouping on another, then you can proceed to defining & storing a filter or filter tab.

It is not always clear how clarity and wisdom unfolds from within the data, but with artful use of the activities described in this page, one can often detect patterns in the data that would otherwise not be apparent.

See **[How:Analyze your data](How:Analyze_your_data.md)** for more detailed explanation.
