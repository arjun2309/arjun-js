// objects

// example
// laptop is an objects,its properties is [make,color,screensize,ram] and its methods is 
// [Browse,Build Projects,Play Games,Watch movies]

// how to create object

// let Material = {
//     name : "Laptop",
//     price : "50000",
//     quantity : 1
//   }

// console.log(Material)
// console.log(typeof(Material))

let Material = new Object();
// console.log(Material1)
 
// Material1.name = "Laptop"
// Material1.price = 50000
// Material1.quantity = 1

// console.log(Material1)
// console.log(Material1.price)
// add new properties
// Material1.ram = "8GB"
// console.log(Material1)

// another way to get properties
// console.log(Material1['price'])
// Material1.active = true
// Material1.active = false
// console.log(Material1)

// let ans = "price"
// Material[ans] = "70000"
// console.log(Material)
// Material.ans = 80000
// console.log(Material)
// console.log(Material.price)
// Material.ans = 740000
// console.log(Material[ans])
// Material.ans = 90000
// console.log(Material)


// let Material1 = {
//     name : "Laptop",
//     price : 90000,
//     quantity:1,
//     Types :['mobiles','laptops'],
//     dimensions : {
//      length : 15,
//      breadth : 25 }
 
//    }
 
//  console.log(Material1)
//  console.log(Material1.Types[0])
//  console.log(Material1.dimensions.length)
//  console.log(Material1.dimensions['length'])


// // how to use methods in objects

let Material2 = {
     Brand : "Lenovo",
     Price : 50000,
     Quantity : 1,
     buynow(){
      console.log("Item purchased Successfully")
     },
     AddToCart : function(){
      console.log("Item added to cart Successfully")
     }
 }

Material2.buynow()
Material2.AddToCart()