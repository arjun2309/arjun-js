// let tatkalBook =  new Promise((resolve,reject) => {
//         let bookingSuccess = true
//         if (bookingSuccess)
//             resolve()
//         else   
//             reject() 
//     })


// tatkalBook.then(()=>console.log(`Thanks buddy! I have trasferred amount`))
// .catch(()=>console.log("Thanks for trying! I will book a bus"))

// function thanks(){
//     console.log(`Thanks buddy! I have trasferred amount`)
// }

// function tatkalBook(){
//     return new Promise((resolve,reject) => {
//         let bookingSuccess = true
//         if (bookingSuccess)
//             resolve(800)
//         else   
//             reject() 
//     })
// }

// tatkalBook().then((amount)=>console.log(`Thanks buddy! I have trasferred Rs. ${amount}`))
// .catch(()=>console.log("Thanks for trying! I will book a bus"))

// function tossCoin(){
//     return new Promise((resolve,reject)=>{
//         const rand = Math.floor(Math.random()*2)
//         console.log(rand)
//         if(rand==0)
//             resolve()
//         else
//             reject()
//     })
// }
// tossCoin().then(()=>console.log("Congrats!Its head!You won"))
// .catch(()=>console.log("Sorry!You lost!Its"))

let reachA = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)
        setTimeout(resolve,3000,"Rahul reached")
    else
        reject("Rahul not reached")
})

let reachB = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)
        setTimeout(resolve,1000,"Arjun reached")
    else
        reject("Arjun not reached")
})

let reachC = new Promise((resolve,reject)=>{
    const reached = false
    if(reached)
        setTimeout(resolve,2000,"Latha reached")
    else
        reject("Latha not reached")
})
// it give ouput in array format

// Promise.all([reachA,reachB,reachC])
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))


Promise.allSettled([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))