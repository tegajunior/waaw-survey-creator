const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema } = mongoose;
const surveySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    place: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
const Survey = mongoose.model("Survey", surveySchema);

function validateSurvey(requestBody) {
  const schema = Joi.object({
    title: Joi.string().required().trim(),
    user: Joi.string().min(12).max(12).required().trim(),
    description: Joi.string().trim().required(),
    place: Joi.string().trim().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
  });
  return schema.validate(requestBody);
}
module.exports.validate = validateSurvey;
module.exports.Survey = Survey;
