const account = require('../../service/user/account');

const register = async (ctx, _next) => {
  
}

const login = async (ctx, _next) =>{
  ctx.body = await account.login(ctx)
}


module.exports.default = module.exports = {
  register,
  login
}