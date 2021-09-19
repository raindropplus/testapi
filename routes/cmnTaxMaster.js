const express = require('express');
const router = express.Router();
var model = require('../models/cmnTaxMaster');

router.get('/api/cmnTaxMaster', (req, res) => {
	model.getTax(req, res);
});

module.exports = router;