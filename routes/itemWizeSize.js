const express = require('express');
const router = express.Router();
var model = require('../models/itemWizeSize');

router.get('/api/getItemWizeSize/:ItemID', (req, res) => {
    model.getItemWizeSize(req, res, req.params.ItemID);
});
router.post('/api/setItemMulSize', (req, res) => {
    model.setItemMulSize(req, res, req.body);
});

module.exports = router;