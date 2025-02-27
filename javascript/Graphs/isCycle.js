// const adjacencyList ={
//     1: new Set([2]), 
//     2: new Set([3]), 
//     3: new Set([4]),
//     4: new Set([5]),
//     5: new Set([]),
//   };

  const createAdjacencyList = (a, b) => {
        let adjacencyList = {}

        for (let i = 0; i < b.length; i++) {
            const source = b[i][0];
            const destination = b[i][1];
          
            // If the source vertex is not already in the adjacency list, initialize it
            if (!adjacencyList[source]) {
              adjacencyList[source] = new Set();
            }
          
            // Add the destination vertex to the source vertex's adjacency list
            adjacencyList[source].add(destination);
          
            // If the graph is undirected, uncomment the lines below to add the reverse edge
            // if (!adjacencyList[destination]) {
            //   adjacencyList[destination] = new Set();
            // }
            // adjacencyList[destination].add(source);
          }
        return adjacencyList
  }
  const dfs = (status, a, v) => {
    status[v] = 1
        if(!a[v]){
            return fa
        }
        for(let e of a[v]){
            if(status[e] == 1){
                return true
            }
            else if(status[e] == 0){
                if(dfs(status, a, e)){
                    return true
                }
            }   
        }

    status[v] = 2

    return false
  }

//   console.log()
let adjacencyList = createAdjacencyList(2, [[1,2]]
    )   
    console.log(adjacencyList)
  let status = Array(Object.keys(adjacencyList).length + 1).fill(0)
  ans = false
  for(let i in adjacencyList){
    ans = ans || dfs(status, adjacencyList, i)
  }
  console.log(ans)