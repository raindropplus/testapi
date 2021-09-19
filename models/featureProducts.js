var db = require('../core/db');
var IpAddress = require('../iPAddress');
//get item color by itemcolorid
var getAllFeatureProducts = (req, res, arr) => {
    db.executeSql("spGetCmnItemGroupCategoryJson '" + arr + "'", (data, err) => {
        // if (err) {
        //     res.json({
        //         error: err,
        //         status: false
        //     });
        // } else {
        //     res.json({
        //         data: data,
        //         status: true
        //     });
        // }
        // res.end();
        if (err) {
            throw err;
        } else {
            var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
            // console.log(result.length);
            if (result.length == 0) {
                result = "[]";
                res.send(result);
            } else {
                res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
            }
        }
        res.end();
    });
}

var bsetCatWizeFeatureProduct = function (req, res, reqBody) {
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    } else {
        reqBody.IsActive = 0;
    }

    var sql = "bspSetCatWizeFeaturePro     " + reqBody.FeatureItemID + ",'" + reqBody.FeatureItemNo + "'," + reqBody.CategoryID + "," + reqBody.ItemID + "," + reqBody.Sequence + ",'" + reqBody.FeatureItemURL + "'," + reqBody.IsActive + ",'" + reqBody.EffectiveDate + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteCatWizeFeatureProductByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCatWizeFeaturePro " + reqBody.FeatureItemID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetCatWizeFeatureProduct = function (req, res, reqBody) {
    var sql = "buspGetCatWizeFesProduct " + reqBody.CompanyID + ", " + reqBody.FeatureItemID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {

        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();

    });
}

var GetProductSequence = function (req, res, CompanyID) {

    db.executeSql("bspGetFescProductSequence " + CompanyID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var GetCatWizeItem = function (req, res, CompanyID, ItemCategoryID) {

    db.executeSql("bspGetItemByCategory " + CompanyID + "," + ItemCategoryID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

module.exports = {
    getAllFeatureProducts,
    bsetCatWizeFeatureProduct,
    bugetCatWizeFeatureProduct,
    deleteCatWizeFeatureProductByID,
    GetProductSequence,
    GetCatWizeItem

}