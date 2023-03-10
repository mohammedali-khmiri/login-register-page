const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      max: 20,
      min: 6,
    },
    email: {
      type: String,
      required: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    token: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
