//max heap

class heap{


    constructor(list){

        this.heap = list
    }


    insert(a){

        this.heap.push(a)
        this.heapifyUp()
    }

    getMinAndDelete(){

        
        let min = this.heap[0]
        let last = this.heap.pop()

        this.heap[0] = last
        this.heapifyDown(0)
        return min
    }
    //heapifyup

    heapifyDown(i){

        let largest = i

        while(true){

            let l = 2*i + 1
            let r = 2*i + 2

            if(l < this.heap.length && this.heap[l] > this.heap[largest]){
                largest = l 
            }

            if(r < this.heap.length && this.heap[r] > this.heap[largest]){
                largest = r
            }


            if(largest != i){
                [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]]

                i = largest
            } else {
                break
            }
        }
    }

    printheap(){
        return this.heap
    }
    heapifyUp(){

        let currentIdx = this.heap.length-1

        while(currentIdx > 0){

            let parent = Math.floor(currentIdx-1/2)

            if(this.heap[parent] < this.heap[currentIdx]){

                [this.heap[parent], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parent]]

                currentIdx = parent
            } else {
                break
            }

        }
    }
}

a = [5,2,1,3,4]
let l = new heap(a) 

for(i = Math.floor(a.length/2)-1; i >= 0; i--){
    l.heapifyDown(i)
}

l.insert(6)
console.log(l.printheap())
console.log(l.getMinAndDelete())
console.log(l.printheap())
