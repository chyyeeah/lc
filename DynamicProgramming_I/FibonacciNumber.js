/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    const set = {};

    const recurse = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (set[n] != null) {
            return set[n];
        }
        const value = recurse(n - 1) + recurse(n - 2);
        set[n] = value;
        return value;
    };

    return recurse(n);
};

console.log(fib(2) === 1);
console.log(fib(3) === 2);
console.log(fib(4) === 3);
console.log(fib(20) === 6765);