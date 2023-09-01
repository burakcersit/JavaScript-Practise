// 'use strict';

// // let hasDriversLicence = false;
// // let passTest = true;
// // if(passTest) hasDriversLicence = true; 

// // if(hasDriversLicence) console.log('i can drive')

// Functions

// function logger(){
//     console.log('burak')
// }
// logger();

function fruitProcessor(apples, oranges){
console.log(apples, oranges)
const juice = `juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}


const appleJuice = fruitProcessor(5, 6);
console.log(appleJuice);