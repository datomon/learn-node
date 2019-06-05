// setInterval 持續每隔一段時間，就呼叫 callback
// clearInterval 清除 setInterval
// 下列的結果為：每隔 3 秒顯示 Hello Alvin
let interval = setInterval(name => {
    console.log(`Hello ${name}`);
}, 3000, 'Alvin');

// 30秒後，清除 setInterval
setTimeout(interval => {
    clearInterval(interval);  //清除 setInterval
    console.log('cleared Interval');
}, 30000, interval);

console.log('waiting on first interval...');