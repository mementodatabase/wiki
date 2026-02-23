---
title: "About:ColorCodes"
---

1. Internet (HTML) color codes
Memento employs the standard Internet color code to indicate colors. 

      1. Colors & their codes
You may already know about red, green, & blue (RGB) and how using them together tells your TV, LED light bulb -- in addition to color temperature in that case -- and Internet browsers what color to display.  Memento JavaScript uses these RGB codes to determine the colors to be used for entries in a list, for choices (items) in a menu, and so on.  After the hashtag (#), the rest of the code is a set of 3 two-character codes in a row (so 6 characters following the hashtag). The codes represent red, green, and blue, so with two-character color abbreviations, you'd have #ReGrBl. All other colors are determined by the specific combination of red, green, and blue colors that make up the color you want. For instance, when all 3 colors are the same as each other, the colors are in the gray scale, from black to white.

      1. Base 16 (hexadecimal) Math 101 for computer people
The code for each color is determined by how luminescent it is.  Do you remember radix arithmetic from school?  Radix (or base) 10 is for decimal values (0-9), base 2 for binary values (0-1), etc. Next most common are the bases that computers use in addition to binary. 2 binary digits in a row can represent values from 0-3, 3 digits show 0-7, 4 digits 0-15, and to represent colors for the Internet, we need to represent 256 colors, 0-255. For 256 colors, we'd need that many characters, but we don't have that many characters in our alphabet, so we use 2 characters for the color. Base 16 numbers can represent that 16 values, and 2 in a row, will give us 256 values (what we need) and they fit in a byte of storage, too! Recapping, if each digit took 4 bits & represent values 0-15, we can use a single character to make up those values if only we could represent all 16 values in the 4 bits. So, we use the 10 decimal digits 0-9 and then start with A to represent 10-15, so A-F are the characters we need to represent one hexadecimal digit. To get to 256 -- with base 16 arithmetic (we can say hex for short), 16 times 16 gives us the 256 we need. So that would be hex 11 (1*16+1), and if A is 10, then B is 11, so 11 represents 16+1=17. Using # to indicate a numeric value is in hex is an Internet standard (for HTML, CSS, etc).

      1. Making hex digits into colors
There are 256 levels of luminosity for each color (0-255). The code for Black is #000000 -- none of any of the colors, so black. The code for White is #FFFFFF, 255 for each of red, green, & blue. Halfway from 0-255 is 128 -- #80, as you might expect, so it means to show gray. For the other colors, check out that link above, see what colors match with which codes, and if you keep doing that for various colors, you'll get the hang of it.
