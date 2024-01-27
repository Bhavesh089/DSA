class queue{

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
        let delEle = this.queueStore[0]
        this.queueStore.shift()
        return delEle
    }

    peek(){
        console.log(this.queueStore)

        return this.queueStore[this.head]
    }

    max(){
        return Math.max(...this.queueStore)
    }
}


const icecreamTruck = (A, B) => {

    j = 0
    l = A.length 
    i = 0
    let q = new queue()

    let result = []

    if(B >= l){
        return [Math.max(...A)]
    }
    maxValue = -Infinity
    let delEle
    while(j < l){

        q.enqueue(A[j])
        if(maxValue < A[j]){
            maxValue = A[j]
        }

        if(delEle == maxValue){
            maxValue = q.max()
        }  

        if(B == j - i + 1){
            result.push(maxValue)
            delEle = q.dequeue()
            console.log(delEle)
            i++
        }

        j++
    }

    return result
}

console.log(icecreamTruck([10,9,8,7,6,5,4,3,2,1], 2))