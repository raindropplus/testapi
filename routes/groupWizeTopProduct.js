const express = require('express');
const router = express.Router();
var model = require('../models/groupWizeTopProduct');

router.post('/api/bsetGroupWizTopPro', (req, res) => {
    model.bsetGroupWizTopPro(req, res, req.body);
});

router.post('/api/bugetGroupWizeTopPro', (req, res) => {
    model.bugetGroupWizeTopPro(req, res, req.body);
});
router.post('/api/deleteGroupWizTopProByID', (req, res) => {
    model.deleteGroupWizTopProByID(req, res, req.body);
});

router.get('/api/GetGroupSequence/:CompanyID/:GroupID', (req, res) => {
    model.GetGroupSequence(req, res, req.params.CompanyID, req.params.GroupID);
});

module.exports = router;