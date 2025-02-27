// Initialize an empty object to store the adjacency list
const adjacencyList = {};

// Function to add edges to the graph
function addEdge(fromVertex, toVertex) {
  // If the vertices don't exist in the adjacency list, create them
  if (!adjacencyList[fromVertex]) {
    adjacencyList[fromVertex] = new Set();
  }
  if (!adjacencyList[toVertex]) {
    adjacencyList[toVertex] = new Set();
  }
  
  // Add the edge from 'fromVertex' to 'toVertex'
  adjacencyList[fromVertex].add(toVertex);
  // If the graph is undirected, uncomment the line below to add the reverse edge
  // adjacencyList[toVertex].add(fromVertex);
}

// Example: Adding edges to the graph
addEdge("A", "B");
addEdge("A", "C");
addEdge("B", "D");
addEdge("C", "E");

// Displaying the adjacency list
console.log("Adjacency List:", adjacencyList);
for (let vertex in adjacencyList) {
  console.log(`${vertex} -> ${[...adjacencyList[vertex]]}`);
}
