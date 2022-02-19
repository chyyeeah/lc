/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const chars = new Set();
    let p1 = 0,
        result = 0;
    for (let p2 = 0; p2 < s.length; p2++) {
        const char = s[p2];
        while (chars.has(char)) {
            const lagChar = s[p1];
            chars.delete(lagChar);
            p1++;
        }
        chars.add(char);
        result = Math.max(result, chars.size);
    }
    return result;
};