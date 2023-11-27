const { getOptions } = require("loader-utils");
const { marked } = require("marked");

module.exports = function (source) {
  console.log("marked：", marked);

  // 获取到用户给当前 Loader 传入的 options
  let options;
  if (typeof this.getOptions === "function") {
    // webpack 5 的方式
    options = this.getOptions();
  } else {
    // 兼容旧版本 webpack 的方式
    options = getOptions(this);
  }

  marked.options = {
    ...options,
  };
  let html = marked.parse(source);
  return "module.exports = " + JSON.stringify(html);
};
