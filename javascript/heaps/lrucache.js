class Minheap{

    constructor(){

        this.heap = []
        this.map = new Map()
    }

    insert(node){
        this.heap.push(node)
        this.heapifyUp(this.heap.length - 1)
    }

    getMin(){
        
        if(this.heap.length== 1){
            return this.heap.pop()
        }

        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.map.delete(0)
        this.map.set(this.heap[0].key, 0)

        this.heapifyDown(0)
        return min 
    }

    nodeupdate(node){

        let index = this.map.get(node.key)
        this.heapifyUp(index)
        this.heapifyDown(index)
    }

    heapifyUp(currentIdx){

        while(currentIdx > 0){

            let parent = Math.floor(currentIdx-1/2)

            if(this.heap[parent].time > this.heap[currentIdx].time){

                [this.heap[parent], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parent]]

                this.map.set(this.heap[parent].key, parent)
                this.map.set(this.heap[currentIdx].key, currentIdx)
                currentIdx = parent
            } else {
                break
            }

        }
    }

    heapifyDown(i){
        let largest = i

        while(true){

            let l = 2*i + 1
            let r = 2*i + 2

            if(l < this.heap.length && this.heap[l].time < this.heap[largest].time){
                largest = l 
            }

            if(r < this.heap.length && this.heap[r].time < this.heap[largest].time){
                largest = r
            }


            if(largest != i){
                [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]]
                this.map.set(this.heap[largest].key, largest)
                this.map.set(this.heap[i].key, i)
                i = largest
            } else {
                break
            }
        }
    }
}



class lrucache{


    constructor(capacity){
        this.capacity = capacity
        this.minheap = new Minheap()
        this.map = new Map()
        this.timeStamp = 0
    }


    put(key, value){
        this.timeStamp++
        
        if(this.map.has(key)){
            let node = this.map.get(key)
            node.time = timeStamp 
            node.value = value
            this.map.set(key, node)
            this.minheap.nodeupdate(node)
        } else {
            if(this.map.size >= this.capacity){
                
                let oldest = this.minheap.getMin()
                this.map.delete(oldest.key)
                // console.log(oldest, "this is oldest-->")
            }
            let newNode = {key: key, value: value, time: this.timeStamp}
            this.map.set(key, newNode)
            this.minheap.insert(newNode)
        }
    }

    get(key){
        
        if(!this.map.has(key)){
            return -1 
        }

        this.timeStamp++

        let node = this.map.get(key)
        node.time = this.timeStamp
        this.map.set(key, node)
        this.minheap.nodeupdate(node)

        return node 
    }
}


let lruCache = new lrucache(2);
lruCache.put(1, 1); // cache is {1=1}
lruCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lruCache.get(1));    // returns 1
lruCache.put(3, 3); // evicts key 2, cache is {1=1, 3=3}
console.log(lruCache.get(1));    // returns -1 (not found)
lruCache.put(4, 4); // evicts key 1, cache is {4=4, 3=3}
console.log(lruCache.get(1));    // returns -1 (not found)
console.log(lruCache.get(3));    // returns 3
console.log(lruCache.get(4));