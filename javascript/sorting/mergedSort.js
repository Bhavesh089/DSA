function mergeSort(arr) {
    const merge = (start, mid, end) => {
      const left = arr.slice(start, mid + 1);
      const right = arr.slice(mid + 1, end + 1);
  
      let i = 0, j = 0, k = start;
  
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          arr[k++] = left[i++];
        } else {
          arr[k++] = right[j++];
        }
      }
  
      while (i < left.length) {
        arr[k++] = left[i++];
      }
  
      while (j < right.length) {
        arr[k++] = right[j++];
      }
    };

    const mergeSortRec = (start, end) => {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        mergeSortRec(start, mid);
        mergeSortRec(mid + 1, end);
        merge(start, mid, end);
      }
    };
  
    mergeSortRec(0, arr.length - 1);
  }
  
  // Example usage:
  const arr = [38, 27, 43, 3, 9, 82, 10];
  mergeSort(arr);
  console.log("Sorted Array:", arr);
  