const express = require('express');
const router = express.Router();
var model = require('../models/taxRate');

router.post('/api/bugetTaxMaster', (req, res) => {
    model.bugetTaxMaster(req, res, req.body);
});
router.post('/api/bugetDiscountMaster', (req, res) => {
    model.bugetDiscountMaster(req, res, req.body);
});

router.post('/api/setTax', (req, res) => {
    model.setTax(req, res, req.body);
});

router.post('/api/deletetaxByID', (req, res) => {
    model.deletetaxByID(req, res, req.body);
});

router.get('/api/getTaxDetail/:CompanyID/:TaxID', (req, res) => {
    model.getTaxDetail(req, res, req.params.CompanyID, req.params.TaxID);
});

module.exports = router;