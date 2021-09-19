const express = require('express');
const router = express.Router();
var model = require('../models/order');

router.post('/api/setOrder', (req, res) => {
    model.setOrder(req, res, req.body);
});
router.post('/api/setOrder/mobileApps', (req, res) => {
    model.setOrderForApps(req, res, req.body);
});
router.get('/api/getSalInvoiceShippingType', (req, res) => {
    model.getShippingType(req, res);
});
router.get('/api/getPaymentMethod', (req, res) => {
    model.getPaymentMethod(req, res);
});
router.get('/api/getAddressCity', (req, res) => {
    model.getAddressCity(req, res);
});
router.get('/api/getUserOrderByUserIDForFront/:UserID', (req, res) => {
    model.getUserOrderByUserID(req, res, req.params.UserID);
});
router.get('/api/getUserInvoicePrice/:InvoiceID', (req, res) => {
    model.getUserInvoicePrice(req, res, req.params.InvoiceID);
});
router.get('/api/getUserReviewByUserID/:UserID', (req, res) => {
    model.getUserReviewByUserID(req, res, req.params.UserID);
});
router.get('/api/getUserForProfileUserID/:UserID', (req, res) => {
    model.getUserUserID(req, res, req.params.UserID);
});
router.post('/api/addNewOrderItem', (req, res) => {
    model.addNewOrderItem(req, res, req.body);
});
router.get('/api/getInvoiceForOrderPanel/:CustomerID/:ComapnyID/:FromDate/:ToDate', (req, res) => {
    model.getinvoiceForOrderPanel(req, res, req.params.CustomerID, req.params.ComapnyID, req.params.FromDate, req.params.ToDate);
});
router.get('/api/getCmnOrderStatus', (req, res) => {
    model.getCmnOrderStatus(req, res);
});
router.post('/api/setOrderTracking', (req, res) => {
    model.setItemOrderTracking(req, res, req.body);
});
router.get('/api/getOrderTracking', (req, res) => {
    model.getOrderTracking(req, res)
});

router.get('/api/getOrderItemByInvoiceId/:InvoiceID', (req, res) => {
    model.getOrderItemByInvoiceId(req, res, req.params.InvoiceID);
});

module.exports = router;