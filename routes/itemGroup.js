const express = require('express');
const router = express.Router();
var model = require('../models/itemGroup');

router.get('/api/getItemGroup', (req, res) => {
    model.getItemGroup(req, res);
});

router.get('/api/itemGroup/:id', (req, res) => {
    var id = req.params.id;
    model.getItemGroupbyCatID(req, res, id);
});

//For Frontend Data Buinding Don't tuch me baby 
router.get('/api/getItemGroup', (req, res) => {
    model.getItemGroup(req, res);
});

router.post('/api/itemGroup', (req, res) => {
    model.setItemGroup(req, res, req.body);
});

router.put('/api/itemGroup', (req, res) => {
    model.putItemGroup(req, res, req.body);
});

router.post('/api/bsetItemGroup', (req, res) => {
    model.bsetItemGroup(req, res, req.body);
});

router.post('/api/deleteItemGroupByID', (req, res) => {
    model.deleteItemGroupByID(req, res, req.body);
});

router.post('/api/bugetItemGroup', (req, res) => {
    model.bugetItemGroup(req, res, req.body);
});

router.get('/api/CategoryWizeGroup/:CompanyID/:ItemCategoryID/:ItemGroupID', (req, res) => {
    model.CategoryWizeGroup(req, res, req.params.CompanyID, req.params.ItemCategoryID, req.params.ItemGroupID);
});
router.get('/api/CategoryWizeGroupDDL/:CompanyID/:ItemCategoryID/:ItemGroupID', (req, res) => {
    model.CategoryWizeGroupDDL(req, res, req.params.CompanyID, req.params.ItemCategoryID, req.params.ItemGroupID);
});

router.get('/api/GetGroupSequence/:CompanyID/:ParentID', (req, res) => {
    model.GetGroupSequence(req, res, req.params.CompanyID, req.params.ParentID);
});



module.exports = router;