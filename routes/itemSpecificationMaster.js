const express = require('express');
const router = express.Router();
var model = require('../models/itemSpecificationMaster');

router.get('/api/itemSpecificationMaster', (req, res) => {
	model.getItemSpecificationMaster(req, res);
});

router.post('/api/itemSpecificationMaster', (req, res) => {
	model.setItemSpecificationMaster(req, res, req.body);
});
router.put('/api/itemSpecificationMaster', (req, res) => {
	model.putItemSpecificationMaster(req, res, req.body);
});

module.exports = router;