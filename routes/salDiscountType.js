const express = require('express');
const router = express.Router();
var model = require('../models/salDiscountType');

router.post('/api/bsetSalDiscountType', (req, res) => {
    model.bsetSalDiscountType(req, res, req.body);
});

router.post('/api/deleteSalDiscountTypeByID', (req, res) => {
    model.deleteSalDiscountTypeByID(req, res, req.body);
});

router.post('/api/bugetSalDiscountType', (req, res) => {
    model.bugetSalDiscountType(req, res, req.body);
});

module.exports = router;