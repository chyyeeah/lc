const topological_sort = function (vertices, edges) {
  const sortedOrder = [];
  const inDegree = {};
  const adjacencyGraph = {};
  edges.forEach(edge => {
    const a = edge[0];
    const b = edge[1];
    if (inDegree[a] == null) inDegree[a] = 0;
    if (inDegree[b] == null) inDegree[b] = 0;
    inDegree[b]++;
    if (adjacencyGraph[a] == null) adjacencyGraph[a] = new Set();
    if (adjacencyGraph[b] == null) adjacencyGraph[b] = new Set();
    adjacencyGraph[a].add(b);
  });
  const sources = [];
  for (let vertex in inDegree) {
    if (inDegree[vertex] < 1) {
      sources.push(vertex);
    }
  }
  // while (sources.length > 0) {
  //   const vertex = sources.shift();
  //   inDegree[vertex]--;
  //   if (inDegree[vertex] === 0) {
  //     sortedOrder.push(vertex);
  //   }
  //   adjacencyGraph[vertex].forEach(v => {
  //     sources.push(v);
  //   });
  // }
  while (sources.length > 0) {
    const vertex = sources.shift();
    sortedOrder.push(vertex);
    adjacencyGraph[vertex].forEach(v => {
      inDegree[v]--;
      if (inDegree[v] === 0) {
        sources.push(v);
      }
    });
  }
  return sortedOrder;
};


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
// console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
// console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)
