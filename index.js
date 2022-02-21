


// 2 asuult asuuna 

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('nasaa oruulna uu : ', (answer1) => {
//     console.log(answer1);
//     rl.question('unduruu oruulna uu : ', (answer2) => {
//         console.log(answer2);
//         rl.close();
//     });
// });

//2.21;


//find the perimeter of a circle with given radius

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('radius = ' , (radius) => {
    const c = 2* Math.PI * radius
    console.log(`c = ${c}`);
    rl.close();
})

