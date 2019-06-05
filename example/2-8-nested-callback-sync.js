// 此範例需要先在同目錄建立 apples.txt 檔
// 檔案內容是 apple 或 Apple 皆可

let fs = require('fs');

try {
    // readFileSync()同步讀取檔案
    let data = fs.readFileSync('./apples.txt', 'utf8');
    console.log(data);

    // 取代檔案內容 (把 apple 或 Apple 變成 orange)
    // writeFileSync() 同步寫入，若無寫入的檔案會自動建立
    let adjData = data.replace(/[A|a]pple/g, 'orange');
    fs.writeFileSync('./oranges.txt', adjData);
} catch(err) {
    console.log(err);
}