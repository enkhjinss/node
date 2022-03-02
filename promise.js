// // ================================================> daalgavar 1

const testPromise = (data) => {
    return new Promise((resolve, reject) => {
        if (typeof data === "number") {
            if (data % 2 === 0) {
                setTimeout(() => resolve("even"), 2000);
            } else {
                setTimeout(() => reject("odd"), 1000);
            }
        } else {
            reject("error");
        }
    });
};

testPromise(53)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error); // error
    });
testPromise(10)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error); // even 2sec after
    });

// testPromise(9)
//     .then((result) => {
//         console.log(result); // odd 1sec after
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// ============================================================> daalgavar 2


const fs = require('fs');

const files = ["./words/test1.txt" , "./words/test2.txt" , "./words/test3.txt"]

const promises = [];
files.forEach((file , index) => {
    const promise = fs.readFile(`./${file}` , 'utf8' , ((err , data) => {
        console.log(data.split(" "));
    }));
    promises.push(promise);
});

console.log(promises)



Promise.all(promises).then((text) => {
    console.log(text);
})


