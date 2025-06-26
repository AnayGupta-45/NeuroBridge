const express = require('express');
const { isAuthenticated, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', isAuthenticated, (req, res) => {
    res.json({ message: 'Profile route', user: req.user });
});

router.get('/admin-dashboard', isAuthenticated, authorizeRoles('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin', user: req.user });
});

module.exports = router;
