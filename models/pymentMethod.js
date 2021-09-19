var db = require('../core/db');
var IpAddress = require('../iPAddress');
var bsetPaymentMethod = function (req, res, reqBody) {
	var sql = "bspSetCmnpaymentMethod  " + reqBody.PaymentMethodID + ",'" + reqBody.CustomCode + "','" + reqBody.PaymentMethodName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deletePatmentMethodByID = function (req, res, reqBody) {
	db.executeSql("BspDeleteCmnpaymentMethod " + reqBody.PaymentMethodID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetpaymentMethod = function (req, res, reqBody) {
	var sql = "buspGetCmnpaymentMethod " + reqBody.CompanyID + ", " + reqBody.PaymentMethodID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
	bsetPaymentMethod,
	deletePatmentMethodByID,
	bugetpaymentMethod
}