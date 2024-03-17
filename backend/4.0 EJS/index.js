import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let ejsObj = {};

function dayGenerator(req, res, next) {
  let currentDate = new Date();
  let currentDay = currentDate.getDay();
  if (currentDay == 0 || currentDay == 6) {
    ejsObj = {
      day: "weekend",
      advice: "It's time to have some fun.",
    };
  } else {
    ejsObj = {
      day: "weekday",
      advice: "It's time to work harder.",
    };
  }
  next();
}

app.use(express.urlencoded({ extended: true }));
app.use(dayGenerator);

app.get("/", (req, res) => {
  res.render(`${__dirname}/views/index.ejs`, ejsObj);
});

app.listen(3000, () => {
  console.log(`Sever running on port ${port}`);
});
