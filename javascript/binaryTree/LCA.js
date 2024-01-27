const parent = (root, prev, p)=>{

    if(root == null){
        return 
    }

    p[root.data] = prev
    parent(root.left, root, p)
    parent(root.right, root, p)
}

const level = (root, d, l)=>{

    if(root == null){
        return 
    }

    l[root.data] = d
    level(root.left , d+1, l)
    level(root.right, d+1, l)
}


const LCA = (a, b, c) => {

    let l = {}
    let p = {}
    let d = 0
    let prev = null 

    parent(a, prev, p)
    level(a, d, l)
    let count = 0
    while(l[b] > l[c]){

        b = p[b]
        count++
    }
    while(l[c] > l[b]){

        c = p[c]
        count++
    }

    while(c != b){

        c = p[c]
        b = p[b]
        count++
    }

    return count
    
}



