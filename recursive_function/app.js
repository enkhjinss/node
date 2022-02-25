// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("toogoo oruulna uu: " , function(value) {
//     let trimmedInput = value.trim();
//     let array = trimmedInput.split(" ");
//     let sum = 0
//     array.forEach( (element, index) => {

//         console.log(element);
//     });
//     // value.split(" ");
//     // array.forEach((element) => {
//     //     sum = sum + element
//     // });
//     // console.log(sum);
//     // console.log(value);
//     // console.log(`answer = ${sum}`);
//     rl.close();
// });

// const sum = (n, m = 0) => {
//     if (n === 0) return m;
//     m += n;

//     return sum(n - 1, m);
// };
// console.log(sum(5));

// const factorial = (n , fac = 1) => {
//     if (n === 0) return fac;
//     fac *= n;

//     return factorial(n - 1, fac)
// }
// console.log(factorial(2));

const print = (n) => {
    if (n === 0) return;

    console.log(n);
    print(n - 1);
};
// print(4);

// dawtuulah gd baigaa zuils n :
// array-n length-g bagasgana
//bas neg array butsaana

const reverse = (n, i) => {
    if (i === -1) return;
    console.log(n[i]);
    return reverse(n, i - 1);
};

// for (i = 0; i < arr.length; i++)

// [2, [2, [3, 4,[5]]]]

const str = "hello";
console.log(reverse(str, str.length - 1));



const a = (array) => {
    return array.join().split().join();
}
console.log(a([1, [2, [3, 4]],  [5, 5], 23]));
