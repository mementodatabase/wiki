---
title: "Template:FieldTypeReturnValues"
---

| **Field type** | **JavaScript object** | **Examples** |
| --- | --- | --- |
| Text , Hyperlink, Password, Phone, Email, Barcode, Radio buttons, Single-choice list, Calculation (string result) | [**String**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | "abc" |
| Integer, Real number, Integer values, Rating, Currency, Calculation (number result) | [**Number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | 42, 42.1 |
| Date , DateTime, Time | [**Date**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) |
| Checkbox (Boolean) | [**Boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | true, false |
| Checkboxes, Multiple-choice list | [**Array**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of [**strings**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | ["Shirts", "Pants", "Socks"] |
| Image | [**Array**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of [**strings**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | ["file:///storage/emulated/0/DCIM/image01.png", "file:///storage/emulated/0/DCIM/image02.png"] |
| Link to entry | [**Array**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) of [**entries**](Triggers#Object Entry.md)
Each array element has a method *field()* for access to values of fields of entries of the linked library. Example:
field("localField")[i].field("remoteField") | [e1, e2, e3, ...] |
