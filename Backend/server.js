require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const moodRoutes = require('./routes/mood');

require("./config/passport");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "neurobridge_secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/api', moodRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const dashboardRoutes = require("./routes/dashboard");
app.use("/api", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("NeuroBridge API is Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
