//How do you check if two strings are a rotation of each other?
function RotEq (str1, str2) {
if (str1 === str2) return true;
if (str1.length !== str2.length) return false;
var start2 = str2.indexOf(str1[0]);
if (start2 === -1) return false;
return str1 === str2.slice(start2) + str2.slice(0, start2)
}
console.log(RotEq("abcd", "abcd"))let j = RotEq("abcd", "acdb")
console.log(j)
