# 了解callback function

就是將function做另一個function的參數，由另一個函式來呼叫

不過這種方式會造成callbackhell

在ES6使用Promise替代

ES7使用async/await替代 Promise 
但其實Promise依然在其中


```javascript=
function run(a, b, callback) {
    console.log("please wait...");
    setTimeout(function() {
        callback(a + b);
    }, 1000);
}
run(5, 10, function(answer) {
    console.log("answer:" + answer);
});
```

輸出結果

please wait...
answer:15