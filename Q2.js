//How do you find the duplicate number on a given integer array?
const yourArray = [1, 1, 2, 3, 4, 5, 5]
let duplicates = []
const tempArray = [...yourArray].sort()
for (let i = 0; i < tempArray.length; i++) {
if (tempArray[i + 1] === tempArray[i]) {
duplicates.push(tempArray[i])
}
}
console.log(duplicates)
