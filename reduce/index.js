// const array = [4, 5, 6, 7];

// const fun = array.reduce(previousValue , currentValue , currentIndex) => console.log(previousValue);

// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (previousValue, currentValue , index) => previousValue + currentValue,
//   initialValue 
// );

// console.log(sumWithInitial);


// const fun = array.reduce((previousValue , currentValue , index) => {
//     return previousValue + currentValue;
// });
// console.log(fun);

// ======================================> busdaasaa yalgaatai elementiin index-g butsaana


// const whereIsWaldo = (array) => {
//     array.forEach((element , index) => {
//         element.forEach((el , inde) => {

//         });
//     });
// }

// whereIsWaldo([
//     ["O", "O", "O", "O"],
//     ["O", "O", "O", "O"],
//     ["O", "O", "O", "O"],
//     ["O", "O", "O", "A"],
//     ["P", "O", "O", "O"],
//     ["O", "O", "O", "O"]
// ]);






// const results = users.reduce((accumulator, value) => {
//     const groups = value.group;
//     console.log(value);
// }, '');

// console.log(results);

// const results = users.map((val , i) => {
//     console.log(i)

// const output = users.map(user => {
//     console.log(user);
// //    user.filter((val, ind) => {
// //         console.log(val);
// //    })
// });

// console.log(output);


// arr = [ 1, 2, 4 ];
// const result = arr.reduce(function(a, b){ return a + b; }); // => 7



// const results = users.reduce(function(a , b) { return b.group; });

// const results = users.reduce((a , b) => {
//     return b.group
// })
// console.log(results);


// const filterUsers = (arr , query) => {
//     return arr.filter((el) => {
//         return el.group;
//     })
// }


// const users = [
//     { id: 11, name: 'Bat', age: 23, group: 'editor' },
//     { id: 47, name: 'Bold', age: 28, group: 'admin' },
//     { id: 85, name: 'Tulga', age: 34, group: 'editor' },
//     { id: 97, name: 'Suren', age: 28, group: 'admin' }
// ];
// const results = users.filter((val , i) => {
//     return val.group === "editor";
// });
// console.log(results);





//================================================================================>
// Өгөгдсөн код дээрх даалгаврыг map ашиглан гүйцэтгэж үр дүн console руу хэвлэ.

// const users = [
// { id: 11, name: 'bat', age: 23, group: 'editor' },
// { id: 47, name: 'bold', age: 28, group: 'admin' },
// { id: 85, name: 'tulga', age: 34, group: 'editor' },
// { id: 97, name: 'suren', age: 28, group: 'admin' }
// ];

// users array object өгөгдсөн бол name -ын эхний үсгийг томруулах. (Pure function)

// const users = [
// { id: 11, name: 'bat', age: 23, group: 'editor' },
// { id: 47, name: 'bold', age: 28, group: 'admin' },
// { id: 85, name: 'tulga', age: 34, group: 'editor' },
// { id: 97, name: 'suren', age: 28, group: 'admin' }
// ];

// const result = users.map((val , i) => {
//     // const a = val.name[0].toUpperCase();
//     return val
// });

// console.log(result);


//===============================================================>

const validName = (name) => {
    const n =  name.split(" ");
    n.forEach((el) => {
        
    });
}

console.log(validName("M. Wells"));