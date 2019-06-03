//串流時保險起見，buffer 接收串字分段結果，就要用原生的 string_decoder 模組
let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');

//歐元符號：需要三個8位元組表示，0xE2、0x82、0xAC
let euro = [0xE2, 0x82];
let euro2 = [0xAC];

let buf1 = Buffer.from(euro);
let buf2 = Buffer.from(euro2);

//用 string_decoder 模組去接收分段的串流資料
console.log(decoder.write(buf1));
console.log(decoder.write(buf2));  //會等此行結束才結合資料轉成字串

//用 toString 去接收分段的串流資料
//會每行一結束就直接轉字串，因此二行都會會吐一個亂碼字元
console.log(buf1.toString());
console.log(buf2.toString());