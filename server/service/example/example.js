module.exports.default = module.exports  = {
    async getList(ctx) {
        return await ctx.mysql.select({
            tbName:'tb_user',
            terms:{
                name:"张三"
            }
        });
    }
};