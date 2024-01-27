class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) {
            return 0;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let currentIndex = 0;
        let n = this.heap.length;

        while (true) {
            let left = 2 * currentIndex + 1;
            let right = 2 * currentIndex + 2;
            let smallestChildIndex = null;

            if (left < n && (smallestChildIndex === null || this.heap[left] < this.heap[smallestChildIndex])) {
                smallestChildIndex = left;
            }

            if (right < n && (smallestChildIndex === null || this.heap[right] < this.heap[smallestChildIndex])) {
                smallestChildIndex = right;
            }

            if (smallestChildIndex !== null && this.heap[smallestChildIndex] < this.heap[currentIndex]) {
                [this.heap[smallestChildIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[smallestChildIndex]];
                currentIndex = smallestChildIndex;
            } else {
                break;
            }
        }
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[parentIndex] > this.heap[currentIndex]) {
                [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }
}

const solve = (A) => {
    let h = new MinHeap();

    for (let i = 0; i < A.length; i++) {
        h.insert(A[i]);
    }

    let sum = 0;

    while (h.heap.length > 1) {
        let one = h.extractMin();
        let two = h.extractMin();
        const c = one + two;
        sum += c;
        h.insert(c);
    }

    return sum;
};

console.log(solve([1, 2, 3, 4, 5]));
