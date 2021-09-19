var db = require('../core/db');
var IpAddress = require('../iPAddress');
       
var bugetDiscount = function (req, res, reqBody) {

    var sql = "buspGetDiscountMaster " + reqBody.CompanyID + ", " + reqBody.DiscountPolicyID + "";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {

        if (err) {
            throw err;
        } else {
            var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
            // console.log(result.length);
            if (result.length == 0) {
                result = "[]";
                res.send(result);
            } else {
                res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
            }
            res.end();
            //res.send(data.recordset);
        }
        res.end();

    });
}

var bugetDiscountMaster = function (req, res, reqBody) {

    var sql = "buspGetDiscount " + reqBody.CompanyID + ", " + reqBody.DiscountPolicyID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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


var setDiscount = function (req, res, reqbody) { 
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 300);
        });
    }


    var discountArray = reqbody.discountArray;
    var sql = "bspSetSalDiscountPolicyMaster " + reqbody.DiscountPolicyID + ",'" + reqbody.DiscountPolicyNo + "','" + reqbody.Discription + "'," + reqbody.DiscountTypeID + ",'" + reqbody.DiscountDate + "'," + reqbody.CompanyID + "," + reqbody.CreateBy + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted + "";
     console.log(sql);
    db.executeSql (sql, function (data, err) {
        if (err) {

            throw err;
        } else {
            var DiscountPolicyID = data.recordset[0].ReturnValue;
            res.send(data.recordset);
            //console.log(DiscountPolicyID);
            async function asyncCall() {
                if (discountArray.length > 0) {
                    for (var i = 0; i < discountArray.length; i++) {
                        
                        var IsDeleted = discountArray[i].IsDeleted === true ? 1 : 0;
                        discountArray[i].ItemColorID = (discountArray[i].ItemColorID === undefined) ? null : discountArray[i].ItemColorID;
                        discountArray[i].ItemSizeID = (discountArray[i].ItemSizeID === undefined) ? null : discountArray[i].ItemSizeID;
                        discountArray[i].QuantitySlab = (discountArray[i].QuantitySlab === undefined) ? null : discountArray[i].QuantitySlab;
                        discountArray[i].AmountSlab = (discountArray[i].AmountSlab === undefined) ? null : discountArray[i].AmountSlab;
                        discountArray[i].StartingDate = (discountArray[i].StartingDate === undefined) ? null : discountArray[i].StartingDate;
                        discountArray[i].EndingDate = (discountArray[i].EndingDate === undefined) ? null : discountArray[i].EndingDate;
                        discountArray[i].StartTime = (discountArray[i].StartTime === undefined) ? null : discountArray[i].StartTime;
                        discountArray[i].EndTime = (discountArray[i].EndTime === undefined) ? null : discountArray[i].EndTime;
                        var sql = "bspSetSalDiscountPolicyDetail " + discountArray[i].DiscountPolicyDetailID + "," + DiscountPolicyID + "," + discountArray[0].DiscountTypeID + "," + discountArray[i].ItemColorID + "," + discountArray[i].ItemSizeID + "," + parseInt(discountArray[i].ItemID) + ",'" + discountArray[i].Description + "'," + discountArray[i].DiscountAmount + ",'" + discountArray[i].DiscountDate + "','" + discountArray[i].StartingDate + "','" + discountArray[i].EndingDate + "','" + discountArray[i].StartTime + "','" + discountArray[i].EndTime + "'," + discountArray[i].IsQtyBased + "," + discountArray[i].IsAmountBased + "," + discountArray[i].IsActive + "," + discountArray[i].QuantitySlab + "," + discountArray[i].AmountSlab + "," + discountArray[i].IsPercent + "," + reqbody.CompanyID + "," + reqbody.CreateBy + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted + "";
                        console.log(sql);
                        var detailDelay = await Delay();
                        db.executeSql(sql, function (data, err) {
                            if (err) {
                                throw err;
                            } else {
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


var deleteSalDiscountByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteSalDiscountMaster " + reqBody.DiscountPolicyID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var deleteSalDiscountDetailByID = function (req, res, reqBody) {
    var sql = "BspDeleteSalDiscountDetail " + reqBody.DiscountPolicyDetailID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
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
module.exports = {
    bugetDiscount,
    setDiscount,
    deleteSalDiscountByID,
    bugetDiscountMaster,
    deleteSalDiscountDetailByID

}