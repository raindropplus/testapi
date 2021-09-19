const express = require('express');
const router = express.Router();
var model = require('../models/deals');

router.get('/api/promotion-products', function(req, res) {
	model.getPromotionProducts(req,res);
});

module.exports = router;