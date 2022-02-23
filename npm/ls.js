// import chalk from 'chalk';
// import yargs from 'yargs/yargs';

const argument = process.argv.slice(2);  //argument maani object bgd bgaa
if (argument.indexOf("-t") >= 0) {
   const t = argument[0];
   console.log(argument[1]);
} else {
    console.log("fds");
}




// const arg = argument.find((value) => {
//     return value.startsWith('-t');
// });