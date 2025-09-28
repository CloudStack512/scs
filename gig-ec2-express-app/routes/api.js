const express = require('express');
const router = express.Router();

router.get('/time', (req, res) => {
    res.json({ serverTime: new Date() });
});

module.exports = router;
