const createAdj = (B) => {
    let adj = {}
    for(let i of B){

        if(!adj[i[0]]){

            adj[i[0]] = new Set()
        } 

        adj[i[0]].add(i[1])

    }

    return adj
}

let B = [[1,4],[2,1],[4,3],[4,5],[2,3],[2,4],[1,5],[5,3],[2,5],[5,1],[4,2],[3,1],[5,4],[3,4],[1,3],[4,1],[3,5],[3,2],[5,2]]
let adj = createAdj(B)

const visited = new Set()
let A = 5
const findPath = (adj, v) => {

    if(visited.has(v)){
        return false
    }

    if(A == v){
        return true
    }

    for(let i of adj[v]){

        visited.add(v)

        if(findPath(adj, i)){
            return true
    }
}

return false
}

console.log(findPath(adj, 1))