---
title: "Script Widgets"
---

*Requires Memento Database 5.0 or newer*

**Script widgets** are a powerful feature in Memento Database that allow you to execute custom **JavaScript code ** and display the result in a widget on your dashboard. These widgets contain a script that is executed before the widget is displayed and also after all refreshes of a dashboard. The result of this script as a string will be displayed in the widget. A script may consist of multiple operations, but only the result of the last operaion will be displayed. Also, you can use a limited amount of HTML tags to format the text that is displayed.

To **add a script widget** to your dashboard, simply click on the **Add Widget** menu item and then select **Script** from the available options. Once you have added the widget, you can then start writing your **JavaScript code**.

In script widgets, you can use all the methods and objects that are available for [Triggers](Triggers.md) and [Actions](Actions.md) in Memento Database. Scripts run in the context of the library, just like actions for the library. You can find more information about these methods and objects in the Memento Database wiki.

In addition, Memento Database now provides a [new JavaScript Library](Memento_JavaScript_UI.md) that allows you to create interfaces for your scripts in widgets. This library provides a simple way to build custom user interfaces that can be used to display data and interact with users. To learn more about this library, you can refer to the [Memento JavaScript UI](Memento_JavaScript_UI.md) for detailed documentation and examples.

In summary, script widgets in Memento Database provide a powerful way to execute custom JavaScript code and display the result in a widget on your dashboard. With the ability to use all the available methods and objects, as well as the new JavaScript library for creating interfaces, the possibilities are endless.
