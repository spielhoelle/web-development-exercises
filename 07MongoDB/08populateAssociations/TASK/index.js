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

//Seeds some fixed locations to mongo
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
  //  TODO query all locations and send them to the client
});

app.post("/contact", async (req, res, next) => {
  var contact = new Contact();
  // TODO validate the incoming contact (has name, email, body and array of location IDs) and save it to mongo
});
app.get("/contacts", async (req, res) => {
  // TODO fetch all contacts, populate their locations and send them to the FE
});

let port = process.env.PORT || 5555;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));