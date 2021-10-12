const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const app = express();

var corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	credentials: true
}

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({secret: 'keyboard cat'}));
app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(passport.session());

///////////////////
//  strategies  ///
///////////////////

passport.use(new LocalStrategy(
	function(username, password, done) {
		
 	if(username === 'jan' && password === 'foobar') {
 		var user = {
			 id: 123,
			 username: 'jan',
			 password: 'foobar',
			 admin: true
		};

		return done(null, user);
	 }
	 else {
		 return done({error: 1});
	 }	
		// User.findOne({ username: username }, function (err, user) {
		// if (err) { return done(err); }
		// if (!user) { return done(null, false); }
		// if (!user.verifyPassword(password)) { return done(null, false); }
		// return done(null, user);
		// });
	}
));

passport.use(new FacebookStrategy({
	clientID: '447917835601761',
	clientSecret: 'c3a5735b5212a754c31f8f11871625d3',
	callbackURL: 'http://localhost:3001/fbcallback',
	profileFields: ['id', 'email']
	},
	function(accessToken, refreshToken, profile, done) {
		console.log('profile: ' + profile);
		process.nextTick(function () {
			return done(null, profile);
	  	});
	}
));

passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3001/gcallback',
    realm: 'http://localhost:3000/'
  },
  function(identifier, done) {
    User.findByOpenID({ openId: identifier }, function (err, user) {
      return done(err, user);
    });
  }
));

app.get('/loginfb', 
	passport.authenticate('facebook', { failureRedirect: '/login' }),
  	function(req, res) {
		// res.redirect('/');
		res.send('fb login successful');
	}
);

app.post('/login', 
	passport.authenticate('local', { failureRedirect: '/login' }),
  	function(req, res) {
		// res.redirect('/');
		res.send('login successful');
	}
);

app.get('/logout', function(req, res) {
   req.session.destroy();
   res.send('logout successful');
});

function isAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	return res.send(401);
}

app.get('/fbcallback', 
	passport.authenticate('facebook'),
	function(req, res) {
	// res.send('fbcallback');	
	res.redirect('http://localhost:3000');
});

app.get('/content', isAuthenticated, function(req, res) {
	res.send('This is the secret area.');	
});

passport.serializeUser(function(user, done) {
	done(null, user.id);
});
   
passport.deserializeUser(function(id, done) {
	if(id !== 123 && id !== '10154812713731691') 
		done({error: 'user not found'}, null);
	
	done(null, {username: 'jan', id: 123});
	// User.findById(id, function (err, user) {
	// 	done(err, user);
	// });
});

app.listen(3001);
console.log('app running at port 3001');