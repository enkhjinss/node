// import chalk from 'chalk';
// import yargs from 'yargs/yargs';

const argument = process.argv.slice(2);  //argument maani object bgd bgaa
console.log(typeof argument);
if (argument.indexOf("-t") >= 0) {
    const arg = argument.find((value) => {
        return value.startsWith('-t');
    })
} 


