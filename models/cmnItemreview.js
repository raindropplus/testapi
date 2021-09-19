var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetItemReview = function (req, res, reqBody) {
    reqBody.IsActive = reqBody.IsActive === true ? 1 : 0;
    reqBody.IsApproved = reqBody.IsApproved === true ? 1 : 0;
  
    var sql = "bspSetCmnItemReview " + reqBody.ItemReviewID + "," + reqBody.ItemID + ",'" + reqBody.Title + "','" + reqBody.Description + "'," + reqBody.ReviewPercent + "," + reqBody.ReviewBy + "," + reqBody.IsActive + "," + reqBody.IsApproved + "," + reqBody.ApprovedBy + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
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

var deleteItemReviewByID = function (req, res, reqBody) {
    var sql = "BspDeleteCmnItemReview  " + reqBody.ItemReviewID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
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

var bugetItemReview = function (req, res, reqBody) {
    var sql = "buspGetCmnItemReview " + reqBody.CompanyID + ", " + reqBody.ItemReviewID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var GetUserAsEmployee = function (req, res, CompanyID, UserID) {

    db.executeSql("bspGetCmnUserforEmployee " + CompanyID + ", " + UserID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var GetUserAsCustomer = function (req, res, CompanyID, UserID) {

    db.executeSql("bspGetCmnUserforCustomer " + CompanyID + ", " + UserID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

module.exports = {
    bsetItemReview,
    deleteItemReviewByID,
    bugetItemReview,
    GetUserAsEmployee,
    GetUserAsCustomer
}