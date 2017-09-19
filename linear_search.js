'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
    //write your code here
    for (let i = 0; i < values.length; i++) { // perulangan
        //console.log(values[i])
        //console.log(i);
        if (values[i] === target) { // kondisi
            return i // output 
        }
    }
    return -1 // output jika tidak ada
}

let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];

console.log(linearSearch(18, random_numbers)); // 2
console.log(linearSearch(9, random_numbers)); // -1

// // Release 1
// console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
    //write your code here
    let hasil = []
    for (let j = 0; j < values.length; j++) {
        // console.log(values[j]);
        // console.log(j);
        if (target === values[j]) {
            hasil.push(j);
        }
    }
    return hasil
}

let banana_arr = "banana".split(""); // ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr)); // [ 1, 3, 5 ]

module.exports = {
    linearSearch,
    globalLinearSearch
}