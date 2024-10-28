// Map,filter,reduce

// map,filter,reduce
    //    executes callback for each array element and returns new array
let a = [20,35,13]
let b = a.map(x => x*83)
console.log(b)
    // difference between map and for each is for each 
    // return a value one by one but map returns a 
    // value by list
// c = a.map(convert)
// function convert(val){
//     return val*85
// }
// console.log(c)

// let c = [40,35,13]
// let d = c.map(x => x>83)
// console.log(d)

const input = [
    {name:'Mahi',age:24},
    {name:'Arjun',age:0},
    {name:'MS',age:23}
]
const output = input.map(x =>  + 0)
console.log(output)

m = [12,26,42,101,235,134]

let n = m.reduce((total,value)=> total + value)
console.log(n)
