// 當事件迴圈有二個計時器時，unref() 則不會有效果
// 下列結果為：程式會正常執行
let interval = setInterval(name => {
    console.log(`Hello ${name}`);
}, 3000, 'Alvin');

let timer = setTimeout(interval => {
    clearInterval(interval);  //清除 setInterval
    console.log('cleared interval');
}, 12000, interval);

timer.unref();

console.log('waiting on first interval...');