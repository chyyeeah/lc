/*
You are given an integer array cost where 
cost[i] is the cost of ith step on a staircase. 
Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

/**brute force
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const recurse = (idx, acc) => {
        if (idx >= cost.length - 2) {
            return acc;
        }
        return Math.min(
            recurse(idx + 1, acc + cost[idx + 1]),
            recurse(idx + 2, acc + cost[idx + 2]),
        );
    };
    return Math.min(
        recurse(0, cost[0]),
        recurse(1, cost[1])
    );
};

/**DP
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const store = {};
    const recurse = (idx) => {
        if (store[idx] != null) {
            return cost[idx] + store[idx];
        }
        if (idx >= cost.length - 2) {
            return cost[idx];
        }
        const first = recurse(idx + 1);
        const second = recurse(idx + 2);
        // store[idx + 1] = first;
        // store[idx + 2] = second;
        return Math.min(
            cost[idx] + first,
            cost[idx] + second
        );
    };
    return Math.min(
        recurse(0, cost[0]),
        recurse(1, cost[1])
    );
};

// console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

/*
Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
*/