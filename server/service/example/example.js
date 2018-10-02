module.exports.default = module.exports  = {
    getList(ctx) {
        return await ctx.mysql.select({});
    }
};