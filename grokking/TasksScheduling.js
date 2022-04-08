const is_scheduling_possible = function(tasks, prerequisites) {
  const inDegree = {};
  const adjacencyGraph = {};
  prerequisites.forEach(p => {
    const a = p[0];
    const b = p[1];
    if (inDegree[a] == null) inDegree[a] = 0;
    if (inDegree[b] == null) inDegree[b] = 0;
    inDegree[b]++;
    if (adjacencyGraph[a] == null) adjacencyGraph[a] = new Set();
    if (adjacencyGraph[b] == null) adjacencyGraph[b] = new Set();
    adjacencyGraph[a].add(b);
  });
  const sources = [];
  for (let vertex in inDegree) {
    if (inDegree[vertex] === 0) {
      sources.push(vertex);
    }
  }
  if (sources.length < 1) return false;
  while (sources.length > 0) {
    const vertex = sources.shift();
    if (inDegree[vertex] < 0) return false;
    adjacencyGraph[vertex].forEach(v => {
      inDegree[v]--;
      sources.push(v);
    });
  }
  return true;
};


console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)
