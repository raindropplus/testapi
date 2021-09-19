var db = require('../core/db');
var IpAddress = require('../iPAddress');
var bsetItemSession = function (req, res, reqBody) {
    var sql = "bspSetCmnItemSession  " + reqBody.SeasonID + ",'" + reqBody.SeasonNo + "','" + reqBody.SeasonName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemSessionByID = function (req, res, reqBody) {
    db.executeSql("[BspDeleteCmnItemSession] " + reqBody.SeasonID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemSession = function (req, res, reqBody) {
    var sql = "buspGetCmnSession " + reqBody.CompanyID + ", " + reqBody.SeasonID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    bsetItemSession,
    deleteItemSessionByID,
    bugetItemSession
}