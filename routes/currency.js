const express = require('express');
const router = express.Router();
var model = require('../models/currency');

router.get('/api/currency', (req, res) => {
	model.getCurrency(req, res);
});

module.exports = router;