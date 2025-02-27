function compare(s1, s2){

    if(s2.length - s1.length > 1){
        return false
    }
    let i = 0
    let j = 0

    while(i <= s1.length && j < s2.length){

        if(s1[i] == s2[j]){
            i++
            j++
        } else {
            j++
        }
    }

    if(j == s2.length && i == s1.length){
        return true
    } else {
        return false
    }
}

const a = ["a", "b", "ac", "abc", "abd", "abcd"]

console.log(compare(a[3], a[5]))