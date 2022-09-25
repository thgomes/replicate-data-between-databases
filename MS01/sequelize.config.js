require('dotenv').config()

const config = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  username: process.env.MYSQL_USERNAME || 'user',
  password: process.env.MYSQL_PASSWORD || '12345',
  database: process.env.MYSQL_DB || 'first_database',
  dialect: 'mysql',
}

module.exports = config