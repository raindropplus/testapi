const express = require("express");
const router = express.Router();
var model = require("../models/fontpage");

router.get("/api/get_Item_group", (req, res) => {
  model.get_Item_group(req, res);
});

router.get("/api/get_promotion_slider", (req, res) => {
  model.get_promotion_slider(req, res);
});

router.get("/api/get_promotion_products", (req, res) => {
  model.get_promotion_products(req, res);
});

router.get("/api/get_discount_slider", (req, res) => {
  model.get_discount_slider(req, res);
});

router.get("/api/get_feature_products", (req, res) => {
  //model.get_feature_products(req, res);
  var arr = req.query.array;
  model.get_feature_products(req, res, arr);
});

router.get("/api/get_item_brand", (req, res) => {
  model.get_item_brand(req, res);
});

router.get(
  "/api/get_Item_bygroupID_withQty/:GroupID/:CategoryID",
  (req, res) => {
    model.get_Item_bygroupID_withQty(
      req,
      res,
      req.params.GroupID,
      req.params.CategoryID
    );
  }
);

router.get("/api/get_Item_list/:GroupID/:CategoryID", (req, res) => {
  model.get_Item_list(req, res, req.params.GroupID, req.params.CategoryID);
});

router.get("/api/get_slider_for_productlist/:CategoryID", (req, res) => {
  model.get_slider_for_productlist(req, res, req.params.CategoryID);
});

router.get("/api/get_Item_best_selling/:CategoryID/:GroupID", (req, res) => {
  model.get_Item_best_selling(
    req,
    res,
    req.params.CategoryID,
    req.params.GroupID
  );
});

router.get("/api/get_cat_wise_brand/:CategoryID", (req, res) => {
  model.get_cat_wise_brand(req, res, req.params.CategoryID);
});

router.get("/api/get_Item_details_byItemID/:ItemID", (req, res) => {
  model.get_Item_details_byItemID(req, res, req.params.ItemID);
});

router.get("/api/get_marchant/:marchantId", (req, res) => {
  model.get_marchant(req, res, req.params.marchantId);
});

router.get("/api/get_Item_details_byMarchantID/:MarchantID", (req, res) => {
  model.get_Item_details_byMarchantID(req, res, req.params.MarchantID);
});

router.get(
  "/api/get_Item_top_group_for_also_purchased/:GroupID",
  (req, res) => {
    model.get_Item_top_group_for_also_purchased(req, res, req.params.GroupID);
  }
);

router.get("/api/get_item_byGroupID_withQtyProduct/:CategoryID", (req, res) => {
  model.get_item_byGroupID_withQtyProduct(req, res, req.params.CategoryID);
});

router.get("/api/get_slider_for_productList/:CategoryID", (req, res) => {
  model.get_slider_for_productList(req, res, req.params.CategoryID);
});

router.get("/api/get_brand_wise_Product/:BrandID", (req, res) => {
  model.get_brand_wise_Product(req, res, req.params.BrandID);
});

router.get("/api/get_product_for_search/:value", (req, res) => {
  model.get_product_for_search(req, res, req.params.value);
});

router.get("/api/get_order_item_byInvoiceId/:InvoiceID", (req, res) => {
  model.get_order_item_byInvoiceId(req, res, req.params.InvoiceID);
});

router.get("/api/get_home_details", (req, res) => {
  model.get_home_details(req, res, req.params.InvoiceID);
});
module.exports = router;
