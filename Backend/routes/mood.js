const express = require("express");
const jwt = require("jsonwebtoken");
const Mood = require("../models/Mood");
const router = express.Router();

// Middleware to extract user from token
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

// Add mood entry
router.post("/mood", authenticate, async (req, res) => {
  try {
    const { mood, note } = req.body;
    console.log("Received mood:", mood);
    console.log("Note:", note);
    console.log("User ID:", req.user);

    const newMood = new Mood({ user: req.user, mood, note });
    const savedMood = await newMood.save();

    console.log("Mood saved:", savedMood);

    res.status(201).json({ message: "Mood saved successfully" });
  } catch (err) {
    console.error("Mood save failed:", err.message);
    res.status(500).json({ message: "Failed to save mood" });
  }
});

// Get mood history
router.get("/mood", authenticate, async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user }).sort({ timestamp: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch moods" });
  }
});
router.delete("/mood/clear", authenticate, async (req, res) => {
  try {
    await Mood.deleteMany({ user: req.user });
    res.status(200).json({ message: "Mood history cleared successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to clear mood history" });
  }
});

router.delete("/mood/:id", authenticate, async (req, res) => {
  try {
    const mood = await Mood.findOneAndDelete({
      _id: req.params.id,
      user: req.user
    });

    if (!mood) {
      return res.status(404).json({ message: "Mood not found or unauthorized" });
    }

    res.status(200).json({ message: "Mood deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete mood" });
  }
});

module.exports = router;
