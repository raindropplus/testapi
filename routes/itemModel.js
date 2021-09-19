const express = require('express');
const router = express.Router();
var model = require('../models/itemModel');

router.get('/api/itemModel', (req, res) => {
    model.getItemModel(req, res);
});

router.post('/api/itemModel', (req, res) => {
    model.setItemModel(req, res, req.body);
});

router.put('/api/itemModel', (req, res) => {
    model.putItemModel(req, res, req.body);
});

//back office

router.post('/api/bsetItemModel', (req, res) => {
    model.bsetItemModel(req, res, req.body);
});

router.post('/api/deleteItemModelByID', (req, res) => {
    model.deleteItemModelByID(req, res, req.body);
});

router.post('/api/bugetItemModel', (req, res) => {
    model.bugetItemModel(req, res, req.body);
});

module.exports = router;