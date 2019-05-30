// Buffer.from() 複製參數的內容傳到 buffer 內
// 複製陣列，內容就陣列;複製字串，內容就字串
let a = [1, 2, 3];
let b = Buffer.from(a);
console.log(b);

let a2 = new Uint8Array([1, 2, 3]);
let b2 = Buffer.from(a2);
console.log(b2);

let str = 'Hell World!';
let bstr = Buffer.from(str);
console.log(bstr);
//將 buffer 轉回字串(預設 utf8 編碼)
//但如果 toString 方法接收不到完整字串，就會回傳垃圾
console.log(bstr.toString());


// Buffer.alloc() 建立填滿的 buffer
let b3 = Buffer.alloc(10);
console.log(b3);


// Buffer.allocUnsafe() 建立可能帶有原資料or敏感資料的 buffer
// 必須用其 fill() 方法填入才可以確保安全
let b4 = Buffer.allocUnsafe(10);
console.log(b4);


// buffer 可轉換成 JSON 格式
// 此例中的 //new Buffer() 已被 Node 建議不使用，有安全性及可用性的問題
// 建義使用 Buffer.from()、Buffer.alloc()、Buffer.allocUnsafe()
let buf = new Buffer('This is my pretty example');
let json = JSON.stringify(buf);
console.log(json);