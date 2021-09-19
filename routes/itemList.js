const express = require("express");
const router = express.Router();
var model = require("../models/itemList");

router.get("/api/getItemList/:GroupID/:CategoryID", (req, res) => {
  model.getItemByGroupID(req, res, req.params.GroupID, req.params.CategoryID);
});

router.get("/api/getItemByGroupIDWithQty/:GroupID/:CategoryID", (req, res) => {
    model.getItemByGroupIDWithQty(req, res, req.params.GroupID, req.params.CategoryID);
  }
);

router.get("/api/getItemByGroupIDWithQtyProduct/:CategoryID", (req, res) => {
  model.getItemByGroupIDWithQtyProduct(req, res, req.params.CategoryID);
});

router.get("/api/getItemByGroupIDWithQtyProduct_Search/:Search", (req, res) => {
  model.getItemByGroupIDWithQtyProduct_Search(req, res, req.params.Search);
});

router.get("/api/getItemDetailsByItemID/:ItemID", (req, res) => {
  model.itemDetailsByItemID(req, res, req.params.ItemID);
});
router.get("/api/getItemDetailsByMarchantID/:MarchantID", (req, res) => {
  model.ItemDetailsByMarchantID(req, res, req.params.MarchantID);
});
router.get("/api/getItemTopGroupForAlsoPurchased/:GroupID", (req, res) => {
  model.AlsoPurchased(req, res, req.params.GroupID);
});
router.get("/api/getItemBestSelling/:CategoryID/:GroupID", (req, res) => {
  model.bestSelling(req, res, req.params.CategoryID, req.params.GroupID);
});

router.get("/api/getCatWiseBrand/:CategoryID", (req, res) => {
  model.catwiseBrand(req, res, req.params.CategoryID);
});
router.get("/api/getCatWiseBrand/:CategoryID/:Search", (req, res) => {
  model.catwiseBrand_Search(req, res, 0, req.params.Search);
});

router.get("/api/getBrandWiseProduct/:BrandID", (req, res) => {
  model.brandWiseProduct(req, res, req.params.BrandID);
});
router.get("/api/getItemByItemIDNColorIDNSizeID/:ItemID/:SizeID/:ColorID", (req, res) => {
  model.getItemByItemIDNColorIDNSizeID(req, res, req.params.ItemID, req.params.SizeID, req.params.ColorID);
});

module.exports = router;