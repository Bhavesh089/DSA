const rottenOranges = (A) => {
    class LL{
        constructor(row,col,time){
            this.row = row
            this.col = col
            this.time = time
        }

    }

    const q = []
    const n = A.length
    const m = A[0].length

    let visited = Array.from({length: n}, () => Array(m).fill(0))

    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1]

    let countFrest = 0

    let track = 0


    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){

            if(A[i][j] == 2){
                q.push(new LL(i, j, 0))
                visited[i][j] = 2 
            }else if (A[i][j] == 1){
                countFrest++
            }
        }
    }

    let ans = -1

    while(q.length > 0){

        let cro  = q.shift()

        ans = Math.max(cro.time, ans)

        for(let d = 0; d < dx.length; d++){

            let r = cro.row + dx[d]
            let c = cro.col + dy[d]

            if(r >= 0 && r < n && c >= 0 && c < m && A[r][c] == 1){

                if(!visited[r][c]){
                    q.push(new LL(r, c, cro.time + 1))
                    visited[r][c] = 2
                    track++
                }
            }
        }
    }

    return track == countFrest ? ans : -1
}

console.log(rottenOranges([   [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]   ]))