const blackShapes = (A) => {

    const dfs = (i, j) => {

        visited[i][j] = true

        for(let d = 0; d < dx.length; d++){

            let r = i + dx[d]
            let c = j + dy[d]

            if(r < n && c < m && r >= 0 && c >= 0 && visited[r][c] == false && A[r][c] == "X"){
              
                dfs(r, c)

            }
        }

    }
    let n = A.length 
    let m  = A[0].length 

    const visited = Array.from({length: n}, () => Array(m).fill(false))

    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]
    let count = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){

            if(A[i][j] == "X" && visited[i][j] == false){
                count++
                dfs(i, j)

            }
        }
    }
    return count
}


console.log(blackShapes(["XOX","XOX","OOX"]))