/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const num1 = numbers[i];
    let start = i + 1,
      end = numbers.length - 1,
      mid;
    while (start <= end) {
      mid = start + Math.floor((end - start) / 2);
      const midValue = numbers[mid];
      if (num1 + midValue === target) {
        return [i + 1, mid + 1];
      }
      const total = midValue + num1;
      if (total < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));