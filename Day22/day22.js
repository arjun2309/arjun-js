// //get and set it is used for get private elements
// class Temperature{
//     constructor(temp){
//         this._temp = temp
//     }
//     get temp11(){
//         return `${this._temp} deg celcius`
//     }
//     set temp11(temp){
//         if(temp>100)
//             temp = 100
//         this._temp = temp
//     }
// }

// let temp1 = new Temperature(1450)
// console.log(temp1.temp11)
// temp1.temp11 = 150
// // console.log(temp1.temp)
// console.log(temp1.temp11)

// function closure
// a = 10
// function abc(){
//     console.log(a)
// }
// a = 20
// abc()


//returning functions - higher order function
//lexical scoping - inner scope can access parent scope variables

//In other words, a closure gives you 
//access to an outer function's scope from
//an inner function.

// example of closure
// function outer(name){
//     let outerVariable = 'mobiles'
//     console.log(name)
//     function inner(){
//         let innerVariable = 'laptops'
//         console.log('inner variable',innerVariable)
//         console.log('outer variable',outerVariable)
//         // console.log('a is',a)
//         console.log('hello',name)
//     }
//     return inner
   
// }  
// a = outer('abc')
// console.log(a)
// console.log(a())

function makeAdd(x){
    return function(y){
        return x+y
    }
}

let add = makeAdd(15)
console.log(add(20))
