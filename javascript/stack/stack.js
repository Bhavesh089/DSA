class Stack {

    constructor(){

        this.array = []
    }


    push(val){

        return this.array.push(val)
    }

    empty(){
        if(this.array.length == 0){
            return true
        } else {
            return false
        }

    }
    pop(){
        if(this.empty()){
            return 'list is empty'
        }
        return this.array.pop()
    }

    getItems(){

        return this.array
    }

    size(){
        return this.array.length
    }
    peek(){
        if(this.empty()){
            return 'list is empty'
        }

        return this.array[this.size() - 1]
    }
}


s = new Stack()

s.push(2)
s.push(3)
s.push(5)
s.push(6)
display = s.getItems()
s.pop()
console.log(display, "this is stack after popping")
empty = s.empty()
empty = s.peek()
s.pop()
s.pop()
s.pop()
s.pop()
a = s.peek()
console.log(a, "peek the element")