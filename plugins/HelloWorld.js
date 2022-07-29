const Plugin = require('../core/Plugin')

const HelloWorld = new Plugin(
	'HelloWorld',
	msgObject => {
		console.log(msgObject)
	},
	'hello'
)

module.export = HelloWorld