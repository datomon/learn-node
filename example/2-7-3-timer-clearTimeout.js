// clearTimeout 可以取消 setTimeout
// 為了方便操作 setTimeout 最好指派給某個變數
let timer1 = setTimeout(name => {
    console.log(`Hi ${name}`);
}, 10000, 'Alvin');

console.log('waiting on timer1');  //第一個出現的訊息

setTimeout(timer => {
    clearTimeout(timer);  //清除指定的 setTimeout
    console.log('cleared timer');
}, 3000, timer1);