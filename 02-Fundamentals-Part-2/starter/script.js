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