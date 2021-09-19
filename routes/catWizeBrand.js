const express = require('express');
const router = express.Router();
var model = require('../models/catWizeBrand');

router.post('/api/bsetCatWizeBrand', (req, res) => {
    model.bsetCatWizeBrand(req, res, req.body);
});

router.post('/api/bugetCatWizeBrand', (req, res) => {
    model.bugetCatWizeBrand(req, res, req.body);
});
router.post('/api/deleteCatWizeBrandByID', (req, res) => {
    model.deleteCatWizeBrandByID(req, res, req.body);
});

router.get('/api/GetCategorySequence/:CompanyID/:ItemCategoryID', (req, res) => {
    model.GetCategorySequence(req, res, req.params.CompanyID, req.params.ItemCategoryID);
});

module.exports = router;