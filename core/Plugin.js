class Plugin {
	constructor(name, Fn, rule) {
		this.name = name
		this.Fn = Fn
		this.rule = rule
	}
	matchRule(message) {
		this.rule.filter(ruleOption => {
			let { type, text } = ruleOption
			switch(type) {
				case 'equals':
					return text === message
				case 'regexp':
					if(Object.prototype.toString.call(text) == '[object RegExp]') {
						return message.match(text)
					} else {
						return message.match(new RegExp(text))
					}
			}
		})

	}
	check(messageObject) {
		if(this.matchRule(messageObject.message)) {
			this.Fn(messageObject)
		}
	}
}
module.exports = {
	Plugin
}