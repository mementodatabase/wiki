---
title: "Time field"
---

A Time field may contain any time of day.

In Calculation fields, the value used is that used by Unix and Linux systems to represent times, which is the number of seconds since 00:00:00 of the current day. In JavaScript fields, the value used is based on that used by Unix and Linux systems to represent times, but is instead, the number on milliseconds since 00:00:00.000 of the current day.

This value allows time arithmetic to work readily, by merely doing integer arithmetic with the value.

When a time value is interpreted for import, export, or display in hours, minutes, and seconds, the current locale is used. The format for import and export can be specified in program settings.

   1. Advanced Parameters
**Default Value** — By default, there is no default value. Alternatively, the default may be set to the current time as of entry or edit of the field within an entry.

**Time formats** — The format may be specified explicitly. Selecting *Time formats* causes a card to appear in which these properties may be changed:
**Language** — The language/locale may be set.
**Short time** — The user may select among a number of choices for the short form of a time.
**Long time** — The user may select among a number of choices for the long form of a time.

   1. Display Options

**Used in calendar as** — The field may be set to be used as a duration in the calendar.
