var cors = require('koa2-cors');

/**
 * 跨域处理
 */
module.exports.default = module.exports = (app) => {
  app.use(cors({
    origin: function (ctx) {
        // if (ctx.url === '/test') {
        //   return false;
        // }
        return '*';
      },
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 5,
      credentials: true,
      allowMethods: ['GET', 'POST', 'DELETE'],
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }))
  app.context.logger.info(`cors initialized`);
}