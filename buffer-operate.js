let buf1 = Buffer.from('this is the way we build our buffer');
let lnth = buf1.length;

//從已有的 buffer1 的某個長度建立新 buffer2
let buf2 = buf1.slice(19, lnth);
console.log(buf2.toString());  //會顯示 build our buffer

//修改第 2 個 buffer
buf2.fill('*', 0, 5);  //把 buffer2 內容索引位置 0 開始，往後 5 個用 * 填充
console.log(buf2.toString());  //會顯示 ***** our buffer

// 查看 buffer2 的修改是否會顯響 buffer1
console.log(buf1.toString());  //會顯示 this is the way we ***** our buffer

// buffer 的 euqals() 方法可檢查是否與另個 buffer 是同一個
// 下行的結果不會輸出任何東西，因為是不同的 buffer
if (buf1.equals(buf2)) console.log('buf1 is === buf2');

// buffer.copy() 可以複製 buffer 的內容裝到另個 buffer 中
// 但只會複製到另個 buffer 裝的下(從內容最前面開始裝)的大小 
let buf3 = Buffer.alloc(10);  //建立長度10的已填滿 buffer
buf1.copy(buf3);  //複製 buffer1 的內容到 buffer3 內
console.log(buf3.toString());  //會顯示 this is th

// buffer 的 compare() 方法可以比較二個 buffer 之間的位元先後順序
// https://nodejs.org/api/buffer.html#buffer_buf_compare_target_targetstart_targetend_sourcestart_sourceend
let buf4 = Buffer.from('0123');
let buf5 = Buffer.from('1234');

let buf6 = Buffer.alloc(buf4.length);
buf4.copy(buf6);

console.log(buf4.compare(buf5));  //在參數內的 buffer 之前，回傳 -1
console.log(buf5.compare(buf4));  //在參數內的 buffer 之後，回傳 1
console.log(buf4.compare(buf6));  //二個 buffer 相同，回傳 0