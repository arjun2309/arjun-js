function palindrome(){
    let a=document.getElementById('palindrome').value
    console.log(a)
    let b=a.split('')
    let c=b.reverse()  
    let d=c.join('')

    if(a==d){
        let e=document.getElementById('result')
        e.innerHTML=a+" is a palindrome"
    }
    else{
        let e=document.getElementById('result')
        e.innerHTML=a+" is not a palindrome"
    }
}