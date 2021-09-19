const express = require('express');
const router = express.Router();
var model = require('../models/salItemSalesPrice');

router.get('/api/salItemSalesPrice', (req, res) => {
	model.getItemSalesPrice(req, res);
});
router.post('/api/salItemSalesPrice', (req, res) => {
	model.setItemSalesPrice(req, res, req.body);
});
router.put('/api/salItemSalesPrice', (req, res) => {
	model.putItemSalesPrice(req, res, req.body);
});

module.exports = router;