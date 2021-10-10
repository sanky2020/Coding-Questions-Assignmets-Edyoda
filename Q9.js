//How do you print the first non-repeated character from a string?
function firstNonRepeatedCharacter(string) {
return string.split('').filter(function (character, index, obj) {
return obj.indexOf(character) === obj.lastIndexOf(character);}).shift();
}
console.log(firstNonRepeatedCharacter('aabcbd'));
