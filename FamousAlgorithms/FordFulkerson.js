graph = [
  [0,3,2,0,0,0],
  [0,0,0,2,0,0],
  [0,3,0,0,3,0],
  [0,0,1,0,0,3],
  [0,0,0,3,0,2],
  [0,0,0,0,0,0]
];

console.log(getMaxFlow(graph,0,5));

function getMaxFlow(graph, source, sink) {
  residualGraph = [];

  for(let i = 0; i < graph.length; i++) {
    residualGraph.push(new Array(graph[0].length).fill(0));

    for(let j = 0; j < graph[0].length; j++) {
      residualGraph[i][j] = graph[i][j];
    }
  }

  let parentMapping = {};
  let augmentingPaths = [];

  let maxFlow = 0;

  while(findAugmentingPath(residualGraph, parentMapping, source, sink)) {
    let augPath = [];
    let flow = Number.MAX_SAFE_INTEGER;

    let v = sink;

    while( v !== source) {
      augPath.push(v);
      let u = parentMapping[v];
      if (residualGraph[u][v] < flow) {
        flow = residualGraph[u][v];
      }

      v = u;
    }

    augPath.push(source);
    augPath.reverse();
    augmentingPaths.push(augPath);

    maxFlow += flow;
    v = sink;
    while(v != source) {
      let u = parentMapping[v];
      residualGraph[u][v] -= flow;
      residualGraph[v][u] += flow;

      v = u;
    }
  }

  console.log(augmentingPaths)
  return maxFlow;
}

function findAugmentingPath(residualGraph, parentMapping, source, sink) {
  let queue = [];
  let visitedSet = new Set();

  queue.push(source);
  visitedSet.add(source);

  let gotThePath = false;

  while(queue.length != 0) {
    let u = queue.shift();
    for(let v = 0;  v < residualGraph.length; v++) {
      if (!visitedSet.has(v) && residualGraph[u][v] > 0) {
        parentMapping[v] = u;
        visitedSet.add(v);
        queue.push(v);

        if(v == sink) {
          gotThePath = true;
          break;
        }
      }
    }
  }

  return gotThePath;
}