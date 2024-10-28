// ARRAY

// replace
// let m = ['a','b','c','d']
// m.splice(2,1,'e')
// console.log(m)
// m.splice(2,1,'s','M')
// console.log(m) 
// ('a','b','s','m','d')
// m.splice(4,1,'e')
// console.log(m)

// slice

// o = [1,2,3,4,5]

// console.log(o.slice(1,4)) 
// console.log(o.slice(-4,-1)) 
// console.log(o.slice(-4,-3))

// reverse

// p = [1,2,3,4,5]
// p.reverse()
// console.log(p)

// join
// used to convert array from string
q = [1,2,3,4,5,6]
let r = q.join()
console.log(r)
console.log(r[0])
console.log(r[1])
// split
s = '1,2,3,4,5'
// s = "html"
let t = s.split(',')
console.log(t)

// merge

// merge arrays
let u = [1,2,3]
let v = [4,5,6]
// let y = u+','+v
console.log(u.concat(v))
// console.log(y)
// let w = [u,v]
// console.log(w)
// spread operator
let y = [...u,...v]
console.log("spread",y)