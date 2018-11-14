const mongoose = require("mongoose");
const User = require("./models/user");
const DivisionsData = require("./divisions-data");
const ClubsData = require("./items-data");
var connection = mongoose.connect("mongodb://localhost:27017/sport-norge");

let names = [
  "Vegard",
  "Bjorn",
  "Kristine",
  "Birgit",
  "Jose",
  "Cecilie",
  "Ingerid",
  "Astrid",
  "Morten",
  "Patrick",
  "Erik",
  "Søren",
  "Alexander"
];

let results = names.map(name => ({
  name,
  username: `@${name.toLowerCase()}`,
  email: `${name}@gmail.com`,
  password: "123456",
  activation_code: "123456",
  qr_code: "123456",
  last_login: Date.now(),
  status: "activated"
}));

console.log(results);

results.map(user => {
  let newUser = new User(user);
  newUser
    .save()
    .then(err => {
      if (err) {
        console.log("err:", err);
      }

      let clubPromises = ClubsData.map(({ name }) => {
        const club = new Club({
          name
        });
        return club.save();
      });

      Promise.all(clubPromises).then(clubObjects => {
        divisions.map(
          ({
            items,
            name,
            image_url,
            categories,
            styles,
            occasion,
            season
          }) => {
            const division = new Division({
              name,
              image_url
            });
            division.save();
          }
        );
      });
    })
    .catch(err => {
      if (err) {
        console.log(err);
        return;
      }
    });
});
