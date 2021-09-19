const express = require('express');
const router = express.Router();
var model = require('../models/itemImage');

router.get('/api/itemImage', (req, res) => {
    model.getItemImage(req, res);
});

router.post('/api/itemImage', (req, res) => {
    model.setItemImage(req, res, req.body);
});

router.put('/api/itemImage', (req, res) => {
    model.putItemImage(req, res, req.body);
});

router.post('/api/bsetItemImages', (req, res) => {
    model.bsetItemImages(req, res, req.body);
});

router.post('/api/bugetItemImage', (req, res) => {
    model.bugetItemImage(req, res, req.body);
});
router.post('/api/deleteItemImageByID', (req, res) => {
    model.deleteItemImageByID(req, res, req.body);
});

module.exports = router;