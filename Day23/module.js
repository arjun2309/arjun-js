//ES6 - modules

// class Car{
//     drive(){
//         console.log("Driving")
//     }
// }

// function fillGas(){
//     console.log('Filling Gas')
// }

// function repair(){
//     console.log('Repairing')
// }
class Car{
    drive(){
        console.log("Driving")
    }
}

function fillGas(){
    console.log('Filling Gas')
}
function repair(){
    console.log('Repairing')
}

export default Car
export {fillGas,repair}