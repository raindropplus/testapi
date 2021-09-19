var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bugetInvStockView = function (req, res, reqBody) {
    var sql = "buspGetStockView " + reqBody.CompanyID + ", " + reqBody.StockID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var deleteStockViewByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteInvStockMaster " + reqBody.StockID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}




module.exports = {

	bugetInvStockView,
	deleteStockViewByID
}