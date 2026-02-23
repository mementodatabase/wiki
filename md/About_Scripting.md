---
title: "About:Scripting"
---

1. Scripting in the Memento application
   1. Native Memento Calculation scripting
The specifications for scripting for the Calculation field type is described in **[Calculation field](Calculation field.md)**.

   1. Scripting Memento in JavaScript
Scripting in JavaScript is available in **[JavaScript field](Spec:JavaScript field.md)**, **[Triggers](Spec:Triggers.md)**, **[Actions](Spec:Actions.md)**, and **[Custom Data Sources](Spec:Custom Data Sources.md)**.

      1. The **[JavaScript field](JavaScript field.md)** type
Like the Memento Calculation field type that came before it, the JavaScript field exists to produce ("return") a value calculated with an *expression* or formula. JavaScript fields use a somewhat simplified form of Memento JavaScript. For instance, it assumes the current entry for its context, while in full Memento JavaScript, the script must locate & provide the entry to operate on. While it can access any field in any library the current library is linked to, it doesn't have the complexity to access any field in any entry in any library, as you can in full Memento JavaScript. See [Write scripts in JavaScript for Memento#JavaScript field](How:Write scripts in JavaScript for Memento#JavaScript field.md) for a detailed discussing of the JavaScript field.

#### Example JavaScript field usage
- The field() function gets the value of the field from Memento.
- Anything after "//" is ignored, so you can use it for comments.
- For numbers, x * y means the numerical *product* of x times y.
- x = y means for Memento to assign to x the value of y.
- For numbers, x + y means the *sum* of x and y, while if x & y are strings of text, it means x *concatenated* with y.
**Item price&nbsp;&nbsp;&nbsp;&nbsp;// *on an invoice*** — field("Unit price") * field("Quantity")
**Amount for display&nbsp;&nbsp;&nbsp;&nbsp;// *Final sum*** — field("Total") + " widgets"
**Limited&nbsp;&nbsp;&nbsp;&nbsp;// *The capped amount*** — value = field("Value"); if (value <= StandardLimit) value else StandardLimit

      1. moment.min.js &mdash; a possibly useful wrapper for JavaScript dates & times
See [http://momentjs.com](https://momentjs.com) and its subordinate pages Guides and Docs.

**Tidbit** — To get the current date, use *moment().toDate()*. To get the current date & time, use *moment().toDate().getTime()*.
