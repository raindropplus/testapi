var db = require('../core/db');
//Get item 

var getItemGroupDDL = function (req, res, CompanyID, ItemCategoryID, ItemGroupID) {
    var sql = "bspGetCmnItemGroupDDL " + CompanyID + "," + ItemCategoryID + "," + ItemGroupID + ""
    console.log(sql)
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getItemColor = function (req, res, CompanyID, ItemColorID) {
    db.executeSql("bspGetCmnColor " + CompanyID + "," + ItemColorID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getItemCondition = function (req, res, CompanyID, ItemConditionID) {
    db.executeSql("bspGetCmnCondition " + CompanyID + "," + ItemConditionID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getItemGrade = function (req, res, CompanyID, ItemGradeID) {
    db.executeSql("bspGetCmnGrade " + CompanyID + "," + ItemGradeID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getItemGroup = (req, res, CompanyID, ItemGroupID) => {
    var sql = "bspGetCmnGroup " + CompanyID + "," + ItemGroupID
    console.log(sql);
    db.executeSql(sql, (data, err) => {
        // if (err) {
        //     res.json({
        //         error: err,
        //         status: false
        //     });
        // } else {
        //     res.json({
        //         data: data,
        //         status: true
        //     });
        // }
        // res.end();

        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getItemSeason = function (req, res, CompanyID, SeasonID) {
    db.executeSql("bspGetCmnSession " + CompanyID + "," + SeasonID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getItemSize = function (req, res, CompanyID, ItemSizeID) {
    db.executeSql("bspGetCmnSize " + CompanyID + "," + ItemSizeID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getItemBrand = function (req, res, CompanyID, ItemBrandID) {
    db.executeSql("bspGetCmnBrand " + CompanyID + "," + ItemBrandID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getItemCategory = function (req, res, CompanyID) {
    db.executeSql("bspGetCmnCategory " + CompanyID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getItemModel = function (req, res, CompanyID, ItemModelID) {
    db.executeSql("BspGetCmnItemModel " + CompanyID + "," + ItemModelID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var GetCmnSeason = function (req, res, CompanyID, SeasonID) {
    db.executeSql("BspGetCmnSeason " + CompanyID + "," + SeasonID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var GetCmnItemStyleMaster = function (req, res, CompanyID, ItemStyleID) {
    db.executeSql("BspGetCmnItemStyleMaster " + CompanyID + "," + ItemStyleID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var GetCmnYear = function (req, res, CompanyID, YearID) {
    db.executeSql("BspGetCmnYear " + CompanyID + "," + YearID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var CmnOriginCountry = function (req, res, CompanyID, CountryID) {
    db.executeSql("BspGetCmnOriginCountry " + CompanyID + "," + CountryID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var CmnUOM = function (req, res, CompanyID, UOMID) {
    db.executeSql("BspGetCmnUOM " + CompanyID + "," + UOMID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var CmnItemGradeDDL = function (req, res, CompanyID, ItemGradeID) {
    db.executeSql("BspGetCmnItemGradeDDL " + CompanyID + "," + ItemGradeID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var CmnItemMasterParent = function (req, res, CompanyID, ItemID) {
    var sql = "bspGetCmnItemMasterDDL " + CompanyID + "," + ItemID + "";
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

var getuserTitle = function (req, res, CompanyID, UserTitleID) {
    db.executeSql("bspGetCmnUserTitle " + CompanyID + "," + UserTitleID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getuserType = function (req, res, CompanyID, UserTypeID) {
    db.executeSql("bspGetCmnUserType " + CompanyID + "," + UserTypeID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getDiscountType = function (req, res, CompanyID, DiscountTypeID) {
    db.executeSql("bspGetSalDiscountType " + CompanyID + "," + DiscountTypeID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getPriceType = function (req, res, CompanyID, PriceTypeID) {
    var sql = "BspGetSalPriceType " + CompanyID + "," + PriceTypeID + "";
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

var getCurrencyType = function (req, res, CompanyID, CurrencyID) {
    db.executeSql("bspGetCmnCurrency " + CompanyID + "," + CurrencyID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getitemWizeColor = function (req, res, CompanyID, ItemID) {
    var sql = "bspGetitemWizeColor " + CompanyID + "," + ItemID + "";
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

var getitemWizeSize = function (req, res, CompanyID, ItemID) {

    var sql = "bspGetitemWizeSize " + CompanyID + "," + ItemID + "";
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

var getTaxType = function (req, res, CompanyID, TaxTypeID) {
    db.executeSql("bspGetCmnTaxType " + CompanyID + "," + TaxTypeID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getUsers = function (req, res, CompanyID, UserID) {
    db.executeSql("bspGetCmnUser " + CompanyID + "," + UserID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getGender = function (req, res, CompanyID, GenderID) {
    var sql = "bspGetCmnGender " + CompanyID + "," + GenderID + "";
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


var getCity = function (req, res) {

    var sql = "spGetCmnAddressCity";
    console.log(sql)

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var getCountry = function (req, res) {

    var sql = "spGetCmnAddressCountry";
    console.log(sql)

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var GetDataByTableName = function (req, res,TableName,ColumnName,ColumnValue) {

    var sql = "[bGetDataByTableName] '"+TableName+"','"+ColumnName+"','"+ColumnValue+"' ";
    console.log(sql)

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
    getItemColor,
    getItemCondition,
    getItemGrade,
    getItemGroup,
    getItemSeason,
    getItemSize,
    getItemBrand,
    getItemCategory,
    getItemModel,
    GetCmnSeason,
    GetCmnItemStyleMaster,
    GetCmnYear,
    CmnOriginCountry,
    CmnUOM,
    CmnItemGradeDDL,
    getItemGroupDDL,
    CmnItemMasterParent,
    getuserType,
    getuserTitle,
    getDiscountType,
    getPriceType,
    getCurrencyType,
    getitemWizeColor,
    getitemWizeSize,
    getTaxType,
    getUsers,
    getGender,
    getCity,
    getCountry,
    GetDataByTableName

}