const express = require('express');
const router = express.Router();
var model = require('../models/invStock');


router.post('/api/setStock', (req, res) => {
    model.setStock(req, res, req.body);
});

router.post('/api/bugetInvStockMaster', (req, res) => {
    model.bugetInvStockMaster(req, res, req.body);
});

router.get('/api/getCurrenctStock/:CompanyID/:MarchentID/:ItemID', (req, res) => {
    model.getCurrenctStock(req, res, req.params.CompanyID, req.params.MarchentID, req.params.ItemID);
});

router.get('/api/getStockMaster/:CompanyID/:MarchentID', (req, res) => {
    model.getStockMaster(req, res, req.params.CompanyID, req.params.MarchentID);
});

router.post('/api/deleteStockByID', (req, res) => {
    model.deleteStockByID(req, res, req.body);
});


router.post('/api/deleteStockDetail', (req, res) => {
    model.deleteStockDetail(req, res, req.body);
});


router.get('/api/getStockMasterDetails/:CompanyID/:ItemID', (req, res) => {
    model.getStockMasterNDetailsArray(req, res, req.params.CompanyID, req.params.ItemID);
});


module.exports = router;