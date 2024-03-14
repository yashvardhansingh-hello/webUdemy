import express from "express";
// import fs from "fs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   console.log(req);
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello Me</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Hello People</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
