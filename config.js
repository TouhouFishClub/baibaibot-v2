const path = require('path-extra')
const IMAGE_DATA = path.join(__dirname, '../coolq-data/cq/data/image/send')
const MONGO_URL = 'mongodb://192.168.17.236:27050/db_bot'
const LOCALE_IP = '192.168.17.236'

module.exports = {
	IMAGE_DATA,
	MONGO_URL,
	LOCALE_IP
}