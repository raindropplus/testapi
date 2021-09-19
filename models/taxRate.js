var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bugetTaxMaster = function (req, res, reqBody) {

    var sql = "buspGetCmnTax " + reqBody.CompanyID + ", " + reqBody.TaxID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
var getTaxDetail = function (req, res, CompanyID, TaxID) {
    db.executeSql("bspGetCmnTaxRate " + CompanyID + "," + TaxID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var setTax = function (req, res, reqbody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 300);
        });
    }


    var taxArray = reqbody.taxArray;
    var sql = "bspSetCmnItemTax " + reqbody.TaxID + ",'" + reqbody.TaxNo + "','" + reqbody.TaxName + "','" + reqbody.ShortName + "'," + reqbody.TaxTypeID + "," + reqbody.CompanyID + "," + reqbody.CreateBy + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            var TaxID = data.recordset[0].ReturnValue;
            res.send(data.recordset);
            //res.send(data.recordset[0].ReturnValue);
            //console.log(TaxID);
            // res.send(data.recordset);
            async function asyncCall() {
                if (taxArray.length > 0) {
                    for (var i = 0; i < taxArray.length; i++) {
                        var IsDeleted = taxArray[i].IsDeleted === true ? 1 : 0;
                        var sql = "bspSetCmnTaxRate " + taxArray[i].TaxRateID + ",'" + taxArray[i].TaxRateNo + "'," + TaxID + "," + taxArray[i].ItemID + ",'" + taxArray[i].MinAmount + "','" + taxArray[i].MaxAmount + "','" + taxArray[i].Rate + "'," + taxArray[i].IsPercentage + "," + taxArray[i].IsActive + ",'" + taxArray[i].EffectiveDate + "'," + taxArray[i].CurrencyID   + "," + reqbody.CompanyID + "," + reqbody.CreateBy + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted + "";
                        console.log(sql);
                        var detailDelay = await Delay();
                        db.executeSql(sql, function (data, err) {
                            if (err) {
                                throw err;
                            } else {
                                //res.send(data.recordset);
                                //console.log("Post DsCount");
                            }
                        });
                    }
                }
            }
            asyncCall();
        }
        res.end();
    });

}


var deletetaxByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnTaxMaster " + reqBody.TaxID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

module.exports = {
    bugetTaxMaster,
    getTaxDetail,
    setTax,
    deletetaxByID
}