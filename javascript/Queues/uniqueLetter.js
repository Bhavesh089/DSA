class queue{

    constructor(){
        this.s = []

    }

    enqueue(ele){
        this.s.push(ele)
        this.tail++
    }

    dequeue(){
        let ele = this.s[0]
        this.s.shift()
        return ele
    }

    size(){
        return this.s.length
    }
    peek(){

        if(this.size() == 0){
            return undefined
        }else{
            return this.s[0]
        }
    }

}

const unqLetters = (A) => {

    let q = new queue()
    let result = A[0]
    q.enqueue(A[0])
    let top = q.peek()
    let dict = {}
    dict[A[0]] = 1
    for(i = 1; i< A.length ; i++){

        q.enqueue(A[i])
        dict.hasOwnProperty(A[i]) ? dict[A[i]]++ : dict[A[i]] = 1
        top = q.peek()
        if(top == A[i]){

            while(dict[top] >= 2){
                q.dequeue()
                top = q.peek()
            }
        }

        if(top == undefined){
            result += "#"
        } else {
            result += top
        }
    }
    return  result
}

console.log(unqLetters("abcabc"))