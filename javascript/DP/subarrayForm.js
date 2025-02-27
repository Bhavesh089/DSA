
var minNumberOperations = function(target) {
    let n = target.length
    let solveArray = new Array(n).fill(0)
    let counter = 0
    let targetMap = new Map()

    for(let i= 0; i < n; i++){

        targetMap.set(i, target[i])
    }
    let zeroIndexTrack = 0
    let startIndex = zeroIndexTrack
    while(zeroIndexTrack < n){
        console.log(targetMap)
        startIndex = zeroIndexTrack
        if(targetMap.get(startIndex) == 0){

            while(startIndex < n && targetMap.get(startIndex) == 0){
                zeroIndexTrack = startIndex
                startIndex++
            }
            zeroIndexTrack = startIndex
        } else if(targetMap.get(startIndex) > 0){

            end = startIndex
            flag = false
            while(end < n && targetMap.get(end) > 0 ){

                if(targetMap[end] == 0){
                    break
                }
                targetMap.set(end, (targetMap.get(end) - 1))
                end++
            }

            console.log('start:', startIndex, 'end:',end)
            while(startIndex <= end-1){
                solveArray[startIndex]++
                startIndex++
                flag = true
            }
            if(flag){
                counter++
            }
            flag = false
        }
        // console.log(zeroIndexTrack)
    }

    return counter
};

console.log(minNumberOperations([3,1,5,4,2]))