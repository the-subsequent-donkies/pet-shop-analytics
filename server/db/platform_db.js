const Sequelize = require('sequelize')

const platform_db = new Sequelize(
  process.env.PLATFORM_DATABASE_URL || `postgres://localhost:5433/grace-shopper`,
  {
    logging: false
  }
)

module.exports = platform_db