const express = require('express');
const router = express.Router();
var model = require('../models/bannerImage');

router.post('/api/bsetBannerImages', (req, res) => {
    model.bsetBannerImages(req, res, req.body);
});

router.post('/api/bugetBannerImage', (req, res) => {
    model.bugetBannerImage(req, res, req.body);
});

router.post('/api/deleteBannerImageByID', (req, res) => {
    model.deleteBannerImageByID(req, res, req.body);
});

module.exports = router;