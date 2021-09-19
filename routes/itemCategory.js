const express = require('express');
const router = express.Router();
var model = require('../models/itemCategory');

router.get('/api/itemCategory', (req, res) => {
    model.getItemCategory(req, res);
});

router.post('/api/itemCategory', (req, res) => {
    model.setItemCategory(req, res, req.body);
});

router.put('/api/itemCategory', (req, res) => {
    model.putItemCategory(req, res, req.body);
});

router.post('/api/bsetItemCategories', (req, res) => {
    model.bsetItemCategories(req, res, req.body);
});
router.post('/api/bugetItemCategory', (req, res) => {
    model.bugetItemCategory(req, res, req.body);
});

router.post('/api/deleteItemCategoryByID', (req, res) => {
    model.deleteItemCategoryByID(req, res, req.body);
});

router.get('/api/GetCategorySequence/:CompanyID', (req, res) => {
    model.GetCategorySequence(req, res, req.params.CompanyID);
});

module.exports = router;