class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = function (intervals, new_interval) {
  let merged = [];
  let idx = 0;
  while (
    new_interval.start > intervals[idx].end 
    && idx < intervals.length
  ) {
    merged.push(intervals[idx]);
    idx++;
  }
  merged.push(new_interval);
  for (let i = idx; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    const interval = intervals[i];
    if (prev.end > interval.start) {
      prev.end = Math.max(prev.end, interval.end);
      prev.start = Math.min(prev.start, interval.start);
    } else {
      merged.push(interval);
    }
  }
  return merged;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();