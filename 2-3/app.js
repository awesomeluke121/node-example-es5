var MyModule = require("./MyModule");

var a = new MyModule();
console.log(a.version);

a.setName("Luke");
console.log(a.getName());


var b = new MyModule();
b.setName("Egg");
console.log(b.getName());