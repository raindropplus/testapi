const express = require('express');
const router = express.Router();
var model = require('../models/itemCondition');

router.get('/api/itemCondition', (req, res) => {
    model.getItemCondition(req, res);
});

router.post('/api/itemCondition', (req, res) => {
    model.setItemCondition(req, res, req.body);
});

router.put('/api/itemCondition', (req, res) => {
    model.putItemCondition(req, res, req.body);
});

router.post('/api/bsetItemCondition', (req, res) => {
    model.bsetItemCondition(req, res, req.body);
});

router.post('/api/deleteItemConditionByID', (req, res) => {
    model.deleteItemConditionByID(req, res, req.body);
});
router.post('/api/bugetItemCodition', (req, res) => {
    model.bugetItemCodition(req, res, req.body);
});

module.exports = router;