// CALCULATOR

function calculate (num1, num2, parm) {
    if (parm === "+") return num1+num2;
    if (parm === "*") return num1*num2;
    if (parm === "/") return num1/num2;
    if (parm === "-") return num1-num2;
}

console.log("la somme est: ", calculate(2,3, "+"));
console.log("le produit est: ", calculate(5,4, "*"));
console.log("la division est: ", calculate(2,3, "/"));
console.log("la soustraction est: ", calculate(2,3, "-"));



// var example = require("./external.js");
// var {calculate, calculateOne} = require("./external.js");

// console.log(calculateOne());

// function calculate (num1, num2, param)

//  if (calculate (5*4)){
//     console.log(example.calculate());

//  }

// console.log(example);

// console.log(example.calculateOne());











// petite révision pour moi

// function calculate (param1, param2, param3) {

//     if (param3 === "*") { 

//         // console.log(param1+param2); 

//         console.log(param1*param2);
//         return param1 * param2;

//     }  

// }
// // console.log(calculate(5,4,"*"));
// calculate(5,4,"*");