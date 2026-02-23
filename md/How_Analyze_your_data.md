---
title: "How:Analyze your data"
---

To describe how to perform the functions involved in data analysis, we will use as an example a library Orders of orders on a date of a product by a customer, so there are related libraries Customers and Products.

**Preparing the example** — If you'd like to play along, [add these libraries](How:Add a Library.md) and [fields](Library Edit screen.md). Alternatively, you could just read along and apply analogous actions to your own library:
- **Customers** with unique entry name and the following fields:
- **Name** &mdash; single-line [Text field](Text field.md), entry name
- **Type** &mdash; [Radio Buttons field](Radio Buttons field.md), entry status, with items **Consumer** and **Institution**
- **State** &mdash; [Radio Buttons field](Radio Buttons field.md), entry status, with items as you like (for instance, **NY**, **OR**, and **TX**)
- **Products** with unique entry name and the following fields:
- **Name** &mdash; single-line [Text field](Text field.md), entry name
- **Category** &mdash; [Radio Buttons field](Radio Buttons field.md), entry status, with items **Lumber** and **Tools**
- **Cost** &mdash; [Currency field](Currency field.md), entry status
- **Std price** &mdash; [Currency field](Currency field.md), entry status
- **Orders** with unique entry name and the following fields:
- **Customer** &mdash; one-to-many [Link To Entry field](Link To Entry field.md) to library **Customers**, entry name
- **Date** &mdash; [Date field](Date field.md), entry name
- **Quantity** &mdash; [Integer field](Integer field.md), entry description
- **Product** &mdash; one-to-many [Link To Entry field](Link To Entry field.md) to library **Products**, entry description
- **Price** &mdash; [Currency field](Currency field.md), entry description

Note that we already have some good hooks for subsequent analysis:
- Customers have types and states. This will enable orders to be summarized by customer type and by location.
- Products have categories, cost, and a standard price. We can summarize by product category, and cost & standard price give us the basis for calculation of margins.

   1. Identify the library to center on for data analysis
Among these libraries, the Orders library has the most potential for fruitful analysis, though there could also be useful analysis done within Customers or Products. We will focus on the Orders library.

   1. Preparing for maximal data analysis benefit
To prepare for subsequent analysis of the data, add related data and calculations to the data and then define aggregations of the data.

      1. Bring related data into the entry
First, bring the "good hooks for subsequent analysis", mentioned above, into the Orders library to enable them to be used during analysis. These are just references; if the values need to change, you'll still change them in their native libraries.

**Add these fields to Orders** — :* **Customer type** &mdash; [Calculation field](Calculation field.md), string result, entry status
- Press the **+Field** button, choose **customer.type** from the list
- **Customer state** &mdash; [Calculation field](Calculation field.md), string result, entry status
- Press the **+Field** button, choose **customer.state** from the list
- **Product category** &mdash; [Calculation field](Calculation field.md), string result, entry status
- Press the **+Field** button, choose **product.category** from the list
- **Product cost** &mdash; [Calculation field](Calculation field.md), real result, scale 2, entry status
- Press the **+Field** button, choose **product.cost** from the list
- **Product std price** &mdash; [Calculation field](Calculation field.md), real result, scale 2, entry status
- Press the **+Field** button, choose **product.std price** from the list

      1. Calculate with related data
Then, add any calculations within the newly-expanded Orders library that will assist in data analysis.

**Add these fields to Orders** — :* **Product margin** &mdash; [Calculation field](Calculation field.md)
Either using the **+Field** button or by just typing, enter this script:
```

	#{product.std price} - #{product.cost}

```
- **Product margin %** &mdash; [Calculation field](Calculation field.md)
Enter this script:
```

	( #{product.std price} - #{product.cost} ) * 100 / #{product.cost}

```
- **Order margin** &mdash; [Calculation field](Calculation field.md)
Enter this script:
```

	#{price} - #{product.cost}

```
- **Order margin %** &mdash; [Calculation field](Calculation field.md)
Enter this script:
```

	( #{price} - #{product.cost} ) * 100 / #{product.cost}

```

      1. Aggregation
