const express = require("express");
const router = express.Router();
let userError = "";

router.get("/", (req, res) => {
  res.render("index", { error: userError });
});

module.exports = router;
