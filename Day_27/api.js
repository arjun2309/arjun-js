// API


// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res)=>res.json())
// .then((msg)=>console.log(msg,msg[0].setup,msg[0].punchline))
// .catch((err)=>console.log(err))

// get,post,put,delete
// fetch('https://jsonplaceholder.typicode.com/todos/2')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch((err)=>console.log(err))

fetch('https://jsonplaceholder.typicode.com/todos/',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId:23,
        id:456,
        title:'test',
        completed:false
    })
})
      .then(response => response.json())
      .then(json => console.log(json))