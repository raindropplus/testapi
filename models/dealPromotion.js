var db = require('../core/db');
var IpAddress = require('../iPAddress');
var bsetDealPromotion = function (req, res, reqBody) {
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    }
    else {
        reqBody.IsActive = 0;
    }
    var sql = "bspSetCmnItemDealPromotion    " + reqBody.ItemPromotionID + "," + reqBody.ItemID + "," + reqBody.Sequence + ",'" + reqBody.ItemPromotionURL + "'," + reqBody.IsActive + ", '" + reqBody.EffectiveDate  +"' , '" + reqBody.ToDate  + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteDealPromotionByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemDealPromotion   " + reqBody.ItemPromotionID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetDealPromotion = function (req, res, reqBody) {
    var sql = "buspGetCmnItemDealPromotion " + reqBody.CompanyID + ", " + reqBody.ItemPromotionID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
    //onsole.log(sql);
    db.executeSql(sql, function (data, err) {

        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();

    });
}

var GetDealPromotionSequence = function (req, res, CompanyID, ItemID) {
    var sql = "bspGetDealPromotionSequence " + CompanyID + ", " + ItemID + "";
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
    bsetDealPromotion,
    deleteDealPromotionByID,
    bugetDealPromotion,
    GetDealPromotionSequence

}