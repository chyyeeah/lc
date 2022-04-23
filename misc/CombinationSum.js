/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const tracker = [];
  const backtrack = (tracker, remaining, idx) => {
    if (remaining < 0) return;
    if (remaining === 0) return result.push([...tracker]);
    for (let i = idx; i < candidates.length; i++) {
      backtrack(
        tracker.concat(candidates[i]),
        remaining - candidates[i],
        i
      );
    }
  };
  backtrack(tracker, target, 0);
  return result;
};


console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2, 3, 5], 8))