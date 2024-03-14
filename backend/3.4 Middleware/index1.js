import bodyParser from "body-parser";
import morgan from "morgan";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log(`URL: ${req.url}, Method: ${req.method}`);
  next();
}

app.use((req, res, next) => {
  console.log("Request Method: " + req.method);
  next();
});

app.use(logger);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
