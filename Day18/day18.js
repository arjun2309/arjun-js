// function expression for array

// let arr = [1,2,3,4,5]
// let knowsum =   function(arr){
//     let sum = 0
//     for(let val of arr){
//         sum += val
//         console.log(sum)
//     }

//     return sum}

// console.log(knowsum(arr))


// let volume = function(l,b,h){
//     return l*b*h
// }

// console.log(volume(2,5,4))


// 3.Arrow function

    // simple function

let a = () =>{
    
    return "simple function"
}

// console.log(a())

    //  find volume

// let volume1 = (l,b,h) => l*b*h

// console.log(volume1(5,3,4))

// let arr1 = [1,2,3,4,5]
//           // we have only one arguments means not neccessary to mention circle brackets for arguments
// let knowsum1 = arr1 =>{
//     let sum = 0
//     for(let val of arr1){
//         sum += val
//     }
//     return sum
// }
// console.log(knowsum1(arr1))

   // area of circle

// let area = r => Math.PI*r*r
// console.log(area(2))
// let multiple1 = function(){
//     let result = 1
//     for(i=0;i<arguments.length;i++){
//         result *= arguments[i]
//     }
//     return result
// }
    
// console.log(multiple1(2,5,7,8))

// callback
// pass functions for arguments

// function first(name){
//     console.log("hello " + name)
// }

// // function second(name){
// //     const heading = document.querySelector("h1")
// //     heading.innerHTML = "hello " + name
// // }

// function third(abc){
    
//     abc("Ram")
//     // first("Ram")
// }

// third(first)
// // third(second)

// for each

// arr1 = ['developer','Tester','Analyst']
// arr1.forEach(print)
// // print is call back function 
// function print(val){
//     console.log(val)
// }

// arrow function

arr1 = ['Manager','Team Leader','CEO']
arr1.forEach(val => console.log(val))
arr1.forEach(val => console.log(val.toUpperCase()))
    //alter small to caps in arr1
console.log(1,arr1)
arr1.forEach((val,index,arr1)=>{
    arr1[index] = val.toUpperCase()
})
console.log(2,arr1)

// recursion
// for finding factorial
// function factorial(n){
//     if (n == 1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5))
// 5*factorial(4) = 4*factorial(3) = 3*factorial(2) = 2*factorial(1)
//   5(24) = 4(6) = 3(2) = 2(1) 
// 5*24=4*6=3*2=2*1