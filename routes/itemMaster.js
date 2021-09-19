const express = require('express');
const router = express.Router();
var model = require('../models/itemMaster');

router.post('/api/getItemMaster', (req, res) => {
    model.getItemMaster(req, res, req.body);
});

router.post('/api/deleteItemByID', (req, res) => {
    model.deleteItemByID(req, res, req.body);
});

router.post('/api/itemMaster', (req, res) => {
    model.setItemMaster(req, res, req.body);
});

router.post('/api/setItemReview', (req, res) => {
    console.log(req.body);
    model.setItemCnReview(req, res, req.body);
});
router.get('/api/CmnBrandWizeModel/:CompanyID/:ItemBrandID/:ItemModelID', (req, res) => {
    model.CmnBrandWizeModel(req, res, req.params.CompanyID, req.params.ItemBrandID, req.params.ItemModelID);
});
router.get('/api/getItemByMerchantID/:MerchantID', (req, res) => {
    model.getItemByMerchantID(req, res, req.params.MerchantID);
});


module.exports = router;