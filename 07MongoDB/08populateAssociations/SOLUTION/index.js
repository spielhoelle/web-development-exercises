const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const bodyParser = require("body-parser");

const Contact = require("./Contact");
const Location = require("./Location");
app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("./"));

mongoose.set("useCreateIndex", true);
try {
  mongoose.connect("mongodb://localhost:27017/DCI_populateAssociations", {
    useNewUrlParser: true
  });
} catch (err) {
  console.log(`Please set a mongo path in your .env \n\n${err}`);
}

//Seed
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
})();

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/locations", async (req, res) => {
  const locations = await Location.find({});
  res.send(locations);
});
app.get("/contacts", async (req, res) => {
  const contact = await Contact.find({}).populate('locations');
  res.send(contact);
});

app.post("/contact", async (req, res, next) => {
  var contact = new Contact();
console.log('req.body', req.body);

  if (!req.body.name) {
    console.error("No name");
    return res.redirect('/');
  }
  if (!req.body.email) {
    console.error("No email");
    return res.redirect('/');
  }
  if (!req.body.body) {
    console.error("No body");
    return res.redirect('/');
  }

  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.body = req.body.body;
  contact.createdAt = new Date();
  contact.locations = req.body.locations;

  console.log("contact", contact);
  contact.save(async err => {
    if (err) console.error("err", err);
    res.redirect(req.headers.referer);
    next();
  });
});

let port = process.env.PORT || 5555;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
