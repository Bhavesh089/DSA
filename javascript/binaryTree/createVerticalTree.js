class Tree{

    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Info{

    constructor(node, l){
        this.node = node
        this.l = l
    }
}

let t = new Tree(1)
t.left = 2
t.right = 3

let i = new Info(t, 0)
let j = new Info(i.node.left, i.l - 1)
let k = new Info(i.node.right, i.l +1)
console.log(i)
console.log(j)
console.log(k)