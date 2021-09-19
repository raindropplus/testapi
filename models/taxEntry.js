var db = require('../core/db');
var IpAddress = require('../iPAddress');
var bsetItemTax = function (req, res, reqBody) {

    var sql = "bspSetCmnTaxType  " + reqBody.TaxTypeID + ",'" + reqBody.TaxTypeNo + "','" + reqBody.TaxTypeName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemTaxByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnTaxType " + reqBody.TaxTypeID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemTax = function (req, res, reqBody) {
    var sql = "buspGetCmnTaxType " + reqBody.CompanyID + ", " + reqBody.TaxTypeID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    bsetItemTax,
    deleteItemTaxByID,
    bugetItemTax
}