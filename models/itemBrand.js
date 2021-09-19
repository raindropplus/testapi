var db = require('../core/db');
var IpAddress = require('../iPAddress');

//Set item brand
var setItemBrand = function (req, res, reqBody) {
    var sql = "spSetCmnItemBrand  '" + reqBody.ItemBrandNo + "','" + reqBody.ItemBrandName + "','" + reqBody.ItemBrandUrl + "', " + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

//Set item brand
var putItemBrand = function (req, res, reqBody) {
    var sql = "spPutCmnItemBrand  " + reqBody.ItemBrandID + ",'" + reqBody.ItemBrandNo + "','" + reqBody.ItemBrandName + "','" + reqBody.ItemBrandUrl + "', " + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}



//get item brand
var getItemBrand = (req, res) => {
    db.executeSql("spGetCmnItemBrand", (data, err) => {
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
            var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
            // console.log(result.length);
            if (result.length == 0) {
                result = "[]";
                res.send(result);
            } else {
                res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
            }
        }
        res.end();
    });
}
//BackOffice

var bsetItemBrands = function (req, res, reqBody) {
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    } else {
        reqBody.IsActive = 0;
    }
    var sql = "bspSetCmnItemBrand  " + reqBody.ItemBrandID + ",'" + reqBody.ItemBrandNo + "','" + reqBody.ItemBrandName + "','" + reqBody.ItemBrandUrl + "'," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemBrandByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemBrand " + reqBody.ItemBrandID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemBrand = function (req, res, reqBody) {
    var sql = "buspGetCmnBrand " + reqBody.CompanyID + ", " + reqBody.ItemBrandID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    getItemBrand,
    setItemBrand,
    putItemBrand,
    bsetItemBrands,
    bugetItemBrand,
    deleteItemBrandByID
}