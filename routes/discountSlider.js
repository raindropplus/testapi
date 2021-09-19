const express = require('express');
const router = express.Router();
var model = require('../models/discountSlider');

router.post('/api/bsetDiscountSlider', (req, res) => {
    model.bsetDiscountSlider(req, res, req.body);
});

router.post('/api/deleteDiscountSliderByID', (req, res) => {
    model.deleteDiscountSliderByID(req, res, req.body);
});
router.post('/api/bugetDiscountSlider', (req, res) => {
    model.bugetDiscountSlider(req, res, req.body);
});

router.get('/api/GetDiscountSequence/:CompanyID', (req, res) => {
    model.GetDiscountSequence(req, res, req.params.CompanyID);
});

module.exports = router;