const find_happy_number = function(num) {
  let slow = calcSumSquaresOfDigits(num);
  let fast = calcSumSquaresOfDigits(calcSumSquaresOfDigits(num));
  while (slow !== fast) {
    if (fast === 1) return true;
    slow = calcSumSquaresOfDigits(slow);
    fast = calcSumSquaresOfDigits(calcSumSquaresOfDigits(fast));
  }
  return false;
};

const calcSumSquaresOfDigits = (num) => {
  let sum = 0;
  const stringifiedNum = num.toString();
  for (let i = 0; i < stringifiedNum.length; i++) {
    const num = Number(stringifiedNum[i]);
    sum += Math.pow(num, 2);
  }
  return sum;
};


console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)
