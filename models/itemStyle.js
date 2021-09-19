var db = require('../core/db');
var IpAddress = require('../iPAddress');
var bsetItemStyle = function (req, res, reqBody) {  
    var sql = "bspSetCmnItemStyleMaster  " + reqBody.ItemStyleID + ",'" + reqBody.StyleNo + "','" + reqBody.StyleName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemStyleByID = function (req, res, reqBody) {
    var sql = "BspDeleteCmnItemStyleMaster " + reqBody.ItemStyleID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
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

var bugetItemStyle = function (req, res, reqBody) {
    var sql = "buspGetCmnItemStyleMaster " + reqBody.CompanyID + ", " + reqBody.ItemStyleID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    bsetItemStyle,
    deleteItemStyleByID,
    bugetItemStyle
}