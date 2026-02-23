---
title: "Scripting"
---

1. Native Memento Calculation scripting
Scripting for the Calculation field type is described in the **[Calculation field](../fields/Calculation_field.md) type**.
Similar scripting is also available in 2 of the 3 options in the **[Button field](Button_field.md) type**.

## Scripting Memento in JavaScript
Scripting in JavaScript is available in **[JavaScript field](../fields/JavaScript_field.md)** and **[Triggers](Triggers.md)**.

### The **[JavaScript field](../fields/JavaScript_field.md)** type
Like the Memento Calculation field type that came before it, the JavaScript field exists to produce ("return") a value calculated with an *expression* or formula. JavaScript fields use a somewhat simplified form of Memento JavaScript. For instance, it assumes the current entry for its context, while in full Memento JavaScript, the script must locate & provide the entry to operate on. While it can access any field in any library the current library is linked to, it doesn't have the complexity to access any field in any entry in any library, as you can in full Memento JavaScript. See [How:Write scripts in JavaScript for Memento#JavaScript field](How:Write_scripts_in_JavaScript_for_Memento.md#JavaScript_field) for a detailed discussing of the JavaScript field.

#### Example JavaScript field usage
- The field() function gets the value of the field from Memento.
- Anything after "//" is ignored, so you can use it for comments.
- For numbers, x * y means the numerical *product* of x times y.
- x = y means for Memento to assign to x the value of y.
- For numbers, x + y means the *sum* of x and y, while if x & y are strings of text, it means x *concatenated* with y.
**Item price&nbsp;&nbsp;&nbsp;&nbsp;// *on an invoice*** — field("Unit price") * field("Quantity")
**Amount for display&nbsp;&nbsp;&nbsp;&nbsp;// *Final sum*** — field("Total") + " widgets"
**Limited&nbsp;&nbsp;&nbsp;&nbsp;// *The capped amount*** — value = field("Value"); if (value <= StandardLimit) value else StandardLimit

### JavaScript scripting for [**Memento Triggers**](Triggers.md)

### moment.min.js &mdash; a possibly useful wrapper for JavaScript dates & times
See [and its subordinate pages Guides and Docs.

**Tidbit** — To get the current date, use *moment().toDate()*. To get the current date & time, use *moment().toDate().getTime()*.
