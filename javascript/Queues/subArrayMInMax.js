
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
    min(){
        return Math.min(...this.queueStore)
    }
}

const minMax = (A, B) => {

    let j = 0
    let i = 0
    let min = Infinity
    let max = -Infinity
    let sum = 0
    let q = new queue()
    while(j < A.length ){

        if(A[j] > max){
            max = A[j]
        }

        if(A[j] < min){
            min = A[j]
        }

        q.enqueue(A[j])

        if(j - i + 1 == B){
            console.log(min, max, min +max)
            sum = BigInt(BigInt(sum) + (BigInt(max) + BigInt(min))) 

            let delEle = q.dequeue()

            if(delEle == max && delEle == min){
                s = q.max()
                max = s
                min = s
            }
            else if(delEle == max){
                max = q.max()
            }
            else if(delEle == min){
                max = q.min()
            }
            
            i++

        }

        j++
    }

    return parseInt(BigInt(sum) + (1000000007n))
}


console.log(minMax([-4,12,8,1,-6,-1,-5,-8,-2,-10,18], 5))