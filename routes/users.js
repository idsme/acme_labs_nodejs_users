const express = require("express");
const router = express.Router();

// Add middle ware for logging
router.use(logger);

// /user/*
router.get("/", (req, res) => {
  console.log(req.query.firstName);
  //res.send("User List");
  res.render("users/list", { users: users });
});

// Route to New.ejs
router.get("/new", (req, res) => {
  res.render("users/new");
});

// API Create User
router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

// GET / REPLACE / UPDATE / DELETE
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`Patch User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });

// The Fake User Database Table
const users = [
  { firstName: "Idsme" },
  { firstName: "Marjolein" },
  { firstName: "Evi" },
  { firstName: "Julia" },
  { firstName: "Daan" },
];

// Middleware log user Id requested
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

// Middleware log url requested
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
