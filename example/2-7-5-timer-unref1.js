// 當事件迴圈只有一個計時器時，unref()會讓計時器被清除
// 下列結果為：顯示 waiting on timer... 後，程式就直接結束
let timer = setTimeout(name => {
    console.log(`Hello ${name}`);
}, 3000, 'Alvin');

timer.unref();

console.log('waiting on timer...');