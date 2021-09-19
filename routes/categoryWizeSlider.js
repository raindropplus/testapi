const express = require('express');
const router = express.Router();
var model = require('../models/categoryWizeSlider');

router.post('/api/bsetCatWizeSlider', (req, res) => {
    model.bsetCatWizeSlider(req, res, req.body);
});

router.post('/api/deleteCatWizeSliderByID', (req, res) => {
    model.deleteCatWizeSliderByID(req, res, req.body);
});

router.post('/api/bugetCatWizeSlider', (req, res) => {
    model.bugetCatWizeSlider(req, res, req.body);
});

router.get('/api/GetCatWizeSequence/:CompanyID', (req, res) => {
    model.GetCatWizeSequence(req, res, req.params.CompanyID);
});

module.exports = router;