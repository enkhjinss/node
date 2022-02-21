// var time = 4;
// let gdf = "hey hi";
// if (time > 3) {
//     let gdf = "gd";
//     console.log(gdf);
// }
// console.log(gdf);
// callback()

// const callback = function () {
//     console.log("1");
// };
// call();

// function call() {
//     console.log("2");
// }

// const c = () => {
//     console.log("dfghjhgf");
// };

// const a = () => {
//     let numbers = [2, 3];
//     let sum = 0;

//     for (const number of numbers) {
//         sum = sum + number;
//     }
//     console.log(sum);
// };
// a();
// let numbers = [2, 3];
// numbers.forEach((_ , i , a) => {
//     let = 4
//     a.push(4)
//         console.log(a);
//         // console.log(index);
//     }
// )

//garaaas oruulsan utgiig nemdg
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("utgaa oruulna uu--> " , function(value) {
//     let trimmedInput = value.trim();
//     let array = trimmedInput.split(" ");
//     let sum = 0
//     array.forEach( (element) => {
//         sum += parseInt(element);
//     });
//     // value.split(" ");
//     // array.forEach((element) => {
//     //     sum = sum + element
//     // });
//     // console.log(sum);
//     // console.log(value);
//     console.log(`answer = ${sum}`);
//     rl.close();
// });

//  const readline = require('readline');
//  const rl = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout
//  })

// rl.question("utgaa oruulna uu --> " , inputValue => {
//     console.log(inputValue.toUpperCase());
//     rl.close();
// });

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("utgaa oruulna uu --> ", inputValue => {
//     let name = "";

//     for (let i = inputValue.length - 1; i >= 0; i--) {
//         name += inputValue[i]
//     }
//     console.log(name);
//     rl.close();
// });

//fs

// const fs = require("fs");

// fs.writeFile("nodes.txt", "You guys can do it!", (error) => {
//     if (error) throw error;

//     console.log("Saved!");
// });

// create an empty file named mynewfile2.txt:
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log(`Saved!: ${file}`);
// })

// fs.appendFile('notes.txt', 'This is my text.\n' , function (err) {
//     if (err) throw err;
//     console.log('Updated!');
//   });

// let http = require('http');

// http.createServer(function (req, res) {
//   // add a HTTP header:
// //   res.writeHead(200, {'Content-Type': 'index/html'}); ene n bolohoor back-end ees irsen code-g ywuulj bgaa
//   res.write('hey </3');
//   res.end();
// }).listen(8080);

// const http = require('http');

// http.createServer(function (req, res) {
//   res.write(req.url);
//   res.end();
// }).listen(8081);
// console.log('running');



// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// http.createServer(function (req, res) {
//     // console.log(req.url);
//     if (req.url === "/") {
//         fs.readFile('index.html', function (err, data) {
//             console.log(data);
//             res.writeHead(200, { "Content-Type": "text/html" });
            
//             res.write(data);
//             return res.end();
//         });
//     } else if (req.url === "/profile.html") {
        
//     }
// }).listen(8082);


const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });

    if(req.url === "/profile.html") {
        fs.readFile("./profile.html" , (_ , data) => {
            res.write(data);
            res.end();
        });
    } else {
        res.write('<a href="./profile.html">click</a>');
        res.end();
    }
  
}).listen(8083);
console.log("running");





