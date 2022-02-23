const process = require('process');

const args = process.argv;

args.forEach((value , index) => {
    console.log("Hello argument");
    if(index > 2) {
        console.log('heyy')
    }
});
// console.log(`length: ${args.length}`);