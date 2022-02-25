// const readline = require('readline');
// // const { number } = require('yargs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('enter the numbers: ' , (numbers) => {
//     let trimmedInput = numbers.trim();
//     let array = trimmedInput.split(" ");

//     let a = 1;
//     let b = 0;
//     array.forEach((number) => {
//         if(number % 2 === 0) {
//             b = b + number;
//         } else {
//             a = a * number; 
            
//         }
//     });
//     console.log(a , b);
    
//     rl.close();
// })

//1
// const double = (number) => number * 2;

// const a = [2, 3, 4, 5];
// console.log(a.map(double));

// //2
// const birthYear = [1994, 1997, 2003, 1993, 2001];
// const age = birthYear.map((year) => 2022 - year);
// console.log(age);

// //3
// const persons = [
//     { id: 1, name: "DORJ", age: 19 },
//     { id: 2, name: "BOLD", age: 13 },
//     { id: 3, name: "BALDAN", age: 15 },
//     { id: 4, name: "TSETSGEE", age: 20 },
//     { id: 5, name: "DULMAA", age: 23 }
// ];

// const adults = [];

// persons.filter((person) => {
//    if (person.age >= 18) {
//        adults.push(person);
//    }
// });
// console.log(adults);


const chocolates= [
    {"dark":true, "flavour":"strawberry"},
    {"dark":false, "flavour":"strawberry"},
    {"dark":false, "flavour":"almond"},
    {"dark":true, "flavour":"almond"},
    {"dark":false, "flavour":"lemon"},
  ];


// const checkProperty = key => value => item => item[key] === value;
const checkProperty = (key) => {
    return (value) => {
      return (item) => {
        return item[key] === value;
      }
    }
}


const darkChocolates = chocolates.filter(checkProperty("dark")(true));
console.log(darkChocolates);

const darkChocolates = chocolates.filter(checkProperty('dark')(true)(eq));
console.log(darkChocolates);

const almondChocolates = chocolates.filter(checkProperty('price')(20)(gte));
console.log(almondChocolates );

const strawberry = chocolates.filter(checkProperty('price')(30)(lte));
console.log(strawberry);

const strawberry = chocolates.filter(checkProperty('price')(30)(eq));
console.log(strawberry);
