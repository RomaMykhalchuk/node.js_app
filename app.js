const express = require("express");
const fs = require("fs");

const port = 3000;
const app = express();
const jsonParcer = express.json();

app.use(express.static(__dirname + "/public"));

app.post("/join", jsonParcer, (request, response) => {
  let enteredName = request.body.name;
  let enteredEmail = request.body.email;
  let enteredPassword = request.body.password;
  let content = fs.readFileSync("usersList.json", "utf-8");
  let usersData = JSON.parse(content);
  let { name, email, password } = usersData;
  if (
    enteredName === name &&
    email === enteredEmail &&
    enteredPassword === password
  ) {
    response.send("You are welcome");
  } else {
    response.send("Incorrect data entered. Please, try again");
  }
});

app.get("/", (request, response) => {
  response.send("hello");
});

app.listen(port, error => {
  if (error) {
    return console.log("error");
  }
  console.log(`server is listening on port ${port}`);
});


