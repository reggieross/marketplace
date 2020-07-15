const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const options = {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
            '^/authentication-service/': '/',
        },
        router: {
            'localhost:3000': 'https://marketplace-auth.herokuapp.com',
        },
    };
    app.use(
        '/authentication-service/',
        createProxyMiddleware(options)
    );
};