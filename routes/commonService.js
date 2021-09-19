const express = require('express');
const router = express.Router();
var model = require('../models/commonService');

router.get('/api/getItemColor/:CompanyID/:ItemColorID', (req, res) => {
    model.getItemColor(req, res, req.params.CompanyID, req.params.ItemColorID);
});

router.get('/api/getItemCondition/:CompanyID/:ItemConditionID', (req, res) => {
    model.getItemCondition(req, res, req.params.CompanyID, req.params.ItemConditionID);
});

router.get('/api/getItemGrade/:CompanyID/:ItemGradeID', (req, res) => {
    model.getItemGrade(req, res, req.params.CompanyID, req.params.ItemGradeID);
});

router.get('/api/getItemGroup/:CompanyID/:ItemGroupID', (req, res) => {
    model.getItemGroup(req, res, req.params.CompanyID, req.params.ItemGroupID);
});

router.get('/api/getItemSeason/:CompanyID/:SeasonID', (req, res) => {
    model.getItemSeason(req, res, req.params.CompanyID, req.params.SeasonID);
});

router.get('/api/getItemSize/:CompanyID/:ItemSizeID', (req, res) => {
    model.getItemSize(req, res, req.params.CompanyID, req.params.ItemSizeID);
});

router.get('/api/getItemBrand/:CompanyID/:ItemBrandID', (req, res) => {
    model.getItemBrand(req, res, req.params.CompanyID, req.params.ItemBrandID);
});
router.get('/api/getItemModel/:CompanyID/:ItemModelID', (req, res) => {
    model.getItemModel(req, res, req.params.CompanyID, req.params.ItemModelID);
});


router.get('/api/getItemCategory/:CompanyID', (req, res) => {
    model.getItemCategory(req, res, req.params.CompanyID);
});
router.get('/api/GetCmnSeason/:CompanyID/:SeasonID', (req, res) => {
    model.GetCmnSeason(req, res, req.params.CompanyID, req.params.SeasonID);
});

router.get('/api/GetCmnItemStyleMaster/:CompanyID/:ItemStyleID', (req, res) => {
    model.GetCmnItemStyleMaster(req, res, req.params.CompanyID, req.params.ItemStyleID);
});

router.get('/api/GetCmnYear/:CompanyID/:YearID', (req, res) => {
    model.GetCmnYear(req, res, req.params.CompanyID, req.params.YearID);
});
router.get('/api/CmnOriginCountry/:CompanyID/:CountryID', (req, res) => {
    model.CmnOriginCountry(req, res, req.params.CompanyID, req.params.CountryID);
});
router.get('/api/CmnUOM/:CompanyID/:UOMID', (req, res) => {
    model.CmnUOM(req, res, req.params.CompanyID, req.params.UOMID);
});
router.get('/api/CmnItemGradeDDL/:CompanyID/:ItemGradeID', (req, res) => {
    model.CmnItemGradeDDL(req, res, req.params.CompanyID, req.params.ItemGradeID);
});

router.get('/api/getItemGroupDDL/:CompanyID/:ItemCategoryID/:ItemGroupID', (req, res) => {
    model.getItemGroupDDL(req, res, req.params.CompanyID, req.params.ItemCategoryID, req.params.ItemGroupID);
});

router.get('/api/CmnItemMasterParent/:CompanyID/:ItemID', (req, res) => {
    model.CmnItemMasterParent(req, res, req.params.CompanyID, req.params.ItemID);
});

router.get('/api/getuserTitle/:CompanyID/:UserTitleID', (req, res) => {
    model.getuserTitle(req, res, req.params.CompanyID, req.params.UserTitleID);
});

router.get('/api/getuserType/:CompanyID/:UserTypeID', (req, res) => {
    model.getuserType(req, res, req.params.CompanyID, req.params.UserTypeID);
});

router.get('/api/getDiscountType/:CompanyID/:DiscountTypeID', (req, res) => {
    model.getDiscountType(req, res, req.params.CompanyID, req.params.DiscountTypeID);
});

router.get('/api/getPriceType/:CompanyID/:PriceTypeID', (req, res) => {
    model.getPriceType(req, res, req.params.CompanyID, req.params.PriceTypeID);
});

router.get('/api/getCurrencyType/:CompanyID/:CurrencyID', (req, res) => {
    model.getCurrencyType(req, res, req.params.CompanyID, req.params.CurrencyID);
});

router.get('/api/getitemWizeColor/:CompanyID/:ItemID', (req, res) => {
    model.getitemWizeColor(req, res, req.params.CompanyID, req.params.ItemID);
});

router.get('/api/getitemWizeSize/:CompanyID/:ItemID', (req, res) => {
    model.getitemWizeSize(req, res, req.params.CompanyID, req.params.ItemID);
});

router.get('/api/getTaxType/:CompanyID/:TaxTypeID', (req, res) => {
    model.getTaxType(req, res, req.params.CompanyID, req.params.TaxTypeID);
});
router.get('/api/getUsers/:CompanyID/:UserID', (req, res) => {
    model.getUsers(req, res, req.params.CompanyID, req.params.UserID);
});

router.get('/api/getGender/:CompanyID/:GenderID', (req, res) => {
    model.getGender(req, res, req.params.CompanyID, req.params.GenderID);
});
router.get('/api/getCity/', (req, res) => {
    model.getCity(req, res);
});
router.get('/api/getCountry/', (req, res) => {
    model.getCountry(req, res);
});
router.get('/api/GetDataByTableName/:TableName/:ColumnName/:ColumnValue', (req, res) => {
    model.GetDataByTableName(req, res, req.params.TableName,req.params.ColumnName,req.params.ColumnValue);
});

module.exports = router;