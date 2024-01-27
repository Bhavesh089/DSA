class Queue{

    constructor(){
        this.head = 0
        this.tail = 0
        this.queueStore = []
    }

     enqueue(ele){
        
        this.queueStore.push(ele)
        this.tail++
    }

    dequeue(){
        let deleteElement = this.queueStore[this.head]
        delete this.queueStore[this.head]
        this.head++
        return deleteElement
    }

    peek(){
        console.log(this.queueStore)

        return this.queueStore[this.head]
    }
}


let s = new Queue()
s.enqueue(5)
s.enqueue(6)
s.dequeue()
s.enqueue(7)
s.dequeue()

console.log(s.peek())