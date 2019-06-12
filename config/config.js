require("dotenv").config();
exports.dbConfig = {
  development: {
    "username": "root",
    "password": "Dr1nk1ng!",
    "database": "babyblogger",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  test: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_DB,
    host: process.env.TEST_PASSWORD,
    port: 3306,
    dialect: "mysql"
  },
  production: {
    username: process.env.PRODUCTION_USERNAME,
    password: process.env.PRODUCTION_PASSWORD,
    database: process.env.PRODUCTION_DB,
    host: process.env.PRODUCTION_PASSWORD,
    port: 3306,
    dialect: "mysql"
  }
};