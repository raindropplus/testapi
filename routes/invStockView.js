
const express = require('express');
const router = express.Router();
var model = require('../models/invStockView');

router.post('/api/bugetInvStockView', (req, res) => {
    model.bugetInvStockView(req, res, req.body);
});

module.exports = router;