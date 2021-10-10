//How do you check if a string contains only digits
function checkIfStringHasOnlyDigits(_string)
{
if(_string.match(/^[0-9]+$/) != null)
{
console.log("String contains only numbers")
}
else
{
console.log("String does not contain only numbers")
}
}
checkIfStringHasOnlyDigits("123ThisPointer.com")
checkIfStringHasOnlyDigits("8965")checkIfStringHasOnlyDigits("89.65")
checkIfStringHasOnlyDigits("")
