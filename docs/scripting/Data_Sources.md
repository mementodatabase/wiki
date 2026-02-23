---
title: "Data Sources"
---

The Autofill facility in Memento allows users to look up information from data sources on the Web, in Memento libraries, or from other data sources. Certain Web data sources are included by default in the Memento application for the convenience of users. For other lookups, a custom data source is needed.

A ***Custom Data Source*** is one in which a script acts as a source of data to fill fields with data from any service that has an API, from other libraries, or from other sources.

## Lifecycle of an Autofill from a custom data source
1. When adding an entry, the user types a search key into a field in the Entry Edit card.
1. The data source script is then executed, with the search key passed in as the global variable *query*.
1. The user is presented with a list of matching objects found by the script.
1. The user chooses one of the objects, and its properties are written to the mapped entry fields according to data load rules.
1. If the script has also returned a function, that script function is then called with the selected object's *id* property as an argument, and when the script function returns the object, now loaded with additional data, the object's new properties are loaded into mapped fields according to data load rules.

## Create a custom data source
### Step 1 &mdash; Add a new custom data source for Autofill
1. Open the Library Edit screen, click on the Autofill tab, and then click **+**.
1. Select the type of search &mdash; By Name or By Barcode.
1. Select "Custom source".
1. Select the field to be used for data search within the source.
1. You are presented with an Autofill Data Load Rules edit card. For each field to be loaded from the data source, enter the object property name that will identify that field. Then, select the field to be loaded from that property.

### Step 2 &mdash; Write the script
The script is executed in the context of either a library or an entry.

It can use the same functions and objects as a trigger.
A script has the same security parameters as a trigger.

The result of the script should be returned as an array object.

See [Scripting Details](#Scripting details) below for details on script writing.

### Step 3 &mdash; Set Autofill data load rules (Map data to fields)
After the script is written, it is necessary to map the properties of the result object to the fields of the library:
1. Close the script edit card and click **+**.
1. This will open the card for creation of Autofill data load rules.
1. Identify each result object property by name, one by one.
1. For each property, select the library field to receive the data.

## Scripting details
### Initial search results/data load
When a search will identify a unique source object, a request for a full set of data from that object can be made.

However, when the search may return several or many matching objects, the user must see these results and select an individual item, and then a full set of data for that item may be requested. This is analogous to the search results page of a Google or other Web search. This information hopefully gives the user enough information to make the decision to choose a single result from among others. Once the user has selected the desired item, a second request can be issued to obtain a full set of data for the individual object.

Given this, the Memento custom data source provides for both scenarios. If the search yields a single matching object, the script may issue another request for a full set of data right away, if necessary, and call the *result()* function with a single argument &mdash; *result(sourceObjects)*. If there are multiple matching objects, the script may return enough information to allow the user to choose the one of interest. Then, a function in the script may be called to fetch a full set of data for the selected object.

To support user selection, the necessary properties of the source object are:
****title**** — the name of the item matching the search key
****desc**** — a brief description of the item for further clarification
****thumb**** — an image thumbnail that can help the user to make that decision
****id**** — a property to identify each object so the script function will know the user selection when the function is called

### Additional data load
To extract all available information for an individual object, an additional source service request is needed. In this case, a function for additional data load should be passed via the *result()* call as a second argument &mdash; *result(sourceObjects, fullFetchFunction)*.

The function call will supply one argument &mdash; *id*, the identifier previously returned for the object selected by the user. The function then returns an object containing a full set of properties, which will be loaded into the fields of the library entry according to Autofill rules.

As an example, let's consider a Web service with an API having two methods:
1. http://api.example.com/search?q='search query' &mdash; This call does a search for an object and returns only identifiers and the names of the items. The result is an array of JSON objects. Each object has *title* and *id* properties.
1. http://api.example.com/get?id=123 &mdash; This call fetches full information from the item based on the id. The result is a JSON object.

Here's an example of a script requesting data from a generic Web service:
```

var jsonResult =
   http().get("http://api.example.com/search?q=" +
   encodeURIComponent(query));
result (
   JSON.parse(jsonResult), 
   function(id) {
      return http().get("http://api.example.com/get?id=" + id);
      });

```

### Data source API
Data source scripts have access to the [Memento JavaScript Library](Memento_JavaScript_Library.md). Data Sources have their own additional API, as follows.

**result(objects, getMoreFunction)** — Function to return the initial result of the script &mdash; an array of objects representing the search results and a function to be called for additional data.
**Arguments**
; objects: List of objects which will be presented to the user for selection
; getMoreFunction: Optional argument &mdash; function to fetch additional data. If present, this function is called after one of the objects is selected.

**Source object** — Objects sent to the result function can have the following standard properties. When present, these properties will be displayed to the user for selection:
**Properties**
; title: Name of the object (required)
; desc: Additional text shown under the name of the object (may be helpful to the user)
; thumb: Reference to the image of the object (may be helpful to the user)
; id: Object identifier (required for additional data). Used if result() is called with a second argument.

### Examples
#### Example &mdash; Fill data from another library
In the following script, replace "AnotherLib" with the name of your source library. Then, on the line fetching the field Number, change "Number" with your field's name in the source library, and change "number" to a single lowercase alphabetic word (a JavaScript property name) to be used to denote that field. Later, when you define your mapping rules, you will map this name to the field name in your receiving library to be filled with the data, so remember it. You'll add equivalent lines for each field you want to fetch.

So, to do this, we edit the receiving library, go to the Autofill tab, and press the **+** button to add a set of Autofill rules and then select whether the search is to be by title or by barcode.

Let's create the script now, so tap the top bar called **script editor** to open the card. Paste the following script into the editor. Then follow the instructions above to make it do what you want. You can test the script by tapping the Play button. The message at the bottom of the card should say something like "Successfully executed script".

```

var anotherLib = libByName(“AnotherLib”);          // Replace with yours
var entries = anotherLib.find(query);
var resultArray = [];
for(var i in entries ) {
   var object = {};
   object[“title”] = entries[i].title;
   object[“desc”] = entries[i].description;
   object[“number”] = entries[i].field(“Number”); // Replace with yours
   resultArray.push(object);
   }
result(resultArray);

```

Press the checkmark to save the script and return to the rules card. Now, for each field you want to receive in your library, press **+** to add a rule. Enter the property name you defined in the script, select the field you want it to go into, and press OK. Do this for each property you want to fill (including title, desc, and thumb, if you want). Then press the checkmark to save and return to the Library Edit screen.

#### Example &mdash; Fill data from a Web data service
Let's consider service http://www.discogs.com/ &mdash; Provides information about music albums. This service has an API documented at http://www.discogs.com/developers.

An example of a JavaScript library that issues a request to this service is available in Memento's script repositories. To connect this library:
1. Open custom data source editor
1. Click **Add JavaScript libraries**
1. Click on tab **Repositories**
1. Select repository ***github.com/mementodatabase/scripts/data-sources***
1. Select ***discogs.js***

Example of using this library:
```

var discogs = new Discogs("Consumer key" ,"Consumer secret" , "release");
var r = discogs.search(query); 
result(r, function(id) {return discogs.extra(id);});

```

- Consumer key and consumer secret are the keys required to execute the request. They may be obtained at http://discogs.com/settings/developers.
- After the script is written, it is necessary to map the object properties to the fields of the library. Available object properties are documented in the discogs API documentation. See an example of a response to a successful request at https://www.discogs.com/developers/#page:database,header:database-release.
- If the search in the data source is done by barcode, use *discogs.barcode(query)* instead of *discogs.search(query)*.
