import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Type the URL: ",
      name: "URL",
    },
  ])
  .then((answer) => {
    var qrImg = qr.image(answer.URL);
    qrImg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", answer.URL, (err) => {
      if (err) throw err;
      console.log("File has been saved");
    });
  })
  .catch((err) => {
    if (err.isTtyErr) {
      console.log("eerr");
    } else {
      console.log("errr");
    }
  });
