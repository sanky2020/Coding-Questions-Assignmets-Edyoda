//How do you print duplicate characters from a string?
function removeDuplicateChar(string) {
return string
.split('')
.filter(function(item, pos, self) {
return self.indexOf(item) == pos;
})
.join('');
}
console.log(removeDuplicateChar("banana"));
