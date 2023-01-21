class Graph {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices;
    this.adjacencyList = [];

    for(let i = 0; i < this.numberOfVertices; i++) {
      this.adjacencyList[i] = [];
    }
  }

  addEdge(u, v) {
    this.adjacencyList[u].push(v);
  }

  topologicalSort() {
    const indegree = new Array(this.numberOfVertices).fill(0);

    for(let i = 0; i < this.numberOfVertices; i++) {
      this.adjacencyList[i].forEach(vertex => indegree[vertex] = indegree[vertex] + 1)
    }

    const queue = [];

    for (let i = 0; i < this.numberOfVertices; i++) {
      if (indegree[i] === 0) queue.unshift(i)
    }

    let c = 0;
    const linearOrder = [];

    while(queue.length !== 0) {
      const x = queue.shift();
      linearOrder.push(x);

      this.adjacencyList[x].forEach(vertex => {
        if(--indegree[vertex] === 0) {
          queue.unshift(vertex);
        }
      })
      c++;
    }

    if( c != this.numberOfVertices) {
      console.log('Graph contains -ve cycle');
      return;
    }

    console.log('The linear order is: ');
    linearOrder.forEach(e => console.log(e + ' '));
  }
}

const graph = new Graph(6);

graph.addEdge(0, 1);
graph.addEdge(0, 3);
graph.addEdge(1, 2);
graph.addEdge(1, 2, 6);
graph.addEdge(2, 4, 4);
graph.addEdge(3, 4, -1);
graph.topologicalSort()