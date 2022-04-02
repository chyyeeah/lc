class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const merge = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  let merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const latestInterval = merged[merged.length - 1];
    const interval = intervals[i];
    if (interval.start <= latestInterval.end) {
      latestInterval.start = Math.min(latestInterval.start, interval.start);
      latestInterval.end = Math.max(latestInterval.end, interval.end);
    } else {
      merged.push(interval);
    }
  }
  return merged;
};

let merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
let result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)
