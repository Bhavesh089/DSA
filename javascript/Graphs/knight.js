const knight = (a,b,c,d, e, f) => {


    let visited = Array.from({length: a + 1}, () => Array(b+1).fill(false))
    let q = []
    let step = 0
    q.push([c,d, step])
    visited[c][d] = true
    let dx = [-1,-2,-2,-1,1,2,2,1]
    let dy  = [-2,-1,1,2,-2,-1,1,2]



    while(q.length > 0){

        let curr = q.shift()
        let currR = curr[0]
        let currC = curr[1]
        let currStep = curr[2]
        if(currR == e && currC == f){
            return currStep
        }


        for(let d = 0; d < dx.length; d++){

            let r = currR + dx[d]
            let c = currC + dy[d]
            let step = currStep + 1
            console.log(r, c)
        if(r < a+1 && r >= 1 && c < b+1 && c >= 1 && !visited[r][c] ){
            visited[r][c] = true
            q.push([r, c, step])
        }
        
        }
    }


    return - 1


}

A = 2
B = 4
C = 2
D = 1
E = 4
F = 4
console.log(knight(A, B, C, D, E, F))