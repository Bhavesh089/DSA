class queue {

    constructor(){
        this.stack1 = []
        this.stack2 = []
    }


    enqueue(x){
        return this.stack1.push(x)
    }

    dequeue(){

        if(this.stack2.length == 0){

            while(this.stack1.length != 0){
                let ele = this.stack1.pop()
                this.stack2.push(ele)
            }
        }

        return this.stack2.pop()
    }

    peek(){
        if(this.stack2.length == 0){

            while(this.stack1.length != 0){
                let ele = this.stack1.pop()
                this.stack2.push(ele)
            }
        }
        return this.stack2[this.stack2.length-1]
    }
}

const pf = (s) => {

    const palindrome = (s) => {

        i = 0
        j = s.length - 1

        while( i < j){

            if(s[i] != s[j]){
                return false
            }

            i++
            j--
        }

        return true
    }
    return palindrome(s) && s.length % 2 == 0
}

const perfectSquare = (A) => {

    let q = new queue()

    q.enqueue("1")
    q.enqueue("2")
    count = 0
    while(A != count ){
        let nextElement = q.dequeue()

        q.enqueue(nextElement + "1")
        q.enqueue(nextElement + "2")

        if(pf(nextElement)){
            count++

            if(A == count){

                return nextElement
            }
        }
    }

}

console.log(perfectSquare(100000))