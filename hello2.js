let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
	//取得 get 參數的 name
	let name = require('url').parse(req.url, true).query.name;

	if(name === undefined) name = 'World';

	if(name === 'burningbird') {
		let file = 'aaa.png';
		
		//stat 方法，會檢查檔案是否存在，並回傳檔案資訊的物件
		fs.stat(file, (err, stat) => {
			console.log(stat);
			if (err) {
				console.error(err);
				res.writeHead(200, { 'Content-type': 'text/plain'});
				res.end('Sorry, 目前找不到該張圖片');
			} else {
				// 非同步寫法
				let img = fs.readFileSync(file);
				res.contentType = 'image/png';
				res.contentLength = stat.size;
				res.end(img, 'binary');

				// 同步寫法(不推薦)
				// fs.readFile(file, (err, data) => {
				// 	res.contentType = 'image/png';
				// 	res.contentLength = stat.size;
				// 	res.end(data, 'binary');
				// });
			}
		});
	} else {
		res.writeHead(200, { 'Content-Type': 'text/plain'});
		res.end('Hello' + name + '\n');
	}
}).listen(8124);

console.log('Server running at port 8124/');