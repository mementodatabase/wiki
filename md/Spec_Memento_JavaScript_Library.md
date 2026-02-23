---
title: "Spec:Memento JavaScript Library"
---

Memento includes the capability for users to use JavaScript to accomplish complex tasks beyond the capabilities of the normal Memento user interface. Examples include JavaScript fields, Triggers, Actions, and Custom Data Sources. The Memento JavaScript Library may be used to access Memento facilities (by all these except JavaScript fields).

To keep JavaScript fields both easy and safe for users, they may use only a portion of the library, and the nature of its use is simplified. Any limitations or differences related to JavaScript fields will be identified.

   1. Libraries and Entries
      1. *Library* global functions
#### entry()
Get the Entry object of the Event. For example, if the script is triggered by an Update Entry event, this method will return the entry being updated.

This Entry object is a clone of the actual Entry object. If the entry is saved, this object will become the actual one, but if cancel() is called, this entry clone, along with any changes the script may have performed, will be discarded.

This global function is available to all Events and Phases, with the exception of **Creating an entry** &gt; **Opening an Entry Edit card**; for this action, use the global function *entryDefault()*.

**Result** — [***Entry*** object](#Object Entry.md) &mdash; the current entry

#### entryDefault()
Get the Entry object containing the default field values for the entry not yet created. This feature is available specifically and only for the Event **Creating an entry** & Phase **Opening an Entry Edit card**.

**Result** — [***DefaultEntry*** object](#Object DefaultEntry.md)

#### exit()
Stops script execution

#### lib()
Get the library of the triggering event

**Result** — [***Library*** object](#Object Library.md) &mdash; the current library

#### libByName(name)
Find the library by name. Permission to use the library is required, based on security settings.

**Argument** — The name of the library to find

**Result** — [***Library*** object](#Object Library.md) &mdash; the library identified by the argument *name*, if found. Otherwise *null*.

      1. Object *Library*
This object provides access to library entries. You can work with the current library &mdash; the *lib()* &mdash; or any other library in the database &mdash; *libByName()*. This global function provides the ability to update existing entries and create new ones.

#### *Library* methods
##### create(values)
Create a new entry in the library
**Argument**
; values: [***Object***](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) containing the field values
**Result** — [***Entry*** object](#Object entry.md) &mdash; the new entry in the library

##### entries()
Get all the entries of the library
**Result** — Array object containing entries, sorted by the time of their creation, from newest to oldest

##### find(query)
Search field values within entries in the library matching the given query. This search is similar to searching via Memento's user interface.
**Argument**
; query: the search string
**Result** — Array object containing matching entries. Entries are sorted by the time of their creation, from newest to oldest.

##### findById(id)
Search all entries by entry ID.
**Argument**
; id: the ID string uniquely identifying the entry.
**Result** — [***Entry*** object](#Object Entry.md), if found. Otherwise, *null*.

##### findByKey(name)
Search all entries by the entry name. The library must be set for unique entry names.
**Argument**
; name: the Entry name field value(s)
**Result** — an [***Entry*** object](#Object Entry.md), if found. Otherwise, *null*.

##### linksTo(entry)
Get entries in the library that contain a link to the specified entry.
**Arguments**
; entry: An entry to search for links to it.
**Result** — Array object containing entries.

##### show()
Display the library

#### *Library* properties
**name** — The name of the library
**title** — The name of the library

      1. Object *Entry*
This object holds an entry of the current library, allowing the setting of field values

#### *Entry* methods
##### field(name)
Get the value of the named field
**Argument**
; name: name of the field
**Result** — The value of the field. The type of the result depends on the type of the field.

##### link(name, entry)
Add a link &mdash; to a Link to Entry field in the current library &mdash; to an entry in the related library.
**Arguments**
; name: Name of the Link to Entry field to which to add the link
; entry: Entry in the field's related library to which to link

##### recalc()
Recalculate values of entry fields.

##### trash()
Moves an entry into the trash.

##### untrash()
Moves an entry out of the trash.

##### set(name, value)
Set the value of the named field. Calling this method results in immediate writing of the value to the library.

**Note:** In the case where the field to be set is a Link To Entry field, the second argument should be the entry name of the entry to link to. If there are, in that library, multiple fields set as the entry name, the entry name for the set() method is formed by separating the value of those fields by a comma (,) &mdash; not a comma and a space, but only a comma.

**Arguments**
; name: name of the field
; value: the value of the field
- For Multiple-choice List and Checkboxes fields, an array of strings supplies the values.
- For Link to Entry fields, an array of of strings &mdash; each of which may be a comma-separated list of field names &mdash; supplies the entry names of entries to which to link.
- For Link to File fields, an array of path names identifies the files to which to link.

##### show()
Display the entry

##### unlink(name, entry)
Remove a link &mdash; from a Link to Entry field in the current library &mdash; to an entry in the related library.
**Arguments**
; name: Name of the Link to Entry field from which to remove the link
; entry: Entry in the field's related library identifying the link to be removed

#### *Entry* properties
**author** — the id of the user who created the entry
**creationTime** — date & time the entry was created
**deleted** — true, if the entry is deleted (it is in the Recycle Bin)
**description** — entry description
**favorites** — true, if the entry is in Favorites
**id** — entry identifier
**lastModifiedTime** — date & time the entry was last modified
**name** — entry name
**title** — entry name

      1. Object *DefaultEntry*
Template with default values for a new entry. This feature is available specifically and only for the Event **Creating an entry** & Phase **Opening an Entry Edit card**.

#### *DefaultEntry* methods
##### set(name, value)
Set the value of the field

**Arguments**
; name: the name of the field
; value: the value of the field

      1. Library & Entry objects examples
See **[Examples of trigger use](Tips:Examples of trigger use#Libraries examples.md)**.

---

   1. Working with files
With scripts, you can read or write files located in the device's internal memory or on the SD card. All file operations are performed by the *File* object, which is obtained via a global function called *file()*.

To work with the files, the library should have read/write file access.

      1. *File* global functions
#### file(name)
Open a file for read or write operations. If the file with the specified name does not exist yet, it will be created.

**Argument**
; name: The name and the full path to the file. For example, if the file is located on the SD card, the path should be something like /sdcard/example.txt.

**Result** — : [***File*** object](Tips:Examples of trigger use#Object File.md)

      1. Object *File*
This object is returned by the global function *file()* and provides access to the requested file. After reading or writing, the file should be closed using the method *close()*.

#### *File* methods
**close()** — Close the file. It can subsequently be reopened.

**getLineNumber()** — Get the current line number
; Returns: The line number, or position, in the file

**readAll()** — Reads all lines of the file, and then closes the file
; Returns: Array containing the lines of the file

**readChar()** — Reads the next character from the file stream
; Returns: The character

**readLine()** — Reads the next line from the file stream
; Returns: The line

**readLines()** — Reads the remaining lines from the file stream
; Returns: Array containing the remaining lines of the file

**write(text)** — Write string(s). Take a variable number of arguments, converts each argument to a string, and writes that string to the file stream.

**writeLine(text)** — Write strings and a newline to the file stream

#### *File* properties
**exists** — true &mdash; if and only if the file exists; false otherwise
**length** — The length, in bytes, of the file, or 0L if the file does not exist. 

      1. Files examples
See **[Tips:Examples of trigger use#Files examples](Tips:Examples of trigger use#Files examples.md)**.

---

   1. Processing an HTTP request
Scripts can send HTTP requests to Web services through their APIs.
Processing for HTTP requests allows integration between Memento and the system. All file operations use the Http object, which works through global function *http()*.

HTTP requests must fulfill two requirements:
1. Script execution must be **asynchronous**, so HTTP requests go in the last Phase of an Event.
1. The library should have the permission **Network**.

      1. Object *Http*
Interface for processing HTTP requests

#### *Http* methods
##### get(url)
Execute HTTP GET request
**Argument**
; url: HTTP address, starting with http:// or https://
**Result**
; HttpResult: Object containing the result of the execution of the HTTP request

##### post(url, body)
Execute HTTP POST request
**Arguments**
; url: HTTP address, starting with http:// or https://
; body: The text of the HTTP POST request
**Result**
; HttpResult: Object containing the result of the execution of the HTTP request
**Example**
```

var result = http().post("http://httpbin.org/post", "the body of the request message");

```

##### headers(info)
Set up header
**Argument**
; info: Header text
**Result**
; HttpResult: Object containing the result of the execution of the HTTP request
**Example**
```

var http = http();
http.headers({"User-Agent": "My Super App"});   // Set up the header
var result = http.get("http://httpbin.org/get");   // Do a GET
var headerValue = result.header("etag");   // Get response header

```

      1. Object *HttpResult*
Result of the execution of the HTTP request

#### Properties
**body** — The response in text form
**code** — HTTP code of the response, if the request is successful (usually 200).

#### *Method*
##### header(tag)
**Argument**
; tag: ???

      1. Http examples
See [*Http* examples](Tips:Examples of trigger use#Http examples.md).

---

   1. Performing email functions
      1. *Email* global functions
#### email()
Returns the system Email object. Methods of the Email object may be used to send email messages, among other things. See the [***Email*** object](#Object Email.md).

      1. Object *Email*
This object provides methods related to email.

#### *Email* global functions
**send()** — Send an email message based on a provided Smtp configuration object and other arguments.
**Arguments**
; cfg: The EmailConfig object to use for this email message
; to: The email address to which to send the email message
; subject: Text for the "Subject:" line
; message: Body text of the email message

      1. Object *EmailConfig*
#### *EmailConfig* properties
**host** — The SMTP server from which to base email requests

**port** — The UDP port to use for email communications

**user** — The user within the host in whose name to make email requests

**pass** — The password for the user

**from** — The email address for the email "From:" line

      1. Email example
Send an email message in the background
```

// Send email example
// You must use the Object to specify SMTP configuration:
//   SMTP server host, port, username, password, email address

var cfg = {"host" : "smtp.example.com" , "port":25, 
"user":"username" , "pass":"password" , "from":"username@example.com"};
email().send(cfg , "to@email.com" , "Subject" , "Text");

```

   1. Interaction with the system
      1. *System* global functions
#### cancel()
Stop the system operation that caused the event. Many triggers can be a result of an entry manipulation (create, update, delete, etc). The *cancel()* function can be used during the phases that precede the system operation. For example, this function can be used during data validation before the entry is saved.

#### guid()
Generates random text identifier
**Result** — Random string identifier

#### intent(action)
Create an information exchange object &mdash; Intent. This function can send a request for action to another application.
This function is available only on Android.
**Argument**
; action: Line that defines standard action (eg, view, pick)
**Result** — [***Intent*** object](#Object Intent.md) &mdash; Information exchange object
After the object is received, the data will be added to it, and then sent via *send()*.
Android has many built-in actions. A list of these actions can be found [**here**](https://developer.android.com/reference/android/content/Intent.html).

#### log(text)
Write a line to the log file
**Argument**
; text: text to be written to the log

#### message(text)
Shows the user a brief notification
**Argument**
; text: Text of the notification

#### system()
Obtain information about the system
**Result** — [***System*** object](#Object System.md)

      1. Object *System*
This object contains information about the system.

#### *System* global functions
**exit()** — End script execution

#### *System* properties
**os** — Name of the operating system executing the script

      1. Object *Intent*
Information exchange object. This object is created by using the global function *intent()*.

#### *Intent* methods
##### data(uri)
Define URI to reference the data
**Argument**
; uri: URI referencing data to which the action will be applied. It can be contact ID, path to the file, phone number, etc.

##### extra(key, value)
Define additional data as key-value pairs, as necessary for execution of the required action. Similar to how URI data can be required for certain actions, other actions may require extra data in this format.
**Arguments**
; key: key for additional data item
; value: value of additional data item

##### extraLong(key, value)
Define additional data as key-value pairs, where data type needs to be Long
**Arguments**
; key: key for additional data item
; value: value of additional data item

##### mimeType(mime)
Define MIME type of the data
**Argument**
; mime: MIME type of the data on which the operation will be performed

##### send()
Send a message

      1. System examples
See [***System*** examples](Tips:Examples of trigger use#System examples.md).

---

   1. Built-in objects for certain Memento field types
      1. Object *JSContact*
This object contains the information stored within a Contact field and provides properties and methods for use in accessing and manipulating this information.

When an Entry object's field() method is called, if the Memento field type is Contact, a JSContact object is returned.

If the Contact field contains multiple contacts, use *hasNext* and *next* to retrieve them.

#### JSContact methods
**call()** — If the device is a phone, calls the primary phone number of this contact

**sendEmail(subject, message)** — Sends an email message to the primary email address of this contact, with subject ***subject*** and message ***message*** (text string)

**sendSMS(message)** — If the device is a phone, sends the provided ***message*** (text string) as an SMS message to the primary phone number of this contact

**show()** — Opens the Contacts app for this contact

#### JSContact properties
**email** — The primary email address of this contact

**fullName** — The full name of this contact

**hasNext** — Returns TRUE if there is a next JSContact object, otherwise FALSE

**next** — Returns the next JSContact object, if there is one.

**phone** — The primary phone number of this contact

      1. Object *JSGeolocation*
This object contains the information stored within a Location field and provides properties and methods for use in accessing and manipulating this information.

When an Entry object's field() method is called, if the Memento field type is Location, a JSGeolocation object is returned.

If the Location field contains multiple locations, use *hasNext* and *next* to retrieve them.

#### JSGeolocation properties
**address** — Address for this Location

**hasNext** — Returns TRUE if there is a next JSGeolocation object, otherwise FALSE

**lat** — Latitude, as a Real

**lng** — Longitude, as a Real

**next** — Returns the next JSGeolocation object, if there is one. 

      1. Built-in Objects examples
See [Examples of *built-in* object use](Tips:Examples of trigger use#Examples of built-in object use.md).

---

   1. See also
**Actions** — [Memento *Actions*](Spec:Actions.md)
**Triggers** — [Memento *Triggers*](Spec:Triggers.md)
**Data sources** — [Memento *Data Sources*](Spec:Data Sources.md)
**Examples of trigger use** — [Examples of trigger use](Spec:Examples of trigger use.md)
**Tips for using JavaScript in Memento** — [Tips for using JavaScript in Memento](Tips:Using JavaScript in Memento.md)

      1. JavaScript links

---
