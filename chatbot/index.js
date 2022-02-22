const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const asuult = (string , fun) => {
  rl.question(string ,fun);
};
// rl.close();

const qa = (string , fun) => {
    rl.question(string , fun)
}
module.exports = {
    asuult,
    qa
}
// rl.question("nasaa oruulna uu : ", (answer1) => {
//     console.log(answer1);
//     rl.question("unduruu oruulna uu : ", (answer2) => {
//         console.log(answer2);
//         rl.close();
//     });
// });