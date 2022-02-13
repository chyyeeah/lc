const reverse = (arr, start, end) => {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

let arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr);
arr = [-1,-100,3,99];
rotate(arr, 2);
console.log(arr);