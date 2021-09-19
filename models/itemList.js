var db = require("../core/db");

//get item by Gruop ID
var getItemByGroupID = (req, res, GroupID, CategoryID) => {
  //console.log(GroupID);
  var sql = "spGetProductListJson " + GroupID + "," + CategoryID + " ";
  //console.log(sql);
  db.executeSql(sql, (data, err) => {
    // if (err) {
    //   res.json({
    //     error: err,
    //     status: false
    //   });
    // } else {
    //   res.json({
    //     data: data,
    //     status: true
    //   });
    // }
    // res.end();

    if (err) {
      throw err;
    } else {
      var result =
        data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
      if (result.length == 0) {
        result = "[]";
        res.send(result);
      } else {
        res.send(
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
        );
      }
    }
    res.end();
  });
};

//get itemGruop With Qty
var getItemByGroupIDWithQty = (req, res, GroupID, CategoryID) => {
  //console.log(GroupID);
  db.executeSql("spGetCmnItemGroupforLeftSide " + GroupID + "," + CategoryID + " ", (data, err) => {

    // if (err) {
    //   res.json({
    //     error: err,
    //     status: false
    //   });
    // } else {
    //   res.json({
    //     data: data,
    //     status: true
    //   });
    // }
    // res.end();

    if (err) {
      throw err;
    } else {
      var result =
        data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
      if (result.length == 0) {
        result = "[]";
        res.send(result);
      } else {
        res.send(
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
        );
      }
    }
    res.end();
  });
};

//get itemGruop With Qty
var getItemByGroupIDWithQtyProduct = (req, res, CategoryID) => {
  var sql = "spGetCmnItemGroupforLeftSideProduct " + CategoryID;
  db.executeSql(sql, (data, err) => {
    // if (err) {
    //   res.json({
    //     error: err,
    //     status: false
    //   });
    // } else {
    //   res.json({
    //     data: data,
    //     status: true
    //   });
    // }
    // res.end();
    if (err) {
      throw err;
    } else {
      var result =
        data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
      if (result.length == 0) {
        result = "[]";
        res.send(result);
      } else {
        res.send(
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
        );
      }
    }
    res.end();
  });
};

//get itemGruop With Qty
var getItemByGroupIDWithQtyProduct_Search = (req, res, SearchCriteria) => {
  console.log("spGetCmnItemGroupforLeftSideProduct_Search '" + SearchCriteria + "'");
  db.executeSql("spGetCmnItemGroupforLeftSideProduct_Search '" + SearchCriteria + "'", (data, err) => {
    if (err) {
      throw err;
    } else {
      var result = data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
      if (result.length == 0) {
        result = "[]";
        res.send(result);
      } else {
        res.send(data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]);
      }
    }
    res.end();
  });
};

//get itemDetails By ItemID
var itemDetailsByItemID = function (req, res, ItemID) {
  var sql = "spGetItemDetailbyItemIDJson " + ItemID + " ";
  console.log(sql);
  db.executeSql(
    sql,
    function (data, err) {
      if (err) {
        throw err;
      } else {
        var result = data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
        if (result.length == 0) {
          result = "[]";
          res.send(result);
        } else {
          res.send(
            data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
          );
        }
      }
      res.end();
    }
  );
};

//get itemDetails By MarchantID
var ItemDetailsByMarchantID = function (req, res, MarchantID) {
  db.executeSql(
    "spGetCmnItemMasterByMerchant " + MarchantID + " ",
    function (data, err) {
      if (err) {
        throw err;
      } else {
        var result =
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
        if (result.length == 0) {
          result = "[]";
          res.send(result);
        } else {
          res.send(
            data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
          );
        }
      }
      res.end();
    }
  );
};

//get ALSO PARCHASED By ItemID
var AlsoPurchased = function (req, res, GroupID) {
  var sql = "spGetItemTopgroupwiseJson " + GroupID + " ";
  console.log(sql);
  db.executeSql(
    sql,
    function (data, err) {
      if (err) {
        throw err;
      } else {
        var result =
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
        if (result.length == 0) {
          result = "[]";
          res.send(result);
        } else {
          res.send(
            data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
          );
        }
      }
      res.end();
    }
  );
};

//get  BEST SELLING By ItemID
var bestSelling = (req, res, CategoryID, GroupID) => {
  db.executeSql("spGetItemBestSellingJson " + CategoryID + "," + GroupID + " ", (data, err) => {
    // if (err) {
    //   res.json({
    //     error: err,
    //     status: false
    //   });
    // } else {
    //   res.json({
    //     data: data,
    //     status: true
    //   });
    // }
    // res.end();
    if (err) {
      throw err;
    } else {
      var result =
        data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
      if (result.length == 0) {
        result = "[]";
        res.send(result);
      } else {
        res.send(
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
        );
      }
    }
    res.end();
  });
};
var catwiseBrand = (req, res, CategoryID) => {
  db.executeSql("spGetCatWiseBrandJson " + CategoryID, (data, err) => {
    // if (err) {
    //   res.json({
    //     error: err,
    //     status: false
    //   });
    // } else {
    //   res.json({
    //     data: data,
    //     status: true
    //   });
    // }
    // res.end();
    if (err) {
      throw err;
    } else {
      var result =
        data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
      if (result.length == 0) {
        result = "[]";
        res.send(result);
      } else {
        res.send(
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
        );
      }
    }
    res.end();
  });
};
var catwiseBrand_Search = function (req, res, CategoryID, Search) {
  db.executeSql("spGetCatWiseBrand_SearchJson 0," + Search + " ", (data, err) => {
    // if (err) {
    //   res.json({
    //     error: err,
    //     status: false
    //   });
    // } else {
    //   res.json({
    //     data: data,
    //     status: true
    //   });
    // }
    // res.end();
    
    if (err) {
      throw err;
    } else {
      var result =
        data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
      if (result.length == 0) {
        result = "[]";
        res.send(result);
      } else {
        res.send(
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
        );
      }
    }
    res.end();
  });
};
//get brand wise product
var brandWiseProduct = function (req, res, BrandID) {
  db.executeSql(
    "spGetItemCatWiseBrandJson " + BrandID + " ",
    function (data, err) {
      if (err) {
        throw err;
      } else {
        var result =
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
        if (result.length == 0) {
          result = "[]";
          res.send(result);
        } else {
          res.send(
            data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
          );
        }
      }
      res.end();
    }
  );
};

//get brand wise product
var getItemByItemIDNColorIDNSizeID = function (req, res, ItemID, SizeID, ColorID) {
  var sql = "spGetItemPricebyColorSizeJson " + ItemID + "," + SizeID + "," + ColorID + " ";
  console.log(sql);
  db.executeSql(
    sql,
    function (data, err) {
      if (err) {
        throw err;
      } else {
        var result =
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
        if (result.length == 0) {
          result = "[]";
          res.send(result);
        } else {
          res.send(
            data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
          );
        }
      }
      res.end();
    }
  );
};

module.exports = {
  getItemByGroupID,
  getItemByGroupIDWithQty,
  itemDetailsByItemID,
  AlsoPurchased,
  bestSelling,
  getItemByGroupIDWithQtyProduct,
  getItemByGroupIDWithQtyProduct_Search,
  catwiseBrand,
  catwiseBrand_Search,
  brandWiseProduct,
  ItemDetailsByMarchantID,
  getItemByItemIDNColorIDNSizeID
};