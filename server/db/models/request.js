const Sequelize = require('sequelize')
const db = require('../db')

const Request = db.define('request', {
  reqType: {
    type: Sequelize.STRING,
  },
  referringSite: {
    type: Sequelize.TEXT,
  },
  page: {
    type: Sequelize.STRING,
  },
  time: {
    type: Sequelize.DATE,
  },
  userAgent: {
    type: Sequelize.STRING,
  },
  browser: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
  socketId: {
    type: Sequelize.STRING,
  }
})

module.exports = Request