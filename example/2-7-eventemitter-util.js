let util = require('util');
let eventEmitter = require('events').EventEmitter;
let fs = require('fs');

//定義 InputChecker 建構函式
function InputChecker (name, file) {
    this.name = name;
    //fs.createWriteStream 官方參考：
    //https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options
    //只要一實例化，就會馬上產生檔案
    this.writeStream = fs.createWriteStream(`./${file}.txt`, {
        'flags': 'a',
        'encoding': 'utf8',  //此為預設值
        'mode': 0o666  //此為預設值，8進位實字
        // 0o666 參考：http://2ality.com/2015/04/numbers-math-es6.html
        // 0o 是 ES6 的八進位的意思
        // 8進位實字參考：https://openhome.cc/Gossip/Ruby/Numeric.html
    });
}

//讓 InputChecker 建構函式繼承 EventEmitter 類別
util.inherits(InputChecker, eventEmitter);

//定義 InputChecker 建構函式原型中 check 方法內容
//依輸入的值，定義要發出什麼事件
InputChecker.prototype.check = function (input) {
    let command = input.trim().substr(0, 3);  //取輸入的前三個字元

    // 處理命令
    if (command === 'wr:') {
        //若是 wr 則輸出檔案，實例發出 write 事件
        this.emit('write', input.substr(3, input.length));
    } else if (command === 'en:') {
        //若是 en，實例發出 end 事件
        this.emit('end');
    } else {
        //其餘則實例發出 echo 事件
        this.emit('echo', input);
    }
}

//產生實例，並開啟資料流
let ic = new InputChecker('Alvin', 'output');

// --- 實例監聽事件(繼承 EventEmitter 類別，所可以用 on 函式) ---
ic.on('write', data => {
    console.log('write event');
    //實例的資料流寫入資料，官方參考：
    //https://nodejs.org/api/fs.html#fs_class_fs_writestream
    //https://nodejs.org/api/stream.html#stream_writable_write_chunk_encoding_callback
    ic.writeStream.write(data);
});

ic.on('end', () => {
    console.log('end event');
    process.exit();
});

ic.on('echo', data => {
    console.log('echo event');
    //用標準輸出顯示在終端機
    process.stdout.write(`${ic.name} wrote ${data}`);
});

//設定標準輸入的編碼(沒設定會變成 buffer 而不是字串)
process.stdin.setEncoding('utf8');

//Node 監聽標準輸入的輸入(讀取)事件
process.stdin.on('readable', () => {
    let input = process.stdin.read();  //開啟標準輸入
    if (input !== null) ic.check(input);  //實例檢查輸入的字串，會發出什麼事件
});
