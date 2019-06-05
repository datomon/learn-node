// 此範例需要先在同目錄建立 apples.txt 檔
// 檔案內容是 apple 或 Apple 皆可

let fs = require('fs');

// readFile()異步讀取檔案
// callback 若有 error，可用 err.stack 輸出錯誤記錄
fs.readFile('./apples.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err.stack);
        return;
    }
    console.log(data);

    // 取代檔案內容 (把 apple 或 Apple 變成 orange)
    // writeFile() 異步寫入，若無寫入的檔案會自動建立
    let adjData = data.replace(/[A|a]pple/g, 'orange');
    fs.writeFile('./oranges.txt', adjData, (err, data) => {
        if (err) console.error(err.stack);
    });
});