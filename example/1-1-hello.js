let http = require('http');

http.createServer((req, res) => {
	console.log(req.url);  //顯示 client 端請求的 url
	res.writeHead(200, {'Content-Type' : 'text/plain'});  //key也要單引號
	res.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');