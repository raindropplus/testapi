const express = require('express');
const router = express.Router();
var model = require('../models/ItemWiseColor');

router.post('/api/bsetItemMulColor', (req, res) => {
    model.bsetItemMulColor(req, res, req.body);
});

router.post('/api/deleteItemMulColorByID', (req, res) => {
    model.deleteItemMulColorByID(req, res, req.body);
});
router.post('/api/bugetItemMulColor', (req, res) => {
    model.bugetItemMulColor(req, res, req.body);
});
router.get('/api/getItemWizeColor/:ItemID', (req, res) => {
    model.getItemWizeColor(req, res, req.params.ItemID);
});
router.post('/api/setItemMulColor', (req, res) => {
    model.setItemMulColor(req, res, req.body);
});

module.exports = router;