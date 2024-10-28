// var today =new Date;


// var dd=today.getDate();


// var mm=today.getMonth();
// var yyyy=today.getFullYear();

// if(dd<10){ dd='0'+dd;} 
// if(mm<10){mm='0'+mm;}
    

// today=dd+'/'+mm+'/'+yyyy;
// console.log(today);

// function multiplyBy(){
//     num1=document.getElementById("first").value;
//     num2=document.getElementById("second").value;
//      console.log(num1*num2);
//     document.getElementById("result").innerHTML=num1*num2;

// }

// function divideBy(){
//     num1=document.getElementById("first").value;
//     num2=document.getElementById("second").value;
//     document.getElementById("result").innerHTML=num1/num2;
// }


// function toFaren(){
//     celci=document.getElementById("celsiustemp").value;
//     document.getElementById("result").innerHTML=(celci*9/5)+32+" F";
// }

// function toCelcius(){
//     farenheit=document.getElementById("farentemp").value;
//     document.getElementById("result").innerHTML=(farenheit-32)*5/9+" C";
// }
//     document.getElementById("mybutton").addEventListener('click',toCelcius)


// let numbers = [1, 2, 3, 4, 5];
// let even=numbers.filter(num=>num%2==0)
// let single=numbers.reduce((num,sin)=>sin+num,0)
// console.log(single);
// let number=[1,2,3,4,5];
// let fil=number.filter(num=>num%2!=0);
// let sum=number.reduce((num,sum)=>num+sum,0);
// console.log(sum)

function Calculate(){
    let num1=Number(document.getElementById("first").value);
    let num2=Number(document.getElementById("second").value);
  let operation=document.getElementById("operation").value;
    let result;

    switch(operation)
    {
        case "add":
            result=num1+num2;
            break;

        case "subtract":
            result=num1-num2;
            break;

        case "multiply":
            result=num1*num2;
            break;
        case "divide":
            result=num2!==0?num1/num2:"cant divide by 0";
            break;
    }
    document.getElementById("result").innerHTML=result;
}

document.getElementById("mybutton").addEventListener('click',Calculate);