const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  const options = {
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {
      '^/authentication-service/': '/',
    },
    router: {
      'localhost:3000': 'localhost:3001/auth',
    },
  };
  app.use('/authentication-service/', createProxyMiddleware(options));

  const gqlOption = {
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {
      '^/gql-gateway/': '/',
    },
    router: {
      'localhost:3000': 'localhost:3001/gateway',
    },
  };
  app.use('/gql-gateway/', createProxyMiddleware(gqlOption));
};
