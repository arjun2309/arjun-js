// Color flipper

// const btn = document.getElementById("btn")
// const colortext = document.getElementById("color")
// const wrap = document.getElementById("wrap")
// const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
// btn.addEventListener('click',bg_change)

// function randHexValue(){
//     let randomIndex = Math.floor(Math.random()*16)
//     console.log(hex[randomIndex])
//      return hex[randomIndex]
// }


// function bg_change(){
//     let hex_color = "#"
//     for (i=1;i<=6;i++){
//         hex_color += randHexValue()
//         // hex_color += 'A'
//         console.log(hex_color)

//     }

// console.log(hex_color)
//    wrap.style.backgroundColor = hex_color
//    colortext.innerHTML = hex_color
// }


const color=document.getElementById('color');
const btn=document.getElementById('btn')
const wrap=document.getElementById('wrap')
// const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let imgarr=['']
console.log(imgarr)
// btn.addEventListener('click',changebg)

// function changebg(){
//    let hexa='#'
//     for(let i=0;i<6;i++){
//         hexa+=randomhex()
//     }
    wrap.style.background=imgarr
//     color.innerHTML=hexa
// } 


function randomhex(){
let random=Math.floor(Math.random()*16)
return hex[random]
}