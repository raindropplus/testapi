const express = require('express');
const router = express.Router();
var model = require('../models/itemSizeMaster');

router.get('/api/itemSizeMaster', (req, res) => {
    model.getItemSizeMaster(req, res);
});

router.post('/api/itemSizeMaster', (req, res) => {
    model.setItemSizeMaster(req, res, req.body);
});

router.put('/api/itemSizeMaster', (req, res) => {
    model.putItemSizeMaster(req, res, req.body);
});

router.post('/api/bsetItemSize', (req, res) => {
    model.bsetItemSize(req, res, req.body);
});

router.post('/api/deleteItemSizeByID', (req, res) => {
    model.deleteItemSizeByID(req, res, req.body);
});
router.post('/api/bugetItemSize', (req, res) => {
    model.bugetItemSize(req, res, req.body);
});


module.exports = router;