//How are duplicate characters found in a string?
const getRepeatedChars = (str) => {
let result = [];
str.map(each => {
let repeatedChars = 0;
for (let i = 0; i < each.length - 1; i++) {
if (each[i] === each[i + 1] && each[i] !== each[i - 1]) {
repeatedChars += 1;
}
}
result.push(repeatedChars);
});
return result;
};
console.log(getRepeatedChars(["aaabbbkdnndicccoekdczufnrz", "awsfgds"]));
