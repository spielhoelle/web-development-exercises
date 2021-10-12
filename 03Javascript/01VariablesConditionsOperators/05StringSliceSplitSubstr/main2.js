// 
// LOCATING STRINGS
// 

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

// returns first position
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

// last index
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

// first index
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate",15);

// both return -1

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");

// ::search() and ::indexOf() are equal

//
// EXTRACTING STRING PARTS
// 

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

// If a parameter is negative, the position is counted 
// from the end of the string.
// This example slices out a portion of a string 
// from position -12 to position -6:

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);

var res = str.slice(7);

// substring does not accept negative values
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

// difference to slice is, that second parameter is the length of the string
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);


str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

var str = "HELLO WORLD";
str.charAt(0);            // returns H

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

var txt = "Hello";       // String
txt.split("");           // Split in characters