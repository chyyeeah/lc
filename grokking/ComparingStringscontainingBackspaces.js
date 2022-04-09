const backspace_compare = function (str1, str2) {
  let idx1 = str1.length - 1;
  let idx2 = str2.length - 1;
  while (idx1 > -1 && idx2 > -1) {
    let bs1 = 0;
    let bs2 = 0;
    while (str1[idx1] === '#') {
      bs1++;
      idx1--;
    }
    while (str2[idx2] === '#') {
      bs2++;
      idx2--;
    }
    while (bs1 > 0) {
      bs1--;
      idx1--;
    }
    while (bs2 > 0) {
      bs2--;
      idx2--;
    }
    if (str1[idx1] !== str2[idx2]) return false;
    idx1--;
    idx2--;
  }
  if (idx1 < 0 && idx2 < 0) {
    return true;
  } else {
    return false;
  }
};

console.log(backspace_compare('xy#z', 'xzz#'));
console.log(backspace_compare('xy#z', 'xyz#'));
console.log(backspace_compare('xp#', 'xyz##'));
console.log(backspace_compare('xywrrmp', 'xywrrmu#p'));