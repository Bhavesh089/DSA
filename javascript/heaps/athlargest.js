class MinHeapAthlargest{

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

const solve = (a, b) => {
    let h = new MinHeapAthlargest()

    for(let i = 0; i < b - 1; i++){
        h.insert(a[i])
        a[i] = -1 
    }
    h.insert(a[b-1])
    a[b-1] = h.heap[0]
    for(let j = b; j < a.length; j++){
        if(a[j] > h.heap[0]){
            h.heap[0] = a[j]
            h.heapifiDown()
        }
        a[j] = h.heap[0]
    }

    return a 
}

console.log(solve([15, 20, 99, 1], 1))