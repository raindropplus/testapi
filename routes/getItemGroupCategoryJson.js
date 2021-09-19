const express = require('express');
const router = express.Router();
var model = require('../models/getItemGroupCategoryJson');
/*
router.get('/api/getItemGroupCategoryJson', function(req, res) {
	model.getItemGroupCatJson(req,res);
}); */

router.get('/api/getItemGroupCategoryJson/:id', (req, res) => {
	var id = req.params.id;
	model.getItemGroupCatJson(req, res, id);
});

module.exports = router;