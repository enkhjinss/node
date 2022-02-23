const path = require('path');
const fs = require('fs');

const argument = process.argv[1];
const folder = path.dirname(argument);

fs.readdir(folder, { withFileTypes: true }, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});








// daalgavar 1 ehleed ingej hiisen

// const argument = process.argv[1].split("/");
// const folder = `../${argument[argument.length - 2]}/`
// // const fs = require('fs');

// fs.readdir(folder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });