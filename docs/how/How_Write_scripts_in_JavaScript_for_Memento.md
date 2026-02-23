---
title: "How:Write scripts in JavaScript for Memento"
---

The JavaScript field was the first JavaScript script type to be released. Prior to its introduction, the only way to calculate in Memento was with the Calculation field. With JavaScript there is a vast quantity of types of objects & methods (like:
- arrays & sets
- the ability to design & create **custom object types** with any methods (functions) you like
- variable types (like very large integers, symbols)
- and statements (like conditionals (if...else), **custom function construction** (function) or iteration (do...while), etc).

In short, a JavaScript has a plethora of features that make it tremendously more powerful than the Calculation field that came before it. By limiting yourself to a **core subset** of these features, you can keep the field type **simple to learn & to use**.

## The JavaScript language
JavaScript was originally developed for programming Web sites. Since then, it has also been used as a language embedded within software tools like Memento, most prominently I've called Node.js.

The types of Memento JavaScript scripts are:
- A *JavaScript field* within a library to calculate the values of expressions & formulas, often based on the values of other fields in the library or in other libraries that are linked
- A *trigger* script, with event & phase options to perform custom calculations at certain crucial times, like *before or after saving an entry* or when *a library or a field is opened*

- An *action* script, applying to the current entry or library to perform actions including actions on fields across all libraries in a user's database inundated by the touch or click of a button.
- *Shared* scripts for use by trigger & action scripts to hold standard & often repeated code. The scripts are available to any other script, so you can change it in one place and have the effect in ask other scripts.
- A *custom data source* script to guide source data from sources around the web or within the user's sphere of influence to the appropriate destination fields within the user's database.

## JavaScript field
Like the Memento Calculation field type that game before it, the JavaScript field exists to produce ("return") a value calculated with an *expression*, which is a formula consisting of *constants*, *variables*, *operators*, and possibly *statements*.

#### Sample simple expression scripts
**123** — the value *a hundred and twenty-three*
**"Memento"** — the characters *M e m e n t o* as a string
**2 * currentWeight** — If currentWeight is 23 lbs, then 46 lbs
**(hours * 60) + minutes** — If hours is 5 and minutes is 10, then 310

#### Conditional execution in JavaScript
Deciding to execute one set of statements or another or possibly yet another
based on some condition is referred to as *conditional execution* and forms of it
are known as *alternation*. What one might want to do is:
If something is true, then do these things; otherwise, do those things.
This is referred to as alternation.

if (field("products") == "Orange")
    "Fruit"
else if (field("products") == "Broccoli")
    "Vegetable"
else
    "Empty"
_____

If you read other people's scripts, you might see ...
_____

if (field("products") == "Orange")
    "Fruit";
else if (field("products") == "Broccoli")
    "Vegetable";
else
    "Empty";
_____

That's because Memento tries to keep things simple for us, and semicolons look weird too, and for just an expression, it's not really needed, but when things get more complex, it turns out you need to terminate every statement with a semicolon. That's why professional JavaScript programmers do that. Another similar thing you might see is ...

if (field("products") == "Orange") {
    "Fruit";
}
else if (field("products") == "Broccoli") {
    "Vegetable";
}
else {
    "Empty";
}

The reason for that is that sometimes, when what you're needing to do is a little more complex, you might need to do several things if the produce is an orange, for example, and the way you do that is to use braces at the start & at the end of a block of statements. That's why we call those things blocks. In your case now it's overkill & you don't need it, but it still works if you do, as above.

If you have just a couple more of each type of produce, you can use || which means or. That's or, & for and, you say &&.  If you do a lot of this stuff, it starts to get hard to match up an end parenthesis with its corresponding start parenthesis. In Calculation fields, you have that problem in spades, even with simple stuff (another reason I don't use calc), but it happens in JavaScript too, for somewhat more complex stuff. For example ...
_____

if ((field("products") == "Orange") || (field("products") == "Lemon"))
    "Fruit";
else if ((field("products") == "Broccoli") || (field("products") == "Spinach"))
    "Vegetable";
else
    "Empty";
_____

Repeat the else if line pair as needed.
If you end up doing a lot of them, there's another way to do it that would be more compact & will help with the parentheses ...
_____

