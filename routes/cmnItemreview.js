const express = require('express');
const router = express.Router();
var model = require('../models/cmnItemreview');

router.post('/api/bsetItemReview', (req, res) => {
    model.bsetItemReview(req, res, req.body);
});

router.post('/api/bugetItemReview', (req, res) => {
    model.bugetItemReview(req, res, req.body);
});
router.post('/api/deleteItemReviewByID', (req, res) => {
    model.deleteItemReviewByID(req, res, req.body);
});

router.get('/api/GetUserAsEmployee/:CompanyID/:UserID', (req, res) => {
    model.GetUserAsEmployee(req, res, req.params.CompanyID, req.params.UserID);
});
router.get('/api/GetUserAsCustomer/:CompanyID/:UserID', (req, res) => {
    model.GetUserAsCustomer(req, res, req.params.CompanyID, req.params.UserID);
});


module.exports = router;