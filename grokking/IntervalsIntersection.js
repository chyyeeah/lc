class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const merge = function(intervals_a, intervals_b) {
  const result = [];
  let a = 0;
  let b = 0;
  while (a < intervals_a.length && b < intervals_b.length) {
    const overlapA = intervals_a[a].start >= intervals_b[b].start 
      && intervals_a[a].start <= intervals_b[b].end;
    const overlapB = intervals_b[b].start >= intervals_a[a].start 
      && intervals_b[b].start <= intervals_a[a].end;

    if (overlapA || overlapB) {
      result.push(new Interval(
        Math.max(intervals_a[a].start, intervals_b[b].start),
        Math.min(intervals_a[a].end, intervals_b[b].end),
      ));
    }

    if (intervals_a[a].end < intervals_b[b].end) {
      a++; 
    } else {
      b++;
    }
  }
  return result;
};

process.stdout.write('Intervals Intersection: ');
let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals Intersection: ');
result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();