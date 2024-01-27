class MinHeapKplaces{

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


class MaxHeap{

    constructor(){
        this.heap = []
    }

    insert(val){
        this.heap.push(val)
        this.heapifyUp()
    }

    delete(){
        if(this.heap.length == 0){
            return null 
        }
        if(this.heap.length == 1){
            return this.heap.pop()
        }
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
    }

    getMax(){
        if(this.heap.length == 0){
            return null 
        }
        return this.heap[0]
    }

    heapifyDown(){

        let i = 0
        let largest = i
        let n = this.heap.length
        while(true){

            let lst = 2*i+1
            let rst = 2*i+2
            largest = i
            if(lst < this.heap.length && this.heap[lst] > this.heap[largest]){
                largest = lst 
            }

            if(rst < this.heap.length && this.heap[rst] > this.heap[largest]){
                largest = rst 
            } 

            if(this.heap[largest] != this.heap[i]){
                [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
                i = largest
            }else {
                break
            }
        }
    }

    heapifyUp(){
        let i = this.heap.length - 1

        while(i > 0){

            let p = Math.floor((i - 1)/ 2)

            if(this.heap[p] < this.heap[i]){
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
                i=p
            } else {break}
        }
    }
}

const solve = (arr) => {

    let l = new MaxHeap()
    let r = new MinHeapKplaces()

    let result = []
    l.insert(arr[0])
    result.push(arr[0])
    for(let i = 1; i < arr.length; i++){
        if(l.getMax() >= arr[i]){
            l.insert(arr[i])
        }else{
            r.insert(arr[i])
        }
        // console.log(l.heap, 'l', r.heap, 'r', arr[i], 'i', 'before adjusting')

        if(Math.abs((l.heap.length - r.heap.length)) > 1){
            // console.log(min, 'min--<')
            if(l.heap.length > r.heap.length){
                let max = l.getMax()
                r.insert(max)
                l.delete()
            } else {
                let min = r.getMin()
                l.insert(min)
                r.delete()
            }
        }
        // console.log(l.heap, 'l', r.heap, 'r', arr[i], 'i', 'after adjusting')

        if(l.heap.length > r.heap.length){
            result.push(l.getMax())
        } else if(l.heap.length < r.heap.length){
            result.push(r.getMin())
        } else {
            let evenMedian = (l.getMax())

            result.push(evenMedian)
        }
        // console.log(result,'rresult-->')
    }

    return result
} 


console.log(solve([5, 17, 100, 11]))