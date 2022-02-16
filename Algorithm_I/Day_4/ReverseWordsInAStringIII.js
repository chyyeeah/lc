const reverseWord = (arr, start, end) => {
    const mid = start + Math.floor((end - start) / 2);
    for (let i = start; i <= mid; i++) {
        const temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        end--;
    }
};


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const sArr = s.split('');
    let start = 0;
    for (let end = 0; end < sArr.length; end++) {
        if (sArr[end + 1] === ' ' || sArr[end + 1] == null) {
            reverseWord(sArr, start, end);
            start = end + 2;
        }
    }
    return sArr.join('');
};

let s = `Let's take LeetCode contest`;
console.log(reverseWords(s));
s = `God Ding`;
console.log(reverseWords(s));