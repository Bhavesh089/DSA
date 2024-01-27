
const fs = require('fs')


s1 = fs.readFileSync('/Users/bhaveshkamuni/myprojects/DSA/javascript/convertStatus/filtered_data_fulfiller_code.json')
s2 = fs.readFileSync("/Users/bhaveshkamuni/myprojects/DSA/javascript/convertStatus/fulfillers.json")

s1 = JSON.parse(s1)
s2 = JSON.parse(s2)

 count1 = 0
s1.forEach((obj1) => {
    count1++
    console.log(count1)
    s2.forEach((obj2) => {

        if(obj1.fulfiller_id === obj2.id){
            obj1.fulfiller_code = obj2.code
        }
    })
})

fs.writeFileSync("fulfiller_code.json", JSON.stringify(s1))