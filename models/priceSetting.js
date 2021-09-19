var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bugetPrice = function (req, res, reqBody) {

    var sql = "buspGetSalPriceMaster " + reqBody.CompanyID + ", " + reqBody.SalesPriceID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var bugetPriceMaster = function (req, res, reqBody) {

    var sql = "buspGetPriceMaster " + reqBody.CompanyID + ", " + reqBody.SalesPriceID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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


var setPrice = function (req, res, reqbody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 300);
        });
    }

    
    var sql = "bspSetSalPriceMaster " + reqbody.SalesPriceID + ",'" + reqbody.SalesPriceNo + "','" + reqbody.Description + "'," + reqbody.ItemSizeID + "," + reqbody.ItemColorID + "," + reqbody.ItemID + "," + reqbody.UOMID + ",'" + reqbody.PricingDate + "'," + reqbody.IsActive + "," + 1 + "," + 1 + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted + "";
    //console.log(sql);
    
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            var SalesPriceID = data.recordset[0].ReturnValue;
            res.send(data.recordset);
            //console.log(SalesPriceID);
            async function asyncSetSalPriceDetail() {
                //IsEMI EMIDuration
                var sql = "bspSetSalPriceDetail " + reqbody.SalesPriceDetailID + ",'" + reqbody.SalesPriceDetailNo + "'," + SalesPriceID + ",'" + reqbody.PricingDate + "'," + reqbody.PriceTypeID + "," + reqbody.ItemID + "," + reqbody.SalesPrice + "," + reqbody.CostPrice+ "," + reqbody.PreviousPrice +"," + reqbody.IsEMI +"," + reqbody.EMIDuration + "," + reqbody.IsActive + ",'" + reqbody.EffectiveDate + "'," + reqbody.CurrencyID + "," + 1 + ", " + 1 + ", '" + IpAddress.IP + "', " + reqbody.IsDeleted + "";
                console.log(sql);
                var detailDelay = await Delay();
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("--bspSetSalPriceDetail Posted----");
                    }
                });
            }
            if(SalesPriceID !== 'Duplicate'){
                asyncSetSalPriceDetail();
            }            
        }
        res.end();
    });

}


var deleteSalPriceByID = function (req, res, reqBody) {
    db.executeSql("BspDeletesalPriceId " + reqBody.SalesPriceID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getUomByItem = function (req, res, CompanyID, ItemID) {

    db.executeSql("bspGetUOMbyItem " + CompanyID + ", " + ItemID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var deleteSalPriceDetailByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteSalPriceDetails " + reqBody.SalesPriceDetailID  + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getPriceMasterNDetailsArray = function (req, res, CompanyID, ItemID) {
    var sql = "bspGetSalPriceByItem " + CompanyID + ", " + ItemID + " ";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
            console.log(data.recordset);
        }
        res.end();
    });
}

module.exports = {
    bugetPrice,
    deleteSalPriceByID,
    setPrice,
    bugetPriceMaster,
    getUomByItem,
    deleteSalPriceDetailByID,
    getPriceMasterNDetailsArray
}