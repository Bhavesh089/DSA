function heapify(arr, n, i) {
    let largest = i;

    while (true) {
        const leftChild = 2 * i + 1;
        const rightChild = 2 * i + 2;

        // Check if left child exists and is greater than root
        if (leftChild < n && arr[leftChild] < arr[largest]) {
            largest = leftChild;
        }

        // Check if right child exists and is greater than the largest so far
        if (rightChild < n && arr[rightChild] < arr[largest]) {
            largest = rightChild;
        }

        // If the largest is not the root, swap them
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            i = largest; // Move to the next level of the heap
        } else {
            break; // If no swaps were made, the heap property is restored, and we can exit the loop
        }
    }
}

// Example usage:
const arr = [5,2,3,4];
const n = arr.length;
heapify(arr, n, 0);

console.log(arr)

// // Build a max-heap
// for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     heapify(arr, n, i);
// }

// console.log("Max Heap:", arr);
