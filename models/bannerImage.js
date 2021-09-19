var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetBannerImages = function (req, res, reqBody) {
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    } else {
        reqBody.IsActive = 0;
    }

    var sql = "bspSetCmnBannerImage " + reqBody.BannerID + ",'" + reqBody.BannerName + "','" + reqBody.BannerURL + "'," + reqBody.IsActive + ",'" + reqBody.BannerUploadDate + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteBannerImageByID = function (req, res, reqBody) {
    var sql = "BspDeleteCmnBannerImage " + reqBody.BannerID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'"
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetBannerImage = function (req, res, reqBody) {
    var sql = "buspGetCmnBannerImage " + reqBody.CompanyID + ", " + reqBody.BannerID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    bsetBannerImages,
    deleteBannerImageByID,
    bugetBannerImage
}