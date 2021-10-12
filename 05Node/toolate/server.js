const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');
const Laties = require('./toolatemodel.js');
const Users = require('./usermodel.js');
const randomstring = require('randomstring');
const mailnotifier = require('./mailnotifier');
const bcrypt = require('bcrypt');

// task:
//
// 1. protect routes: only let users read, write and delete laties
//    when they are 'jan' and admin
// 2. create a post method /logout, that destroys the session

mongoose.connect('mongodb://localhost/toolate');
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUnitialized: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    return res.send({ toolate: '1.0' });
});

function auth(req, res, next) {
    if(req.session && req.session.admin === true) {
        return next();
    }
    else {
        return res.send(401);
    }    
}

app.get('/laties', auth, function(req, res) {
    Laties.find({},     function(err, result) {
        if(err) {
            return res.send({ error: err });
        }

        if(!result) {
            return res.send({ error: 'some other error' })
        }

        return res.send(result);
    });
});

app.post('/laties', auth, function(req, res) {
    if(!req.body.name || !req.body.time || !req.body.date) {
        return res.send({ error: 'name, time and date needed' });
    }

    let newLaty = new Laties(req.body);
    newLaty.save(function(err, newRecord) {
        if(err) return res.send({ error: err });

        return res.send({ ...req.body, id: newRecord._id })
    });
});

app.delete('/laties/:id', auth, function(req, res) {
    Laties.findById(req.params.id, function(err, laty) {
        if(!laty)
            return res.send({ err: 'laty not found '});

        laty.remove(function(err) {
            if(err) return res.send(err);
            return res.send(laty);
        });
    });
});

app.post('/login', function(req, res) {
    if(!req.body.email || !req.body.password) 
        return res.send({ error: 'username password required' });

    Users.findOne({ email: req.body.email, active: true },
        function(err, user) {
            if(err) {
                return res.send({ error: err });
            }

            if(!user) {
                return res.send({ error: 'user not found' })
            }

            bcrypt.compare(req.body.password, user.password, function(err, hashRes) {
                if(hashRes) {                
                    req.session.user = req.body.email;
                    req.session.admin = true;
                    console.log(JSON.stringify(req.session));
                    
                    return res.send({ ...user, error: 0 });
                }
                else {
                    return res.send({ error: 'password incorrect' });
                }
            });
        });
});

app.post('/signup', function(req, res) {
    if(!req.body.email || !req.body.password || !req.body.repeatpassword) {
        return res.send({ error: 'email, password and repeat password required' });
    }

    if(req.body.password !== req.body.repeatpassword) {
        return res.send({ error: 'password and repeat password need to be identical' });
    }    

    bcrypt.hash(req.body.password, 10, function(err, hashedPwd) {
        let activationCode = randomstring.generate(20);
        let newUserObj = {
            email: req.body.email,
            password: hashedPwd,
            activationCode: activationCode,
            active: false
        };

        let newUser = new Users(newUserObj);
        newUser.save(function(err, newRecord) {
            if(err) return res.send({ error: err });

            mailnotifier.sendMail(req.body.email, 'Your registration at tooLate', 
            `Hi, 
            please confirm your registration by clicking the following link 
            <a href="http://localhost:3000/?activate=${activationCode}">Activation Link</a>`);

            return res.send({ ...newUserObj, error: 0 , id: newRecord._id });
        });
    });
});

app.get('/activate/:activationcode', function(req, res) {
    Users.findOneAndUpdate({ activationCode: req.params.activationcode },
        { active: true },
        function(err, user) {
            if(err) {
                return res.send({ error: err });
            }

            if(!user) {
                return res.send({ error: 'user not found' })
            }

            return res.send({ error: 0 });
        });
});

app.post('/logout', function(req, res) {
    if(req.session) {
        req.session.destroy();
        return res.send({ error: 0 });
    }
});

app.listen(3000);
