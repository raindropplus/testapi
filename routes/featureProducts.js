const express = require('express');
const router = express.Router();
var model = require('../models/featureProducts');

router.get('/api/feature-products', (req, res) => {
    var arr = req.query.array;
    model.getAllFeatureProducts(req, res, arr);
});

router.post('/api/bsetCatWizeFeatureProduct', (req, res) => {
    model.bsetCatWizeFeatureProduct(req, res, req.body);
});

router.post('/api/deleteCatWizeFeatureProductByID', (req, res) => {
    model.deleteCatWizeFeatureProductByID(req, res, req.body);
});
router.post('/api/bugetCatWizeFeatureProduct', (req, res) => {
    model.bugetCatWizeFeatureProduct(req, res, req.body);
});
router.get('/api/GetProductSequence/:CompanyID', (req, res) => {
    model.GetProductSequence(req, res, req.params.CompanyID);
});

router.get('/api/GetCatWizeItem/:CompanyID/:ItemCategoryID', (req, res) => {
    model.GetCatWizeItem(req, res, req.params.CompanyID, req.params.ItemCategoryID);
});

module.exports = router;