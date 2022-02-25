// import chalk from 'chalk';
// import yargs from 'yargs/yargs';

const argument = process.argv.slice(2); //argument maani object bgd bgaa
if (argument.includes("-t") >= 0) {
    const i = argument.indexOf("-t");
    console.log(argument[i + 1]);   
} else {
    console.log("fds");
}

// const arg = argument.find((value) => {
//     return value.startsWith('-t');
// });

// require('yargs').command('[-l]' , 'welcome' , (yargs) => {
//     yargs.positional('-l' , {
//         type
//     })
// })
