---
title: "Dev: Bill's MJ Tutorials home"
---

1. Bill's Tutorials home
- [Learn Memento JavaScript: The Tutorials](Learn Memento JavaScript: The Tutorials.md)
- [MJT Set 1. How to use a JavaScript field in Memento](MJT Set 1. How to use a JavaScript field in Memento.md)
- [MJT Set 2. How to use JavaScript to develop a Memento Custom Data Source](MJT Set 2. How to use JavaScript to develop a Memento Custom Data Source.md)
- [MJT Set 3. How to use JavaScript to develop a Memento Action](MJT Set 3. How to use JavaScript to develop a Memento Action.md)
- [MJT Set 4. How to use JavaScript to develop a Memento Trigger](MJT Set 4. How to use JavaScript to develop a Memento Trigger.md)
[JGC: Bill's JavaScript Guide Companion home](JGC: Bill's JavaScript Guide Companion home.md)

      1. Captured Nuggets tested by Bill
Here are nuggets captured from the forum that could be used in the development of Wiki tutorials, examples, and other such wiki sections.

      1. Captured Nuggets not yet tested by Bill
Here are nuggets captured from the forum that could be used in the development of Wiki tutorials, examples, and other such wiki sections.

#### Added entry triggers email to the library's owner
From forum member's email Mon, Aug 9, 3:13 PM EDT
	
to UnConnoisseur, MusicBizzer, mementodatabase

Hello,

To send an email you need two things to know:

```

1. Server
(data from Gmail you can find on the web) 
SMTP server name - smtp.gmail.com
SMTP user name - yours
SMTP password - yours
SMTP port - 465
(with Gmail I can't send, so I use my own SMTP, from my site) 

2. Javascript code

var e = entry();
var h = e.field("host"); 
var p = e.field("port");
var u = e.field("user");
var ps = e.field("pass");
var f = e.field("from"); 

var cfg = {"host":h, "port":p, "user":u, "pass":ps, "from":f};

email().send(cfg, "jmruas@jurispro.net" , "Invoice" ,
    "Something"+"
" +
    "Some more"+"
" +
    "etc"+"
" +
    "etc" +"
"+"
" +
    "etc"+
" +
    entry().field('Name') );

```
No need to click" Send". It goes automaticly without opening the email app. 

JMRuas
