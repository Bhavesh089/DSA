const sortedPermu = (A) => {
    counter =  {}
    for(x of A){
        if(x in counter){
            counter[x] += 1 
        } else {
            counter[x] = 1
        }
    }


    const sorted = A.sort((a, b) => a - b)
    

}