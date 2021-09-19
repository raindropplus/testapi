const express = require('express');
const router = express.Router();
var model = require('../models/ItemSearch');

router.get('/api/getDDLData', (req, res) => {
    model.getDataForDDL(req, res);
});
router.get('/api/getProductForSearch/:value', (req, res) => {
    model.getProductForSearch(req, res, req.params.value);
});

module.exports = router;