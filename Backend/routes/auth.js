const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// ============================
// User Registration
// ============================
router.post('/register', async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'Email already registered' });

        const hashed = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hashed, role: isAdmin ? 'admin' : 'user' });

        if (isAdmin) return res.status(201).json({ message: 'Admin registered. Please login.' });
        return res.status(201).json({ message: 'User registered. Please login.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ============================
// Admin Registration
// ============================
router.post('/register/admin', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'Email already registered' });

        const hashed = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hashed, role: 'admin' });

        return res.status(201).json({ message: 'Admin registered. Please login.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ============================
// Local User Login
// ============================
router.post('/login', (req, res, next) => {
    passport.authenticate('local-user', (err, user, info) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ message: 'Invalid user credentials' });
        req.logIn(user, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            return res.json({ message: 'User logged in successfully', user });
        });
    })(req, res, next);
});

// ============================
// Local Admin Login
// ============================
router.post('/admin-login', (req, res, next) => {
    passport.authenticate('local-admin', (err, user, info) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ message: 'Invalid admin credentials' });
        req.logIn(user, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            return res.json({ message: 'Admin logged in successfully', user });
        });
    })(req, res, next);
});

// ============================
// Logout
// ============================
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Logged out successfully' });
    });
});

// ============================
// Google OAuth for Users
// ============================
router.get('/google', passport.authenticate('google-user', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback/user',
    passport.authenticate('google-user', { failureRedirect: 'http://localhost:5173/login' }),
    (req, res) => res.redirect('http://localhost:5173/dashboard')
);

// ============================
// Google OAuth for Admins
// ============================
router.get('/google-admin', passport.authenticate('google-admin', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback/admin',
    passport.authenticate('google-admin', { failureRedirect: 'http://localhost:5173/admin-login' }),
    (req, res) => res.redirect('http://localhost:5173/admin-dashboard')
);

module.exports = router;
