const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/userdetails', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route', userId: req.user.userId });
});

module.exports = router;
