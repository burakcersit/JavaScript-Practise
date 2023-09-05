// 'use strict';


// // let hasDriversLicence = false;
// // let passTest = true;
// // if(passTest) hasDriversLicence = true; 

// // if(hasDriversLicence) console.log('i can drive')

// Functions

function logger(){
    console.log('burak')
}
logger();

function fruitProcessor(apples, oranges){
console.log(apples, oranges)
const juice = `juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}


const appleJuice = fruitProcessor(5, 6);
console.log(appleJuice);

function calAge1(birthyear){
 return 2037 - birthyear   

}

const age1 = calAge1(1050)
console.log(age1)

const calAge2 = function calAge1(birthyear){
    return 2037 - birthyear   
}
const age2 = calAge2 (1780);
console.log(age1, age2)

// Arrow Function
const calAge3 = birthyear => 2037 - birthyear
console.log(calAge3(1500))

//Arrays
const friend1 = "micheal"
const friend2 = "micheal2"
const friend3 = "micheal3"

const friends = ['micheal','micheal2','micheal3']
console.log(friends[0])

const years = new Array(1990, 1991, 1992, 1993)// use this function to use array 

console.log(friends.length) // find how many element in there
console.log(friends.length-1) //find last element
console.log(friends[friends.length-1]) //write last element

//replace the element
friends[2] = 'michael4'
console.log(friends[2]) // result/ michale4

//array operations
friends.push('jay') // add element at the end of array
console.log(friends)

friends.unshift('begening'); // add element at the begining of the array
console.log(friends) 


friends.pop() //remove element - last element-opposite of push element
console.log(friends) //jay is gone

friends.shift() // begining removing 
console.log(friends)

//OBJECTS       

const jonasArray = [
    'jonas',
    'schmedtmann',
    2037 - 1005,
    'teacher',
    ['Michael', 'peter', 'Steven']
];


const jonas = {
    firstName: 'jonas',
    lastNAme: 'schemedtman',
    ageJ: 2033-1885,
    job: 'teacher',
    friends: ['Michael', 'peter', 'Steven']
}
console.log(jonas.firstName)
console.log(jonas['lastNAme'])

//LOOP
//for loop
for (let i = 1; i <= 10; i++) {
    console.log(`lifting ${i}`);
}