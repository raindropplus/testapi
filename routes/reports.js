const express = require("express");
const router = express.Router();
var model = require("../models/reports");

router.get("/api/get_daily_sales/:FromDate/:ToDate", (req, res) => {
  
  model.get_daily_sales(req, res,req.params.FromDate,req.params.ToDate);
});
router.get("/api/get_item_wise_sales/:ItemCategoryID/:FromDate/:ToDate", (req, res) => {
  
  model.get_item_wise_sales(req, res,req.params.ItemCategoryID,req.params.FromDate,req.params.ToDate);
});
router.get("/api/get_sales_summary/:FromDate/:ToDate", (req, res) => {  
  model.get_sales_summary(req, res,req.params.FromDate,req.params.ToDate);
});

router.get("/api/get_bestsellers/:FromDate/:ToDate", (req, res) => {  
  model.get_bestsellers(req, res,req.params.FromDate,req.params.ToDate);
});

router.get('/api/get_OrderItemBy_InvoiceId/:InvoiceID', (req, res) => {
  model.getOrderItemByInvoiceId(req, res, req.params.InvoiceID);
});



module.exports = router;
