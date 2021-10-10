//How do you find duplicate numbers in an array if it contains multiple duplicates?
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
const unique = Array.from(new Set(numbers));
if(numbers.length === unique.length) {
console.log(`Array doesn't contain duplicates.`);
} else {
console.log(`Array contains duplicates.`);
}
