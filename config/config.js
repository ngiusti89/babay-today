require("dotenv").config();
exports.dbConfig = {
  development: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 79b6f37042cd4a9caf8ee85236f885af49630308
    username: process.env.DEVELOPMENT_USERNAME,
    password: process.env.DEVELOPMENT_PASSWORD,
    database: process.env.DEVELOPMENT_DB,
    host: process.env.DEVELOPMENT_HOST,
<<<<<<< HEAD
    port: 8889,
    dialect: "mysql"
=======
    "username": "root",
    "password": "Dr1nk1ng!",
    "database": "babyblogger",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
>>>>>>> c106ad51be0cc70abf824e28c53203c9d2479f7e
=======
    port : 3306,
    dialect: "mysql"
>>>>>>> 79b6f37042cd4a9caf8ee85236f885af49630308
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
