const max_sub_array_of_size_k = function (k, arr) {
    if (arr.length < k) return -1;
    let result = 0;
    let counter = 0;
    let left = 0;
    let right = 0;
    while (right < k) {
        counter += arr[right];
        right++;
    }
    result = counter;
    for (let i = right; i < arr.length; i++) {
        counter -= arr[left];
        counter += arr[i];
        result = Math.max(result, counter);
        left++;
    }
    return result;
};

console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));