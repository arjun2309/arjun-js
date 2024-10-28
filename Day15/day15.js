// outer loop and inner loop
// let i,j;
// let array = []
// for (i=1;i<5;i++){
//     array.push(i)
//     for (j = 1;j<5;j++){
//         array.push(j)
//     }
// }

// console.log(array)

// n=3
// for (let i=0;i<n;i++){
//     let pattern=''
//     for (let v = 0;v<n-i;v++){
//         pattern+="* "
//     }
//     console.log(pattern)
// }

// var rows = 5;
// for (var i = 0; i < rows; i++) {
//   var pattern = '';
//   for (var j = 0; j < rows - i - 1; j++) {
//     pattern += ' ';
//   }
//   for (var k = 0; k <= i; k++) {
//     pattern += '* ';
//   }
//   console.log(pattern);
// }

// let w = ["apple","banana","cherry","lemon","curdapple"]
// let c 
// for (c=0;c<w.length;c++){
//     console.log(w[c])}
  


// for...of
// for (let fruit of w){
//     console.log(fruit)
// }

item = {
    name :"mobile",
    quantity : 1,
    price : 15000

}
for (let key in item){
    console.log(item[key])
}