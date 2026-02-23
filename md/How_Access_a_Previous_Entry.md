---
title: "How:Access a Previous Entry"
---

Upon occasion, one might want to access a "previous" entry to determine the value of a field in the current entry. For example, a stock trade might reference the immediately preceding trade of that stock to get the price of the trade as the current value of the stock during the next trade.

The reason "previous" is in quotes is that the order of the entries must be carefully considered to determine what entry would be the previous one.

For another example, suppose there is a library containing daily mileage of walks or use of a car or bicycle. Suppose the library has a StartingMileage field and a Mileage field. When an entry is created, the field StartMileage must get data from the field Mileage in the previous entry.

```

// Get current library & array of its entries
var entries = lib().entries();

// Check that the array is not empty;
//   otherwise exit, since there is no previous entry.
if (entries.length > 0) {

  // Assuming the array is sorted by entry creation time, newest to oldest,
  //   the newest entry in the array
  //   is on top with an index of 0.
  prevMileage = entries[0].field("Mileage");       
                                                 
  // Set value of field Mileage
  //   from the previous entry
  //   as default value for field StartMileage.
  entryDefault().set("StartMileage", prevMileage);                                                 
} 

```

If the array cannot be assumed to be in the correct order, provide an ordering function to sort the entries into the order you require.

```

var order = { compare: function(a,b) { return a.field("Mileage") - b.field("Mileage"); }}
entries.sort(order);

```

To sort in descending order, reverse the terms (b-a). Depending on how you sort, the "previous" entry may be entries[0] or entries[entries.length-1].

   1. Use of the Code
The primary place where this code can be used is when creating a new entry. Using the Triggers facility available in mobile editions starting with release 4.0.0 (http://wiki.mementodatabase.com/index.php/Triggers), the trigger script must be set for Event **Creating an entry** Phase **Open the Entry Edit card**. It will run synchronously.
