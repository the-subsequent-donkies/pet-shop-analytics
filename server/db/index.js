const db = require('./db')
const platform_db = require('./platform_db')

// register models
require('./models')

module.exports = {db, platform_db}
