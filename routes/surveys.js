const express = require("express");

const { Survey, validate } = require("../models/survey");
const { User } = require("../models/user");

const router = express.Router();
let showSurveySuccessAlert = false;
let surveyTitle = "";

router.get("/", (req, res) => {
  res.render("surveys", { surveyTitle, showSurveySuccessAlert });
});
router.post("/", async (req, res) => {
  const surveyData = req.body;
  const { error } = validate(req.body);
  if (error) {
    return res.render("error", { errorMessage: error.details[0].message });
  }
  try {
    const user = await User.findOne({ userString: surveyData.user });
    if (!user) {
      return res.render("error", {
        errorMessage:
          "The User ID does not match any registered user in our database.",
      });
    } else {
      let newSurvey = new Survey(surveyData);
      await newSurvey.save();
      surveyTitle = newSurvey.title;
      showSurveySuccessAlert = true;
      res.render("surveys", { showSurveySuccessAlert, surveyTitle });
    }
  } catch (error) {
    res.render("failure");
  }
});

module.exports = router;