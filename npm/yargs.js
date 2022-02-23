#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
console.log(argv.haha);  //yargs 

if(argv.ships === -t) {
    console.log(argv);
} else {
    console.log("t ee martsan bn");
}
