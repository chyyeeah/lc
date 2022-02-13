/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start = 0,
        end = nums.length - 1,
        mid = start + Math.floor((end - start) / 2),
        result = mid;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2)
        const midValue = nums[mid];
        if (midValue === target) return mid;
        if (midValue > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        result = mid;
    }
    if (nums[result] < target) {
        return result + 1;
    // } else if (nums[result] > target) {
    //     return result === 0 ? 0 : result - 1;
    } else {
        return result;
    }
};

// [1,3,5,6]
// 2
// [1,3,5,6]
// 7
// [1,3,5,6]
// 0
// [1,2,4,6,7]
// 3
console.log(searchInsert([1,3,5,6], 7) === 4);
console.log(searchInsert([1,3,5,6], 0) === 0);
console.log(searchInsert([1,2,4,6,7], 3) === 2);

console.log(searchInsert([1,3,5,6], 2) === 1);
console.log(searchInsert([1,3], 2) === 1);