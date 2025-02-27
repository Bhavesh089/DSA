class MinHeapMin{

    constructor(){
        this.heap = []
    }

    insert(val){
        this.heap.push(val)
        this.heapifiUp()
    }

    getMin(){
        return this.heap[0]
    }

    delete(){
        if(this.heap.length == 0){
            return null 
        }
        if(this.heap.length == 1){
            return this.heap.pop()
        }
        this.heap[0] = this.heap.pop()
        this.heapifiDown()
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
    //sort A and B
    let indicies = Array.from(A.keys())
    
    indicies.sort((a,b) => A[a] - A[b])

    let sortedA = indicies.map((i) => A[i])
    let sortedB = indicies.map((i) => B[i])

    let h = new MinHeapMin()

    h.insert(sortedB[0])
    let curr = 1
    for(let i = 1; i< A.length; i++){
        if(curr < sortedA[i]){
            h.insert(sortedB[i])
            curr++
        } else {
            let min = h.getMin()
            if(min < sortedB[i]){
                h.delete()
                h.insert(sortedB[i])
            }
        }
    }
    let sum = 0
    for(let j = 0; j< h.heap.length; j++){
        sum += h.heap[j]
    }

    return sum 


}
A = [1, 3, 2, 3, 3]
 B = [5, 6, 1, 3, 9]
console.log(solve(A, B))