/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let marker = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[marker] = nums[i];
            marker++;
        }
    }
    while (marker < nums.length) {
        nums[marker] = 0;
        marker++;
    }
};

let arr = [0,1,0,3,12];
moveZeroes(arr);
console.log(arr);
arr = [0];
moveZeroes(arr);
console.log(arr);