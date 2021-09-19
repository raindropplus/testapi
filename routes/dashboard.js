const express = require('express');
const router = express.Router();
var model = require('../models/dashboard');

router.get('/api/getDashboardData', (req, res) => {
    model.getDashboardData(req, res);
});


// router.post('/api/itemColor', (req, res) => {
//     model.setItemColor(req, res, req.body);
// });

// router.put('/api/itemColor', (req, res) => {
//     model.putItemColor(req, res, req.body);
// });

// router.post('/api/bsetItemColor', (req, res) => {
//     model.bsetItemColor(req, res, req.body);
// });

// router.post('/api/deleteItemColorByID', (req, res) => {
//     model.deleteItemColorByID(req, res, req.body);
// });
// router.post('/api/bugetItemColor', (req, res) => {
//     model.bugetItemColor(req, res, req.body);
// });


module.exports = router;