There is nothing to aggregate in **Customers**. In the **Products** **[Library Edit screen](Library Edit screen.md)**, under the **Aggregation** tab, add the following aggregations;
- Sum **Std price** on the left
- Sum **Cost** on the right on the same line

In the **Orders** **[Library Edit screen](Library Edit screen.md)**, under the **Aggregation** tab, add the following aggregations:
- Sum **Product cost** on the left
- Sum **Quantity** on the right on the same line
- Sum **Product std price** on the left
- Sum **Product margin** on the right on the same line
- Sum **Price** on the left
- Sum **Order margin** on the right on the same line
- Average **Price** on the left
- Average **Order margin** on the right on the same line

Placement of the aggregations is entirely up to you, of course. I try to group like things together as much as possible, to make the analysis as meaningful as possible.

At this point, we've maximized the included fields as much as possible and then maximized the meaningful aggregations &mdash; all valuable tools for subsequent data analysis. Feel free to add more, as you see fit.

   1. Enter test data
Enter as much data now as you can stand, as more data makes more meaningful analysis. Specifically, enter at least 2 entries for each of the following:
**Customers &mdash; Customer types** — Enter at least 2 entries for Consumer-type customers and 2 for Institution-type customers.
**Customers &mdash; Customer states** — Enter at least 2 entries for each of at least 2 states.
**Products &mdash; Product categories** — Enter at least 2 entries for Lumber products and at least 2 for Tools products.
**Orders &mdash; Orders** — Enter as many orders as you can tolerate, making sure to reference as many customers of different types and states as possible and products of as many categories as possible; then try some data analysis while reading the following sections. Then enter some more, until you are satisfied with what you can get out of the analysis.

   1. Slicing & Dicing &mdash; ad hoc data analysis
Once the libraries are set up, and data is entered, the job of viewing the data and making sense of it is at hand. While viewing **[the list of library entries](Library Entries List screen.md)**, the following activities will give you the best possible look at the data and any wisdom that may be contained within it.

**Predictive filtering** — If you find yourself frequently focusing on one customer, on customers from one state, or on certain products or product categories, define & store a filter for each such circumstance ahead of time. Then, during ad hoc data analysis, you can quickly pick the filter you want.
In this case, let's define filters for each product category. On the **[Library Entries List screen](Library Entries List screen.md)**, define the following filters:
- **Lumber**, with field **Product category** having the value **Lumber**
- **Tools**, with field **Product category** having the value **Tools**

**Ad hoc filtering** — Choose from the list of filters you've previously defined to focus in on the data you want to analyze, choose no filter to analyze all the data, or just filter on the fly.
 With [filter tabs](Library Entries List screen#Filter Tabs.md) (available in mobile editions starting with release 4.0), you can employ filters in an enhanced manner.
It is best here to be as inclusive as possible, so don't over-filter. For now, let's not filter, or choose the Consumers filter or whichever filter yields you the most test data.

**Grouping** — Then, group by **Customer type** and see how consumer data compares to institutional data. Do they both make sense? Are there any surprises?
Then, group by **Customer state**. Are people in the east buying differently from people in the west?
Then, group by **Product category**. Are you more profitable selling lumber or tools? Can the margins be increased within either category?

**Sorting** — Use sorting primarily to maintain a meaningful order of groups and of order within groups and also to make the **No grouping** list the most useful. Sorting by numeric values can make the largest values stand out from the smallest, while grouping this way and that.

**Charting** — Another tool Memento provides for data analysis is charting the data. Memento charting is very flexible, providing visual views of the data. Save any charts you think you might want to use next time.

This is where you view the data, but you can see various aspects of the data in different ways. Generally, as time moves forward and your data grows and/or moves forward in time, you can notice trends and detect patterns that you might not have anticipated and which inform your decisions regarding the process your data represents.

      1. Putting it all together
Use sorting carefully to enhance the effect of grouping.

If you don't already have an appropriate filter to use, consider grouping to accomplish the same thing. If that is insufficient, if you know you'll want to do that repeatedly in the future, or if you want to filter on one field while grouping on another, then you can proceed to defining & storing a filter.

It is not always clear how clarity and wisdom unfolds from within the data, but with artful use of the activities described in this page, one can often detect patterns in the data that would otherwise not be apparent.
