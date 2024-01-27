
    function getMin(arr){
        if(arr.length == 0){
            return null
        }

        if(arr.length == 1){
            return arr.pop()
        }

        let min = arr[0]

        arr[0] = arr.pop()

        heapifyDown(0, arr)

        return min 
    }

    function heapifyDown(i, arr){

        let largest = i
        let n = arr.length
        while(true){
            let l = 2*i + 1
            let r = 2*i + 2

            largest = i

            if(l < n && arr[l] < arr[largest]){
                largest = l 
            }

            if(r < n && arr[r] < arr[largest]){
                largest = r
            }


            if(arr[largest] != arr[i]){
                [[arr[largest], arr[i]]] = [[arr[i], arr[largest]]]
                i = largest
            } else {
                break
            }
        }
    }


const arr = [8, 20, 38, 44, 55, 65, 66, 79, 87, 68, 72, 5, 55, 61, 73, 89, 30, 73, 28, 73, 84, 96, 54, 82, 83, 15, 33, 38, 94, 100, 4, 22, 32, 42, 64, 86, 11, 78]
for(let i = Math.floor((arr.length - 1) / 2); i >= 0; i--){
    heapifyDown(i, arr)
}
console.log(arr)
let n = arr.length
let result = []
for(let j = 0; j < n; j++){
    result.push(getMin(arr))
}

console.log(result)
