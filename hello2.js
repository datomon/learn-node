let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
	//取得 get 參數的 name
	let name = require('url').parse(req.url, true).query.name;

	if(name === undefined) name = 'World';

	if(name === 'burningbird') {
		let file = 'aaa.png';
		
		//stat 方法，會檢查檔案是否存在，並回傳檔案資訊的物件
		fs.stat(file, (err, stats) => {
			//fs.stat 官網介紹：https://nodejs.org/api/fs.html#fs_class_fs_stats
			console.log(stats);  //檔案資訊的物件
			console.log(stats.isDirectory());  //測試使用該物件的 isDirectory 方法

			if (err) {
				console.error(err);
				res.writeHead(200, { 'Content-type': 'text/plain'});
				res.end('Sorry, 目前找不到該張圖片');
			} else {
				// 讀取檔案並回傳給 client 端
				// 非同步寫法
				// let img = fs.readFileSync(file);
				// res.contentType = 'image/png';
				// res.contentLength = stats.size;
				// res.end(img, 'binary');

				// 另個寫法，readFile 已改為異步				
				fs.readFile(file, (err, data) => {
					console.log(JSON.stringify(data));
					// if (err) {
					// 	throw err;
					// 	console.log(err);
					// }
					// res.contentType = 'image/png';
					// res.contentLength = stat.size;
					// res.end(data, 'binary');
				});

			}
		});
	} else {
		res.writeHead(200, { 'Content-Type': 'text/plain'});
		res.end('Hello' + name + '\n');
	}
}).listen(8124);

console.log('Server running at port 8124/');