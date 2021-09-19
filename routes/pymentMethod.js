const express = require('express');
const router = express.Router();
var model = require('../models/pymentMethod');

router.post('/api/bsetPaymentMethod', (req, res) => {
    model.bsetPaymentMethod(req, res, req.body);
});

router.post('/api/deletePatmentMethodByID', (req, res) => {
    model.deletePatmentMethodByID(req, res, req.body);
});

router.post('/api/bugetpaymentMethod', (req, res) => {
    model.bugetpaymentMethod(req, res, req.body);
});

module.exports = router;