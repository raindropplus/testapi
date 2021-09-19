const express = require('express');
const router = express.Router();
var model = require('../models/itemBrand');

router.get('/api/itemBrand', (req, res) => {
    model.getItemBrand(req, res);
});

router.post('/api/itemBrand', (req, res) => {
    model.setItemBrand(req, res, req.body);
});

router.put('/api/itemBrand', (req, res) => {
    model.putItemBrand(req, res, req.body);
});

router.post('/api/bsetItemBrands', (req, res) => {
    model.bsetItemBrands(req, res, req.body);
});

router.post('/api/bugetItemBrand', (req, res) => {
    model.bugetItemBrand(req, res, req.body);
});
router.post('/api/deleteItemBrandByID', (req, res) => {
    model.deleteItemBrandByID(req, res, req.body);
});

module.exports = router;