class LinkedList{
    constructor(row, col, step){
        this.row = row
        this.col = col
        this.step = step
    }
}
const mazeBfs = (A, B, C) => {

    let visited = Array.from({length: A.length }, () => Array(A[0].length).fill(false))

    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]
    let q = []

    q.push(new LinkedList(B[0], B[1], 0))

    while(q.length > 0){

        let currNode = q.shift()

        let rowNode = currNode.row
        let colNode = currNode.col
        
        if(rowNode == C[0] && colNode == C[1]){
            return currNode.step
        }

        for(let d = 0; d < dx.length; d++){

            let row = rowNode
            let col = colNode
            let step = currNode.step


            while(row >= 0 && row < A.length && col >= 0 && col < A[0].length && A[row][col] == 0){
                row += dx[d]
                col += dy[d]
                step++
            }

            row -= dx[d]
            col -= dy[d]
            step--

            if(!visited[row][col]){
                visited[row][col] = true
                q.push(new LinkedList(row, col, step))
            }
        }
    }

    return -1
}

let A = [ [0, 0], 
      [0, 0] ]
let B = [0, 0]
let C = [0, 1]

console.log(mazeBfs(A, B, C))