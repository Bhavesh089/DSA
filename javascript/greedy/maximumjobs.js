const maxJobs = (A, B) => {

    let indicies = Array.from(A.keys())

    indicies.sort((a, b) => {
        if (A[a] !== A[b]) {
          return A[a] - A[b];
        } else {
          return B[a] - B[b];
        }
      });

    let sortedA = indicies.map((i) => A[i])
    let sortedB = indicies.map((i) => B[i])
    console.log(sortedA, sortedB)
    let startTime = sortedA[0]
    let endTime = sortedB[0]
    let jobs = 1
    for(let i = 1; i < A.length; i++){
        if(endTime <= sortedA[i]){
            jobs++
            endTime = sortedB[i]
        } else if(endTime >= sortedB[i])(
            endTime = sortedB[i]
        )
    }
    return jobs
}
A = [3,7,12,4,10,8]
B = [10,16,17,8,13,9]
console.log(maxJobs(A, B))