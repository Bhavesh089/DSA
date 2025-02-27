var eventualSafeNodes = function(graph) {
    
    const nodes = graph.length
    const visited = Array(nodes).fill(0)
    const safeNodes = []

    const dfs = (graph, s) => {

        visited[s] = 1

        for(let e of graph[s]){

            if(visited[e] == 0){

                if(dfs(graph, e)){

                    return true
                }
            } else if(visited[e] == 1){
                    return true
            }
        }

        visited[s] = 2
        return false
    }


    for(let node = 0; node < nodes; node++){

        if(visited[node] != 1){
            ans = dfs(graph, node)
            console.log('src',node, 'ans:', ans, visited)
            if(!ans){
                safeNodes.push(node)
            }
        }   
  
    }

    return safeNodes
};

console.log(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]))