const exampleService = require('../../service/example/example');

const index = async (ctx, _next) => {
    let locals = {
        title: 'example'
    };
    //appName开发模式下不会加载生产后的css
    ctx.state.appName = 'example';
    await ctx.render('page/example', locals);
};

const list = (ctx, _next) => {
    if (ctx.path === '/favicon.ico') return;
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    let data = {
        obj:{
            views: n + ' views'
        } 
    };
    ctx.body = data;
};

module.exports.default = module.exports = {
    index,
    list
};
