const express = require('express');
const router = express.Router();
var model = require('../models/test');

router.get('/api/itemcatsubcat', (req, res) => {
	model.getItemCatSubCat(req, res);
});

router.get('/api/itemcolor', (req, res) => {
	model.getAllItemColor(req, res);
});

router.get('/api/itemcolor/:id', (req, res) => {
	var id = req.params.id;
	model.getItemColor(req, res, id);
});

router.post('/api/itemColor', (req, res) => {
	model.addItemColor(req, res, req.body);
});

router.put('/api/itemColor', (req, res) => {
	model.updateItemColor(req, res, req.body);
});

router.delete('/api/itemcolor/:id', (req, res) => {
	var id = req.params.id;
	model.deleteItemColor(req, res, id);
});

module.exports = router;