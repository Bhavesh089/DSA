const courses = (A, B, C) => {

    let parent = []

    for(let i = 0; i <= A; i++){

        parent.push(i)
    }

    const find = (x) => {
        if(parent[x] == x){
            return x
        }

        parent[x] = find(parent[x])

        return parent[x]
    }


    const union = (x, y) => {

        let  parentX = find(x)
        let parentY = find(y)

        if(parentX == parentY){
            return 0
        }

        parent[parentY] = parentX
        return 1 
    }

    let ans = 1
    for(let i = 0; i < B.length; i++){
        ans = ans & union(B[i], C[i])
    }
    return ans 
}
A = 3
B = [1,2,3]
C = [2,3,1]
console.log(courses(A, B, C))