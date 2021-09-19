const express = require('express');
const router = express.Router();
var model = require('../models/invoice');

router.get('/api/getInvoiceList/:isMarchantDo', function (req, res) {
    model.getInvoiceList(req, res, req.params.isMarchantDo);
});

router.get('/api/getMarchentInvoice', function (req, res) {
    model.getMarchentInvoice(req, res, req.body);
});

router.get('/api/getInvoiceListForApprove/:invoiceID/:isMarchantDo', function (req, res) {
    model.getInvoiceListForApprove(req, res, req.params.invoiceID, req.params.isMarchantDo);
});

router.get('/api/deleteInvoiceItem/:invoiceID/:tableType', function (req, res) {
    model.deleteInvoiceItem(req, res, req.params.invoiceID, req.params.tableType);
});

router.post('/api/setShippingInfo', function (req, res) {
    model.setShippingInfo(req, res, req.body);
});


router.post('/api/updateInvoiceItem', function (req, res) {
    model.updateInvoiceItem(req, res, req.body);
});


router.post('/api/saveMarchentDeliveryOrder', function (req, res) {
    model.saveMarchentDeliveryOrder(req, res, req.body);
});


router.post('/api/saveMarchentDeliveryOrderDetail', function (req, res) {
    model.saveMarchentDeliveryOrderDetail(req, res, req.body);
});


router.get('/api/ProductWiseMarchentList/:ItemID/:ItemCategoryID/:ItemGroupID/:ColorID/:SizeID', function (req, res) {
    model.ProductWiseMarchentList(req, res, req.params.ItemID, req.params.ItemCategoryID, req.params.ItemGroupID, req.params.ColorID, req.params.SizeID);
});


router.get('/api/getMarchentDOID', function (req, res) {
    model.getMarchentDOID(req, res, req.body);
});


router.get('/api/getMarchentDOList', function (req, res) {
    model.getMarchentDOList(req, res, req.body);
});


router.get('/api/getMarchentDODetailList/:DOID', function (req, res) {
    model.getMarchentDODetailList(req, res, req.params.DOID);
});


router.get('/api/DeleteMarchentDODetailList/:DOItemID', function (req, res) {
    model.DeleteMarchentDODetailList(req, res, req.params.DOItemID);
});



router.post('/api/updateDODetail', function (req, res) {
    model.updateDODetail(req, res, req.body);
});


router.post('/api/getMarchentDOListUIGrid', function (req, res) {
    model.getMarchentDOListUIGrid(req, res, req.body);
});




router.get('/api/deleteDoMaster/:DOID', function (req, res) {
    model.deleteDoMaster(req, res, req.params.DOID);
});



router.get('/api/getCompanyInfo/:companyID', function (req, res) {
    model.getCompanyInfo(req, res, req.params.companyID);
});



router.post('/api/saveInvoiceMRR', function (req, res) {
    model.saveInvoiceMRR(req, res, req.body);
});




router.get('/api/getInvoiceMRRList', function (req, res) {
    model.getInvoiceMRRList(req, res, req.body);
});


router.post('/api/getInvoiceMRRListUIGrid', function (req, res) {
    model.getInvoiceMRRListUIGrid(req, res, req.body);
});



router.get('/api/getMrrDetailList/:MrrID', function (req, res) {
    model.getMrrDetailList(req, res, req.params.MrrID);
});



router.get('/api/checkDOComplete/:invoiceItemID', function (req, res) {
    model.checkDOComplete(req, res, req.params.invoiceItemID);
});




router.get('/api/getInvoiceWiseDOList/:InvoiceID', function (req, res) {
    model.getInvoiceWiseDOList(req, res, req.params.InvoiceID);
});



router.post('/api/setDCShipping', function (req, res) {
    model.setDCShipping(req, res, req.body);
});

router.post('/api/setDCPayment', function (req, res) {
    model.setDCPayment(req, res, req.body);
});


router.get('/api/getSalDeliveryChallan/:InvoiceID/:DOID', function (req, res) {
    model.getSalDeliveryChallan(req, res, req.params.InvoiceID, req.params.DOID);
});

router.post('/api/setSalDeliveryChallan', function (req, res) {
    model.setSalDeliveryChallan(req, res, req.body);
});


router.post('/api/getInvDCMasterListUIGrid', function (req, res) {
    model.getInvDCMasterListUIGrid(req, res, req.body);
});




router.get('/api/getUniqueInvoiceList', function (req, res) {
    model.getUniqueInvoiceList(req, res, req.body);
});



router.get('/api/SpDeleteMrrMasterDetail/:MrrID', function (req, res) {
    model.SpDeleteMrrMasterDetail(req, res, req.params.MrrID);
});


router.get('/api/SpGetInvDCDetail/:DCID', function (req, res) {
    model.SpGetInvDCDetail(req, res, req.params.DCID);
});



router.get('/api/SpDeleteInvDCMasterDetail/:DCID', function (req, res) {
    model.SpDeleteInvDCMasterDetail(req, res, req.params.DCID);
});




router.get('/api/CheckApprovedQty/:InvoiceItemID', function (req, res) {
    model.CheckApprovedQty(req, res, req.params.InvoiceItemID);
});




router.get('/api/getApprovedInvoice', function (req, res) {
    model.getApprovedInvoice(req, res, req.body);
});




router.get('/api/getApprovedProduct/:InvoiceID/:IsDelivered', function (req, res) {
    model.getApprovedProduct(req, res, req.params.InvoiceID, req.params.IsDelivered );
});






module.exports = router;

