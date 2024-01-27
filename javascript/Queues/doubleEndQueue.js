class Deque {
    constructor() {
        this.queue = [];
    }

    // Add element to the front of the deque
    addFront(element) {
        this.queue.unshift(element);
    }

    // Add element to the back of the deque
    addBack(element) {
        this.queue.push(element);
    }

    // Remove element from the front of the deque
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue.shift();
    }

    // Remove element from the back of the deque
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.queue.pop();
    }

    // Get the front element without removing it
    peekFront() {
        return this.isEmpty() ? undefined : this.queue[0];
    }

    // Get the back element without removing it
    peekBack() {
        return this.isEmpty() ? undefined : this.queue[this.queue.length - 1];
    }

    // Check if the deque is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Get the size of the deque
    size() {
        return this.queue.length;
    }
}

// // Example Usage:
// const deque = new Deque();
// deque.addBack(2);
// deque.addBack(5);
// deque.addBack(-1);

// // console.log(deque.removeFront()); // Output: 2
// // console.log(deque.removeBack());  // Output: 3
// console.log(deque.peekBack());    // Output: 1
// console.log(deque.removeBack());    // Output: 1
// console.log(deque.peekBack());    // Output: 1

// // console.log(deque.size());         // Output: 1

const maxSubArray = (A, B) => {

    let q = new Deque()
    let sum = 0
    for(let i = 0; i < B; i++){
        while(!q.isEmpty() && A[q.peekBack()] <= A[i]){
            q.removeBack()
        }
        q.addBack(i)
       
    }

    // console.log(A[q.peekFront()], 'max--->')
    sum += A[q.peekFront()]
    l = 1
    r = B

    while(r < A.length){

        if(q.peekFront() == l-1){
            q.removeFront()
        }
        
        while(!q.isEmpty() && A[q.peekBack()] <= A[r]){
            q.removeBack()
        }

        q.addBack(r)
        // console.log(A[q.peekFront()], 'max--->')
        sum += A[q.peekFront()]
        l++
        r++
    }

    return sum % 1000000007

}

const minSubArray = (A, B) => {

    let q = new Deque()
    sum = 0
    for(let i = 0; i < B; i++){
        while(!q.isEmpty() && A[q.peekBack()] >= A[i]){
            q.removeBack()
        }
        q.addBack(i)

       
    }

    // console.log(A[q.peekFront()], 'max--->')
    sum += A[q.peekFront()]
    l = 1
    r = B

    while(r < A.length){

        if(q.peekFront() == l-1){
            q.removeFront()
        }
        
        while(!q.isEmpty() && A[q.peekBack()] >= A[r]){
            q.removeBack()
        }

        q.addBack(r)
        // console.log(A[q.peekFront()], 'max--->')
        sum += A[q.peekFront()]
        l++
        r++
    }

    return sum % 1000000007

}

let a = maxSubArray([2, -1, 3], 2)
let  b = minSubArray([2, -1, 3], 2)
console.log((a + b + 1000000007) % 1000000007)

