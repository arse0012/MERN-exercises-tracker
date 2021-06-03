const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trainerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number
  }
}, {
  timestamps: true,
});

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;