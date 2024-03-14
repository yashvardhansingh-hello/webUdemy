import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var brandName = "";

function logger(req, res, next) {
  console.log(`Method: ${req.method}, URL: ${req.url}`);
  next();
}

function brandNameGenerator(req, res, next) {
  console.log(req.body);
  brandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(morgan("common"));
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(brandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/submit", (req, res) => {
  res.send(`<h1>The Brand name is </h1><h2>${brandName}⭐</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
