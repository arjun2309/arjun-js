// switch case

// CSK Captain Mahi,Tropies 5,Home ground Chidambaram stadium
// RCB Captain Faf,Tropis Loading,Home ground Chinnaswamy stadium
// MI Captain Rohit,Tropis 5,Home ground Wankhde stadium
// DC Captain Rishab pant,Tropis Loading,Home ground Jawaharlal Nehru stadium

const button = document.querySelector('button')
button.addEventListener('click',KnowStats)
// button.addEventListener('dblclick',KnowStats)

// button.addEventListener('mouseover',KnowStats)


let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('div').appendChild(resultdiv)



function KnowStats(){
    // const inputs = document.getElementById('input')
    const input = document.querySelector('#input')
    console.log("a",input)
    console.log("b",input.options)
    console.log("c",input.options[input.selectedIndex])
    console.log("d",input.options[input.selectedIndex].value)
    const team = input.options[input.selectedIndex].value
    // console.log(input.options)
    // console.log(input.options[input.selectedIndex])
    // console.log(input.options[input.selectedIndex].value)
    // console.log(team)
    let Team = ''
    let Captain = ''
    let Trophy = ''
    let Home_Ground = ''
    switch(team){
        case 'CSK':
            console.log('csk')
            Team  = 'CSK'
            Captain = 'Mahendra Singh Dhoni'
            Trophy = 'Five'
            Home_Ground = 'Chidambaram stadium'
            break

        case 'DC':
                console.log('dc')
                Team = 'DC'
                Captain = 'Rishab Pant'
                Trophy = 'still Loading...'
                Home_Ground = 'Jawaharlal Nehru Sadium'
                break

        case 'RCB':
            // console.log('rcb')
            Team = 'RCB'
            Captain = 'Faf Du plessis'
            Trophy = 'still Loading...'
            Home_Ground = 'Chinnaswamy stadium'
            break

        case 'MI':
            console.log('mi')
            Team = 'MI'
            Captain = 'Rohit Sharma'
            Trophy  = 'Five'
            Home_Ground = 'Wankhde stadium'
            break

        

        
    }
   
    let info = `${team} Captain is ${Captain}.There trophies is ${Trophy} & there homeground is ${Home_Ground}`
    // console.log(info)
    document.getElementById('result').innerHTML = info
   
   // console.log('done')
}

// Datatype

// primitive datatype 
// Number
// String
// Boolean
// Undefined
// Null
// Symbol

// reference datatype
// array
// object literal
// datefield