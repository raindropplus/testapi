const express = require('express');
const router = express.Router();
var model = require('../models/itemStyle');

router.post('/api/bsetItemStyle', (req, res) => {
    model.bsetItemStyle(req, res, req.body);
});

router.post('/api/deleteItemStyleByID', (req, res) => {
    model.deleteItemStyleByID(req, res, req.body);
});

router.post('/api/bugetItemStyle', (req, res) => {
    model.bugetItemStyle(req, res, req.body);
});

module.exports = router;