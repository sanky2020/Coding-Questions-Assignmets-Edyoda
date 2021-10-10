//How do you find the missing number in a given integer array of 1 to 100?
var a = [1,2,4,6,8,9],
count = 10;
var missing = new Array();
for (var i = 1; i <= count; i++) {
if (a.indexOf(i) == -1) {
missing.push(i);
}
}
console.log(missing);
