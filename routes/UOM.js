const express = require('express');
const router = express.Router();
var model = require('../models/UOM');

router.get('/api/UOM', (req, res) => {
	model.getUOM(req, res);
});
router.post('/api/UOM', (req, res) => {
	model.setUOM(req, res, req.body);
});

router.put('/api/UOM', (req, res) => {
	model.putUOM(req, res, req.body);
});

module.exports = router;