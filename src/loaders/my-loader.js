const loaderUtils = require('loader-utils');

module.exports = function (source) {
    // console.log(source);

    // 获取到用户给当前 Loader 传入的 options
    let options;
    if (typeof this.getOptions === 'function') {
        // webpack 5 的方式
        options = this.getOptions();
    } else {
        // 兼容旧版本 webpack 的方式
        options = loaderUtils.getOptions(this);
    }

    // console.log("options", options);
    return source.replace('world', ', lnp1')
}

// 通过 exports.raw 属性告诉 Webpack 该 Loader 是否需要二进制数据 
// module.exports.raw = true