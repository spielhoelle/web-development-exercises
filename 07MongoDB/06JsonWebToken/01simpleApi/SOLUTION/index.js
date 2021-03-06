// =================================================================
// get the packages we need ========================================
// =================================================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

var jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens
var User = require("./user"); // get our mongoose model

// =================================================================
// configuration ===================================================
// =================================================================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(`mongodb://${process.env.MONGOPATH}:27017/DCI6jsonwebtoken`, {
  useNewUrlParser: true
}); // connect to database
app.set("superSecret", "thisshouldbesupersecret"); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan("dev"));

// create a sample user
(async () => {
  const users = await User.find({});
  if (users.length == 0) {
    console.log(`No user in database, lets create some`);
    var user = new User({
      name: "alice",
      password: "password",
      admin: true
    });
    await user.save();
    console.log("User saved successfully");
  }
})();

// =================================================================
// routes ==========================================================
// =================================================================

// basic route (http://localhost:8080)
app.get("/", function(req, res) {
  res.send("Hello! The API is at http://localhost:" + port + "/api");
});

// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router();

// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
// http://localhost:8080/api/authenticate
apiRoutes.post("/authenticate", function(req, res) {
  // find the user
  // TODO findOne user by name, if no user found: res.json() with this information
  // TODO if user found, but password is wrong: res.json() with this information
  // TODO if user is found and password is correct, sign a jwt token and res.json send it back to the client
  User.findOne(
    {
      name: req.body.name
    },
    function(err, user) {
      if (err) throw err;

      if (!user) {
        res.json({
          success: false,
          message: "Authentication failed. User not found."
        });
      } else if (user) {
        // check if password matches
        if (user.password != req.body.password) {
          res.json({
            success: false,
            message: "Authentication failed. Wrong password."
          });
        } else {
          // if user is found and password is right
          // create a token
          var payload = {
            user: user.name,
            admin: user.admin
          };
          var token = jwt.sign(payload, app.get("superSecret"), {
            expiresIn: 86400 // expires in 24 hours
          });

          res.json({
            success: true,
            message: "Enjoy your token!",
            token: token
          });
        }
      }
    }
  );
});

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers["x-access-token"];

  // decode token
  if (token) {
    try {
      // verifies secret and checks exp
      const decoded = jwt.verify(token, app.get("superSecret"));
      // Bind the decrypted info to the req
      req.decoded = decoded;
      //This actually makes this function to a middleware and forwards to the authenticated routes
      next();
    } catch (e) {
      return res.json({
        success: false,
        message: "Failed to authenticate token."
      });
    }
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
});

// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
apiRoutes.get("/", function(req, res) {
  console.log('req.decoded', req.decoded);
  
  res.json({
    message: `Welcome ${req.decoded.user} to the coolest API on earth!`
  });
});

apiRoutes.get("/users", function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

apiRoutes.get("/check", function(req, res) {
  res.json(req.decoded);
});

app.use("/api", apiRoutes);

// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log(``);
console.log(`#######################################################`);
console.log("The api-url is localhost:" + port);
console.log(``);
console.log(
  `A user is in the database with username: alice and password: password`
);
console.log(``);
console.log(
  `The plan is to authenticate that user with postman per /api/authenticate and the username and password per raw/json`
);
console.log(`#######################################################`);
console.log(``);
