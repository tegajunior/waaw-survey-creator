const express = require("express");
const path = require("path");
const home = require("../routes/home");
const users = require("../routes/users");
const surveys = require("../routes/surveys");

module.exports = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));

  //app.use(express.static(path.join(__dirname, "public")));

  app.use("/", home);
  app.use("/users", users);
  app.use("/surveys", surveys);
}