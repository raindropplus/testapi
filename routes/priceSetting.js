const express = require('express');
const router = express.Router();
var model = require('../models/priceSetting');

router.post('/api/bugetPrice', (req, res) => {
    model.bugetPrice(req, res, req.body);
});
router.post('/api/bugetPriceMaster', (req, res) => {
    model.bugetPriceMaster(req, res, req.body);
});

router.post('/api/setPrice', (req, res) => {
    model.setPrice(req, res, req.body);
});

router.post('/api/deleteSalPriceByID', (req, res) => {
    model.deleteSalPriceByID(req, res, req.body);
});

router.post('/api/deleteSalPriceDetailByID', (req, res) => {
    model.deleteSalPriceDetailByID(req, res, req.body);
});
router.get('/api/getUomByItem/:CompanyID/:ItemID', (req, res) => {
    model.getUomByItem(req, res, req.params.CompanyID, req.params.ItemID);
});

router.get('/api/getItemMasterNDetailsArray/:CompanyID/:ItemID', (req, res) => {
    model.getPriceMasterNDetailsArray(req, res, req.params.CompanyID, req.params.ItemID);
});

module.exports = router;