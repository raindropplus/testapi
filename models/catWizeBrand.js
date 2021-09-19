
var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetCatWizeBrand = function (req, res, reqBody) {
    reqBody.IsActive = reqBody.IsActive === true ? 1 : 0;
    reqBody.IsPromote = reqBody.IsPromote === true ? 1 : 0;
    var sql = "bspSetCmnCatWiseBrand " + reqBody.CatWiseBrandID + ",'" + reqBody.CatWiseBrandNo + "'," + reqBody.ItemCategoryID + "," + reqBody.ItemBrandID + "," + reqBody.IsPromote + "," + reqBody.Sequence + "," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteCatWizeBrandByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnCatWiseBrand " + reqBody.CatWiseBrandID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetCatWizeBrand = function (req, res, reqBody) {
    var sql = "buspGetCmnCatWiseBrand " + reqBody.CompanyID + ", " + reqBody.CatWiseBrandID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
var GetCategorySequence = function (req, res, CompanyID, ItemCategoryID) {

    db.executeSql("bspGetCategorySequence " + CompanyID + ", " + ItemCategoryID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

module.exports = {
    bsetCatWizeBrand,
    deleteCatWizeBrandByID,
    bugetCatWizeBrand,
    GetCategorySequence
}