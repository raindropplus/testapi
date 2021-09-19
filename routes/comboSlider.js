
const express = require('express');
const router = express.Router();
var cntr = require('../models/comboSlider');

router.get('/api/combo-slider', function(req, res) {
	cntr.getComboSlider(req,res);
});
// router.get('/api/getsliderForProductList/:CategoryID', function (req, res) {
//     cntr.getSliderForProductList(req, res, req.params.CategoryID);
// });
// router.get('/api/Discount-slider', function (req, res) {
//     cntr.getDiscountSlider(req, res);
// });

router.post('/api/bsetComboSlider', function (req, res) {
    cntr.bsetComboSlider(req, res, req.body);
});

router.post('/api/deleteComboSliderByID', function (req, res) {
    cntr.deleteComboSliderByID(req, res, req.body);
});
router.post('/api/bugetComboSlider', function (req, res) {
    cntr.bugetComboSlider(req, res, req.body);
});

router.get('/api/GetComboSequence/:CompanyID', function (req, res) {
    cntr.GetComboSequence(req, res, req.params.CompanyID);
});
router.get('/api/combo-slider-ui', function(req, res) {
	cntr.getComboSliderForUI(req,res);
});
module.exports = router;