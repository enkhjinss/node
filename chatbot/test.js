const chatbot = require('./chatbot.mn.js');

chatbot.asuult('What is your name?', (name) => {
    console.log(`Hello ${name}, My name is Dondogdulambaatartsetseg`);

    chatbot.qa('this is the question?', 'Some text blabla {{ answer }} blabla hello world.', () => {
        chatbot.showCurrentTime((time) => {
            console.log(`Current time is: ${time}`);

            chatbot.randomJoke((joke) => {
                console.log("Today's joke is: ", joke);
            });
        });
    });
});

// $ node chatbot.js
// What is your name? Bulgaa
// Hello Bulgaa, My name is Dondogdulambaatartsetseg
// this is the question? This is answer
// Some text blabla This is answer blabla hello world.
// Current time is: 2022-01-01
// Today's joke is: Some random Joke