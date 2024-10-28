// let a=prompt("Enter the number")
// let b=prompt("Enter the root")

function cube(){
    let sum=a**b
    let add = document.getElementById('h1')
    add.innerHTML = sum
    let content1= document.getElementById('h2')
    content1.innerHTML = "Input = 5 => 5**3 ==> 5*5*5=125"
    
}
let u=[1,2,3];
let v=[5,6,7];
let y=u+","+v;
console.log([y]);
console.log(u.concat(v))