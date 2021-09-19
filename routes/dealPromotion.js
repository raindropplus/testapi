const express = require('express');
const router = express.Router();
var model = require('../models/dealPromotion');

router.post('/api/bsetDealPromotion', (req, res) => {
    model.bsetDealPromotion(req, res, req.body);
});

router.post('/api/bugetDealPromotion', (req, res) => {
    model.bugetDealPromotion(req, res, req.body);
});
router.post('/api/deleteDealPromotionByID', (req, res) => {
    model.deleteDealPromotionByID(req, res, req.body);
});

router.get('/api/GetDealPromotionSequence/:CompanyID/:ItemID', (req, res) => {
    model.GetDealPromotionSequence(req, res, req.params.CompanyID, req.params.ItemID);
});

module.exports = router;