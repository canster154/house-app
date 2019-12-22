const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/mz', {
    "target": "https://m.maizuo.com/",
    "changeOrigin": true,
    "pathRewrite": {
      "^/mz": "/"
    }
  }))
}