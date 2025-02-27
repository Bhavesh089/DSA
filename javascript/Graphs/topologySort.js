const topologySort =(A, B) => {


    const indeg = new Array(A+1).fill(0)
    const adjList = new Array(A+1).fill([])
    const N = B.length
    let q = []
    for(let i = 0; i < N; i++){
        let source = B[i][0]
        let dest = B[i][1]

        adjList[source] = [...adjList[source], dest]
        indeg[dest]++
    }

    for(let i =1; i <= N; i++){
        if(indeg[i] == 0){
            q.push(i)
        }
    }
    q.sort((a,b) => a - b)
    let ans = []
    while(q.length > 0){

        let f = q.shift()

        ans.push(f)

        let s = []
        for(let v of adjList[f]){
            indeg[v]--
            if(indeg[v] == 0){
                s.push(v)
            }
        }
        q = [...q, ...s]
        q.sort((a,b) => a - b)
    }

    return ans.length == A ? ans : []
}

console.log(topologySort(8,[[1,4],[1,2],[4,2],[4,3],[3,2],[5,2],[3,5],[8,2],[8,6]]))