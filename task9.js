let reachA=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached)
        setTimeout(resolve,2000,"Arjun Reached")
    else
        reject("arjun is on the way")

})

let reachB=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
    setTimeout(resolve,1000,"harish Reached")
else
  reject("harish is on the way")
})

let reachC=new Promise((resolve,reject)=>{
    const reached=true
    if(reached)
    setTimeout(resolve,3000,"gobi Reached")
else
  reject("gobi is on the way")
})

Promise.any([reachA,reachB,reachC]).then((message)=>console.log(message)).catch((message)=>console.log(message))