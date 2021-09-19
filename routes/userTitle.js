const express = require('express');
const router = express.Router();
var model = require('../models/userTitle');

router.post('/api/bsetcmnUserTitle', (req, res) => {
    model.bsetcmnUserTitle(req, res, req.body);
});

router.post('/api/deletecmnUserTitleByID', (req, res) => {
    model.deletecmnUserTitleByID(req, res, req.body);
});

router.post('/api/bugetcmnUserTitle', (req, res) => {
    model.bugetcmnUserTitle(req, res, req.body);
});

module.exports = router;