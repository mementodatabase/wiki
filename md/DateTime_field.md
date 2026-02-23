---
title: "DateTime field"
---

A DateTime field may contain any date of the Gregorian calendar and the time of day.

When a DateTime field's value is used in a Calculation field, the value used is that used by Unix and Linux systems to represent dates & times, which is the number of seconds before or since January 1, 1970. When a DateTime field's value is used in a JavaScript field or in Memento scripts, the value used is based on that used by Unix and Linux systems to represent dates & times, but is in milliseconds (instead of seconds) before or since January 1, 1970. Moments in time prior to that are negative numbers.

This value allows date/time arithmetic to work readily, by merely doing integer arithmetic with the value.

When a DateTime value is interpreted for import, export, or display in years, months, days, hours, minutes, and seconds, the current locale is used. The format for import and export can be specified in program settings.

A reminder may be set during field edit. It sets a reminder using the device's reminder notification mechanism. The value of the reminder does not appear in the data.

   1. Advanced Parameters
**Default Value** — By default, there is no default value. Alternatively, the default may be set to the current date and time as of entry or edit of the field within an entry.

**Date and time formats** — The format may be specified explicitly. Selecting *Date and time formats* causes a card to appear in which these properties may be changed:
**Language** — The language/locale may be set.
**Short date** — The user may select among a number of choices for the short form of a date.
**Long date** — The user may select among a number of choices for the long form of a date.
**Short time** — The user may select among a number of choices for the short form of a time.
**Long time** — The user may select among a number of choices for the long form of a time.

   1. Display Options

**Use in calendar as** — The field's value may be used as a start or end time in the calendar.
