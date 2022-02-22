const chatbot = require('./index.js');

chatbot.asuult('What is your name? ' , (name) => {
    console.log(`Hello ${name}, My name is Dondogdulambaatartsetseg`);
    chatbot.showCurrentTime('Current time is: ' , (time) => {
        console.log(time);
    })
});

