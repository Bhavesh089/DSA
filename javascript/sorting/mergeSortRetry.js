const mergeSort = (arr) => {

    const merged = (start, mid, end) => {

        k = start
        i = 0
        j = 0

        let left = arr.slice(start, mid + 1)
        let right = arr.slice(mid+1, end+1)

        while(i < left.length && j < right.length){

            if(left[i] < right[j]){

                arr[k] = left[i]
                k++
                i++
            } else {
                arr[k] = right[j]
                k++
                j++
            }
        }

        while(i < left.length){
            arr[k] = left[i]
            k++
            i++
        }
        while(j < right.length){
            arr[k] = right[j]
            k++
            j++
        }
    }

    const merging = (start, end) => {

        if(start < end){

            let mid = Math.floor((start + end) / 2)

            merging(start, mid)
            merging(mid+1, end)
            merged(start, mid, end)
        }
    }
    start = 0
    end = arr.length - 1

    return merging(start, end)
}
a = [2,6,4,4,1]
console.log(mergeSort(a))
console.log(a)