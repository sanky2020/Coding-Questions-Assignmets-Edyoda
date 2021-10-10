//How do you check if two strings are anagrams of each other?
var str1,str2
str1='LISTEN'
str2='SILENT'
console.log( (str1.split("").sort().join(""))===(str2.split("").sort().join("")) )
