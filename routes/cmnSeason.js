const express = require('express');
const router = express.Router();
var model = require('../models/cmnSeason');

router.get('/api/cmnSeason', (req, res) => {
	model.getCmnSeason(req, res);
});

router.post('/api/cmnSeason', (req, res) => {
	model.setCmnSeason(req, res, req.body);
});

router.put('/api/cmnSeason', (req, res) => {
	model.putCmnSeason(req, res, req.body);
});

module.exports = router;