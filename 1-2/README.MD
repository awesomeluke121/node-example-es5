## async 非同步執行

```javascript=
console.log(1);
setTimeout(run.bind(console.log(2)));
function run() {
    console.log(3);
}
console.log(4);



```
### 輸出結果為
Lukede-MacBook-Pro:1-2 luke$ node async
1
2
4
3

## 同步執行

```javascript=
console.log(1);
run(console.log(2));
function run() {
    console.log(3);
}
console.log(4);
```
### 輸出結果為
Lukede-MacBook-Pro:1-2 luke$ node sync
1
2
3
4