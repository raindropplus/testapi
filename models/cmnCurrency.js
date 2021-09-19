
var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetCmnCurrency = function (req, res, reqBody) {
    reqBody.IsDefault = reqBody.IsDefault === true ? 1 : 0;
    var sql = "bspSetCmnCurrency  " + reqBody.CurrencyID + ",'" + reqBody.CurrencyNo + "','" + reqBody.CurrencyName + "','" + reqBody.CurrencySymbol + "','" + reqBody.CurrencyDecimalName + "'," + reqBody.CountryID + "," + reqBody.IsDefault + ","+ reqBody.CompanyID + ","  + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteCmnCurrencyByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnCurrency " + reqBody.CurrencyID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetCmnCurrency = function (req, res, reqBody) {
    var sql = "buspGetCmnCurrencyMaster " + reqBody.CompanyID + ", " + reqBody.CurrencyID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    bsetCmnCurrency,
    deleteCmnCurrencyByID,
    bugetCmnCurrency
}