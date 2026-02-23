---
title: "Date field"
---

A Date field may contain any date of the Gregorian calendar.

When a Date field's value is used in a Calculation field, the value used is that used by Unix and Linux systems to represent dates. which is the number of seconds before or since January 1, 1970. When a Date field's value is used in a JavaScript field or in Memento scripts, the value used is based on that used by Unix and Linux systems to represent dates, but is in milliseconds (instead of seconds) before or since January 1, 1970.

This value allows date arithmetic to work readily, by merely doing integer arithmetic with the value.

When a date value is interpreted for import, export, or display in years, months, and days, the current locale is used. The format for import and export can be specified in program settings.

## Advanced Parameters
**Default Value** — By default, there is no default value. Alternatively, the default may be set to the current date as of entry or edit of the field within an entry.

**Date formats** — The format may be specified explicitly. Selecting *Date formats* causes a card to appear in which these properties may be changed:
**Language** — The language/locale may be set.
**Short date** — The user may select among a number of choices for the short form of a date.
**Long date** — The user may select among a number of choices for the long form of a date.

## Display Options
