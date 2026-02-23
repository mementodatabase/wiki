---
title: "Attributes of linked entries"
---

When creating a Link to Entry field, you can add one or more attributes. An attribute is similar to a field &mdash; it has a name and a type. Attributes are added on the Link to Entry field edit card: Edit Card > Attributes tab.

Attribute values ​​are displayed directly in the Link to Entry field and are filled when a new entry is added to the link.

## Example of using attributes
For example, we have an Items library that contains information about products. Also, we have an Orders library containing information about orders. In the Orders library, there is a Link to Entry field identifying the entries in the Items library that are associated with this order. We can add a numerical attribute Count to the Link to Entry field, which will display the quantity of each type of goods in the order.

## Accessing attributes from scripts
### Triggers and Actions
To get the value of an attribute of a linked entry, you must first obtain the corresponding linked entry through the field(name) method of the Entry object -- for example, entry().field("items"). For a linked entry, the following methods for obtaining the attribute value are available:
- attr(name) and the method for setting the attribute setAttr(name, value).
   - entry().field("field_name")[0].attr("attribute_name")
   - entry().field("field_name")[0].setAttr("attribute_name", newValue)

#### Example of getting the value of the Count attribute in the Items field
// Example of getting the value of the Count attribute in the Items field: 
var count = entry().field("Items")[0].attr("Count");

// Example of setting the value of the Date attribute in the Items: 
entry().field("Items")[0].setAttr(" Date ", new Date());

### JavaScript field
In a JavaScript field, you can only return the value of an attribute using the attr() method of the linked entry:
- field("field_name")[0].attr("attribute_name")

#### Example of a script for retrieving the value of an item added in the Items field
Library Items has a Price field. The Link to Entry field has a Count attribute:
- field("Items")[0].attr("Count") * field("Items")[0].field("Price")

### Access to attributes in a Calculation field
Access to the value of an attribute in a Calculation field is performed using the colon (:):
- #{link field name:attribute name}

#### For example, to access the Count attribute, use the following syntax
- #{items:count}
If the field contains several links to entries, then you can use the index to access the attribute:
- #{items@0:count}, #{items@1:count}

### Aggregation of attributes in a Calculation field
If the Link to Entry field contains several linked entries and each of them has its own attribute value, then one of the aggregation functions can be applied to these attributes. For example, to calculate the sum of all the attributes:
- $sum('link field name:attribute name')

Aggregation functions support pairwise operations between different fields of linked entries and attributes:
// This function multiplies the linked_field_name field of each associated entry by the corresponding attribute_name attribute. 
// The set of numbers obtained after multiplication is summed. 
- $sum('link_field_name.linked_field_name', 'link_field_name:attribute_name', ' @mul')

For example, to calculate the total amount of an order, you can use the formula:
// This formula multiplies the value of the price field of the linked entry in pairs by the value of the attribute count of the linked entry.
// The set of numbers obtained after multiplication is summed. 
- $sum('items.price', 'items:count', '@mul');
