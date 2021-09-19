const express = require('express');
const router = express.Router();
var model = require('../models/originCountry');

router.get('/api/originCountry', (req, res) => {
    model.getItemOriginCountry(req, res);
});

router.post('/api/originCountry', (req, res) => {
    model.setItemOriginCountry(req, res, req.body);
});

router.put('/api/originCountry', (req, res) => {
    model.putItemOriginCountry(req, res, req.body);
});

router.post('/api/bsetItemCountry', (req, res) => {
    model.bsetItemCountry(req, res, req.body);
});

router.post('/api/deleteItemCountryByID', (req, res) => {
    model.deleteItemCountryByID(req, res, req.body);
});

router.post('/api/bugetItemCountry', (req, res) => {
    model.bugetItemCountry(req, res, req.body);
});

module.exports = router;