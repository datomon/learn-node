let addtwo = require('./addtwo').addtwo;

let base = 10;  //跟 addtwo.js 的全域取相同名稱的變數，但不會互相影響

console.log(addtwo(base));  //會回傳 12
console.log(global);