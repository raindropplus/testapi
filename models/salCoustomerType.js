var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetSalCoustomerType = function (req, res, reqBody) {
    var sql = "bspSetSalCoustomerType  " + reqBody.CustomerTypeID + ",'" + reqBody.CustomCode + "','" + reqBody.CustomerTypeName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteSalCoustomerTypeByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteSalCustomerType " + reqBody.CustomerTypeID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetSalCoustomerType = function (req, res, reqBody) {
    var sql = "buspSalCoustomerType " + reqBody.CompanyID + ", " + reqBody.CustomerTypeID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    bsetSalCoustomerType,
    deleteSalCoustomerTypeByID,
    bugetSalCoustomerType
}