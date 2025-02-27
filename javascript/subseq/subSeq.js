// const solve = (A) => {

//             // let ans = [[]], temp = [];
//         // A.sort((a, b) => a - b);
//         // function helper(arr, i, curr) {
//         //     if(i == arr.length) {
//         //         return;
//         //     }
//         //     curr.push(arr[i]);
//         //     ans.push(curr.slice());
//         //     helper(arr, i + 1, curr);
//         //     curr.pop();
//         //     helper(arr, i + 1, curr);
//         // }
//         // helper(A, 0, temp);

//         const checkBit = (i, j) => {

//             return i >> j & 1 
//         }

//         numberOfSubsets = 1 << A.length
//         let ans = []
//         for(i = 0; i < numberOfSubsets; i++){
//             subsets = []
//             for(j = 0; j < A.length; j++){
               
//                 if(checkBit(i, j) == 1){
//                     subsets.push(A[j])
//                 }
//             }
//             ans.push(subsets)
//         }

//         return ans;
// }

const solve = ( op, i,n, a) => {

    if(i == n){
        console.log(op)
        result.push(op)
        return 
    }

    let op1 = [...op]
    let op2 = [...op]

    op2.push(a[i])
    // console.log(op1, op2)
    solve( op1, i+1, n,a)
    solve( op2, i+1, n, a)
}
let result = []
A = [9,-20,-11,-8,-4,2,-12,14,1,-18]
b = A.sort((a,b) => a - b)
solve([],0, A.length, b)
        
// console.log(result)

const uniqueSubsets = Array.from(new Set(result)).sort();
console.log(uniqueSubsets, "this is sorting result")

// const solve = (op, i, subsets, A, n) => {
//     if (i === n) {
//         subsets.push(op); // Push the current subset to the subsets array
//         return;
//     }

//     // Include the current element
//     const op1 = [...op];
//     op1.push(A[i]);
//     const op2 = [...op];
//     solve(op1, i + 1, subsets, A, n);
//     solve(op2, i + 1, subsets, A, n);
// }

// const printSubsets = (A) => {
//     const subsets = [];
//     solve([], 0, subsets, A, A.length);

//     // Print all subsets
//     subsets.forEach(subset => {
//         console.log(subset);
//     });
// }

// const A = [1, 2, 3];
// printSubsets(A);

// A = [1, 2, 3]
// A.sort((a,b) => a - b)
// console.log(solve([],0,[], A.length, A))