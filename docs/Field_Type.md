---
title: "Field Type"
---

Each field has a specific type. The type determines how a field appears and behaves, what form of data is stored, how it is stored, and how it is displayed and formatted for external destinations during export or synchronization.

Fields of all types have the following parameters:
**Name** — Textual, case-insensitive field identifier that can include spaces
**Hint** — Textual prompt for field data entry

## Field Types
A field may have any of the following types.

### Text fields
Text fields are containers for text in a library

**[Text](fields/Text_field.md)** — Basic container for textual data
**[Rich Text](fields/Rich_Text_field.md)** — Container for formatted textual data

### Number fields
Number fields can be incremented, decremented, used in calculations, used as arguments to mathematical functions, such as in aggregation, etc.

**[Integer](fields/Integer_field.md)** — Container for a positive, negative, or zero integer value. Can indicate units of measure.
**[Real number](fields/Real_number_field.md)** — Container for a rational number value. Can indicate units of measure.
**[ Currency](fields/Currency_field.md)** — Container for an international currency value
**[Integer values](fields/Integer_values_field.md)** — An alternate container for an integer value

### Date and time fields
**[Date](fields/Date_field.md)** — Container for a calendar date value
**[Time](fields/Time_field.md)** — Container for a time value
**[DateTime](fields/DateTime_field.md)** — Container for a date/time value

### Credential fields
**[Password](fields/Password_field.md)** — Container for a password value

### Media fields
**[Image](fields/Image_field.md)** — Container for image data
**[Audio](fields/Audio_field.md)** — Container for audio data

### Logicals and list fields
**[ Checkbox (Boolean)](fields/Boolean_field.md)** — : Container for a single true/false value

**[Single-choice List](fields/Single-choice_List_field.md)** — : Container for a string of text selected from a list of strings

**[Radio Buttons](fields/Radio_Buttons_field.md)** — : Container for a string of text selected from a list of strings

**[Multiple-choice List](fields/Multiple-choice_List_field.md)** — : Container for a string that is a concatenation of text strings selected from a list of strings

**[Checkboxes](fields/Checkboxes_field.md)** — Container for a string that is a concatenation of text strings selected from a list of strings

### Link fields
**[Link To Entry](fields/Link_To_Entry_field.md)** — Link to an entry of a specified library
**[Link To File](fields/Link_To_File_field.md)** — Container for the textual link to a file of a platform file system
**[Hyperlink](fields/Hyperlink_field.md)** — Container for a textual Internet link

### Scripting fields
**[Calculation](fields/Calculation_field.md)** — Container for the result of a calculation expression written in Memento Script
**[JavaScript](fields/JavaScript_field.md)** — Container for the result of a calculation script written in JavaScript

### Contact fields
**[Contact](fields/Contact_field.md)** — Container for a contact
**[Phone number](fields/Phone_Number_field.md)** — Container for a string representation of a telephone number
**[Email address](fields/Email_Address_field.md)** — Container for a string representation of an email address
**[Signature](fields/Signature_field.md)** — Container for a signature

### Miscellaneous fields
**[Barcode](fields/Barcode_field.md)** — Container for a barcode
**[Location](fields/Location_field.md)** — Container for a geographic location
**[Rating](fields/Rating_field.md)** — Container for a rating
