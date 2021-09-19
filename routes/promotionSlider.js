const express = require('express');
const router = express.Router();
var model = require('../models/promotionSlider');

router.get('/api/promotion-slider', (req, res) => {
    model.getPromotionSlider(req, res);
});

router.get('/api/getsliderForProductList/:CategoryID', (req, res) => {
    model.getSliderForProductList(req, res, req.params.CategoryID);
});

router.get('/api/Discount-slider', (req, res) => {
    model.getDiscountSlider(req, res);
});

router.post('/api/bsetpromotionSlider', (req, res) => {
    model.bsetpromotionSlider(req, res, req.body);
});

router.post('/api/deletepromotionSliderByID', (req, res) => {
    model.deletepromotionSliderByID(req, res, req.body);
});
router.post('/api/bugetpromotionSlider', (req, res) => {
    model.bugetpromotionSlider(req, res, req.body);
});

router.get('/api/GetPromotionSequence/:CompanyID', (req, res) => {
    model.GetPromotionSequence(req, res, req.params.CompanyID);
});

module.exports = router;