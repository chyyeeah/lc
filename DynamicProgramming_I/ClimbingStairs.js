/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
/** brute force
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const recurse = (step) => {
        if (step > n) return 0;
        if (step === n) return 1;
        return recurse(step + 1) + recurse(step + 2);
    };
    return recurse(0);
};

/** DP
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const store = {};
    const recurse = (step) => {
        if (store[step] != null) {
            return store[step];
        }
        if (step > n) {
            return 0;
        }
        if (step === n) {
            return 1;
        }
        const res = recurse(step + 1) + recurse(step + 2);
        store[step] = res;
        return res;
    };
    return recurse(0);
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(44));

/*
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/