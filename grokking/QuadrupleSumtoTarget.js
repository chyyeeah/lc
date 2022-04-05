const search_quadruplets = function(arr, target) {
  arr.sort((a, b) => a - b);
  const quadruplets = [];

  for (let first = 0; first < arr.length - 3; first++) {
    const firstVal = arr[first];
    for (let second = first + 1; second < arr.length - 2; second++) {
      const secondVal = arr[second];
      let third = second + 1;
      let fourth = arr.length - 1;
      while (third < fourth) {
        const thirdVal = arr[third];
        const fourthVal = arr[fourth];
        let sum = firstVal + secondVal + thirdVal + fourthVal;
        if (sum < target) {
          third++;
        } else if (sum > target) {
          fourth--;
        } 
        if (sum === target) {
          quadruplets.push([firstVal, secondVal, thirdVal, fourthVal]);
          third++;
          fourth--;
          while (thirdVal === arr[third + 1] && third < fourth) {
            third++;
          }
          while (fourthVal === arr[fourth + 1] && third < fourth) {
            fourth--;
          }
        }
      }
    }
  }

  return quadruplets;
};

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));