var search = function(nums, target) {
    let start = 0,
        end = nums.length - 1,
        mid = Math.floor((end - start) / 2);
    while (start <= end) {
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = start + Math.floor((end - start) / 2);
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([5], 5));
console.log(search([-1,0,3,5,9,12], 2));