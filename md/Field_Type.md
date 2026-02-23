---
title: "Field Type"
---

Each field has a specific type. The type determines how a field appears and behaves, what form of data is stored, how it is stored, and how it is displayed and formatted for external destinations during export or synchronization.

Fields of all types have the following parameters:
**Name** — Textual, case-insensitive field identifier that can include spaces
**Hint** — Textual prompt for field data entry

   1. Field Types
A field may have any of the following types.

      1. Text fields
Text fields are containers for text in a library

**[Text](Text field.md)** — Basic container for textual data
**[Rich Text](Rich Text field.md)** — Container for formatted textual data

      1. Number fields
Number fields can be incremented, decremented, used in calculations, used as arguments to mathematical functions, such as in aggregation, etc.

**[Integer](Integer field.md)** — Container for a positive, negative, or zero integer value. Can indicate units of measure.
**[Real number](Real number field.md)** — Container for a rational number value. Can indicate units of measure.
**[ Currency](Currency field.md)** — Container for an international currency value
**[Integer values](Integer values field.md)** — An alternate container for an integer value

      1. Date and time fields
**[Date](Date field.md)** — Container for a calendar date value
**[Time](Time field.md)** — Container for a time value
**[DateTime](DateTime field.md)** — Container for a date/time value

      1. Credential fields
**[Password](Password field.md)** — Container for a password value

      1. Media fields
**[Image](Image field.md)** — Container for image data
**[Audio](Audio field.md)** — Container for audio data

      1. Logicals and list fields
**[ Checkbox (Boolean)](Boolean field.md)** — : Container for a single true/false value

**[Single-choice List](Single-choice List field.md)** — : Container for a string of text selected from a list of strings

**[Radio Buttons](Radio Buttons field.md)** — : Container for a string of text selected from a list of strings

**[Multiple-choice List](Multiple-choice List field.md)** — : Container for a string that is a concatenation of text strings selected from a list of strings

**[Checkboxes](Checkboxes field.md)** — Container for a string that is a concatenation of text strings selected from a list of strings

      1. Link fields
**[Link To Entry](Link To Entry field.md)** — Link to an entry of a specified library
**[Link To File](Link To File field.md)** — Container for the textual link to a file of a platform file system
**[Hyperlink](Hyperlink field.md)** — Container for a textual Internet link

      1. Scripting fields
**[Calculation](Calculation field.md)** — Container for the result of a calculation expression written in Memento Script
**[JavaScript](JavaScript field.md)** — Container for the result of a calculation script written in JavaScript

      1. Contact fields
**[Contact](Contact field.md)** — Container for a contact
**[Phone number](Phone Number field.md)** — Container for a string representation of a telephone number
**[Email address](Email Address field.md)** — Container for a string representation of an email address
**[Signature](Signature field.md)** — Container for a signature

      1. Miscellaneous fields
**[Barcode](Barcode field.md)** — Container for a barcode
**[Location](Location field.md)** — Container for a geographic location
**[Rating](Rating field.md)** — Container for a rating
