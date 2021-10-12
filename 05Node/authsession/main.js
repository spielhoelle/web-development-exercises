const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(session({
		secret: 'mySecretKey',
		resave: true, // 
		saveUnitialized: true
}));

function auth(req, res, next) {
	if(req.session && req.session.user === 'jan' && req.session.admin) {
			return next();
	}
	else {
			return res.sendStatus(401);
	}
}

app.get('/login', function(req, res) {
	if(!req.query.username || !req.query.password) {
			res.send('username and password required');
	}
 	else if(req.query.username === 'jan' && req.query.password === 'foobar') {
 		req.session.user = 'jan';
 		req.session.admin = true;
 		res.send({ error: 0, result: 'logged in' });
 		console.log(JSON.stringify(req.session));
 	}
});

app.get('/logout', function(req, res) {
   req.session.destroy();
   res.send({ error: 0, result: 'logout successful' });
});

app.get('/content', auth, function(req, res) {
	res.send('This is the secret area.');	
});

app.listen(3000);
console.log('app running at port 3000');