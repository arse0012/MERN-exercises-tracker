const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true
  },
  description: { 
    type: String, 
    required: true 
  },
  duration: { 
    type: Number, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;