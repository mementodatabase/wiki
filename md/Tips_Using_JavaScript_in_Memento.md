---
title: "Tips:Using JavaScript in Memento"
---

These are tips & techniques for using JavaScript for expressions in JavaScript fields and for scripts in triggers.

   1. Field tips
Tips for calling *field()* for various field types.

      1. Simple fields
Fields that function as JavaScript type String, Number, Boolean, and Date operate in a direct manner. For example:
| **JavaScript field** |
| --- |
| ``` |

field("linkedLib.integerField")*100

```
| **Trigger script** |
| --- |
| ``` |

entry().set("percent", entry().field("linkedLib.integerField")*100);

```

#### Date & Time fields
JavaScript Date & time functions expect & return time **in milliseconds**. This differs from Calculation fields, which use seconds.

Also, Memento includes an optional JavaScript library **moment.js** that provides flexible formatting of dates and times. For a summary of this library, see [**http://momentjs.com**](https://momentjs.com). For extensive details, see [**http://momentjs.com/docs**](https://momentjs.com/docs). Skip over the first section "Where to Use It".
 Note that the particular library included in Memento at this time is called moment.min.js.

Also, see **[Date field](Date field.md)**, **[DateTime field](DateTime field.md)**, or **[Time field](Time field.md)** for general information about the Memento user interface for dates & times.

      1. Multiple-choice fields
The *field()* function returns an array of selected items from multiple-choice (Checkboxes & Multiple-choice list) fields. Therefore, if a comma-separated list of selections is desired for the result of a JavaScript field expression, it is necessary to fetch the items from the array and combine them into a string, separated by commas. This is easily done with the array method *join()*.
#### Getting a comma-separated list of checked items from a multiple-choice field
| **JavaScript field** |
| --- |
| ``` |

field("Menu Choices").join()

```

This solution is needed for trigger scripts that want to use such a comma-separated string, such as for the *set()* method of the Entry object.
| **Trigger script** |
| --- |
| ``` |

entry().set("menuSelections"), entry().field("remoteLibrary.menuChoices").join());

```

#### Handling checked items individually
If the trigger script needs to handle each of the choices individually, it can be done as follows:
| **Trigger script** |
| --- |
| ``` |

var e = entry(), items = e.field("remoteLibrary.menuChoices");
for (var item in items) {
    // Handle each item (items[item]) here
    }

```

      1. Link to Entry fields
The Link to Entry field has its own structure, unique among the field types.

#### Using *field()* to access the value of local and remote field values
**Argument**
1. The name of the field whose value you want
'''Returns
An array of Entry objects.

To access fields in the linked library, use:
| **JavaScript field** |
| --- |
| ``` |

var links = field("Link field name");
if (links.length > 0) {
    var name = field(links[0].field("Name");
    // Put your code to handle name here
    }

```
| **Trigger** |
| --- |
| ``` |

var e = entry(), links = e.field("Link field name");
if (links.length > 0) {
    var name = e.field(links[0].field("Name"));
    // Put your code to handle name here
    }

```

#### Using *set()* in a trigger to set the value of a local field
**Arguments**
1. Name of the field whose value is to be set
1. Comma-separated list of Entry Names

To set a link field to point to an entry of another library and set another link field to point to two entries, use:
| **Trigger** |
| --- |
| ``` |

var e = entry();
e.set("First link", "InterOpera Group");
e.set("Second link", "Mozilla,Google");

```

#### To copy a link's value to another link
- The remote library must be set to use unique Entry Names.
- Both links must point to the same library
| **Trigger** |
| --- |
| ``` |

var e = entry(),
    library = "Software firms",
    from = "First link",
    to = "Second link",
    lib = libByName(library);
if (lib != null) {
    // Copy the link
    var entryNames = [],
        entries = e.field(from);
    for (var i in entries)
        entryNames.push(entries[i].title);
    e.set(to, entryNames.join());
    }

```

   1. How Trigger & JavaScript field scripts differ
You'll notice in this page that the code for JavaScript fields and that for triggers are very similar, but also that they different. Here's how they are different:
      1. Context
- Context is set for you in a JavaScript field, and that context is the current entry. So, if you call *field()*, that implicitly invokes the *field()* function on the current entry.
- Context is not set in a trigger, so only global functions are initially available, and using those, you can set up context for functions you want to call on the objects you're interested in.
| **JavaScript field** |
| --- |
| ``` |

field("Fraction") * 100

```
| **Trigger** |
| --- |
| ``` |

var e = entry(), lib = lib();
message("Library " + lib.title + ", entry " + e.title);

```

      1. Semicolons
In JavaScript, the use of semicolons is theoretically optional. In practice, however, without their use, problems arise in certain cases, and it is strongly recommended to use them to guarantee clarity and correctness.

However, if you aren't sure about such things, you can omit them, and most of the time there will be no consequences, particularly in the case of JavaScript fields, in which the requirement is only to state about expression. Most JavaScript fields are just one or two lines long, so the need for statement terminators is minimal.

Trigger scripts are straight JavaScript, so the code should obey strict JavaScript rules, including statement terminators.

   1. General JavaScript Tips
      1. JavaScript Coding Style Guidelines
[TBD](TBD.md)

      1. JavaScript Best Practices
[TBD](TBD.md)

      1. Common JavaScript Coding Errors
Probably the most common coding error is using = (assignment, as to a variable) in an if statement when == (a test for equality) is intended.

      1. Links
[JavaScript field](JavaScript field.md), [Triggers](Triggers.md), [Trigger Examples](Trigger Examples.md)
