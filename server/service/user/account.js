module.exports.default = module.exports = {
  //注册
  async register(ctx){
    return await ctx.mysql.insert({
      table:'tb_user',
      terms:ctx.parms
    })
  },
  //登录
  async login(ctx){
    return await ctx.mysql.select({
      table: 'tb_user',
      terms:{
        name:ctx.parms.name,
        password:ctx.parms.password
      }
    })
  },
  //找回密码
  getBack(ctx) {
    
  }
}