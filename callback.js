// ------ callback 功能的基本結構 -----
// 費氏數列遞迴-費波那契數列 (Fibonacci numbers)：一串數字中，每一項是前兩項的和
// 參考：https://medium.com/appworks-school/%E5%88%9D%E5%AD%B8%E8%80%85%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-%E5%BE%9E%E8%B2%BB%E6%B0%8F%E6%95%B8%E5%88%97%E8%AA%8D%E8%AD%98%E4%BD%95%E8%AC%82%E9%81%9E%E8%BF%B4-dea15d2808a3
let fib = (n) => {
    if (n < 2) return n;  //參數值 < 2，回傳該參數。這裡的值為 0 或 1
    return fib(n - 1) + fib(n - 2);  //參數值 >= 2，回傳的範圍就是 fib(1) + fib(0) 以上
};

let obj = function() {};  //obj 為一個空的匿名函式

//原型參考：http://www.codedata.com.tw/javascript/essential-javascript-15-prototype
obj.prototype.doSomething = function(arg1_) {
    //指派變數 callback_ 為參數中的最後一個
    //arguments 參考：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments
    let callback_ = arguments[arguments.length - 1];
    
    //指派全域變數 callback，若變數 callback_ 是函式就指派給 callback，若非就指派 null
    //確保最後一個參數是給函式
    callback = (typeof(callback_) == 'function')? callback_ : null;
    
    //指派變數 arg1，若匿名函式的第一個參數 arg1_ 是數字就指派給 arg1，若非就指派 null
    let arg1 = typeof arg1_ === 'number' ? arg1_ : null;

    //非 arg1 非數字時 (即上一行的 null)
    if(!arg1) return callback(new Error('first arg miss or not a number'));

    //process.nextTick() 在搶在所有事件迴圈前，主動執行其內容
    //參考：https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/
    process.nextTick(() => {
        // CPU阻斷
        let data = fib(arg1);  //呼叫 fib 函式
        console.log('fib 計算後的 data 值為：' + data);
        callback(null, data);  //callback 若無錯誤，第一參數的 err，其值為 null
    });
};

let test = new obj();  //實例化 obj
let number = 10;

//呼叫原型中的 doSomething 方法，測試第二參數的 callback 函式有沒有作用
test.doSomething(number, (err, value) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('fibonaci value for %d is %d', number, value);
});

console.log('called doSomethin');