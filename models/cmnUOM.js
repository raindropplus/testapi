var db = require('../core/db');
var IpAddress = require('../iPAddress');
var bsetCmnUOM = function (req, res, reqBody) {
    var sql = "bspSetCmnUOM  " + reqBody.UOMID + ",'" + reqBody.UOMNo + "','" + reqBody.UOMName + "','" + reqBody.UOMShortName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteCmnUOMByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemUOM " + reqBody.UOMID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetCmnUOM = function (req, res, reqBody) {
    var sql = "buspGetCmnUOM " + reqBody.CompanyID + ", " + reqBody.UOMID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
   // console.log(sql);
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
    bsetCmnUOM,
    deleteCmnUOMByID,
    bugetCmnUOM
}