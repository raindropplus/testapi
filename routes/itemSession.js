const express = require('express');
const router = express.Router();
var model = require('../models/itemSession');

router.post('/api/bsetItemSession', (req, res) => {
    model.bsetItemSession(req, res, req.body);
});

router.post('/api/deleteItemSessionByID', (req, res) => {
    model.deleteItemSessionByID(req, res, req.body);
});

router.post('/api/bugetItemSession', (req, res) => {
    model.bugetItemSession(req, res, req.body);
});

module.exports = router;