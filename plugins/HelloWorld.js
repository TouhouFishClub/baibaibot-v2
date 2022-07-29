const Plugin = require('../core/Plugin')

const HelloWorld = new Plugin(
	'HelloWorld',
	[
		{
			type: 'equals',
			text: 'hello'
		}
	],
	msgObject => {
		console.log(msgObject)
	}
)

module.export = HelloWorld