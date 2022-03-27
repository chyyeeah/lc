const search_triplets = function (arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    if (
      arr[i] === arr[left]
      || arr[left] === arr[right]
    ) {
      continue;
    }
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        triplets.push([arr[i], arr[left], arr[right]]);
        // make sure to move away from same numbers
        while (left < right && arr[left] === arr[left + 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right - 1]) {
          right--;
        }
      }
      if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2, 3]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
// -3 -2 -1 0 1 1 2