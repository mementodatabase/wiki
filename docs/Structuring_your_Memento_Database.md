---
title: "Structuring your Memento Database"
---

If you're just starting with Memento or just starting to use it for something new, it may not be clear to you how to represent your data in Memento to allow the user to get what he/she wants out of it. This article suggests some approaches to consider.

## Structuring simply &mdash; One Main Thing
The simplest use of Memento is to use a single library to represent data about a single subject.

### Simple uses
For instance, you might want to have a To Do list in Memento. As is often the case, it could be anywhere from very simple to pretty complex. Let's start with the very simplest one, so see **[Tutorial:Simple To Do List](Tutorial:Simple_To_Do_List.md)**.

Another simple use would be as a library of recipes. Could you use Memento in a very simple way to catalog your recipes and then look them up later? The easy answer is **yes**. See **[Tutorial:Simple Recipes](Tutorial:Simple_Recipes.md)**.

The key to simplicity is that all information in each library is **about the task or recipe as a whole**. These simple solutions don't try to define details of ingredients, nutrition, projects, or deliverables &mdash; just the Tasks and the Recipes themselves.

### Pages of simple data
If you're keeping a lot of information (many fields) in a library about something &mdash; as often happens with media, like a movie, a song, or a photo &mdash; you can keep the fields on the Entry View & Entry Edit cards organized using Pages. Each page shows as a tab on the cards and holds the fields you've assigned to those pages; otherwise, all fields will show up on the MAIN page.

Pages don't really change the structure of the data; they just provide a potentially nicer way of viewing them. Other ways of affecting the appearance of fields on a page include changing their font (font family, style, size, and color), having them not show on the card, having their appearance be dependent on the value of another field, or showing them on the same line as a preceding field.

### Simple with lists
Fields that can have one or more of several values can be represented as lists (single-choice or multiple-choice), radio buttons, or checkboxes. Integer Values fields are similar. They help in several ways:
- They cut down on the amount of typing.
- They remind the user of the possible values of the field.
- They prevent typos from inadvertently cluttering the library.

What lists do not do is define another level of data structure. Other than list item indentifiers, no further data is introduced. To introduce more data about list items, create a new library for those items and replace the list field with a link to the new library; you have now added an extra level of complexity, but you've also expanded the coverage of your database. So long as each library focuses on a single subject, the increase in complexity will only match the increase in subject matter; it will not outstrip it.

### Using special data
Some field types have special handling, such as barcodes, images, audio clips, and video clips. These field types have special functions, but in terms of data structure, they are simple, like Text and Integer.

### Simple slicing & dicing
Data analysis may be performed on simple libraries. Numeric data can be aggregated; entries may be summarized and grouped by the values of fields, especially list fields; and entries may be filtered and sorted by any field.

## Structuring &mdash; Multiple related things
If you are maintaining data on separate things, then in general, you should keep the data in separate libraries.

### When to use a list vs multiple libraries
If you are keeping only a name of subject, a list will do. If a name is deleted, added, or changed, you will maintain that in the list, within the parent library.

If multiple libraries come to contain the same list (such as a list of nations), then each of the lists must be maintained when a nation is renamed or to be added or removed.

When such maintenance becomes burdensome, or when additional information about each nation is kept, a separate Nations library on the subject is called for. Instead of keeping a list within a parent library, each library to reference Nations will contain links to the Nations library &mdash; **Link to Entry** fields. You will now have a set of linked libraries.

### Master & detail
In some cases, there is a natural master/detail relationship. For example, plumbing installations contain plumbing fixtures, which contain plumbing parts. Assuming information is to be maintained at each level &mdash; with each fixture and part being individually identified &mdash; then three libraries are called for: Installations, Fixtures, and Parts. Parts will contain a one-to-many link to Fixtures and Fixtures a one-to-many link to Installations. If the three levels are to represent **types** &mdash; so, Installation Types, Fixture Types, and Part Types &mdash; the links should be many-to-many, assuming a given part type may work on various fixtures and fixture types may fit into various installation types. If you decide to have both sets of libraries, then each installation should link one-to-many to its installation type and the same for fixture to fixture type and part to part type.

### Groups of libraries
Groups of libraries are analogous to pages of fields, in that they are merely convenience containers and don't alter the structure of a database any more than a page alters the structure of a library.

If you have a set of interrelated libraries, it might make sense to add a group to contain them or perhaps to contain all libraries related to appliances or to homes.

### When more libraries are needed
So, what drives maintaining more libraries is having a real need to keep information about subjects, causing you to keep data in libraries on those subjects.

#### The urge to keep multiple subjects in one library
Many of us have built spreadsheets or flat files with columns for everything we wanted to have handy whenever we pull it up again. While such sheets are very handy, they very easily get out of date, and updating them can be prohibitive. If the main data changes, it makes sense to update it, but when someone changes their name or address or email address or phone number, that ought to be updated everywhere all at once. If you're like me, this kind of sheet may get updated a little bit from time to time, but I can not keep it all up to date all the time, so it lives add a partially accurate bunch of data.

#### One library per subject that contains dependent data
### Structuring for data analysis &mdash; slicing & dicing
## Structuring &mdash; Enhancing your visual presentation
### Fields sharing a card row
### Field fonts & colors
### List items with fonts, colors, and icons
### Using images
## Structuring &mdash; Leveraging the Internet
### Using Autofill
### Using barcodes
---
---

**the casual, perhaps single-library user** — who just wants to throw up a grocery list or recipe repository
**the intermediate user** — who might want to have some related libraries tracking some activities
**the power user** — who might be pushing the boundaries in certain areas, like scripting, complex data structure, retail or barcode solutions, media solutions, contact applications, product catalogs, charting, or others
**the organizational user** — who might need teamwork collaboration, cross-platform compatibility, cloud storage & coordination, library protection, and others

Memento's online catalog of user templates contains thousands of predefined, ready-to-use libraries to use directly or serve as a starting place. It also gives users the opportunity to familiarize themselves with a large number of ways to use Memento to provide solutions.
