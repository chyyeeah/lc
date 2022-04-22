const Heap = require('collections/heap');

class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
};

const find_max_cpu_load = function (jobs) {
  jobs.sort((a, b) => a.start - b.start);
  const minHeap = new Heap([], null, (a, b) => b.end - a.start);
  let result = 0;
  let tracker = 0;
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    while (minHeap.length > 0 && minHeap.peek().end <= job.start) {
      const lastJob = minHeap.pop();
      tracker -= lastJob.cpu_load;
    }
    minHeap.push(job);
    tracker += job.cpu_load;
    result = Math.max(result, tracker);
  }
  return result;
};


console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
  [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)
