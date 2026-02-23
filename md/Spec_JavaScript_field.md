---
title: "Spec:JavaScript field"
---

The value of the field will be the result of execution of the script defined in the field and executed in the entry context.

**[JavaScript 1.7](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/1.7)** is used for scripts. The current version supports only core methods of the language.

A script may consist of multiple operations, but only the result of the last operation will be entered into the field. For example:
```

var i = 1 + 1  // Result would be 2, if this were the final statement,
i + 1          //   but instead, this is the final statement, so the result will be 3

```

   1. Script
**Script itself** — JavaScript script. The context of the script is the [**Entry object**](Triggers#Object Entry.md). The value returned is the last value assigned or expressed.

**JavaScript Libraries** — Choose additional JavaScript Libraries to be loaded. At this time, only moment.min.js is available.

**Execute script in real time** — :; No (default)
Script will run only upon edit. Performance will be enhanced.
**Yes** — : Script will run upon edit or display.

   1. Display Options

   1. Fields of an entry
Function [***field("fieldName")***](Triggers#field(name).md) is used to get access to the values of entry fields.
The type of the JavaScript object returned by the function depends on the field type.

Compatibility of Memento field types and JavaScript objects is shown in the table:

   1. Time of script execution
A script can be executed both when an entry is created or changed and when it is displayed.

The time of script execution is set by the toggle button *Execute script real time* on the field edit screen.
It is reasonable to enable this option if your script contains functions that depend on the current time.
Online execution in case of a large number of entries can significantly increase the time required to open the library.

   1. Functions to work with the date
You can enable the integrated library [**moment.js**](https://momentjs.com/) to work with the date and time. Click ***JavaScript Libraries*** and choose ***moment.min.js***.

Some examples. If an entry contains the field Date whose value is 18 March 2016 14:55

**Example of date formats**
```

moment(field('Date')).format('MMMMM Do YYYYY')      // March 18th 2016
moment(field('Date')).format('dddd')                // Friday
moment(field('Date')).format('dddd [Escaped] YYYY') // Friday Escaped 2016
moment(field('Date')).format('HH:mm')               // 14:55

```

**Example of relative time**
```

moment(field('Date')).fromNow()                     // 11 minutes ago
moment(field('Date')).startOf('day').fromNow()      // 15 hours ago

```

**Example of calendar time**
```

moment(field('Date')).calendar()                    // Today at 2:55 PM
moment(field('Date')).add(1 , 'days').calendar()    // Tomorrow at 2:55 PM

```

More information about library features on **[## Examples
#### Example: Product
The library contains the fields Price and Count.
The JavaScript field **Total price** can be computed as follows:
```

field('Price')*field('Count');

```

#### Example: Percentage
The library contains the fields Count and Total.
The JavaScript field **Percentage** can be computed as follows:
```

var total = field('Total');
if (total > 0)
   field('Count')*100/total + ' %';
else
   'None';

```

#### Example: Days
The library contains DateTime (or Time) fields Start and End.
The JavaScript field **Days** can be computed as follows:
```

moment(field('End')).diff(field('Start') , 'days');

```

#### Example: Birthday
We have a birthday field. If a person is younger than 18 years old, we want to display the string "youth", otherwise the string "adult".
```

var years = moment().diff(field('Birthday') , 'years' )
if (years < 18)
   'Youth';
else
   'Adult';

```

      1. Examples of calculations on linked entries
If you have a many-to-many Link To Entry field &mdash; linking the current entry to zero or more entries in another library &mdash; and if you have an amount field in that other library, you may want to perform calculations on that field across those entries, in similar fashion to Memento aggregation functions.

#### Example: Sum of linked amounts
```

var amountField = "Amount";        // CHANGE Amount to your amount field name
var linkedEntries = field("Them"); // CHANGE Them to your link field name
var numLE = linkedEntries.length;  // The number of linked entries

// Loop through linked entries, creating the sum
for (var lex = 0, result = 0; lex < numLE; lex++)
    result += linkedEntries[lex](https://momentjs.com]**).field(amountField);

result;                            // The result is the SUM

```

#### Example: Average of linked amounts
```

var amountField = "Amount";        // CHANGE Amount to your amount field name
var linkedEntries = field("Them"); // CHANGE Them to your link field name
var numLE = linkedEntries.length;  // The number of linked entries

// Loop through linked entries, creating the sum
for (var lex = 0, result = 0; lex < numLE; lex++)
    result += linkedEntries[lex].field(amountField);

if (numLE != 0)
    result / numLE;                // The result is the AVERAGE

```

#### Example: Minimum of linked amounts
```

var amountField = "Amount";        // CHANGE Amount to your amount field name
var linkedEntries = field("Them"); // CHANGE Them to your link field name
var numLE = linkedEntries.length;  // The number of linked entries
var temp;

// Loop through linked entries, finding the MINIMUM
for (var lex = 0, result = 0; lex < numLE; lex++) {
    temp = linkedEntries[lex].field(amountField);
    if (temp < result)
        result = temp;
    }

result;                            // The result is the MINIMUM

```

#### Example: Maximum of linked amounts
```

var amountField = "Amount";        // CHANGE Amount to your amount field name
var linkedEntries = field("Them"); // CHANGE Them to your link field name
var numLE = linkedEntries.length;  // The number of linked entries
var temp;

// Loop through linked entries, finding the MAXIMUM
for (var lex = 0, result = 0; lex < numLE; lex++) {
    temp = linkedEntries[lex].field(amountField);
    if (temp > result)
        result = temp;
    }

result;                            // The result is the MAXIMUM

```

#### Example: Order containing items
The library Orders contains orders and the library Items contains items. Orders contains a link Items to library Items. Items contains the fields Quantity and Price.
To calculate the cost of the order, the JavaScript field **Cost** can be computed as follows:
```

var items = field('Items');        // CHANGE Items to your link field name
var cost = 0;
for (var i in items)
    cost += items[i].field('Quantity') * items[i].field('Price');

cost;                              // The result is the COMPUTED COST

```

#### Example: Controlling entry color
The color of an entry in the Entries List screen can be controlled using a JavaScript field. The JavaScript field merely returns a color string in the form "#RRGGBB", where RR is the hexadecimal (hex) value of the red component of the color, GG the hex value for the green component, and BB the hex value of the blue component. The user must identify the JavaScript field by editing the library and selecting the field for the Entry color parameter on the MAIN tab.

You could have many entries with distinct colors indicating things like regions, categories, ranges, etc.

For example, suppose you have an numeric field and want to color entries red if the field is negative and green if it is positive. Here's how you would do it...

Create a JavaScript field, called anything, say "Color of entry". Maybe you have a Currency field called "Amount". You can set the script to be something like...

```

var amount = field("Amount");
if (amount < 0) "#FF0000";      // Red
else if (amount > 0) "#00FF00"; // Green

```

Now, go to the MAIN tab of the Library Edit screen. Tap Entry color and select your new JavaScript field, Color of entry.

So, if your Amount field is negative, it will show in the entries list with a red bar on the left.
If it is positive, it'll show with a green bar on the left.
Otherwise it's zero, in which case it will have no bar on the left (barcolor dictated by the theme you're using -- white if you're using the light theme and black if using the dark theme).

   1. References
You can find a full description of the language [**here**](https://developer.mozilla.org/docs/Web/JavaScript).
The implementation is based on the [**Rhino library**](https://www.mozilla.org/rhino/).

   1. JavaScript links
