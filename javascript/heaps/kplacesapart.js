class MinHeapKplaces{

    constructor(){
        this.heap = []
    }

    insert(val){
        this.heap.push(val)
        this.heapifiUp()
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

        this.heapifiDown()
        return min 
    }

    heapifiDown(){
        let i = 0
        let smallest = i

        while(true){
            let lst = 2*i+1
            let rst = 2*i+2

            smallest = i

            if(lst < this.heap.length && this.heap[lst] < this.heap[smallest]){
                smallest = lst 
            }
            if(rst < this.heap.length && this.heap[rst] < this.heap[smallest]){
                smallest = rst 
            }

            if(this.heap[smallest] != this.heap[i]){
                [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
                i = smallest 
            } else {
                break
            }
        }
    }

    heapifiUp(){
        let i = this.heap.length - 1
        while( i > 0){

            let p = Math.floor((i - 1) / 2)

            if(this.heap[p] > this.heap[i]){
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
                i = p 
            } else {
                break
            }
        }
    }
}

const solve = (A, B) => {

    let h = new MinHeapKplaces()

    for(let i = 0; i < B; i++){
        h.insert(A[i])
    }
    console.log(h.heap)
    for(let j = 0; j < A.length; j++){

        if(j+B < A.length){
            h.insert(A[j+B])
        }
        // console.log(h.getMin())
        A[j] = h.getMin()
    }

    return A 
}

console.log(solve([25,16,11,31,28,20,3,8], 6))