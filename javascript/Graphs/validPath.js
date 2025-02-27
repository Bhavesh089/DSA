const validPath = (A, B, C, D, E, F) => {

    const q = []

    const visited = Array.from({length: A+1}, () => Array(B+1).fill(false))



    for(let i = 0; i < visited.length; i++){
        for(let j = 0; j < visited[0].length; j++){

            for(let k = 0; k < C; k++){

                let distance = (E[k] - i) * (E[k] - i)  + (F[k] - j) * (F[k] - j) 
                distance = Math.sqrt(distance)

                if(distance <= D){
                    visited[i][j] = true
                    
                }
            }
        }
    }

    visited[0][0] = true
    q.push([0,0])
    let dx = [-1,-1,0,1,1,1,0,-1]
    let dy  = [0,1,1,1,0,-1,-1,-1]

    while(q.length > 0){

        let currNode = q.shift()

        let currR = currNode[0]
        let currC = currNode[1]

        if(currR == A && currC == B ){
            return "YES"
        }
        for(let d = 0; d < dx.length; d++){
            let r = currR + dx[d]
            let c = currC + dy[d]

            if(r <= A && c <=B && r >=0 && c >=0 && !visited[r][c]){
                visited[r][c] = true
                q.push([r,c])
            }
        }

    }
    return "NO"
}

console.log(validPath( x = 2,
    y = 3,
    N = 1,
    R = 1,
    A = [2],
    B = [3]))