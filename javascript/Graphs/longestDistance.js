const longestDistance = (A) => {

    let root 
    const creatAdj = (a) => {

        let adj = {}

        for(i = 0; i < a.length; i++){

            if(a[i] != -1){

                if(!adj[a[i]]){
                    adj[a[i]] = []
                }

                if(!adj[i]){
                    adj[i] = []
                }

                adj[i].push(a[i])
                adj[a[i]].push(i)
            } else {
                root = i
            }
        }
        return adj
    }

    const visited = new Set()
    const adj = creatAdj(A)
    const dfs = (adj, s) => {
        visited.add(s)
        let maxDepth = 0
        for(let i of adj[s]){
            if(!visited.has(i)){
                console.log('recursive of node', i)
                 depth = dfs(adj, i) + 1
                console.log(depth, maxDepth, 'this depth and max Depth of node', i)
                 ans = Math.max(ans, depth + maxDepth)
                 maxDepth = Math.max(maxDepth, depth)

            }
        }
        console.log('returning maxdepth', maxDepth, 'of node', s)
        return maxDepth
    }
    ans = 0
    dfs(adj, root)

    return ans
}
console.log(longestDistance([-1,0,0,1,2,1,5]))