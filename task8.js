// num=prompt("Enter a number");
// console.log(num*2);

try{
    num=prompt("enter a number")
    if(isNaN(num)){
        throw 'the value should be in integer'
    }
    console.log(num*2)

}
    catch(error){
      console.log(error)
    }


