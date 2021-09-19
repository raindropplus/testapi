var db = require("../core/db");

//get item color
var get_Item_group = (req, res) => {
  db.executeSqlWithJson("sp_GetCmnItemGroup 1", (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};

var get_promotion_slider = (req, res) => {
  db.executeSqlWithJson("spGetCmnPromotionSlider", (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};

var get_promotion_products = (req, res) => {
  db.executeSqlWithJson("spGetCmnItemDealPromotion 1", (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};

var get_discount_slider = (req, res) => {
  db.executeSqlWithJson("spGetCmnItemDealPromotion 1", (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};

var get_feature_products = (req, res, arr) => {
  db.executeSqlWithJson(
    "spGetCmnItemGroupCategoryJson '" + arr + "'",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_item_brand = (req, res) => {
  db.executeSqlWithJson("spGetCmnItemBrand", (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};

var get_Item_bygroupID_withQty = (req, res, GroupID, CategoryID) => {
  db.executeSqlWithJson(
    "spGetCmnItemGroupforLeftSide " + GroupID + "," + CategoryID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_Item_list = (req, res, GroupID, CategoryID) => {
  db.executeSqlWithJson(
    "spGetProductListJson " + GroupID + "," + CategoryID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_slider_for_productlist = (req, res, CategoryID) => {
  db.executeSqlWithJson(
    "spGetCmnPromotionSliderCategoryWise  " + CategoryID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_Item_best_selling = (req, res, CategoryID, GroupID) => {
  db.executeSqlWithJson(
    "spGetItemBestSellingJson " + CategoryID + "," + GroupID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_cat_wise_brand = (req, res, CategoryID) => {
  db.executeSqlWithJson(
    "spGetCatWiseBrandJson " + CategoryID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_Item_details_byItemID = (req, res, ItemID) => {
  db.executeSqlWithJson(
    "spGetItemDetailbyItemIDJson " + ItemID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_marchant = (req, res, MarchantID) => {
  db.executeSqlWithJson(
    "sp_GetCmnMarchant " + MarchantID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_Item_details_byMarchantID = (req, res, MarchantID) => {
  db.executeSqlWithJson(
    "spGetCmnItemMasterByMerchant " + MarchantID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_Item_top_group_for_also_purchased = (req, res, GroupID) => {
  db.executeSqlWithJson(
    "spGetItemTopgroupwiseJson " + GroupID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_item_byGroupID_withQtyProduct = (req, res, CategoryID) => {
  db.executeSqlWithJson(
    "spGetCmnItemGroupforLeftSideProduct " + CategoryID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_slider_for_productList = (req, res, CategoryID) => {
  db.executeSqlWithJson(
    "spGetCmnItemGroupforLeftSideProduct " + CategoryID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_brand_wise_Product = (req, res, BrandID) => {
  db.executeSqlWithJson(
    "spGetItemCatWiseBrandJson " + BrandID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_product_for_search = (req, res, value) => {
  db.executeSqlWithJson(
    "spGetProductJsonForSearch 0,0, '" + value + "' ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_order_item_byInvoiceId = (req, res, InvoiceID) => {
  db.executeSqlWithJson(
    "getSalInvoiceMasterByInvoiceID " + InvoiceID + " ",
    (data, err) => {
      console.log(data);
      if (err) {
        res.json({
          error: err,
          status: false,
        });
      } else {
        res.json({
          data: data,
          status: true,
        });
      }
      res.end();
    }
  );
};

var get_home_details = (req, res) => {
  db.executeSqlWithJson("sp_GethomeDetails 1", (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};
// if (err) {
// 	throw err;
// } else {
// 	var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
// 	// console.log(result.length);
// 	if (result.length == 0) {
// 		result = "[]";
// 		res.send(result);
// 	} else {
// 		res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
// 	}
// }
// res.end();

module.exports = {
  get_Item_group,
  get_promotion_slider,
  get_promotion_products,
  get_discount_slider,
  get_feature_products,
  get_item_brand,
  get_Item_bygroupID_withQty,
  get_Item_list,
  get_slider_for_productlist,
  get_Item_best_selling,
  get_cat_wise_brand,
  get_Item_details_byItemID,
  get_marchant,
  get_Item_details_byMarchantID,
  get_Item_top_group_for_also_purchased,
  get_item_byGroupID_withQtyProduct,
  get_slider_for_productList,
  get_brand_wise_Product,
  get_product_for_search,
  get_order_item_byInvoiceId,
  get_home_details,
};
