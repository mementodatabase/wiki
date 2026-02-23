---
title: "Calculation field"
---

The values in Calculation fields are calculated from the expressions specified by you in Memento Script, defined herein.

The following types of expressions are supported:
**Numeric** — Expressions involving numbers
**String** — Strings can also be added together, compared, etc
**Boolean** — Expressions that evaluate to true (1.0) and false (0.0)

Numeric and string types can not be mixed in a left / right operand pair. 

   1. Result type
For each calculation, there must be a correct result type set:
**Real result and Integer result** — are used for expressions with a numerical result

**Date/Time result** — is used to represent the result in the form of date and time. The calculation result is interpreted as the number of seconds that has passed since January 1, 1970 (UNIX time).

**Date result** — is the same as the previous type, but displays only the date

**String result** — is used for expressions that contain string manipulations or functions that return a string

   1. Field value references and other variables
The values of other fields in the same entry and fields in linked libraries may be referenced by enclosing them within a hash mark and open brace **#{** and a closed brace **}**. Other values can be referenced in similar fashion, such as the number of fields in an entry. These constitute read-only variables. For example, consider the following expression:

```

#{field name 1} + #{library 2.field name 2}

```

String values must be enclosed by single-quote (apostrophe) characters:

```

'Result: ' + '#{string field 1}' + '#{string field 2}'

```

Field references may be typed into the Expression area, or they may be inserted by pressing the **+Field** button and selecting from among the fields listed.

Values of variables cannot be changed by the Calculation field.

   1. Operators
