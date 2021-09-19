const express = require('express');
const router = express.Router();
var model = require('../models/cmnUser');


router.post('/api/bsetcmnUser', (req, res) => {
    model.bsetcmnUser(req, res, req.body);
});

router.post('/api/deletecmnUserByID', (req, res) => {
    model.deletecmnUserByID(req, res, req.body);
});

router.post('/api/bugetcmnUser', (req, res) => {
    model.bugetcmnUser(req, res, req.body);
});
module.exports = router;