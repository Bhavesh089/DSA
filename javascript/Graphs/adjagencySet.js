// Define the number of vertices in the graph
const numVertices = 5;

// Initialize an empty adjacency list
const adjacencyList = new Array(numVertices).fill(null).map(() => new Set());

console.log(adjacencyList, "this")
// Function to add edges to the graph
function addEdge(fromVertex, toVertex) {
  // Assuming the vertices are 0-indexed
  adjacencyList[fromVertex].add(toVertex);
  // If the graph is undirected, uncomment the line below to add the reverse edge
  // adjacencyList[toVertex].add(fromVertex);
}

// Example: Adding edges to the graph
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 3);
addEdge(2, 4);

// Displaying the adjacency list
console.log("Adjacency List:");
adjacencyList.forEach((neighbors, vertex) => {
  console.log(`${vertex} -> ${[...neighbors]}`);
});
