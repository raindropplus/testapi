const express = require('express');
const router = express.Router();
var model = require('../models/taxEntry');

router.post('/api/bsetItemTax', (req, res) => {
    model.bsetItemTax(req, res, req.body);
});

router.post('/api/deleteItemTaxByID', (req, res) => {
    model.deleteItemTaxByID(req, res, req.body);
});

router.post('/api/bugetItemTax', (req, res) => {
    model.bugetItemTax(req, res, req.body);
});

module.exports = router;