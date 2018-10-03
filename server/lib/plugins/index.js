const axios = require('./axios');
const logger = require('./log4js');
const Mysql = require('./mysql-driver');

module.exports = {
  axios:{
    isConstructor:false,
    axios
  },
  logger:{
    isConstructor: false,
    logger
  },
  Mysql:{
    isConstructor: true,
    Mysql
  }
}