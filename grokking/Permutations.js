const find_permutations = function (nums) {
  const queue = [[]];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let length = queue.length;
    while (length > 0) {
      length--;
      const perm = queue.shift();
      for (let j = 0; j < perm.length + 1; j++) {
        const newPerm = perm.slice();
        newPerm.splice(j, 0, num);
        queue.push(newPerm);
      }
    }
  }
  console.log('queue', queue);
  return queue;
};


console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`)
