// OOPS
// let users = {
//     name:'Rahul',
//     age:22,
//     login(){
//         console.log(this.name,'You are logged in')
//     },
//     logout(){
//         console.log('You are logged out')
//     }
// }
// users.login()

// let user2 = {
//     name:'Vasanth',
//     age:24,
//     login(){
//         console.log('Hi',this.name)
//         console.log('You are logged in')
//     },
//     logout(){
//         console.log('You are logged out')
//     }
// }

// let user3 = {
//     name:'John',
//     age:21,
//     login(){
//         console.log('Hi',this.name)
//         console.log('You are logged in')
//     },
//     logout(){
//         console.log('You are logged out')
//     }
// }

// Class is a template of properties 
//   and methods
// static - common variables/methods for class
//       - accessed with className
// ES6
class User{ // base class, parent class, super class
    static numberOfUsers = 0;
    constructor(name,age){
        //instance variables
        this.name = name;
        this.age = age;   
        User.numberOfUsers++;
    }

    login(){
        console.log('Hi',this.name)
        console.log('You are logged in')
    }
    logout(){
        console.log('Hi',this.name)
        console.log('You are logged out')
    }
    static displayTotalUsers(){
        console.log('Total number of Users is '+User.numberOfUsers++)
    }
}

let userOne = new User('Vidya',21)
let userTwo = new User('Ramesh',33)
let userThree = new User('Mano',32)
userOne.login()
userTwo.logout()
userThree.login()
console.log('Number of Users',User.numberOfUsers)
User.displayTotalUsers()


