const express = require('express');
const router = express.Router();
var model = require('../models/catSubCat');

router.get('/api/cat-subcat', (req, res) => {
	model.getCatSubCat(req, res);
});

module.exports = router;