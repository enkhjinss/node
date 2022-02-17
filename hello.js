// var time = 4;
// let gdf = "hey hi";
// if (time > 3) {
//     let gdf = "gd";
//     console.log(gdf);
// }
// console.log(gdf);
// callback()

// const callback = function () {
//     console.log("1");
// };
// call(); 

// function call() {
//     console.log("2");
// }

// const c = () => {
//     console.log("dfghjhgf");
// };


// const a = () => {
//     let numbers = [2, 3];
//     let sum = 0;

//     for (const number of numbers) {
//         sum = sum + number;
//     }
//     console.log(sum);
// };
// a();
// let numbers = [2, 3];
// numbers.forEach((_ , i , a) => {
//     let = 4
//     a.push(4)
//         console.log(a);
//         // console.log(index);
//     }
// )


//garaaas oruulsan utgiig nemdg 
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("utgaa oruulna uu--> " , function(value) {
//     let trimmedInput = value.trim();
//     let array = trimmedInput.split(" ");
//     let sum = 0
//     array.forEach( (element) => {
//         sum += parseInt(element);
//     });
//     // value.split(" ");
//     // array.forEach((element) => {
//     //     sum = sum + element
//     // });
//     // console.log(sum);
//     // console.log(value);
//     console.log(`answer = ${sum}`);
//     rl.close();
// });
               

//  const readline = require('readline');
//  const rl = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout
//  })

// rl.question("utgaa oruulna uu --> " , inputValue => {
//     console.log(inputValue.toUpperCase());
//     rl.close();
// });

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("utgaa oruulna uu --> " , inputValue => {
    // let string = '';
    // let length = inputValue.length;
    console.log(inputValue);
    // for (let i = inputValue.length; i < inputValue.length - 1; i --) {
    //     console.log(i);
    // }
  
   rl.close();
});



