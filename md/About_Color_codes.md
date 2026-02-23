---
title: "About:Color codes"
---

Memento uses color codes within libraries to allow users to identify their preferred colors for the entry color & background color of entries in the list. Not that the entry color is not the foreground color of text of test in the list. Instead, it is a color shown as an accent at some point in the entry in the list.

On the mobile edition, the entry color shows as the left edge of the entry in the list.

On the desktop edition, the entry color shows as 

These can be set within Edit Library, accessed within the main menu within the library.

From the entries list, tap the 3-dot (kabob) menu button in the upper-right corner and tap Edit Library to enter Edit Library. The FIELDS tab will be selected by default, so tap the MAIN tab to get to Library Settings. The bottom two settings are **Entry color** (which implies the foreground color of the text) and **Entry background color**. These settings are by default set to **None**, in which case the operating system's color mode (or theme) setting is used, which is most often black on white for **Light** mode & white on black for **Dark** mode. To set them to the colors you want, create a field to contain the color value you want, one for the foreground color & one for the background color.

A color field may be a choice field or a JavaScript field. A choice field is one of the following:
- An SCL (Single-Choice List) field
- An MCL (Multiple-Choice List) 
- A Radio Buttons field
- A checkboxes field
- A JavaScript field

The values for the choice items should be Internet color codes as described below. The typical script for a JavaScript color field would be something like...
```

     if (field("Status") == "Due")
        "#00FF00"    // Green
else if (field("Status") == "Overdue")
        "#FF0000"    // Red
else
        "#000000"    // Black

```

Desktop-specific user interface specifications.

Keep in mind that dark mode is newer than the traditional light mode, and certain color combinations may not display the way you expect in dark mode Read below about Internet color codes to get the best info on them, but one quick rule of thumb is that black, blue, purple, red, and green foreground colors display well on either white or black backgrounds -- other colors (like yellow on white) not so much. If you want to use other background colors, read about Internet color codes very carefully.

   1. Use only certain field types to indicate your entry color choices
Each entry that should be displayed in colors that are not the default should contain a field that indicates the colors to be used to display that entry in the list.

   1. Internet color codes
Memento employs the standard Internet color code to indicate colors. 

      1. Colors & their codes
You may already know about red, green, & blue (RGB) and how using them together tells your TV, LED light bulb -- in addition to color temperature in that case -- and Internet browsers what color to display.  Memento JavaScript uses these RGB codes to determine the colors to be used for entries in a list, for choices (items) in a menu, and so on.  After the hashtag (#), the rest of the code is a set of 3 two-character codes in a row (so 6 characters following the hashtag). The codes represent red, green, and blue, so with two-character color abbreviations, you'd have #ReGrBl. All other colors are determined by the specific combination of red, green, and blue colors that make up the color you want. For instance, when all 3 colors are the same as each other, the colors are in the gray scale, from black to white.

      1. Base 16 (hexadecimal) numbers for colors
The code for each color is determined by how luminescent it is.  Do you remember radix arithmetic from school?  Radix (or base) 10 is for decimal values (0-9), base 2 for binary values (0-1), etc. Next most common are the bases that computers use in addition to binary. 2 binary digits in a row can represent values from 0-3, 3 digits show 0-7, 4 digits 0-15, and to represent colors for the Internet, we need to represent 256 colors, 0-255. For 256 colors, we'd need that many characters, but we don't have that many characters in our alphabet, so we use 2 characters for the color. Base 16 numbers can represent that 16 values, and 2 in a row, will give us 256 values (what we need) and they fit in a byte of storage, too! Recapping, if each digit took 4 bits & represent values 0-15, we can use a single character to make up those values if only we could represent all 16 values in the 4 bits. So, we use the 10 decimal digits 0-9 and then start with A to represent 10-15, so A-F are the characters we need to represent one hexadecimal digit. To get to 256 -- with base 16 arithmetic (we can say hex for short), 16 times 16 gives us the 256 we need. So that would be hex 11 (1*16+1), and if A is 10, then B is 11, so 11 represents 16+1=17. Using # to indicate a numeric value is in hex is an Internet standard (for HTML, CSS, etc).

      1. Making hex digits into colors
There are 256 levels of luminosity for each color (0-255). The code for Black is #000000 -- none of any of the colors, so black. The code for White is #FFFFFF, 255 for each of red, green, & blue. Halfway from 0-255 is 128 -- #80, as you might expect, so it means to show gray. For the other colors, check out that link above, see what colors match with which codes, and if you keep doing that for various colors, you'll get the hang of it.

      1. Internet colors reference Web site
For an excellent dissection and assistance in determining the codes to use, see [https://htmlcolorcodes.com](https://htmlcolorcodes.com). There are various sections of this site can can use depending I your particular needs. For a good list of colors and names for them, see [https://htmlcolorcodes.com/color-names](https://htmlcolorcodes.com/color-names).
