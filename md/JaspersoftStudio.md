---
title: "JaspersoftStudio"
---

Creating reports with Jaspersoft Studio:
1. Create a new report. Choose Data Adapter- One Empty Record as the Data source.There is no suitable data source for Memento for the time being, you won't get the list of fields or the preview data. 
1. Create fields with the same names as in Memento. Jaspersoft Studio displays report’s fields as children of the Fields node in the document outline view. To create a field, right-click the Fields node and select Create Field. On the field properties tab, select the appropriate field class for the field type in Memento. See the table below.
1. Move the fields to the report area - Detail. 
1. Save the template in a jrxml file
1. Choose this jrxml file when creating the Jasper report in Memento. 

Download Jaspersoft Studio: https://community.jaspersoft.com/project/jaspersoft-studio/releases

Jaspersoft Studio work documentation:  https://community.jaspersoft.com/documentation/tibco-jaspersoft-studio-user-guide/v60/getting-started-jaspersoft-studio

Correspondence of Memento field types and Jasper reports field classes:

| **Memento field type** | **Jasper report field class** |
| --- | --- |
| Integer, Rating | java.lang.Long |
| Real number, Currency, Calculation (Real Result) | java.math.BigDecimal |
| Date, Date/Time, Time | java.util.Date |
| Boolean | java.lang.Boolean |
| Image | java.util.ArrayList |
| Other fields | java.lang.String |
