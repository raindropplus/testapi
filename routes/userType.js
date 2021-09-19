const express = require('express');
const router = express.Router();
var model = require('../models/userType');

router.post('/api/bsetcmnUserType', (req, res) => {
    model.bsetcmnUserType(req, res, req.body);
});

router.post('/api/deletecmnUserTypeByID', (req, res) => {
    model.deletecmnUserTypeByID(req, res, req.body);
});

router.post('/api/bugetcmnUserType', (req, res) => {
    model.bugetcmnUserType(req, res, req.body);
});

module.exports = router;