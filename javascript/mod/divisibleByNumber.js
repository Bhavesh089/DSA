const divisilbeNumber = (A,B) => {

    // mods = {}
    let mods = new Array(B).fill(0)
    for(let i of A){
        let mod = i % B 
        // mods[mod]++
        mods[parseInt(mod)]++

    }

    i = 0
    j = B-1 
    ans = 0
    ans = Math.floor(mods[0] * (mods[0]-1) / 2)
    i++

    while(i < j){

        // console.log(Object.values(mods)[i],Object.values(mods)[j])
        ans += mods[i] * mods[j]
        i++
        j--
    }

    if(B % 2 == 0){
        ans += Math.floor(mods[B/2] * (mods[B/2]-1) / 2)
    }

    return ans % 1000000007
}


// let n = A.length, ans = 0, mod = Math.pow(10, 9) + 7;
// let F = new Array(B).fill(0);
// for (let i = 0; i < n; i++) {
// F[A[i] % B]++;
// }
// ans += (F[0] * (F[0] - 1)) / 2;
// let i = 1, j = B - 1;
// while (i < j) {
// ans += F[i] * F[j];
// i++;
// j--;
// }
// if (B % 2 === 0) {
// ans += (F[B / 2] * (F[B / 2] - 1)) / 2;
// }
// return ans % mod;
console.log(divisilbeNumber([5,17,100,11],28))