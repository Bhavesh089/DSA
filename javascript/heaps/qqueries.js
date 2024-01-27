class MinHeaptwo{

    constructor(){
        this.heap  = []
    }


    insert(val){
        this.heap.push(val)
        this.upify()
    }

    getMin(){

        if(this.heap.length == 0){
            return null
        }

        if(this.heap.length == 1){
            return this.heap.pop()
        }

        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.downify()
        return min 
    }


    downify(){
        
        let i = 0

        while(true){

            let lt = 2*i+1
            let rt = 2*i+2
            let smallest = i

            if(lt < this.heap.length && this.heap[lt] < this.heap[smallest]){
                smallest = lt
            }

            if(rt < this.heap.length && this.heap[rt] < this.heap[smallest]){
                smallest = rt
            }

            if(this.heap[smallest] != this.heap[i]){

                [[this.heap[smallest], this.heap[i]]] = [[this.heap[i], this.heap[smallest]]]

                i = smallest
            } else{
                break
            }
        }
    }

    upify(){

        let l = this.heap.length - 1

        while(l > 0){

            let p = Math.floor((l - 1) / 2)

            if(this.heap[p] > this.heap[l]){
                [[this.heap[p], this.heap[l]]] = [[this.heap[l], this.heap[p]]]
            l = p 
            } else {
                break
            }
        }
    }

}

const solve = (q) => {
    let h = new MinHeaptwo()
    let result = []
    for(let qq = 0; qq < q.length; qq++){
        if(q[qq][1] == -1){

            if(h.heap.length == 0){
                result.push(-1)
            }else {
            result.push(h.getMin())
            }
        } else {
            h.insert(q[qq][1])
        }
    }

    return result
}

console.log(solve([[2, 5], [2, 3], [2, 1], [1, -1], [1, -1]]))