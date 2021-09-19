var db = require('../core/db');
var IpAddress = require('../iPAddress');
var getItemWizeSize = function (req, res, ItemID) {
    var sql = "bspGetItemMulSize " + ItemID + "";
   // console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var xsetItemMulSize = function (req, res, reqbody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    var sizesArr = reqbody.sizesArr;
    //console.log(sizesArr);
    async function asyncCall() {

        if (sizesArr.length > 0) {
            for (var i = 0; i < sizesArr.length; i++) {

                if (sizesArr[i].MultiSizeDetailID === null) {
                    sizesArr[i].MultiSizeDetailID = 0;
                }
                else {
                    sizesArr[i].MultiSizeDetailID = sizesArr[i].MultiSizeDetailID;
                }


                var sql = "bspSetCmnItemMulSize " + sizesArr[i].MultiSizeDetailID + "," + sizesArr[i].ItemID + "," + sizesArr[i].ItemSizeID + "," + sizesArr[i].IsActive + "," + sizesArr[i].IsDefault + "," + reqbody.CompanyID + "," + reqbody.CreateBy + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted + "";
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
var setItemMulSize = function (req, res, reqbody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    var sizesArr = reqbody.sizesArr;
    //console.log(sizesArr);
    async function asyncCall() {
        var IsDeletedItemSize=false;
        if (sizesArr.length > 0) {
            for (var i = 0; i < sizesArr.length; i++) {

                if (sizesArr[i].MultiSizeDetailID === null) {
                    sizesArr[i].MultiSizeDetailID = 0;
                }
                else {
                    sizesArr[i].MultiSizeDetailID = sizesArr[i].MultiSizeDetailID;
                }
                IsDeletedItemSize=false;
                if (i==0) {
                    IsDeletedItemSize=true;
                    console.log('Delete all item color- '+IsDeletedItemSize);
                }

                var sql = "bspSetCmnItemMulSize " + sizesArr[i].MultiSizeDetailID + "," + sizesArr[i].ItemID + "," + sizesArr[i].ItemSizeID + "," + sizesArr[i].IsActive + "," + sizesArr[i].IsDefault + "," + reqbody.CompanyID + "," + reqbody.CreateBy + ",'" + IpAddress.IP + "'," + reqbody.IsDeleted +","+IsDeletedItemSize+ "";
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
    getItemWizeSize,
    setItemMulSize
}