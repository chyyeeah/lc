/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
isBadVersion = function(version) {
    if (version >= 4) {
        return true;
    }
    return false;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1,
            end = n,
            mid = start + Math.floor((end - start) / 2),
            result = Infinity;
        while (start <= end) {
            console.log(start, end, mid);
            mid = start + Math.floor((end - start) / 2)
            if (isBadVersion(mid)) {
                end = mid - 1;
                result = mid;
            } else {
                start = mid + 1;
            }
        }
        return result;
    };
};

const test = solution(isBadVersion);
console.log(test(5));

// [1,3,5,6]
// 5
// [1,3,5,6]
// 2
// [1,3,5,6]
// 7
// [1,3,5,6]
// 0
// [1,2,4,6,7]
// 3