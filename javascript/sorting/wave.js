const solve = (wave) => {

    wave.sort((a,b) => a - b)

    for(i = 1; i < wave.length; i+= 2){
        [wave[i-1], wave[i]] = [wave[i], wave[i-1]]
    }

    return wave
}


console.log(solve([1,2,3,4]))