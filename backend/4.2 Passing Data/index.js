import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let letter = "";

function letterLength(req, res, next) {
  letter = req.body["fName"].length + req.body["lName"].length;

  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(letterLength);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", { lLength: letter });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
