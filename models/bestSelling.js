var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetBestSelling = function (req, res, reqBody) {
    reqBody.IsActive = reqBody.IsActive === true ? 1 : 0;
    var sql = "bspSetCmnItemBestSelling " + reqBody.TopSellItemID + "," + reqBody.GroupID + "," + reqBody.CategoryID + "," + reqBody.ItemID + "," + reqBody.Sequence + "," + reqBody.TopItemNo + "," + reqBody.IsActive + ",'" + reqBody.EffectiveDate + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}



var deleteBestSellingByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemBestSelling " + reqBody.TopSellItemID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetBestSelling = function (req, res, reqBody) {
    var sql = "buspGetCmnItemBestSelling " + reqBody.CompanyID + ", " + reqBody.TopSellItemID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
    console.log(sql);
    db.executeSql(sql, function (data, err) {

        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();

    });
}
var GetBestsellingSequence = function (req, res, CompanyID) {

    db.executeSql("bspGetCmnItemBestSellingSequence " + CompanyID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var GetItemGroupWize = function (req, res, CompanyID, ItemGroupID, ItemID) {

    db.executeSql("bspGetItemCatandGroupWize " + CompanyID + ", " + ItemGroupID + "," +ItemID+"", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

module.exports = {
    bsetBestSelling,
    deleteBestSellingByID,
    bugetBestSelling,
    GetBestsellingSequence,
    GetItemGroupWize
}