const solve = (A) => {

    const visited = Array.from({length : A.length }, () => Array(A[0].length).fill(false))
    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]
    const dfs = (mat, i, j) => {

        if(i >= mat.length || j >= mat[0].length || i < 0 || j < 0 || (visited[i][j] == true) || (mat[i][j] == 0)){
            console.log(i, j)
            return 
        }
        for(let t = 0; t < 4; t++){

            newI = i + dx[t]
            newJ = j + dy[t]

            visited[i][j] = true
            dfs(mat, newI, newJ)
        }
    }
    let c = 0
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){

            if(A[i][j] == 1){
                if(visited[i][j] == false){
                    c++
                    dfs(A, i, j)
                }
            }
        }
    }

    return c 
}

console.log(solve([[0,0,1,0,1,0,1,1,1],[0,1,0,0,1,1,1,0,1]]))