//How do you count the occurrence of a given character in a string?
var str = "A,B,C,D,E,d,";
var ch = ',';
var count = str.split(ch).length - 1;
console.log(count);
