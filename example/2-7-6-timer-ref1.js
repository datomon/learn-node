// 當事件迴圈只有一個計時器時，unref()會讓計時器被清除
// 但 unref() 之後，又對計時器用 ref()，則計時器依然會執行
// 即 ref() 可以取消 unref() 的效果
// 下列結果為：程式會完整執行
let timer = setTimeout(name => {
    console.log(`Hello ${name}`);
}, 3000, 'Alvin');

timer.unref();  //取消計時器
timer.ref();  //讓計時器可以執行

console.log('waiting on timer...');