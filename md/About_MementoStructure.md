---
title: "About:MementoStructure"
---

Like almost all modern apps, Memento is structured inside into 3 layers or tiers.

The ***User Interface layer*** (the **UI layer**) consists of &mdash; on the Mobile edition screens & on the Desktop edition windows &mdash; in either edition with cards (forms), menus, toolbars, buttons, and so on &mdash; to handle interaction with the user.

The ***Scripting layer*** takes action upon user input or other such events, like the opening of a library, the pushing of a button, or the saving of an entry. These events may be handled to some degree by Memento & to another degree by the use of user-written ***scripts***(generally JavaScript scripts).

The ***Database layer*** manages the *storage of & access to data* (or database).

This layer includes the definitions of all libraries, fields (with any aggregations or autofills), entries, links among or relationships between libraries, templates, & filters; it also includes synchronization of local data with data in the Memento cloud &mdash; the partial synchronization of each library with Google Sheets &mdash; which can then be saved to Microsoft Excel files.

**This** synchronization with spreadsheets in Google Drive &mdash; as opposed to that with libraries in the *Memento cloud* &mdash; does not include library links, tag names in Tags fields, item names in Single-Choice List, Radio Buttons, Multiple-Choice List, Checkboxes, nor List fields.

Read about [the relationship between *layers* and *tiers*](About:LayersVsTiers.md).

Move the text below into [About:MementoStructure](About:MementoStructure.md), revising along the way for user comprehensibility.
We may also put some of this into [Doc:TermConfusion](Doc:TermConfusion.md), probably just a tiny summary of it.
---
The architecture of most modern applications is made up of 3 execution *tiers*: The Presentation tier, the Application tier, and the Data tier.

See IBM's definitive article: [**Three-Tier Architecture**](https://www.ibm.com/cloud/learn/three-tier-architecture).

See a BMC Software (a vendor of several sets of applications & services for large-scale computer database systems) blog article called [Architecture: Tier 2, Tier 3, and Multi-Tier Explained**](https://www.bmc.com/blogs/n-tier-architecture-tier-2-tier-3-and-multi-tier-explained/**N-Tier) blog article on database application architecture.

#### Memento terminology in 3-tier application architecture
**Tiers & layers** — Most articles & other literature on application architecture reference 3-*tier* architecture.
These articles have been written for very large systems, like Google or Amazon.
Each of the 3 *layers* will run on its own separate platform on such large-scale systems, so they call it a 3-tier architecture. 
Very small systems that run, say, on your cellphone will have all 3 layers running on your cellphone.
So, don't worry about the difference between application layers & tiers.
In our case, the only time a layer gets spread across tiers is with the Memento Cloud.
There is still a part of the data layer running on your phone, but it communications with the Memento server software in the cloud for the remainder of the data layer.
So other than that, they are equivalent, and when you hear about one, it applies also to the other unless the subject has to do with what device or computer it runs on.
Since we're small, **we'll use the term *layer***.

**Memento's names for the tiers/layers** — The Memento *user interface* layer runs on your device and may be called in articles the *Preseentation* tier or layer.
The Memento *Scripting* layer runs on your device and may be call in articles the *Application* or *Logic* tier or layer.
The Memento *Database* layer runs on your device & on Memento servers when you're using the cloud and may be called in articles the *Data* tier or layer.

__________

      1. The Memento application structure
You generally don't have to concern yourself about Memento's structure. It takes care of everything for you. However, it is important that you know where in the wiki, in Help, or in online or other computer literature to read about the various layers & parts of Memento. So. we'll start with the bottom line, the *simplified summary*, because if you choose to read about this, we'll have you in *tiers* (ha) &mdash; as in the *tiers* of a *3-tier application architecture*. Seriously, the subject is large, but it nevertheless boils down to what's in the following paragraph.

**Simplified summary** — The Memento application has a 3-*layer* structure (effectively the same as a 3-*tier* architecture, which matters because it is how you'll read about it in literature on the subject) that almost entirely runs on your device. In the Memento wiki, we call them...
*The *user interface* layer, which is what you see on the screen & interact with using your fingers or a keyboard & mouse
*The *scripting* layer, running on your device and providing the programming logic to handle the data as you want
*The *database* layer, running mostly on your device & handled without bothering you when your data in the cloud needs to be accessed

To read further about Memento's structure read [here](About:MementoStructure.md).
