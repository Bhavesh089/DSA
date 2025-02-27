const msp = (A,B,C, D) => {

    class MinHeaptwo{

        constructor(){
            this.heap  = []
        }
    
    
        insert(val){
            this.heap.push(val)
            this.upify()
        }
    
        getMin(){
    
            if(this.heap.length == 0){
                return null
            }
    
            if(this.heap.length == 1){
                return this.heap.pop()
            }
    
            let min = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.downify()
            return min 
        }
    
    
        downify(){
            
            let i = 0
    
            while(true){
    
                let lt = 2*i+1
                let rt = 2*i+2
                let smallest = i
    
                if(lt < this.heap.length && this.heap[lt][1] < this.heap[smallest][1]){
                    smallest = lt
                }
    
                if(rt < this.heap.length && this.heap[rt][1] < this.heap[smallest][1]){
                    smallest = rt
                }
    
                if(this.heap[smallest][1] != this.heap[i][1]){
    
                    [[this.heap[smallest], this.heap[i]]] = [[this.heap[i], this.heap[smallest]]]
    
                    i = smallest
                } else{
                    break
                }
            }
        }
    
        upify(){
    
            let l = this.heap.length - 1
    
            while(l > 0){
    
                let p = Math.floor((l - 1) / 2)
    
                if(this.heap[p][1] > this.heap[l][1]){
                    [[this.heap[p], this.heap[l]]] = [[this.heap[l], this.heap[p]]]
                l = p 
                } else {
                    break
                }
            }
        }
    
    }

    let Actsrc
    let ActWeight
    const createAdj = (a, b, c) => {
        let adj = {}

        for(let i = 0; i < a; i++){
            console.log
            let src = b[i][0]
            let dst = b[i][1]
            let w = b[i][2]

            if(c == src || c == dst){
                Actsrc = src
                ActWeight = w
            }
            if(!adj[src]){
                adj[src] = []
            }

            if(!adj[dst]){
                adj[dst] = []
            }
            adj[src].push([dst, w])
            adj[dst].push([src, w])
        }

        return adj
    }

    const adj = createAdj(A, B, C)

    const q = new MinHeaptwo()

    const minDist = Array(A).fill(Infinity)
    console.log(adj, 'this is adj')
    minDist[Actsrc] = ActWeight
    q.insert([Actsrc, ActWeight])

    while(q.heap.length > 0){

        let currNode = q.getMin()
        console.log(currNode, "this is current node")
        for(let e of adj[currNode[0]]){

            let cw = e[1]

            let tw = cw + currNode[1]

            if(tw < minDist[e[0]]){

                minDist[e[0]] = tw
                q.insert([e[0], tw])
            }
        }


    }

    return minDist[D]


}

A = 2
B = [   [0, 1, 1]] 
C = 0
D = 1
console.log(msp(A, B, C, D))