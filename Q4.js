//How do you find all pairs of an integer array whose sum is equal to a given number?
function twoSum(nums, target_num) {
var map = [];
var indexnum = [];
for (var x = 0; x < nums.length; x++)
{
if (map[nums[x]] != null)
// what they meant by map[nums[x]]
{
index = map[nums[x]];indexnum[0] = index+1;
indexnum[1] = x+1;
break;
}
else
{
map[target_num - nums[x]] = x;
}
}
return indexnum;
}
console.log(twoSum([10,20,10,40,50,60,70],50));
