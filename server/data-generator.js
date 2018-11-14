const mongoose = require("mongoose");
const User = require("./models/user");
const OutfitsData = require("./outfits-data");
const ItemsData = require("./items-data");
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

      let itemPromises = items.map(
        ({
          color,
          source,
          name,
          image_url,
          categories,
          styles,
          occasions,
          seasons
        }) => {
          const item = new Item({
            owner: newUser._id,
            color,
            source,
            name,
            image_url,
            categories,
            styles,
            occasions,
            seasons
          });
          return item.save();
        }
      );

      Promise.all(itemPromises).then(itemObjects => {
        outfits.map(
          ({
            items,
            name,
            image_url,
            categories,
            styles,
            occasion,
            season
          }) => {
            const outfit = new Outfit({
              creator: newUser._id,
              items: itemObjects.filter(item => items.includes(item.name)),
              name,
              image_url,
              categories,
              styles,
              occasion,
              season
            });
            outfit.save();
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
