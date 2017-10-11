function MyModule() {
	//this => new Object
}
MyModule.prototype.version = "1.1.0";
MyModule.prototype.setName = function(value) {
	this._name = value;
};
MyModule.prototype.getName = function() {
	return this._name;
};
module.exports = MyModule;