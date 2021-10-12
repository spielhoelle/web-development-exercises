const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'MySecret';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:  

  // Authorization Bearer 123

  if(jwt_payload.id === 'jan') {
    let user = { id: jwt_payload.id };
    next(null, user);
  }
  else {
    next(null, false);
  }
});

passport.use(strategy);

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(express.json());

app.get('/', function(req, res) {
    return res.send({ jwtexample: '1.0' });
});

// login returns a token if verified successfully
app.post('/login', function(req, res) {
    if(!req.body.name && !req.body.password) {
        return res.send({ error: 'username and password required' });
    }

    if(req.body.name === 'jan' && req.body.password === 'foobar') {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = { id: 'jan' };
        var token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ error: 0, token: token });
    } 
    else {
        res.send({ error: "user not found" });
    }
});

// app.get('/:path*', passport.authenticate('jwt', { session: false }),
app.get('/content', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        return res.send({ error: 0, result: 'sssshhh its a secret' });
    }
);

app.listen(3000, function() {
  console.log("Express running");
});