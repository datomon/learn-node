// setTimeout 延遲一段時間後，執行第一參數的 callback
// 第三參數是要帶入 callback 中當其參數的值，下面會顯示 Hi Alvin
// setTimeout(name => {
//     console.log(`Hi ${name}`);
// }, 3000, 'Alvin');

// console.log('waiting on timer');  //第一個出現的訊息



// clearTimeout 可以取消 setTimeout
// 為了方便操作 setTimeout 最好指派給某個變數
// let timer1 = setTimeout(name => {
//     console.log(`Hi ${name}`);
// }, 10000, 'Alvin');

// console.log('waiting on timer1');  //第一個出現的訊息

// setTimeout(timer => {
//     clearTimeout(timer);  //取消指定的 setTimeout
//     console.log('cleared timer');
// }, 3000, timer1);