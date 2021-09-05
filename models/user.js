const mongoose = require('mongoose');
const Joi = require('joi');

const {Schema} = mongoose;
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    userString: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);

function validateUser(requestBody) {
  const schema = Joi.object({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    email: Joi.string().trim().required(),
    phoneNumber: Joi.number().required(),
  });
  return schema.validate(requestBody);
}

module.exports.validate = validateUser;
module.exports.User = User;
