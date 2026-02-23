---
title: "Doc: Templates"
---

MediaWiki templates are used in the Memento wiki for 3 reasons.
1. Once you become familiar with a template, it will generally make its job extremely easy as compared to entering the text again on every page.
1. Whenever a change to a template's standardized text is required, the change can be made once in the template, and all wiki pages that use the template will automatically be used from then on.
1. The job of a template is to include standardized test into a wiki page. This standardization keeps the wiki consistent and correct.

Some templates are merely standard boilerplate and are the same every time they are used. An example of this is BannerMenu. The banner menu is the banner menu. There are no options or parameters.

Other templates may consist of standard text that has the ability for the page author to provide one or more parameters that enable different pages to include the same standard text except for substitution of the parameter(s). An example is PageTitle, which provides for 1 parameter, which is the title of the page. Using the template allows the positioning and the formatting of the title text to be standardized, while allowing the page author the ability to name each page according to its content.

(Note that the **name** by which the page is called in the wiki is one thing (like Spec: Integer field), whereas the page **title** is the text to be displayed at the top of the page, which will generally differ to some degree (like **The Integer field type**).)

See [| WikiMedia Templates Help](https://m.mediawiki.org/wiki/Help:Templates) for instruction regarding templates.

   1. Stamps
Stamps identify for readers as of what date and what version of Memento the page applies.

**Stamp** — This is the most common, standard way to begin a new Memento wiki page. There are 4 possible arguments, though the last argument has a default value and usually need not be explicitly provided in the invocation of the template.
**Argument 1** — This is a space for the author to enter the date as of which the page is current. The date's standard format is yy-mm-dd.
**Argument 2** — This is a space for the author to enter the Memento **mobile** edition release number as of which the page's content is current. The format is typically x.y.z, but they may be in x.y format.
**Argument 3** — This is a space for the author to enter the Memento desktop edition release number as of which the page's content is current. The format is typically x.y.z, but they may be in x.y format.
**Argument 4 (optional)** — Instead of default value of "Page ", the author may provide a custom string of text to display at the front of the stamp.

**StampM or StampD** — In either of these cases, the stamp indicates a page that is specific to either the mobile (StampM) or desktop (StampD) edition, so only that edition's release number is shown.
**Argument 1** — This is a space for the author to enter the date as of which the page is current. The date's standard format is yy-mm-dd.
**Argument 2** — This is a space for the author to enter either the Memento **mobile** edition release number or the Memento **desktop** edition release number as of which the page's content is current, as appropriate. The format is typically x.y.z, but it may be in x.y format.
**Argument 3 (optional)** — Instead of default value of "Page ", the author may provide a custom string of text to display at the front of the stamp.

   1. Banner menus
Wiki pages now contain a standard banner menu at the top of every page for quick navigation to sections of the Main page and to sections within the navigation index for those who already know where they want to go without having to scroll to it. There could be drop-down submenus to get to further detail within each link in the banner menu. This was just starting to be implemented when I started to flake out. Whether to continue to provide then and how do to do it is for discussion among the team.

**BannerMenu** — a simple template without any parameters to show the banner menu at this spot in the wiki.

**BannerMenuAbout** — Submenu for About topics. No parameters.

**BannerMenuGettingStarted** — Submenu for Getting Started topics. No parameters.

**BannerMenuIndices** — Submenu for direct access to index topics. No parameters or could have a parameter for the topic to access.

**BannerMenuSupport** — Submenu for Support topics. No parameters.

   1. Page titles
**PageTitle** — Title of the page as seen by readers. 1 argument.
**Argument 1** — The title.

**PageSubtitle** — Subtitle for the page as seen by readers. 1 argument.
**Argument 1** — The subtitle.

   1. Notes
Some Note templates compose a convenient way to insert a brightly visible, standard format note that either user readers or authors can readily see.

**NoteLine** — Insert a single-line note in a standard way. 1 argument.
**Argument 1** — The one-line note.

**BeginNote** — Start a multi-line note. Works with EndNote. No arguments.
**Argument 1** — The note.

**EndNote** — Terminate a multi-line note. Works with BeginNote. No arguments.

The NoteTo templates were never used and may not be a good idea. I think they can deleted without consequence. We never got accustomed to using Talk pages, and we basically never got to coordinating at all, sadly. I'll list them here anyway, though.

**NoteTo** — Note to a specific individual or audience. 2 arguments.
**Argument 1** — The audience.
**Argument 2** — The note.

**NoteToAdmins** — Note to what is now called the WikiTeam. 1 argument.
**Argument 1** — The note.

**NoteToAll** — Note to readers, authors, and admins/WikiTeam. 1 argument.
**Argument 1** — The note.

**NoteToAuthors** — Note to authors. This assumed we would have page authors overseen by the admins, which would be WikiTeam. The thought at the time was to open authorship to the entire forum or whomever of them would volunteer. That never happened. 1 argument.
**Argument 1** — The note.

**NoteToSelf** — Note to self. Sky idea and neither used not needed. 1 argument.
**Argument 1** — The note.

   1. To Be Done (TBD)
**TBD** — x
**TBD Above** — x
**TBD Below** — x

   1. Categories
**Categories** — x
**Categories1** — x
**Categories2** — x
**Categories3** — x
**Categories4** — x

   1. Field definition paragraphs
**FieldDataValidationBase** — x
**FieldDataValidationDate** — x
**FieldDataValidationNumeric** — x
**FieldDataValidationText** — x
**FieldDataValidationWrap** — x
**FieldDepend** — x
**FieldFont** — x
**FieldFontCard** — x
**FieldNameHint** — x
**FieldOnCard** — x
**FieldRequired** — x
**FieldRoleRND** — x
**FieldRoleRNDS** — x
**FieldRoleRT** — x
**FieldTypeReturnValues** — x
**FieldWhereEdit** — x
