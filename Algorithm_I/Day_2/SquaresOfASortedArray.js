/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//     let start = 0,
//         end = nums.length - 1;
//     const result = [];
//     while (start <= end) {
//         const left = Math.pow(nums[start], 2);
//         const right = Math.pow(nums[end], 2);
//         if (right > left) {
//             result.unshift(right);
//             end--;
//         } else {
//             result.unshift(left);
//             start++;
//         }
//     }
//     return result;
// };
var sortedSquares = function (nums) {
    let start = 0,
        end = nums.length - 1;
    const result = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        const left = Math.pow(nums[start], 2);
        const right = Math.pow(nums[end], 2);
        if (left < right) {
            result[i] = right;
            end--;
        } else {
            result[i] = left;
            start++;
        }
    }
    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));