// Comment here, to the end of the line, ignored by JavaScript
var produce = field("GrocerySection");  // Replace with your fieldname
switch (expr) {
  case "Orange":
  case "Lemon";
  case "Lime":
  case "Tangerine":
      "Fruit";
      break;
  case "Broccoli":
  case "Brussel sprouts";
  case "Turnips":
  case "Spinach":
      "Vegetable";
      break;
  default:
      "Empty";
}
_____

So, we have one or more cases, then the result, then a command to end the list of cases. I've always thought this (the break) is stupid, but it works, and that's the way they did it, so that's how we have to do it. Then another one or more cases then the result and the break, and on and on. Finally, if it matches none of the kinds of produce, then you can supply the default result by using default in place of case. There can be only one default.

So ...

This message is already quite long, so I won't take you to the next stage of complexity yet, but we use the next form in action scripts a lot & in trigger scripts sometimes too, so if you're interested, give me another shout, and I'll pick up with the next lesson.

#### Sample complex expression script
Before release 4.10.0 on the mobile edition & 1.10.0 on the desktop edition, we had to validate entered data with a script like this one:
```

    // Validate entered value:

    var StdLimit = 100      // Our std for all products

    value = field("Value")  // Fetch value of field
    if (value <= StdLimit)  // If within limit,
      value                 //   Result is the value
    else                    // Otherwise,
      StdLimit              //   Result is the std limit

```

#### Terminology
**Constant** — A value that has a string (text) value or a numeric (number) value.

; String literal: `"This is a string of textual characters"`
; String constant: `Sol` or `PlanetMars`&nbsp;&nbsp;&nbsp;&nbsp;// By convention, constants are distinguished from variables by starting with a capital letter
; Number literal: 123 or 314e-2 or -28.5&nbsp;&nbsp;&nbsp;&nbsp;// The middle one is in scientific format
; Numeric constant: `EverestHeight` or `C**2`&nbsp;&nbsp;&nbsp;&nbsp;// The height in feet of Mount Everest or the speed of light squared
; Symbol constant: A name representing a constant value, like `pi` or `surname`

**Variable** — A name representing a value that may change over time, like `sum`, `currentValue`, or `orderDate`
**Operator** — One or more characters that represent an expression, like `+` for *plus* or `-` for *minus* or `*` for *multiplied by* or `/` for *divided by*.
Some operators are made up of other operators used in combination, like `<=` for *less than or equal to* or `&&` for *and also*. One operator is *3* characters long: `===` means *is equal to & is of the same type as*. JavaScriptd is *loosely typed*, so its types are very general, like Number, String, or Date.

In `x++`, `++` is a *unary* operator.
In `b - 5`, `-` is a *binary* operator.
In `canDrive = age > 16 ? 'yes' : 'no'` &mdash; `?` and `:` are used like `if` & `else` together as the only *ternary* operator in JavaScript &mdash; the *conditional* operator. The `>` is a binary operator that returns *true* or *false*. If the result is true (the age is over 16), then canDrive will be true. If it is false, canDrive will be false. It is good for cases where something is this or else that &mdash; one or the other, plain & simple. Since it is plain & simple, it is (perhaps) appropriate to simplify the conditional as well, with `?` and `:`.

## Shared script
A library can have any number of trigger scripts, of action scripts, & of custom data source scripts. If there are things you do repetitively in scripts, you can put them in a shared script, and they will be available to any other script that runs.

For instance, trigger scripts are the most often used type of script, and in trigger scripts, it is very common and common practice to define a variable e to contain the current Entry object `var e = entry()`. Then, you can say `e.field()` instead of `entry().field()`. This not only saves keystrokes & makes the code more readable, but also runs a bit faster, because the `entry()` function is run only once in the script. This might be the first thing you'd think of to share. Of course, `entry()` is not called at all in *library* action scripts, for instance, so `e` will not be used in such scripts, but it doesn't hurt much at all, so it's OK that the code is shared also to these scripts.

Another powerful category of shared code is the shared function. For instance, consider the following function for shared use:
```

// Function to return a formatted string given the following arguments:
// number: A number of type Number representing an amount of currency, such as a price
// decPlaces: The number of decimal places to which to format the number, defaulting to 2
// decSep: The character to use to separate the integral part of the amount from the
//         decimal fractional part, defaulting to "."
// thouSep:The character to use to separate the factors of one thousand from each other,
//         defaulting to ","

function formatMoney(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSep = typeof decSep === "undefined" ? "." : decSep,
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
}

```

