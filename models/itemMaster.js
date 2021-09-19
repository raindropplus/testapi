var db = require('../core/db');
var IpAddress = require('../iPAddress');
const Joi = require('joi');


var setItemMaster = function (req, res, reqBody) {
    var ParentID = (reqBody.ParentID === undefined) ? null : reqBody.ParentID;
    var ArticleDescription = (reqBody.ArticleDescription === undefined || reqBody.ArticleDescription === null) ? '' : reqBody.ArticleDescription;
    var ItemSeasonID = (reqBody.ItemSeasonID === undefined) ? null : reqBody.ItemSeasonID;
    var SeasonID = (reqBody.SeasonID === undefined) ? null : reqBody.SeasonID;
    var ItemStyleID = (reqBody.ItemStyleID === undefined) ? null : reqBody.ItemStyleID;
    var ItemYearID = (reqBody.ItemYearID === undefined) ? null : reqBody.ItemYearID;
    var HSCODE = (reqBody.HSCODE === undefined || reqBody.HSCODE === null) ? '' : reqBody.HSCODE;
    var Barcode = (reqBody.Barcode === undefined || reqBody.Barcode === undefined) ? '' : reqBody.Barcode;
    var OriginCountryID = (reqBody.OriginCountryID === undefined) ? null : reqBody.OriginCountryID;
    var ItemBrandID = (reqBody.ItemBrandID === undefined) ? null : reqBody.ItemBrandID;
    var ItemModelID = (reqBody.ItemModelID === undefined) ? null : reqBody.ItemModelID;
    var ItemGradeID = (reqBody.ItemGradeID === undefined) ? null : reqBody.ItemGradeID;
    var UOMID = (reqBody.UOMID === undefined) ? null : reqBody.UOMID;

    var MataKey = (reqBody.MataKey === undefined || reqBody.MataKey === null) ? '' : reqBody.MataKey;
    var MetaDescription = (reqBody.MetaDescription === undefined || reqBody.MetaDescription === null) ? '' : reqBody.MetaDescription;


    var sql = "bspSetCmnItemMaster " + reqBody.ItemID + ",'" + reqBody.ItemNo + "','" + reqBody.ItemName + "','" + ArticleDescription + "','" + MataKey + "','" + MetaDescription + "', " + ItemSeasonID + ", " + ItemStyleID + ", " + ItemYearID + ", " + reqBody.Unit + ", " + UOMID + ", " + ItemBrandID + "," + ItemModelID + ", " + OriginCountryID + ", " + ItemGradeID + "," + reqBody.ItemConditionID + "," + reqBody.StandardID + "," + reqBody.Width + "," + reqBody.WidthUOMID + "," + reqBody.Height + "," + reqBody.HeightUOMID + "," + reqBody.Weight + ", " + reqBody.WeightUOMID + "," + reqBody.WeightPerUnit + "," + reqBody.WeightPerUnitID + ", " + reqBody.ItemCategoryID + "," + reqBody.ItemGroupID + "," + reqBody.IsQCRequired + ",'" + HSCODE + "','" + Barcode + "'," + reqBody.IsSample + "," + ParentID + "," + reqBody.IsActive + ",'" + reqBody.Note + "'," + reqBody.CompanyID + "," + reqBody.LoggedUserID + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "," + reqBody.MarchantID + " ";
    console.log('Itemmaster',sql);
    db.executeSql(sql, function (data, err) {
    	if (err) {
    		throw err;
        } else {
            res.send(data.recordset);
        }
		res.end();	
    });
}

var getItemMaster = function (req, res, reqBody) {
    var sql = "BspGetCmnItemMaster " + reqBody.CompanyID + ", " + parseInt(reqBody.Itemid) + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var deleteItemByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemMaster " + reqBody.ItemID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var setItemCnReview = function (req, res, reqBody) {

    var sql = "spSetCmnItemReview " + reqBody.ItemReviewID + "," + reqBody.ItemID + ",'" + reqBody.Title + "','" + reqBody.Description + "', " + reqBody.ReviewPercent + ", " + reqBody.ReviewBy + ", " + reqBody.IsActive + ", " + reqBody.IsApproved + ", " + reqBody.CompanyID + "," + reqBody.LoggedUserID + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
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
var CmnBrandWizeModel = function (req, res, CompanyID, ItemBrandID, ItemModelID) {
    
    db.executeSql("bspGetBrandWizeModel " + CompanyID + "," + ItemBrandID + "," + ItemModelID +"", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getItemByMerchantID = function (req, res, MerchantID) {
    
    db.executeSql("spGetItemByMarchantID " + MerchantID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


module.exports = {
    setItemMaster,
    getItemMaster,
    deleteItemByID,
    setItemCnReview,
    CmnBrandWizeModel,
    getItemByMerchantID
}