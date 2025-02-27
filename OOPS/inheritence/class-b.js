const a = require("./class-a")

class b extends a {

    constructor(scores, grade){
        super()
        console.log('hello b')
    }
}
const student = new b(23, "A", "rahul", 15)

console.log(student)