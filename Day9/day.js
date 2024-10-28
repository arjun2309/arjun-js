//  last element from array
a = "apple"
console.log(a[a.length-1])

// int & string

let c = [1,2,3,['apple','banana','cherry'],4]
console.log(c)
console.log(c[3])
console.log(c[3][1])

// 2 d matrices
let d  = [[1,2,3],[4,5,6],[7,8,9]]
e = [1,2,[4,5,6,['a','b','c',['e','f'],2],5,6,
    [8,7,9,[2,7,85,['apple'],["orange",
        "banana"],
     ,8],9],3,4],70]
 console.log(e[2][6][3][4][1][0][3])

 // manipulate
// push
let g = ['a','b','c','d','e','f']
g.push('g')
console.log(g)

// pop
let h = ['a','b','c','d','e','f']
console.log(h.pop())
console.log(h)

// shift
let i = ['a','b','c','d','e','f']
console.log(i.shift())
console.log(i)

// unshift
let j = ['a','b','c','d','e','f']
console.log(j.unshift('A'))
console.log(j)

// delete
let k = ['a','b','c','d']
delete k[2]
console.log(k)

// remove

// splice 
// 1 st parameter = starting index
// 2 nd parameter = no of elements
// 3 rd parameter = values to be inserted
let l = ['a','b','c','d','e']
l.splice(2,2)
console.log(l)

//      console.log(d[0])
// console.log(d[0][1])

// let e  = [[1,2,3],[4,5,[5.1,5.2,5.3],6],[7,8,9]]
// console.log(e[0])
// console.log(e[1][2][2])
