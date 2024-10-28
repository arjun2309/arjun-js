// // Exception Handling
// // error handling
// // num = prompt("enter a number")
// // try {
// //     num = prompt("enter a number")
// //     if(isNaN(num)){
// //         throw 'Cannot be empty'
// //     }
// //     console.log(num)
// // }
// // catch(error){
// //     console.log(error)
// // }

// // try{
// //     num= prompt("Enter your number")
// //     if(num==='')
// //         throw 'Cannot be empty'
// //     else if(isNaN(num))
// //         throw "Enter a valid Number"

// //     console.log(num*2)
// // }
// // catch(error){
// //     console.log(error)
// // }

// try{
//     num = prompt("Enter a number") 
//     num1= prompt("Enter your number")
//     if(num==='' | num1 === '')
//         throw 'Cannot be empty'
//     else if(isNaN(num) | isNaN(num1))
//         throw "Enter a valid Number"
//     console.log(num + num1)
// }
// catch(error){
//     console.log(error)
// }
// finally{
//     console.log('program completed')
// }

// json (Javascript object Notation)
let json5 = `{
    "Stock":"TCS",
    "Price":3500
}`
// console.log(json5)
// console.log(typeof(json5))
console.log(json5)
let parsed = JSON.parse(json5)
console.log(parsed)
console.log(parsed['Stock'])
c = JSON.stringify(parsed)
console.log(c)


// let json6 = `[{
//     "Stock":"TCS",
//     "Price":3500
// },{
//     "Stock":"HUL",
//     "Price":2500
// },{
//     "Stock":"SBI",
//     "Price":550
// }]`

// // console.log(json6[1].Price)
// let parsed = JSON.parse(json6)
// console.log(parsed)
// console.log(parsed[1].Price)
// // it use to convert string format
// c = JSON.stringify(parsed)
// console.log(c)
