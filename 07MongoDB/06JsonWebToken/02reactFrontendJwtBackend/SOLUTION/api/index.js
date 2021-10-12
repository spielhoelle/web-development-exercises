require("dotenv").config({ path: "./.env" });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));

const jwt = require("jsonwebtoken");
const Location = require("./Location");
const User = require("./user");

const mongopath = process.env.MONGOPATH || `localhost`;
const port = process.env.PORT || 8080;

mongoose.connect(`mongodb://${mongopath}:27017/DCI6jsonwebtoken`, {
  useNewUrlParser: true
});
app.set("superSecret", "thisshouldbesupersecret");

(async () => {
  const locations = await Location.find({});
  if (locations.length == 0) {
    console.log(`No locations in database, lets create some`);
    const titles = [
      "Oranienburg",
      "Potsdam",
      "Eisenhuettenstadt",
      "Stuttgart",
      "Rostock",
      "Hamburg"
    ];
    for (let i = 0; i < titles.length; i++) {
      Location.create({
        name: titles[i]
      });
    }
  }
  const users = await User.find({});
  if (users.length == 0) {
    console.log(`No user in database, lets create some`);
    const user = new User({
      name: "alice",
      password: "password",
      admin: true
    });
    await user.save();
    console.log("User saved successfully");
  }
})();

app.get("/", function(req, res) {
  res.send("Hello! The API is at http://localhost:" + port + "/api");
});
app.post("/", function(req, res) {
  console.log("req.body", req.body);

  res.send("Hello! The API is at http://localhost:" + port + "/api");
});

const apiRoutes = express.Router();

apiRoutes.post("/authenticate", function(req, res) {
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
        if (user.password != req.body.password) {
          res.json({
            success: false,
            message: "Authentication failed. Wrong password."
          });
        } else {
          const payload = {
            user: user.name,
            admin: user.admin
          };
          const token = jwt.sign(payload, app.get("superSecret"), {
            expiresIn: 86400
          });

          res.json({
            success: true,
            user: user,
            message: "Enjoy your token!",
            token: token
          });
        }
      }
    }
  );
});

apiRoutes.use(function(req, res, next) {
  const token = req.headers["x-access-token"];

  if (token) {
    try {
      const decoded = jwt.verify(token, app.get("superSecret"));

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
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
});

apiRoutes.get("/", function(req, res) {
  console.log("req.decoded", req.decoded);

  res.json({
    message: `Welcome ${req.decoded.user} to the coolest API on earth!`
  });
});

apiRoutes.get("/locations", function(req, res) {
  
  Location.find({}, function(err, locations) {
    console.log('locations', locations);
    res.json(locations);
  });
});

apiRoutes.get("/check", function(req, res) {
  res.json(req.decoded);
});

app.use("/api", apiRoutes);

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
