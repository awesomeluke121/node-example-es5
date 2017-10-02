## 使用export自訂模組
``app.js``
```javascript=
var me = require("./me");
console.log(me.who("luke"));
```
``me.js``
```javascript=
exports.who=function(name){
    return "Hello"+ name;
}
```

輸出結果為：

Hello luke