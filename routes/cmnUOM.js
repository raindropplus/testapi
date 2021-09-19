const express = require('express');
const router = express.Router();
var model = require('../models/cmnUOM');

router.post('/api/bsetCmnUOM', (req, res) => {
    model.bsetCmnUOM(req, res, req.body);
});

router.post('/api/deleteCmnUOMByID', (req, res) => {
    model.deleteCmnUOMByID(req, res, req.body);
});

router.post('/api/bugetCmnUOM', (req, res) => {
    model.bugetCmnUOM(req, res, req.body);
});
module.exports = router;