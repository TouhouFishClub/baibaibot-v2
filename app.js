const { Bot } = require('./core/Bot')
const plugin1 = require('./plugin/plugin1')
const plugin2 = require('./plugin/plugin2')
const plugin3 = require('./plugin/plugin3')
const plugin4 = require('./plugin/plugin4')
const plugin5 = require('./plugin/plugin5')

new Bot({
	ws: 30005,
	port: 30004
})
	.plugin('plugin1')
	.plugin('plugin2')
	.plugin('plugin3')
	.plugin('plugin4')
	.plugin('plugin5')
	.init()