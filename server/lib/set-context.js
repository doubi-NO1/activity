const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const config = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '../../config.yml')));
const isEmpty = require('lodash/isEmpty');
const plugins = require('./plugins');
const webpackEntryConf = require(path.resolve('./webapck.entry.conf'));


/**
 * 基础上下文配置(静态)
 */
function appContextConfig(app) {
    let argv = process.argv.splice(2);
    let env = process.env.NODE_ENV = argv[0] !== 'production' ? 'development' : 'production';
    let appConfig = Object.assign({},
        config,
        config[env], {
            env: env
        }, {
            urlLocalesRegExp: ''
        }
    );

    let locales = config.locales;
    //多语言前缀
    if (!isEmpty(locales)) {
        let regexp = '';
        for (let i = 0; i < locales.length; i++) {
            let item = locales[i];
            if (i === locales.length - 1) {
                regexp += `${item}`;
            } else {
                regexp += `${item}|`;
            }
        }
        if (regexp) {
            appConfig.urlLocalesRegExp = `(${regexp})*/`;
        }
    }

    //全局通用entry
    let webpackEntry = [];
    if (webpackEntryConf) {
        Object.keys(webpackEntryConf).forEach(function (name) {
            webpackEntry.push(name.replace(/\.js/, '') + '.js');
        });
        appConfig.globalEntry = webpackEntry;
    }

    delete appConfig['development'];
    delete appConfig['production'];


    for (let item in appConfig) {
        app.context[item] = appConfig[item];
    }

    wrapCommonToContext(app);
}




/**
 * 向contenxt上下文挂载可用插件
 */
function wrapCommonToContext(app) {
    Object.keys(plugins).forEach(item => {
        switch (plugins[item].type) {
            case 'constructor':
                app.context[item.toLowerCase()] = new plugins[item][item](app.context[item.toLowerCase()])
                break
            case 'object':
                app.context[item] = plugins[item][item]
                break
            case 'function':
                app.context[item] = plugin[item][item](app.context[item])
                break;
            default:
                break;
        }
    });
}


/**
 * 设置上下文
 */
module.exports.default = module.exports = async (app) => {
    appContextConfig(app);
    app.context.logger.info('set-context initialized');
};