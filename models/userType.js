var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetcmnUserType = function (req, res, reqBody) {
    var sql = "bspSetCmnUserType  " + reqBody.UserTypeID + ",'" + reqBody.CustomCode + "','" + reqBody.UserTypeName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deletecmnUserTypeByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnUserType " + reqBody.UserTypeID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetcmnUserType = function (req, res, reqBody) {
    var sql = "buspGetCmnUserType " + reqBody.CompanyID + ", " + reqBody.UserTypeID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    bsetcmnUserType,
    deletecmnUserTypeByID,
    bugetcmnUserType
}