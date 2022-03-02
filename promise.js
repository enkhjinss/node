// // ================================================> daalgavar 1

// const testPromise = (data) => {
//     return new Promise((resolve, reject) => {
//         if (typeof data === "number") {
//             if (data % 2 === 0) {
//                 setTimeout(() => resolve("even"), 2000);
//             } else {
//                 setTimeout(() => reject("odd"), 1000);
//             }
//         } else {
//             reject("error");
//         }
//     });
// };

// testPromise(53)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error); // error
//     });
// testPromise(10)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error); // even 2sec after
//     });

// testPromise(9)
//     .then((result) => {
//         console.log(result); // odd 1sec after
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// ============================================================> daalgavar 2


const fs = require('fs');

const files = ["./words/test1.txt" , "./words/test2.txt" , "./words/test3.txt"]

const promises = [];
files.forEach((file , index) => {
    let promise;
    fs.readFile(`./${file}` , 'utf8' , ((err , data) => {
        promise = data;
        console.log(data);
    }));
    promises.push(promise);
});

console.log(promises)
git status




Promise.all(promises).then((text) => {
    console.log(text);
})



// const promise1 = fs.readFile('./word_count/big.txt', 'utf8', function(err, data){
//     // console.log(data);
// });
// const promise2 = fs.readFile('./word_count/sgb-words.txt', 'utf8', function(err, data){
//     // console.log(data);
// });
// const promise3 = fs.readFile('./word_count/shakespeare.txt', 'utf8', function(err, data){
//     // console.log(data);
// });
// const promise4 = fs.readFile('./word_count/smaller.txt', 'utf8', function(err, data){
//     // console.log(data);
// });

