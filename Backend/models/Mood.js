const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  mood: { type: String, required: true },
  note: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Mood", moodSchema);
