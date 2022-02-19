/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    const tally = {};
    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];
        if (!tally[char]) {
            tally[char] = 0;
        }
        tally[char]++;
    }
    let tallyCopy = {...tally},
        numCharsComplete = 0,
        p = 0;
    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];
        if (tallyCopy[char] == null) {
            tallyCopy = {...tally};
            numCharsComplete = 0;
            p = i + 1;
        } else if (tallyCopy[char] === 0) {
            while (tallyCopy[char] === 0) {
                if (tallyCopy[s2[p]] === 0) {
                    numCharsComplete--;
                }
                tallyCopy[s2[p]]++;
                p++;
            }
            tallyCopy[char]--;
        } else {
            tallyCopy[char]--;
        }
        if (tallyCopy[char] === 0) {
            numCharsComplete++;
        }
        if (numCharsComplete === Object.keys(tallyCopy).length) {
            return true;
        }
    }
    return false;
};

console.log(checkInclusion('adc', 'dcda'));