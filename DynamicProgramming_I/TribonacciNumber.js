/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    const set = {};
    const recurse = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 1;
        if (set[n] != null) return set[n];
        const val = recurse(n - 1) + recurse(n - 2) + recurse(n - 3);
        set[n] = val;
        return val;
    };

    return recurse(n);
};

console.log(tribonacci(4) === 4);
console.log(tribonacci(25) === 1389537);