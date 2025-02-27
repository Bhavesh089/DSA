// var longestPalindrome = function(s) {

//     if(s.length == 1){
//         return s
//     }

//     maxLength = 0
//     start = 0

//     function solve(l, r){

//         while(l >= 0 && r < s.length && s[l] == s[r]){
//             l--
//             r++
//         }

//         return r - l - 1
//     }

//     for(let i = 0; i < s.length;  i++){
//         len1 = solve(i, i)//odd
//         len2 = solve(i, i+1)//even

//         currLength = Math.max(len1, len2)

//         if(currLength > maxLength){
//             maxLength = currLength
//             start = i - Math.floor((maxLength - 1) / 2)
//         }
//     }
//     console.log(s, start, maxLength)
//     return s.substring(start, start+maxLength)

// };

// /**
//  * @param {string} s
//  * @return {string}
//  */
var longestPalindrome = function(s) {
    if (s.length === 0) return "";

    // Transform the string with separators to handle even-length palindromes
    let t = "#" + s.split("").join("#") + "#";
    let n = t.length;
    let p = new Array(n).fill(0);
    let r = 1, l = 1; // Start r and l from 1

    // Manacher's Algorithm
    for (let i = 1; i < n; i++) {
        let mirror = l + (r - i); // Mirror index calculation
        p[i] = r > i ? Math.min(r - i, p[mirror] || 0) : 0;

        // Expand around center
        while (i + p[i] + 1 < n && i - p[i] - 1 >= 0 && t[i + p[i] + 1] === t[i - p[i] - 1]) {
            p[i]++;
        }

        // Update center and right boundary if expanded further
        if (i + p[i] > r) {
            l = i - p[i];
            r = i + p[i];
        }
    }

    // Find max length and center index
    let maxLength = 0, center = 0;
    for (let j = 1; j < n - 1; j++) {
        if (p[j] > maxLength) {
            maxLength = p[j];
            center = j;
        }
    }

    // Extract the longest palindrome from original string
    let start = Math.floor((center - maxLength) / 2);
    let longestPal = s.substring(start, start + maxLength);

    console.log("Transformed String:", t);
    console.log("Palindrome Lengths:", p);
    console.log("Max Length:", maxLength, "Center:", center);
    console.log("Longest Palindromic Substring:", longestPal);

    return longestPal;
};

console.log(longestPalindrome("cbbd"));  // Output: "bb"


