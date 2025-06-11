const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashed });
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Logged in successfully", user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Logged out" });
  });
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/dashboard",
    failureRedirect: "http://localhost:5173/login",
  })
);

module.exports = router;
