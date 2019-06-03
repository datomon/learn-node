//官方參考：https://nodejs.org/api/events.html
//用 EventEmitter class 去建立實例
//方法一：
// let events = require('events');
// let em = new events.EventEmitter();

//方法二： 
let eventEmitter = require('events').EventEmitter;
let em = new eventEmitter();

let counter = 0;

//EventEmitter 實例每隔一段時間，就發出 timed 事件
//並將第二參數傳入給 timed 事件的 callback 當其參數
setInterval(() => {
    em.emit('timed', counter++);
    if (counter > 10) process.exit(0);  //超過10就結束程序
}, 1500);

//EventEmitter 實例監聽 timed 事件
em.on('timed', data => {
    console.log('timed event：' + data);
});


// 取得目前監聽數量上限的值
// https://nodejs.org/api/events.html#events_emitter_getmaxlisteners
console.log('最大監聽數量為：' + em.getMaxListeners() + ' (若值為0表示不限制)');

// 設定監聽的數量上限。預設上，EventEmitter 監聽超過 10 個就會有警告
// https://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n
em.setMaxListeners(0);  // 0 為不限制數量
console.log('最大監聽數已改成不限制!');
console.log('最大監聽數量為：' + em.getMaxListeners());


console.log('EventEmitter counter run start');