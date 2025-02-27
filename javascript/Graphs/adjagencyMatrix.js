// Define the number of vertices in the graph
const numVertices = 5;

// Initialize the adjacency matrix with all 0s
const adjacencyMatrix = Array.from({ length: numVertices }, () =>
  Array(numVertices).fill(0)
);

// Function to add edges to the graph
function addEdge(fromVertex, toVertex) {
  // Assuming the vertices are 0-indexed
  adjacencyMatrix[fromVertex][toVertex] = 1;
  // If the graph is undirected, uncomment the line below to add the reverse edge
  // adjacencyMatrix[toVertex][fromVertex] = 1;
}

// Example: Adding edges to the graph
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 3);
addEdge(2, 4);

// Displaying the adjacency matrix
console.log("Adjacency Matrix:");
for (let row of adjacencyMatrix) {
  console.log(row.join(" "));
}
