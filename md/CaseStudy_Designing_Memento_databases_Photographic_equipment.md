---
title: "CaseStudy:Designing Memento databases:Photographic equipment"
---

1. Case Study: An initial photographic equipment database
In this study, we set out to create a barebones design & implementation of a database for a photographic equipment inventory for an amateur photographer or for a solo or very small professional photographic enterprise.
Our idea is to design a barebones but extensible database that will initially consist of a single library and will be able to grow to support several interrelated, linked libraries.

   1. Nomenclature
Before we begin, let's ensure we have an agreed understanding of the terminology we'll use in this study. In Memento, our terminology varies from other [DBMS](Glossary#DBMS.md) disciplines, notably *relational* DBMSes (or [RDBMSes](Glossary#RDBMS.md)). The following table shows the equivalencies between them:
| **Memento** | **Relational** | **Definition** |
| --- | --- | --- |
| [Database](Glossary#Database.md) | Database | A generic term meaning the base of all interrelated data regarding a person's pursuit, an application, or a subject area. |
| [Library](Glossary#Library.md) | [Table](Glossary#Table.md) | Entries & fields or rows & columns of data |
| [Field](Glossary#Field.md) | Field (or [Column](Glossary#Column.md)) | A typed data item occupying a position within a library or table |
| [Entry](Glossary#Entry.md) | [Record](Glossary#Record.md)
(or [row)](Glossary#Row.md) | An instance or occurrence of data across fields or columns |
| [Entry name](Glossary#Entry name.md) | [Primary key](Glossary#Primary key.md) | The field or ordered set of fields (Column or ordered set of columns) that identify an entry or record |
| [Link to entry](Glossary#Link to entry.md) | [SQL](Glossary#SQL.md) | The means by which libraries or tables are related to each other |

**Requirements (the need)** — :;Intro:
**Design considerations** — Initial camera/lens/filter&hood, flash, tripod, bag/strap
**Solution** — :;Intro:
**Design** — ::;Screenshots: See the 5 email attachments
**Implementation** — ::;Intro:
