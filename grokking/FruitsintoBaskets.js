const fruits_into_baskets = function(fruits) {
  const store = {};
  let result = 0;
  let tracker = 0;
  let left = 0;
  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right];
    if (store[fruit] == null) store[fruit] = 0;
    store[fruit]++;
    tracker++;
    while (Object.keys(store).length > 2) {
      const leftFruit = fruits[left];
      store[leftFruit]--;
      tracker--;
      left++;
      if (store[leftFruit] < 1) delete store[leftFruit];
    }
    result = Math.max(result, tracker);
  }
  return result;
};

console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));
console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
