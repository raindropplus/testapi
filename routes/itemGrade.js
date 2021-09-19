const express = require('express');
const router = express.Router();
var model = require('../models/itemGrade');

router.get('/api/itemGrade', (req, res) => {
    model.getItemGrade(req, res);
});
router.post('/api/itemGrade', (req, res) => {
    model.setItemGrade(req, res, req.body);
});
router.put('/api/itemGrade', (req, res) => {
    model.putItemGrade(req, res, req.body);
});

router.post('/api/bsetItemGrade', (req, res) => {
    model.bsetItemGrade(req, res, req.body);
});

router.post('/api/deleteItemGradeByID', (req, res) => {
    model.deleteItemGradeByID(req, res, req.body);
});
router.post('/api/bugetItemGrade', (req, res) => {
    model.bugetItemGrade(req, res, req.body);
});
module.exports = router;