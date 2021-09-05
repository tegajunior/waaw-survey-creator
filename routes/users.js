const express = require("express");
const rs = require("randomstring");

const { User, validate } = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  let userData = req.body;
  const { error } = validate(userData);
  if (error) {
    return res.render("error", { errorMessage: error.details[0].message });
  }
  userData.userString = rs.generate(12);
  try {
    let newUser = new User(userData);
    await newUser.save();
    res.render("success", { user: newUser });
  } catch (error) {
    res.render("failure");
  }
});
module.exports = router;
