const Sequelize = require('sequelize')
const db = require('../db')

const Request = db.define('request', {
  reqType: {
    type: Sequelize.STRING,
  },
  URL: {
    type: Sequelize.TEXT,
  },
  requesterIP: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Request