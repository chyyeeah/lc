const Heap = require("collections/heap");

class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get_point() {
    return "[" + this.x + ", " + this.y + "] ";
  }
};

const find_closest_points = function (points, k) {
  const maxHeap = new Heap([], null, (a, b) => a.dist - b.dist);
  points.forEach(p => {
    const x = p.x;
    const y = p.y;
    const dist = Math.pow(x, 2) + Math.pow(y, 2);
    maxHeap.push({ dist, point: p });
    if (maxHeap.length > k) maxHeap.pop();
  });
  return maxHeap.toArray().map(obj => obj.point);
};


points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
result = "Here are the k points closest the origin: ";
for (i = 0; i < points.length; i++)
  result += points[i].get_point();
console.log(result);
