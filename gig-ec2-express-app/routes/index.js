const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Hello from EC2 Express App!</h1>');
});

module.exports = router;
