/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const result = [[]];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const l = result.length;
        for (let j = 0; j < l; j++) {
            const arr = [...result[j]];
            arr.push(num);
            result.push(arr);
        }
    }
    return result;
};

console.log(subsets([1,2,3]));
console.log(subsets([0]));