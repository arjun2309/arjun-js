// // // asynchronous

// console.log('Hello..')//f1
// function sync(){
//     console.log('step 1')//f3
//     console.log('step 2')//f4
//     console.log('step 3')//f5
// }
// sync()//f2
// let a = 100
// let b=20
// let c=a+b

// setTimeout(()=>console.log('step1'),1000)//f6
// setTimeout(()=>console.log('step2'),2000)//f7
// setTimeout(()=>console.log('step3'),5000)//f8

// console.log('bye')//f9


// //  setInterval(()=>console.log("Hello buddy!.."),2000)
// // // call stack
// // // browser
// // // call back queue

// // setTimeout(()=>console.log('step3'),1000)//f6
// // setTimeout(()=>console.log('step2'),2000)//f7
// // setTimeout(()=>console.log('step1'),10000)

// ternary operator
let x = 20
let y = 25
let c

// c = x>y?x:y
// console.log("log",c)

c = x>y?console.log('x is greater than y'):console.log('y is less than x')
console.log(c)