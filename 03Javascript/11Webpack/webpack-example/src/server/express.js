var express = require('express');
const server = express();
const webpack = require('webpack');
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware')(
		compiler,
		config.devServer
	);

server.use(webpackDevMiddleware);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static('dist');
server.use(staticMiddleware);

debugger;
server.get('/login', function(req, res) {
	res.send({error: '0'});
});

server.listen(3000, () => {
	console.log('server is listening on port 3000');
});
