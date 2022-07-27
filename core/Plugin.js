class Plugin {
	constructor(name, Fn, ...keywords) {
		this.name = name
		this.Fn = Fn
		this.keywords = keywords
	}
}
module.exports = {
	Plugin
}