let http = require('http');

const server = http.createServer();  //建立 Server

// ------- 設定事件，排入事件迴圈中 ------------
// client 端有請求
server.on('request', (req, res) => {
    console.log('request event');

    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});

// client 端有連接時 (此事件會比請求更早發生)
server.on('connection', () => {
    console.log('connection event');
});

// Server 開始監聽時
server.listen(8124, () => {
    console.log('listening event');
});

// 執行到最後一行時
// 因為事件都會先加到事件迴圈中，等到 js 檔中全域能執行的都結束時，才開始執行事件
// 所以這一行會比監聽還要早執行
console.log('Server running on port 8124');