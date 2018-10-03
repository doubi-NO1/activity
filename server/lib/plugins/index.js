const axios = require('./axios');
const logger = require('./log4js');
const Mysql = require('./mysql-driver');

/**
 * type类型：object，constructor,function
 */
module.exports = {
  axios:{
    type:'object',
    axios
  },
  logger:{
    type: 'object',
    logger
  },
  Mysql:{
    type: 'constructor',
    Mysql
  }
}