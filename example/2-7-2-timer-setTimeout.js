// setTimeout 延遲一段時間後，執行第一參數的 callback
// 第三參數是要帶入 callback 中當其參數的值
// 下列的結果為：顯示 Hi Alvin
setTimeout(name => {
    console.log(`Hi ${name}`);
}, 3000, 'Alvin');

console.log('waiting on timer');  //第一個出現的訊息
