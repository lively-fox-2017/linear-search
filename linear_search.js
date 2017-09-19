'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  var count=0
  for(let i=0;i<values.length;i++){//melakukan pengecekan
    if(target===values[i]){//sesuaikan dengan taget yg diiinginkan
      // target=count
      // console.log(count);
      return i//ditampilkan jumlah return
    }
  }
  return -1
}

let random_numbers = [ 6, 29,40, 18, 2, 72, 19, 18, 10, 37 ];
console.log(linearSearch(18, random_numbers));
console.log(linearSearch(2, random_numbers));

// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  var lokasi=[]
  for (var i=0;i<values.length;i++){
    if(target===values[i]){
      lokasi.push(i)
    }
  }
  return lokasi
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
