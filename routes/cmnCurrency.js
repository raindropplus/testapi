
const express = require('express');
const router = express.Router();
var model = require('../models/cmnCurrency');


router.post('/api/bsetCmnCurrency', function (req, res) {
    model.bsetCmnCurrency(req, res, req.body);
});

router.post('/api/deleteCmnCurrencyByID', function (req, res) {
    model.deleteCmnCurrencyByID(req, res, req.body);
});

router.post('/api/bugetCmnCurrency', function (req, res) {
    model.bugetCmnCurrency(req, res, req.body);
});
module.exports = router;

    