'use strict'

// Release 0
let index = 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here

  // ========== METODE FOR LOOP ==========
  // var res = 0
  // for(var i = 0; i < values.length; i++){
  //   if(values[i] === target){
  //     res = i
  //     return res
  //   }
  // }
  // return -1


  // ========== METODE RECURSIVE ==========
  if (values[index] == target) { // 
    return index
  } else if(index === values.length) {
    index = 0
    return -1
  } else {
    index += 1
    return linearSearch(target, random_numbers)
  } 


}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
let temp = 0
let arr = []
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  // ========= METODE FORLOOP ==========
  // var arr = []
  // for(var i = 0; i < values.length; i++){
  //   if(values[i] === target){
  //     arr.push(i)
  //   }
  // }
  // return arr

  // ========== METODE RECURSIVE ==========
  if(values[temp] === target){
    arr.push(temp)
    if(temp === values.length -1) {
      return arr
    } else {
      temp += 1
      return globalLinearSearch(target, values)
    }
  } else if (temp === values.length){
    return arr
  }else{
    temp += 1
    return globalLinearSearch(target, values)
  }

}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("b", banana_arr));
// [ 1, 3, 5 ]
