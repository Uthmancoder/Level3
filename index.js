const express = require("express");
const ejs = require("ejs");
const app = express();
app.set({ viewEngine: "ejs" });
app.use(express.urlencoded({ extended: "true" }));

let AllUsers = [];

app.get("/", (req, res) => {
  if (AllUsers.length > 0) {
    res.render("index.ejs", AllUsers);
  } else {
    res.render("index.ejs");
  }
});

app.post("/", (req, res) => {
  const { studentName, studentEmail, studentId, studentCourse } = req.body;
  console.log("Request Body : ", req.body);
  if (!studentName || !studentEmail || !studentId || !studentCourse) {
    return console.log("All Fields are mandatory");
  } else {
    AllUsers.push(req.body);
    console.log("All Users : ", AllUsers);
    res.redirect("/");
  }
});

app.listen(5200, () => {
  console.log("App is running");
});
