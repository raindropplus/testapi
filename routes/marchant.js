const express = require('express');
const router = express.Router();
var model = require('../models/marchant');

router.get('/api/GetMarchant/:marchantId', (req, res) => {
    model.getMarchant(req, res, req.params.marchantId);
});

router.post('/api/marchant', (req, res) => {
    model.setMarchant(req, res, req.body);
});

module.exports = router;