The following operators are supported:
| **Symbol** | **Operator** | **Description** |
| --- | --- | --- |
| **(**
**)** | open parenthesis
closed parenthesis | Grouping
Group together a subexpression within an outer expression
Example: **(**subexpression 1**)** + **(**subexpression 2**)** |
| **-**
**+** | minus
plus | Unary number
Example: **-**5 or **+**10 |
| **+**
**-** | addition
subtraction | Binary
Example: #{a} **+** #{b} **-** 1 |
| *****
**/** | multiplication
division | Binary
Example: 6 **/** (8 ***** 13) |
| **%** | modulo | Binary, integer remainder after division
Example: #{months} **%** 12 |
| **==**
**!=**
**<**
**<=**
**>**
**>=** | equal
not equal
less
less or equal
greater
greater or equal | Binary, relational
Example: if( #{count} **<=** #{max} , #{count} , #{max} ) |
| **&&**
** | ** | and
or | Binary, for TRUE and FALSE (Boolean)
Example: if( #{Done} ** | ** ( #{Able} **&&** #{Trying} ) , 'Raise' , 'No raise' ) |
| **!** | not | Unary, for TRUE or FALSE (Boolean)
Example: if( **!** #{Done} , 'Work' , 'Relax' ) |

   1. Functions
Functions are available to assist in crafting expressions to calculate a final result. Function calls may be typed into the expression, or the user may use the **+Function** button to display a tabbed list of functions that may be used.
**Note** — The rest of this section documents the available functions. However, while the functions may be better explained here, it may be incomplete or even incorrect. The menus of available functions within Memento when using the **+Function** button are quite useful and will always be more recently updated than what is documented here.

      1. Math functions
Unless otherwise specified, all numbers are *real* numbers.

| **Function** | **Arguments** | **Returns** |
| --- | --- | --- |
| **abs** | *number* | Absolute value of *number* |
| **acos** | *radians* | Arc cosine of the angle |
| **asin** | *radians* | Arc sine of the angle |
| **atan** | *radians* | Arc tangent of the angle |
| **atan2** | *x, y* | Arc tangent of an angle, given its rectangular coordinates |
| **ceil** | *number* | Ceiling value of *number* |
| **cos** | *radians* | Cosine of the angle |
| **exp** | *integer* | Exponential number *e* raised to the power of *integer* |
| **floor** | *number* | Floor value of *number* |
| **log** | *number* | Natural logarithm (base *e*) of *number* |
| **max** | *number1, number2* | The maximum value of *number1* & *number2* |
| **min** | *number1, number2* | The minimum value of *number1* and *number2* |
| **pow** | *number, integer* | *number* raised to the power of *integer* |
| **rint** | *real* | *real* adjusted to the closest integer, returned as a *real* |
| **round** | *real* | Closest *integer* to *real* |
| **sin** | *radians* | Sine of the angle |
| **sqrt** | *number* | Square root of *number* |
| **tan** | *radians* | Tangent of the angle |
| **toDegrees** | *radians* | Angle in degrees |
| **toRadians** | *degrees* | Angle in radians |

      1. Date/Time Functions
| **Function** | **Arguments** | **Returns** |
| --- | --- | --- |
| **datediff** | *date1, date2* | Number of days between the 2 dates (*date2* - *date1*) |
| **dateadd**
4 arguments | *date,
intervalDays,
intervalMonths,
intervalYears* | *date* incremented by the date interval |
| **dateadd**
7 arguments | *date,
intervalSeconds,
intervalMinutes,
intervalHours,
intervalDays,
intervalMonths,
intervalYears* | *date* incremented by the time interval |
| **formatDate** | *seconds* | Equivalent date string (seconds since start of Jan 1 1970) |
| **formatDateTime** | *seconds* | Equivalent date/time string (seconds since start of Jan 1 1970) |
| **formatTime** | *seconds* | Equivalent time string (seconds since start of Jan 1 1970) |
| **now** |  | The current time in seconds since the start of Jan 1 1970
Uses Universal Time (UTC) regardless of local settings or time zone |
| **relativeTimeStr** | *startTime* | String describing the elapsed time since the given start time |
| **formatDuration** | *seconds* | Duration as a string formatted as MM:SS or H:MM:SS |
| **formatDurationText** | *seconds* | Formats a duration in a human-readable form like "2 hours 15 minutes" or "45 seconds". Accepts two arguments: seconds and optional precision — one of "second", "minute", "hour", or "day" (default: "second"). |

      1. String functions
Regarding string functions, an ***index*** is the relative number of a character within the string. The first string character has index 0 (zero).

| **Function** | **Arguments** | **Returns** |
| --- | --- | --- |
| **numToStr** | *number* | String representation of *number* |
| **compareTo** | *string1,
string2* | Zero, if the strings are equal
 A negative number, if *string1* < *string2*
 A positive number, if *string1* > *string2* |
| **compareToIgnoreCase** | *string1,
string2* | Zero, if the strings are equal (ignoring case)
 A negative number, if *string1* < *string2* (ignoring case)
 A positive number, if *string1* > *string2* (ignoring case) |
| **concat** | *string1,
string2* | String of *string2* appended to the end of *string1* |
```

concat(#{name}, ', Jr.')

```
| **endsWith** | *string1,
string2* | TRUE (1.0), if *string1* ends with *string2*
 FALSE (0.0), if it doesn't |
| **equals** | *string1,
string2* | TRUE (1.0), if the strings are identical
 FALSE (0.0), if not |
| **equalsIgnoreCase** | *string1,
string2* | TRUE (1.0), if the strings are identical (ignoring case)
 FALSE (0.0), if not |
| **indexOf** | *string1,
string2,
index* | Within *string1* from *index* to the end, the index of the next occurrence of *string2*
-1, if no more occurrences |
```

next = indexOf(#{Description}, ' and ', next)

```
| **length** | * string* | Length of (number of characters in) *string* |
| **replace** | *string,
char1,
char2* | String of *string* with all matching *char1*s replaced with *char2*s |
```

replace(#{Description}, ';', '.')

```
| **startsWith** | *string1,
string2,
index* | TRUE (1.0), if *string1*, starting at position *index*, starts with *string2*
 FALSE (0.0), if it doesn't |
| **substring** | *string,
startIndex,
endIndex* | The substring of *string* that starts at *startIndex* and ends at *endIndex* |
| **toLowerCase** | *string* | The string *string* with all uppercase characters converted to lowercase |
| **toUpperCase** | *string* | The string *string* with all lowercase characters converted to uppercase |
| **trim** | *string* | The string *string* with all "white space" (blanks, tabs, etc) removed from both ends |

      1. Logical functions
| **Function** | **Arguments** | **Returns** |
| --- | --- | --- |
| **if** | *expression,
valueIfTrue,
valueIfFalse* | One value if a logical expression is TRUE (not equal to 0.0)
and another if it is FALSE (equal to 0.0)
Read it as "If *expression* is true, then *valueIfTrue*, else *valueIfFalse*" |
```

if(#{remaining} == 0, 'Done', 'Incomplete')

```
| **switch** | *expression,
valueResultPairs,
defaultResult* | 1+(2*#pairs)+1 arguments
The final result based on matching *expression* against the paired **values** to identify the paired **result** (or else *defaultResult*) to be used |
```

switch(#{count},
  1, 'One',
  2, 'Two',
  'Many')

```

   1. Accessing values of linked library entries
Use the following syntax to get access to the values of Link to Entry and other linking fields:

```

#{link field name.linked field name}

```

where ***link field name*** is the name of a Link to Entry field, ***linked field name*** is the name of a field of a related entry.

You can select a field, including one from a related library, using the **+Field** button.

If a link field contains several links, then use an index (starting from zero) to get access to them:

```

#{link field name@0.linked field name}, #{link field name@1.linked field name}, … 

```

You can specify one of the supported aggregation functions instead of the index:

```

#{link field name@sum.linked field name}

```

This expression returns the sum of values of field **linked field name** for all entries included into **link field name**. The functions supported are: **sum**, **avg**, **min**, and **max**.

Use the following syntax to get the number of entries in the library referenced by **link field name**:

```

#{link field name@size}

```

      1. Link example: Parents and children
Parents contains fields Name and Age. Children has fields Name and Parents (link to entry (many-to-many)).

Add field "Average parent age" (calculation, real, scale 1) to Children and select the related field from the **+Field** list: parents.age. Then insert "@avg", making it:
```
#{parents@avg.age}
```

      1. Link example: Orders of products
Products has fields SKU, Description, and Price. Orders has fields #, Date, Customer (link to entry (one-to-many)), and Products (link to entry (many-to-many)).

Add field "Total" (calculation, real, scale 2) to Orders and select the related field from the **+Field** list: products.price. Then insert "@sum", making it:
```
#{products@sum.price}
```

**Note:** This example points out a deficiency in using a many-to-many relationship for orders of products (or of services). One would hope to associate a quantity for each product ordered, but that requirement cannot be met with this 3-library technique. So, in real life, order solutions generally involve 4 libraries: Customers, Products, Orders, and Order Items. The quantity can reside in Order Items.

   1. Examples
#### Example: Single-operator expression
Entries contain fields: Price, Count

We add a Calculation field Sum by using the following expression:
```

#{Price} * #{Count}

```

#### Example: Percentage
Entries contain fields: Count, Total

We add a Calculation field Percentage by using the following expression:
```

(#{Count } / #{ Total }) * 100

```

#### Example: Duration
Entries contain fields: StartDateTime, EndDateTime

We add a Calculation field Duration by using the following expression (result is the number of seconds):
```

#{EndDateTime} - #{StartDateTime}

```

#### Example: Days
Entries contain fields: StartDate, EndDate

We add a Calculation field Days by using the following expression:
```

datediff(#{StartDate}, #{EndDate})

```

#### Example: Days left
Entries contain field: Time

We add a Calculation field Days Left by using the following expression:
```

if( #{Time} > now() , rint((#{Time} - now())/(60*60*24)) , 'in the past' )

```

#### Example: References
There’s a library Order containing orders and a library Item containing items. Library Order contains a link to library Item and a numeric field Count.
Library Item contains field Price.

To calculate the cost of the order, add Calculation field Sum using the following formula: 
```

#{count} * #{item.price}

```

If an order can make a reference to several different items, their total cost can be calculated:
```

#{item@sum.price}

```

The most expensive item:
```

#{item@max.price}

```

The cheapest item:
```

#{item@min.price}

```

The average price for the item:
```

#{item@avg.price}

```

   1. Aggregation functions in Calculation fields
Aggregation functions are used to process multiple values ​​of fields of linked entries and return one value.

```

// This function returns the sum of values
//    ​​of the field called linked_field_name for all entries
//    included in link_field_name.

$sum('link_field_name.linked_field_name')

```

Aggregation functions can be used with multiple field of a linked entry. In this case, a pairing operation is specified, which will be applied to the fields before the main aggregation function is applied.
```

// This function first multiplies the field1 and field2 fields
//    of the linked entry of the link_field_name field.
// After that the resulting set of numbers is summed.
// The pairwise operation, in this case, is multiplication: '@mul'

$sum('link_field_name.field1', 'link_field_name.field2', '@mul')

```

Note that the function parameters are specified in single quotes.

| **Function** | **Arguments** | **Returns** |
| --- | --- | --- |
| $sum | fields, operation (optional, used if multiple argument fields are specified) | fields &{mdash;} the identifier of the field or attribute of the linked entry in the format: 'link_field_name.linked_field_name' |

where link_field_name is the name of a Link to Entry field.

where linked_field_name is the name of a field of a linked entry.

If multiple attributes are received from the linked entries, the paired operation is performed before the summation takes place. The function returns the summation. The type of paired operation is defined by the last argument of the function operation(). The type of paired operation is determined by the last argument of the function operation()and can be one of the following:
- '@mul' - multiplication of fields (attributes).
- '@add' - addition of fields (attributes).
- '@sub' - subtraction of fields (attributes) from the field specified first.
- '@div' is the division of the fields (attributes) into the field specified first.

The operation() argument is optional. If it is not specified, then the multiplication operation is used as a default.
| $avg | fields, operation | This function returns the average of values of field linked_field_name for all entries included into link_field_name. |
| $min | fields, operation | This function returns the minimum of values of field linked_field_name for all entries included into link_field_name. |
| $max | fields, operation | This function returns the maximum of values of field linked_field_name for all entries included into link_field_name. |

   1. Advanced Parameters
**Thousands separators** — If the chosen result type is Integer or Real, use spaces as separators to break the value into thousands. By default, it will not.

   1. Display Options

**Use in Calendar as** — None / Duration, mins / Duration, hours

   1. Comparison with using a Memento JavaScript field
Using a JavaScript field instead of a Calculation field is slightly more involved, due to the fact that unlike a Calculation field, as of this writing, there is no provision to look up a list of JavaScript functions and include them by selection from the list. The other differences are minor.

Whereas in a Calculation field, the value of another field in the library can be referenced by:

`#{fieldname}`

In a JavaScript field, the same reference would be:

`field(fieldname)`

So, a script to multiply two fields, such as quantity and price, instead of `#{quantity} * #{price}, you would have field("quantity") * field("price")`

      1. Calling functions
The essential remaining difference is the functions that are available, the way general functions are called, and the way functions specific to the field's type (referred to as the type's methods) are called.

In JavaScript, there are two kinds of functions. The first is just like Calculation field functions, except that JavaScript has its own generally different functions to do the same things. For example, to return the maximum of two fields in a Calculation field would be `max(#{field1},#{field2}`, while in JavaScript, you would have `Math.max(field("field1"), field("field2"))`.

Then there are unary JavaScript functions that are specific to the type of field. These functions may be called in this same way, such as `Math.round(field("field1"))`. In JavaScript, there is an alternate way to specify it, which can come in very handy in some cases, and that is `field("field1").round()`. When written this way, `round()` is referred to as a method rather than as a function. The distinction is minor. It is essentially the same as a function, except for the way it is written.

      1. Operators in Memento JavaScript
The following operators are supported:
| **Symbol** | **Operator** | **Description** |
| --- | --- | --- |
| **(**
**)** | open parenthesis
closed parenthesis | Grouping
Group together a subexpression within an outer expression
Example: **(**subexpression 1**)** + **(**subexpression 2**)** |
| **-**
**+** | minus
plus | Unary number
Example: **-**5 or **+**10 |
| **+**
**-** | addition
subtraction | Binary
Example: #{a} **+** #{b} **-** 1 |
| *****
**/** | multiplication
division | Binary
Example: 6 **/** (8 ***** 13) |
| **%** | modulo | Binary, integer remainder after division
Example: #{months} **%** 12 |
| **==**
**!=**
**<**
**<=**
**>**
**>=** | equal
not equal
less
less or equal
greater
greater or equal | Binary, relational
Example: if( field("count") **<=** field("max") , field("count") , field("max") ) |
| **&&**
** | ** | and
or | Binary, for TRUE and FALSE (Boolean)
Example: if( field("Done") ** | ** ( field("Able") **&&** field("Trying") ) , 'Raise' , 'No raise' ) |
| **!** | not | Unary, for TRUE or FALSE (Boolean)
Example: if( **!** field("Done") ) 'Work' else 'Relax' ) |

      1. Functions and methods of Memento JavaScript
Functions are available to assist in crafting expressions to calculate a final result. Function calls may be typed into the expression, or the user may use the **+Function** button to display a tabbed list of functions that may be used.
**Note** — The rest of this section documents the available functions. However, while the functions may be better explained here, it may be incomplete or even incorrect. The menus of available functions within Memento when using the **+Function** button are quite useful and will always be more recently updated than what is documented here.

      1. Math functions
Unless otherwise specified, all numbers are *real* numbers. As a general case, when the table refers to a variable, a field value reference may be used instead, such as `field(fieldname)` or `field("MyField")`.

| **Function** | **Arguments** | **Returns** | **Function example** | **Method example** |
| --- | --- | --- | --- | --- |
| `**abs**` | *number* | Absolute value of *number* | `Math.abs(delta)` | `delta.abs()` |
| `**acos**` | *radians* | Arc cosine of the angle |
| `**asin**` | *radians* | Arc sine of the angle |
| `**atan**` | *radians* | Arc tangent of the angle |
| `**atan2**` | *x, y* | Arc tangent of an angle, given its rectangular coordinates |
| `**ceil**` | *number* | Ceiling value of *number* |
| `**cos**` | *radians* | Cosine of the angle |
| `**exp**` | *integer* | Exponential number *e* raised to the power of *integer* |
| `**floor**` | *number* | Floor value of *number* |
| `**log**` | *number* | Natural logarithm (base *e*) of *number* |
| `**max**` | *number1, number2* | The maximum value of *number1* & *number2* |
| `**min**` | *number1, number2* | The minimum value of *number1* and *number2* |
| `**pow**` | *number, integer* | *number* raised to the power of *integer* |
| `**rint**` | *real* | *real* adjusted to the closest integer, returned as a *real* |
| `**round**` | *real* | Closest *integer* to *real* |
| `**sin**` | *radians* | Sine of the angle |
| `**sqrt**` | *number* | Square root of *number* |
| `**tan**` | *radians* | Tangent of the angle |
| `**toDegrees**` | *radians* | Angle in degrees |
| `**toRadians**` | *degrees* | Angle in radians |

      1. Date/Time Functions
| **Function** | **Arguments** | **Returns** |
| --- | --- | --- |
| **datediff** | *date1, date2* | Number of days between the 2 dates (*date2* - *date1*) |
| **dateadd**
4 arguments | *date,
intervalDays,
intervalMonths,
intervalYears* | *date* incremented by the date interval |
| **dateadd**
7 arguments | *date,
intervalSeconds,
intervalMinutes,
intervalHours,
intervalDays,
intervalMonths,
intervalYears* | *date* incremented by the time interval |
| **formatDate** | *seconds* | Equivalent date string (seconds since start of Jan 1 1970) |
| **formatDateTime** | *seconds* | Equivalent date/time string (seconds since start of Jan 1 1970) |
| **formatTime** | *seconds* | Equivalent time string (seconds since start of Jan 1 1970) |
| **now** |  | The current time in seconds since the start of Jan 1 1970
Uses Universal Time (UTC) regardless of local settings or time zone |
| **relativeTimeStr** | *startTime* | String describing the elapsed time since the given start time |
| **formatDuration** | *seconds* | Duration as a string formatted as MM:SS or H:MM:SS |

      1. String functions
Regarding string functions, an ***index*** is the relative number of a character within the string. The first string character has index 0 (zero).

| **Function** | **Arguments** | **Returns** |
| --- | --- | --- |
| **numToStr** | *number* | String representation of *number* |
| **compareTo** | *string1,
string2* | Zero, if the strings are equal
 A negative number, if *string1* < *string2*
 A positive number, if *string1* > *string2* |
| **compareToIgnoreCase** | *string1,
string2* | Zero, if the strings are equal (ignoring case)
 A negative number, if *string1* < *string2* (ignoring case)
 A positive number, if *string1* > *string2* (ignoring case) |
| **concat** | *string1,
string2* | String of *string2* appended to the end of *string1* |
```

concat(#{name}, ', Jr.')

```
| **endsWith** | *string1,
string2* | TRUE (1.0), if *string1* ends with *string2*
 FALSE (0.0), if it doesn't |
| **equals** | *string1,
string2* | TRUE (1.0), if the strings are identical
 FALSE (0.0), if not |
| **equalsIgnoreCase** | *string1,
string2* | TRUE (1.0), if the strings are identical (ignoring case)
 FALSE (0.0), if not |
| **indexOf** | *string1,
string2,
index* | Within *string1* from *index* to the end, the index of the next occurrence of *string2*
-1, if no more occurrences |
```

next = indexOf(#{Description}, ' and ', next)

```
| **length** | * string* | Length of (number of characters in) *string* |
| **replace** | *string,
char1,
char2* | String of *string* with all matching *char1*s replaced with *char2*s |
```

replace(#{Description}, ';', '.')

```
| **startsWith** | *string1,
string2,
index* | TRUE (1.0), if *string1*, starting at position *index*, starts with *string2*
 FALSE (0.0), if it doesn't |
| **substring** | *string,
startIndex,
endIndex* | The substring of *string* that starts at *startIndex* and ends at *endIndex* |
| **toLowerCase** | *string* | The string *string* with all uppercase characters converted to lowercase |
| **toUpperCase** | *string* | The string *string* with all lowercase characters converted to uppercase |
| **trim** | *string* | The string *string* with all "white space" (blanks, tabs, etc) removed from both ends |

      1. Logical functions
| **Function** | **Arguments** | **Returns** |
| --- | --- | --- |
| **if** | *expression,
valueIfTrue,
valueIfFalse* | One value if a logical expression is TRUE (not equal to 0.0)
and another if it is FALSE (equal to 0.0)
Read it as "If *expression* is true, then *valueIfTrue*, else *valueIfFalse*" |
```

if(#{remaining} == 0, 'Done', 'Incomplete')

```
| **switch** | *expression,
valueResultPairs,
defaultResult* | 1+(2*#pairs)+1 arguments
The final result based on matching *expression* against the paired **values** to identify the paired **result** (or else *defaultResult*) to be used |
```

switch(#{count},
  1, 'One',
  2, 'Two',
  'Many')

```
