import chalk from 'chalk';
import yargs from 'yargs/yargs';

// console.log(chalk.bold.yellow('Hello world!'));

const args = process.argv.splice()

const convertToBgColor = (text) => {
    const upperColor = text.replace
}

const color = 'green';
const bgColor = "red";

console.log(chalk[color][convertToBgColor(bgColor)]('hi'));

if(args[0] === "-t") {
    console.log(args[1]);
}

if(args[2] === "-c") {
    // console.log( args[1]);
    //Change text color
}
if(args[4] === "-bg") {
    //change background color
}


