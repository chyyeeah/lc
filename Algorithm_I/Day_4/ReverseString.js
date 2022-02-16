/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const mid = Math.floor((s.length - 1) / 2);
    for (let i = 0; i <= mid; i++) {
        const temp = s[s.length - 1 - i];
        s[s.length - 1 - i] = s[i];
        s[i] = temp;
    }
};

let arr = ["h", "e", "l", "l", "o"];
reverseString(arr);
console.log(arr);
arr = ["H", "a", "n", "n", "a", "h"]
reverseString(arr);
console.log(arr);
arr = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"];
reverseString(arr);
console.log(arr.length);