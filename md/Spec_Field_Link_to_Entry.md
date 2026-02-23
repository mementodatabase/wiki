---
title: "Spec:Field Link to Entry"
---

A Link To Entry field may contain a link to an entry or to entries in another library.

      1. Database principles & terminology
**For many-to-many links** — When an entry is created or edited, the user may select the entries in the linked library to which the new or edited entry will be linked.
Though a many-to-many relationship is theoretically symmetrical, the link field is created in only one of the libraries, so choose the library that you intend to use to reference the other.

**For one-to-many links** — When an entry is created or edited, the user may select the entry in the linked library to which the new or edited entry will be linked.
The link is created in the library that will contain the children (the **many** side), identifying at library edit time the library that will contain the parent entry (the **one** side) and identifying at entry creation or edit time the entry in that library that is the parent of the entry being created or edited.

**For one-to-one links** — When an entry is created or edited, the user may select the entry in the linked library to which the new or edited entry will be linked. If the selected entry is already linked to another entry in the current library, the attempt will be disallowed.
Though a one-to-one relationship is theoretically symmetrical, the link field is created in only one of the libraries, so choose the library that you intend to use to reference the other.

How to define a Link to Entry field can be confusing in various ways. One is called *cardinality* of the relationship between one library and the other. Below are 3 explanations that may be helpful to you -- first my summary, using Memento's language, which deviates from the norm. Then 2 articles that appear to me to be thoughtful and authoritative. Keep in mind that in those articles, what you may think of as a library will be called a table, and what you may think of as an entry will be called a record or possibly a row.

We'll start with my summary, using Memento language. Here it is:
[About *many-to-many, one-to-many, & one-to-one* library relationships or links](About:DatabaseRelationshipsCardinality.md)

This article from a database theory blog is not too long, says it succinctly.
https://vertabelo.com/blog/cardinality-in-data-modeling/

This article from DePaul University gives a more detailed look at the subject.
https://condor.depaul.edu/gandrus/240IT/accesspages/relationships.htm

When an entry is created, the user will be prompted to establish the value of the field, which involves accessing the target library and displaying an Entries List, enabling selection of target entr(y|ies). The user also may select and/or deselect target entr(y|ies) when the entry is edited.

Once linked, fields in the linked library may be referenced from the current library from **[Calculation field](Calculation field.md)** scripts, **[JavaScript field](JavaScript field.md)** scripts, and from aggregation functions.
From a  Calculation field, use ***linkFieldName.fieldName*** or pick from the **+Field** list. From a JavaScript field, use ***field("linkFieldName")[0].field("fieldName")***. If from a trigger script, you would need ***entry().field("linkFieldName")[0].field("fieldName")***.

**Accessing attributes of Link to Entry fields** — Link to Entry fields may have attributes that will have a value for each linked entry. See **[Attributes of linked entries](Attributes of linked entries.md)**.

**Importing linked Google Sheets** — Links can be set during import or sync with Google Sheets. The Entry Name field or fields (concatenated) is used as the key. "The entry name is unique" option must be enabled in the associated library.

      1. Advanced Parameters
**Library** — Select from the list the library to which you wish to link

**Display aggregation** — Display aggregation by entries of the linked library? Yes or no

**Type of relationship** — Choices are:
- Many-to-many
- One-to-many
- One-to-one

By default, it will be a many-to-many relationship.

   1. Display Options

      1. Examples
For each of these scenarios, there are many templates in the online template catalog &mdash; perhaps to use with little or no customization &mdash; or perhaps to study and learn their techniques before implementing your own.

#### Tracking spending on groceries
In this scenario, we shop at grocery stores at certain dates/times (receipts) and buy grocery items.

**We visit stores to shop for groceries.** — Create a one-to-many Link To Entry field within library Grocery Receipts to library Stores. Grocery Receipts contains fields for date/time, payment method, etc. Stores contains contact information, location, etc.

**We buy grocery items during visits; the items appear on receipts.** — Create a one-to-many Link To Entry field within library Grocery Purchases to library Grocery Receipts. Grocery Purchases contains fields for the brand, variety, item, units, quantity, category, etc.

Slice & dice within the Grocery Purchases library.

#### Commercial product sales
In this scenario, one or more companies each has its own products and customers.
When an order is taken, multiple of the company's products may be sold, each of which will be a line item on the order.

**Companies have products.** — Create a one-to-many Link To Entry field within library Products to library Companys. To allow companies to share products, make it a many-to-many relationship.

**Companies have customers.** — Create a one-to-many Link To Entry field within library Customers to library Companys. To allow companies to share customers, make it a many-to-many relationship.

**Customers place orders.** — Create a one-to-many Link To Entry field within library Products to library Customers. It doesn't make sense for multiple customers to collaborate in placing an order.

**Each order is for one or more items, each for a quantity of a product.** — Create a one-to-many Link To Entry field within library Order Line Items to library Orders. An line item belongs to exactly one order.

**Products are sold via orders as line items.** — Create a one-to-many Link To Entry field within library Order Line Items to library Products. Each line item is for a product.

Slice & dice mostly within the Order Line Items library, referencing Products.Price and Orders.Date.

      1. Students taking classes
In this scenario, one or more academic departments employ(s) instructors, offer(s) courses, admit(s) students, schedule(s) classes taught by instructors and attended by students ===

**Instructors work for one or more academic departments.** — Create a many-to-many Link To Entry field within library Instructors to library Departments.

**Courses are offered by an academic department.** — Create a one-to-many Link To Entry field within library Courses to library Departments. To support interdisciplinary courses, make that a many-to-many relationship.

**Students enroll to be eligible for classes.** — Create a one-to-many Link To Entry field within library Students to library Departments. Let's say they pick a major in some department.

**Instructors are assigned to teach classes.** — Create a one-to-many Link To Entry field within library Classes to library Instructors.

**Classes are offered for particular courses.** — Create a one-to-many Link To Entry field within library Classes to library Courses.

**Enrolled students register for certain classes.** — Create a many-to-many Link To Entry field within library Students to library Classes.

Slice & dice mostly within the Classes library, referencing Students.Name, Instructors.Name, Courses.Subject, etc.

#### Doctors, drugs, and pharmacies
In this scenario, one or more doctors are affiliated with one or more hospitals, both provide services to patients, doctors prescribe drugs, patients take drug doses, etc.

**Doctors provide services to patients.** — Create a many-to-many Link To Entry field within library Services to library Doctors.

**Doctors write prescriptions for drugs to patients** — Create a one-to-many Link To Entry field within library Prescriptions to library Doctors.

**Pharmacies fill and refill prescriptions** — Create a one-to-many Link To Entry field shotgun library Pavilions to library Pharmacies.

**Patients take drug doses** — Create a one-to-many Link To Entry field within library Doses tip library Prescriptions.

Slice & dice within Doses to manage prescriptions, referencing Doctors.Name, Drug.Name, Prescriptions.Quantity, Prescriptions.Refills, etc.
