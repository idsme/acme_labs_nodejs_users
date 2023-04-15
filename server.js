const express = require("express");
const app = express();

app.use(express.static("public"));

// url encoding for reading form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

// Instantiate Router
const userRouter = require("./routes/users");

// Hook up user Child Routes
app.use("/users", userRouter);

app.listen(3000);
