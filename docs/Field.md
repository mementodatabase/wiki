---
title: "Field"
---

Fields are the primary elements of a library's structure. A field is a holder (container) for a unit of data, or value. Every field has a [***type***](Field_Type.md), a ***name***, and a ***hint***. Fields may also have advanced parameters or display options, depending on the type of the field.

Field names are case-insensitive and may contain spaces. (ie:  "My Field Name", "MyfieldName")  In theory, any string of UTF-8 characters can make up a field name, though in practice, certain limitations may apply, such as using periods, percents, or at signs ('.', '%', or '@', My@FieldName) which may become problematic during expression evaluation in **[Calculation](fields/Calculation_field.md)** and **[JavaScript fields](fields/JavaScript_field.md)** and likely also in **[trigger scripts](scripting/Triggers.md)**.  ***Note:**  Programs that do not distinguish between uppercase and lowercase are said to be case-insensitive.

[thumbnail|left](File:FieldOrder.jpg.md) 
[thumbnail|right](File:FieldHint.jpg.md)

The sequence of fields within the library is significant. The order in which the fields are displayed on the ***[Field Edit card](ui/Field_Edit_card.md)*** is based on their order within the **Fields** tab in the library.

Fields are created and edited during the editing of a library.

Field hints will be displayed in the field during editing to prompt the user for what to type.
