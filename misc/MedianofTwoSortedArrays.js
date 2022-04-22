/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  let a = nums1;
  let b = nums2;
  if (nums1.length > nums2.length) {
    const temp = a;
    a = b;
    b = temp;
  }
  let half = Math.floor(totalLength / 2);
  let l = 0;
  let r = a.length - 1;   
  while (true) {
    console.log('-----')
    let i = l + Math.floor((r - l) / 2);
    let j = half - i - 2;
    console.log(i)
    console.log(j)
    const leftA = a[i] ?? -Infinity;
    const leftB = b[j] ?? -Infinity;
    const rightA = a[i + 1] ?? Infinity;
    const rightB = b[j + 1] ?? Infinity;
    console.log(leftA)
    console.log(leftB)
    console.log(rightA)
    console.log(rightB)
    if (leftA <= rightB && leftB <= rightA) {
      if (totalLength % 2 === 1) {
        return Math.min(rightA, rightB);
      } else {
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
      }
    } else if (leftA > leftB) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};

// console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
// console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4]));
// console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3]));