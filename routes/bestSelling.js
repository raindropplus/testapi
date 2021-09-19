const express = require('express');
const router = express.Router();
var model = require('../models/bestSelling');

router.post('/api/bsetBestSelling', (req, res) => {
    model.bsetBestSelling(req, res, req.body);
});

router.post('/api/bugetBestSelling', (req, res) => {
    model.bugetBestSelling(req, res, req.body);
});
router.post('/api/deleteBestSellingByID', (req, res) => {
    model.deleteBestSellingByID(req, res, req.body);
});

router.get('/api/GetBestsellingSequence/:CompanyID', (req, res) => {
    model.GetBestsellingSequence(req, res, req.params.CompanyID);
});

router.get('/api/GetItemGroupWize/:CompanyID/:ItemGroupID/:ItemID', (req, res) => {
    model.GetItemGroupWize(req, res, req.params.CompanyID, req.params.ItemGroupID, req.params.ItemID);
});

module.exports = router;