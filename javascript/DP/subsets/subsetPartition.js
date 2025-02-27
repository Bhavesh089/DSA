//recursion
let arr = [1,2,3,5,1]


let sum = 0
for(let x  of arr){
    sum += x
}

if(sum % 2 != 0){
    return false
}
console.log(solve(arr.length, Math.floor(sum / 2)))

function solve(m, target){

    if(target == 0){
        return true
    }

    if(m == 0){

        if(arr[m] == target){
            return true
        }else {
            return false
        }
    }

    let ans1 = solve(m-1, target)

    let ans2 = false

    if(arr[m] <= target){
        ans2 = solve(m-1, target - arr[m])
    }

    return ans1 || ans2
}