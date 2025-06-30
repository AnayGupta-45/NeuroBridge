const express = require('express');
const { protectRoute, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router.get('/dashboard/user', protectRoute, authorizeRoles('user'), (req, res) => {
    res.json({ message: `Welcome to User Dashboard, ${req.user.id}` });
});

router.get('/dashboard/therapist', protectRoute, authorizeRoles('therapist'), (req, res) => {
    res.json({ message: `Welcome to Therapist Dashboard, ${req.user.id}` });
});
    
router.get('/dashboard/common', protectRoute, (req, res) => {
    res.json({ message: `Welcome to Common Dashboard, ${req.user.role} ${req.user.id}` });
});

module.exports = router;
