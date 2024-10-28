// task
// z = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,
//      66,77,88,99,100]
// Repalce 3,5,7 with 3.0,5.0,7.0
// insert 0 in starting
// insert 1000 in last
// insert 10 in middle .Use z.length to find the middle position

// let  z = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,100]

//     z.splice(2,1,'3.0')
//     z.splice(4,1,'5.0')
//     z.splice(6,1,'7.0')
//     z.unshift(0)
//     z.push(1000)
//     let y = z.length/2
//     z.splice(y,0,10)

//     console.log(y)
//     console.log(z)


    // let a='apple'

    // if ((a.includes('a'))&&(a.includes('l'))||(a.includes('r'))){
    //     console.log("print a")
    // }
    //     else{
    //         console.log("False")
    //     }
    
    function intrest(){
        let a=document.getElementById('month').value
        console.log(a)
        if((a<=3)&&(a>0)){
            let d=document.getElementById('result')
            d.innerHTML="the intrest is 2%"
        }
       else if((a>=4)&&(a<=6)){
        let d=document.getElementById('result')
        d.innerHTML="the intrest is 4%"
        }
        else if((a>=7)&&(a<=9)){
            let d=document.getElementById('result')
            d.innerHTML="the intrest is 6%"
        }
        else if((a>=10)&&(a<=12)){
            let d=document.getElementById('result')
            d.innerHTML="the intrest is 8%"
        }
        else{
            let d=document.getElementById('result')
            d.innerHTML="no intrest"
        }
        }

    