const rotateMat = (arr) => {

    const n = arr.length
    const m = arr[0].length
    const swap = (i, j) => {

        [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
    }


    for(let i=0; i < n; i++){
        for(let j = i+1; j < m; j++){

            swap(i, j)
        }
    }

    for(let i = 0; i < n; i++){

        js = 0
        je = m - 1

        while(js < je){
            // console.log(i, js, je, '---->')
            [arr[i][js], arr[i][je]] = [arr[i][je], arr[i][js]]

            js++
            je--
        }
    }
    return arr

}


console.log(rotateMat([[1,2,3], [4, 5, 6], [7, 8, 9]]))