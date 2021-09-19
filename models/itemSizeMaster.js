var db = require('../core/db');
var IpAddress = require('../iPAddress');
//item color post method
var setItemSizeMaster = function(req,res,reqBody) {
	var sql = "spSetCmnItemSizeMaster '" + reqBody.ItemSizeNo + "'," + reqBody.ItemSize +"," + reqBody.CompanyID + ", " + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}


//item color update method
var putItemSizeMaster = function(req,res,reqBody) {
	var sql = "spPutCmnItemSizeMaster "+ reqBody.ItemSizeID +",'" + reqBody.ItemSizeNo + "'," + reqBody.ItemSize +"," + reqBody.CompanyID + ", " + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}


//get item size master
var getItemSizeMaster = function(req,res) {
    db.executeSql("spGetCmnItemSizeMaster",function (data,err) {
    	if (err) {
    		throw err;
    	}else {
			var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
			// console.log(result.length);
			if(result.length == 0) {
				result = "[]";
				res.send(result);
			} else {
				res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
			}
    	}
    	res.end();
    });
}


var bsetItemSize = function (req, res, reqBody) {
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    }
    else {
        reqBody.IsActive = 0;
    }
    var sql = "bspSetCmnItemSize  " + reqBody.ItemSizeID + ",'" + reqBody.ItemSizeNo + "','" + reqBody.ItemSize + "'," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemSizeByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemSize " + reqBody.ItemSizeID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemSize = function (req, res, reqBody) {
    var sql = "buspGetCmnSize " + reqBody.CompanyID + ", " + reqBody.ItemSizeID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    getItemSizeMaster,
    setItemSizeMaster,
    putItemSizeMaster,
    bsetItemSize,
    deleteItemSizeByID,
    bugetItemSize
}