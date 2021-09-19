const express = require('express');
const router = express.Router();
var model = require('../models/salCoustomerType');

router.post('/api/bsetSalCoustomerType', (req, res) => {
    model.bsetSalCoustomerType(req, res, req.body);
});

router.post('/api/deleteSalCoustomerTypeByID', (req, res) => {
    model.deleteSalCoustomerTypeByID(req, res, req.body);
});

router.post('/api/bugetSalCoustomerType', (req, res) => {
    model.bugetSalCoustomerType(req, res, req.body);
});

module.exports = router;