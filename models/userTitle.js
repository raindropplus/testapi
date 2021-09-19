var db = require('../core/db');
var IpAddress = require('../iPAddress');
var bsetcmnUserTitle = function (req, res, reqBody) {
    if (reqBody.StatusID == undefined) {
        reqBody.StatusID = null;
    }
    var sql = "bspSetCmnUserTitle  " + reqBody.UserTitleID + ",'" + reqBody.CustomCode + "','" + reqBody.UserTitleName + "'," + reqBody.StatusID+"," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deletecmnUserTitleByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnUserTitle " + reqBody.UserTitleID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetcmnUserTitle = function (req, res, reqBody) {
    var sql = "buspGetCmnUserTitle " + reqBody.CompanyID + ", " + reqBody.UserTitleID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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



module.exports = {
    bsetcmnUserTitle,
    deletecmnUserTitleByID,
    bugetcmnUserTitle
}