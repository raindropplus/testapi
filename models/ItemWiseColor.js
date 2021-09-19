var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetItemMulColor = function (req, res, reqBody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    }
    else {
        reqBody.IsActive = 0;
    }
    async function asyncCall() {
        
        var sql = "bspSetCmnItemMulColor  " + reqBody.MultiColorDetailID + "," + reqBody.ItemID + "," + reqBody.ItemColorID + "," + reqBody.IsActive + "," + reqBody.IsDefault + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
        console.log(sql);
        var detailDelay = await Delay();
        db.executeSql(sql, function (data, err) {
            if (err) {
                throw err;
            }
            res.end();
        });
    }
    asyncCall();
}




var deleteItemMulColorByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemMulColor " + reqBody.MultiColorDetailID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemMulColor = function (req, res, reqBody) {
    var sql = "buspGetCmnItemMulColor " + reqBody.CompanyID + ", " + reqBody.MultiColorDetailID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
var getItemWizeColor = function (req, res, ItemID) {
    var sql = "bspGetItemMulColor " + ItemID + "";
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

var xsetItemMulColor = function (req, res, reqbody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    var colorsArr = reqbody.colorsArr;
    //console.log(colorsArr);
    async function asyncCall() {
        if (colorsArr.length > 0) {
            for (var i = 0; i < colorsArr.length; i++) {

                if (colorsArr[i].MultiColorDetailID === null) {
                    colorsArr[i].MultiColorDetailID = 0;
                }
                else {
                    colorsArr[i].MultiColorDetailID = colorsArr[i].MultiColorDetailID;
                }

                var sql = "bspSetCmnItemMulColor " + colorsArr[i].MultiColorDetailID + "," + colorsArr[i].ItemID + "," + colorsArr[i].ItemColorID + "," + colorsArr[i].IsActive + "," + colorsArr[i].IsDefault + "," + reqbody.CompanyID + "," + reqbody.CreateBy + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted + "";
                console.log(sql);
                var detailDelay = await Delay();
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        // res.send(data.recordset);
                        // console.log("Post Exame");
                    
                    }
                    res.end();
                });
            }
        }
    }
    asyncCall();

}

var setItemMulColor = function (req, res, reqbody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    var colorsArr = reqbody.colorsArr;
    //console.log(colorsArr);
    async function asyncCall() {
        var IsDeletedItemColor=false;
        if (colorsArr.length > 0) {
            for (var i = 0; i < colorsArr.length; i++) {

                if (colorsArr[i].MultiColorDetailID === null) {
                    colorsArr[i].MultiColorDetailID = 0;
                }
                else {
                    colorsArr[i].MultiColorDetailID = colorsArr[i].MultiColorDetailID;
                }
                IsDeletedItemColor=false;
                if (i==0) {
                    IsDeletedItemColor=true;
                    console.log('Delete all item color- '+IsDeletedItemColor);
                }
                var sql = "bspSetCmnItemMulColor " + colorsArr[i].MultiColorDetailID + "," + colorsArr[i].ItemID + "," + colorsArr[i].ItemColorID + "," + colorsArr[i].IsActive + "," + colorsArr[i].IsDefault + "," + reqbody.CompanyID + "," + reqbody.CreateBy + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted+"," + IsDeletedItemColor + "";
                console.log(sql);
                var detailDelay = await Delay();
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        // res.send(data.recordset);
                        // console.log("Post Exame");
                    
                    }
                    res.end();
                });
            }
        }
    }
    asyncCall();
}



module.exports = {
    bsetItemMulColor,
    deleteItemMulColorByID,
    bugetItemMulColor,
    getItemWizeColor,
    setItemMulColor
}