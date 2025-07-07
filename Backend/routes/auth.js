const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({
          message: `This email is already registered. Please use a different email.`,
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (!user.password)
      return res.status(400).json({ message: "Google account login only" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
});


router.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});


router.get("/auth/google", (req, res, next) => {
  const role = req.query.role || "user";
  if (!req.session) req.session = {};
  req.session.oauthRole = role;
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })(req, res, next);
});

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  async (req, res) => {
    try {
      const sessionRole = req.session ? req.session.oauthRole : "user";

      const existingUser = await User.findOne({ email: req.user.email });
      if (existingUser && existingUser.role !== sessionRole) {
        return res.redirect(
          "http://localhost:5173/login?error=Email already registered with another role"
        );
      }

      let user = await User.findOne({
        email: req.user.email,
        role: sessionRole,
      });

      if (!user) {
        user = new User({
          name: req.user.name,
          email: req.user.email,
          role: sessionRole,
          password: null, 
        });
        await user.save();
      }

      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
    } catch (err) {
      console.error(err.message);
      res.redirect("http://localhost:5173/login?error=Server error");
    }
  }
);

module.exports = router;
