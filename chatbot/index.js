const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const randomJokes = [
    'What does a house wear? \n Address!',
    'Why are toilets always so good at poker? \n They always get a flush',
    'What do you get from a pampered cow? \n Spoiled milk.',
    'How does NASA organize a party? \n They planet.',
    'What’s the best thing about Switzerland? \n Idk, but the flag is a big plus.',
    'A horse walks into a bar. \n The bartender says, “Why the long face?”'
]

const asuult = (string , fun) => {
  rl.question(string ,fun);
};
// rl.close();

const qa = (string , fun) => {
    rl.question(string , fun);
} 

const showCurrentTime = (question , time) => {
    rl.question(question , time);
}

const randomJoke = () => {

}


module.exports = {
    asuult,
    qa,
    showCurrentTime
}
// rl.question("nasaa oruulna uu : ", (answer1) => {
//     console.log(answer1);
//     rl.question("unduruu oruulna uu : ", (answer2) => {
//         console.log(answer2);
//         rl.close();
//     });
// });