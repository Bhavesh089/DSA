const Student = require("./student")

const s = new Student({name: "bhavesh"})

s.age = 20
t = s
console.log(s.getName())
s.name = "hello"
console.log(s)
t.age += 10

console.log(s.age)