/**********************
* 測試標準串流範例  *
***********************/

// 設定標準串流的編碼，這樣 stdin 抓到的才會是個字串
// 沒編碼的話，抓到的會變成一個 buffer(輸出也會是 buffer)
process.stdin.setEncoding('utf8');

// 監聽讀取事件，標準輸入抓到的值，才能做後續的處理
// 如下例，交給標準輸出把訊息寫在終端機上
process.stdin.on('readable', () => {  
    let input = process.stdin.read();  //開啟一個讀取(等待)輸入的動作

    if (input !== null) {
        //回傳去頭尾空白的新字串，若沒編碼會出錯，因為 buffer 沒有 trim() 方法
        let command = input.trim();

        // buffer 的變通方式，把其轉成字串，然後執行 trim()
        //let command = input.toString().trim();

        if (command === 'exit') process.exit(0);  //結束程式

        process.stdout.write(input);
    }
});


// 此為官網可以持續標準輸入的版本
// process.stdin.on('readable', () => {
//     let chunk;
    
//     //用 while 迴圈重覆做著開啟一個讀取(等待)輸入的動作
//     while ((chunk = process.stdin.read()) !== null) {
//         process.stdout.write(`data: ${chunk}`);
//     }
// });

// process.stdin.on('end', () => {
//     process.stdout.write('end');
// });
