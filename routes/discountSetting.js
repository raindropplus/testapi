const express = require('express');
const router = express.Router();
var model = require('../models/discountSetting');

router.post('/api/bugetDiscount', (req, res) => {
    model.bugetDiscount(req, res, req.body);
});
router.post('/api/bugetDiscountMaster', (req, res) => {
    model.bugetDiscountMaster(req, res, req.body);
});

router.post('/api/setDiscount', (req, res) => {
    model.setDiscount(req, res, req.body);
});

router.post('/api/deleteSalDiscountByID', (req, res) => {
    model.deleteSalDiscountByID(req, res, req.body);
});
router.post('/api/deleteSalDiscountDetailByID', (req, res) => {
    model.deleteSalDiscountDetailByID(req, res, req.body);
});

module.exports = router;