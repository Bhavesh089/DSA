exports.gcd = (A, B) => {

    if(B == 0){
        console.log(B, A)
        return A
    }
    return this.gcd(B, (Number(A) % Number(B)).toString() )
}

exports.hello_world = (a) => {
    return console.log(a)
}

console.log(this.hello_world)

console.log(this.gcd("678728391838182039102", "678728391838182039103"))

// product#74ab742d-4151-4acf-8479-e31f1a3e0096

// product#d3bcb37d-9eff-49cb-8d44-0a3ee1b73557