const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');
const jwt = require('jsonwebtoken');

router.post('/add-mood', async (req, res) => {
  const { mood, note } = req.body;

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const newMood = new Mood({ userId, mood, note });
    await newMood.save();

    res.status(201).json({ message: 'Mood added successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
