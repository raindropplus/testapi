var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetSalDiscountType = function (req, res, reqBody) {
    var sql = "bspSetSalDiscountType  " + reqBody.DiscountTypeID + ",'" + reqBody.CustomCode + "','" + reqBody.DiscountTypeName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}
var deleteSalDiscountTypeByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteSalDiscountType " + reqBody.DiscountTypeID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetSalDiscountType = function (req, res, reqBody) {
    var sql = "buspGetSalDiscountType " + reqBody.CompanyID + ", " + reqBody.DiscountTypeID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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



module.exports = {
    bsetSalDiscountType,
    deleteSalDiscountTypeByID,
    bugetSalDiscountType
}