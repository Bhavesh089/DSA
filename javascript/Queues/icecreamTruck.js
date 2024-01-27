function findBusiestSections(A, B) {
    const result = [];
    const queue = [];
  
    // If B is greater than or equal to the length of the array, return the max element
    if (B >= A.length) {
      const maxElement = Math.max(...A);
      return [maxElement];
    }
  
    // Helper function to enqueue an index into the queue
    const enqueue = (index) => {
      while (queue.length > 0 && A[index] >= A[queue[queue.length - 1]]) {
        queue.pop();
      }
      queue.push(index);
    };
  
    // Helper function to dequeue indices that are out of the current window
    const dequeue = (index) => {
      while (queue.length > 0 && queue[0] <= index - B) {
        queue.shift();
      }
    };
  
    // Initialize the queue and result for the first window
    for (let i = 0; i < B; i++) {
      enqueue(i);
    }
    result.push(A[queue[0]]);
  
    // Iterate through the array to find the maximum for each B consecutive sections
    for (let i = B; i < A.length; i++) {
      dequeue(i);
      enqueue(i);
      result.push(A[queue[0]]);
    }
  
    return result;
  }
  
  // Example usage:
  console.log(findBusiestSections([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]
  console.log(findBusiestSections([1, 2, 3, 4, 2, 7, 1, 3, 6], 6)); // Output: [7, 7, 7, 7]
// console.log(icecream([1, 2, 3, 4, 2, 7, 1, 3, 6],6))