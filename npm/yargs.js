#!/usr/bin/env node

// require('yargs')
//   .scriptName("pirate-parser")
//   .usage('$0 <cmd> [args]')
//   .command('hello [name]', 'welcome ter yargs!', (yargs) => {
//     yargs.positional('name', {
//       type: 'string',
//       default: 'Cambi',
//       describe: 'the name to say hello to'
//     })
//   }, function (argv) {
//     console.log('hello', argv.name, 'welcome to yargs!')
//   })
//   .help()
//   .argv



const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argument = yargs(hideBin(process.argv)).argv;
console.log(argument)
// console.log(yargs)
if(argument.name = "-t") {
    console.log("zuw")
} else {
    console.log('buruu');
}

// if (argument.ships > 3 && argument.distance < 53.5) {
//     console.log('Plunder more riffiwobbles!')
//   } else {
//     console.log('Retreat from the xupptumblers!')
//   }



// import yargs from 'yargs'
// import { hideBin } from 'yargs/helpers'

// yargs(hideBin(process.argv))
//   .command('-l', 'start a server', () => {}, (argv) => {
//     console.info(argv)
//   })
//   .demandCommand(1)
//   .parse()