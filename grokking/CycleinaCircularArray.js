const circular_array_loop_exists = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let isLeftToRight = arr[i] > 0;
    let slow = i;
    let fast = i;
    while (true) {
      slow = findNext(arr, slow, isLeftToRight);
      fast = findNext(arr, fast, isLeftToRight);
      if (fast > -1) {
        fast = findNext(arr, fast, isLeftToRight);
      }
      // if (slow < 0 || fast < 0 || slow === fast) break;
      if (slow < 0 || fast < 0) break;
      if (slow === fast) return true;
    }
    // if (slow > -1 && slow === fast) return true;
  }
  return false;
};

const findNext = (arr, idx, isLeftToRight) => {
  if (isLeftToRight !== arr[idx] > 0) return -1;
  const next = (idx + arr[idx]) % arr.length;
  if (next < 0) {
    next += arr.length;
  }
  if (idx === next) return -1;
  return next;
};

console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`)
console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`)
console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`)
