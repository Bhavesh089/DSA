const pairWithDiff = (A, B) => {

    A.sort(function(a,b){return a - b;})
    let n = A.length;
    let p1 = 0;
    let p2 = 1;
    let count = 0;
    while(p2 < n ) {
        let v1 = A[p1];
        let v2 = A[p2];
        if(A[p2] - A[p1] == B) {
            count++;
            while(p1 < n && A[p1] == v1 ) {
                p1++;
            }
            while(p2 < n && A[p2] == v2 ) {
                p2++;
            }
        } else if(A[p2] - A[p1] > B) {
            p1++;
            if(p1 === p2) {
                p2++;
            }
        } else {
            p2++;
        }
    }
    return count;
}

console.log(pairWithDiff([1, 5, 3, 4, 2], 3))