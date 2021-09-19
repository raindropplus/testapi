var db = require('../core/db');
var IpAddress = require('../iPAddress');
//get item model 
var getItemModel = function(req,res) {
    db.executeSql("spGetCmnItemModel",function (data,err) {
    	if (err) {
    		throw err;
    	} else {
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


 //item Model post method
var setItemModel = function(req,res,reqBody) {
	var sql = "spSetCmnItemModel  '"+ reqBody.ItemModelNo +"','" + reqBody.ItemModelName + "','" + reqBody.Description +"'," + reqBody.BrandID + ", " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}


 //item Model put method
var putItemModel = function(req,res,reqBody) {
	var sql = "spPutCmnItemModel  "+reqBody.ItemModelID +",'"+ reqBody.ItemModelNo +"','" + reqBody.ItemModelName + "','" + reqBody.Description +"'," + reqBody.BrandID + ", " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

// back Office
 
var bsetItemModel = function (req, res, reqBody) {
    var sql = "bspSetCmnItemModel  " + reqBody.ItemModelID + ",'" + reqBody.ItemModelNo + "','" + reqBody.ItemModelName + "','" + reqBody.Description + "'," + reqBody.ItemBrandID + "," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemModelByID = function (req, res, reqBody) {
    db.executeSql("[BspDeleteCmnItemModel] " + reqBody.ItemModelID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemModel = function (req, res, reqBody) {
    var sql = "buspGetCmnModel " + reqBody.CompanyID + ", " + reqBody.ItemModelID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
	getItemModel,
	setItemModel,
    putItemModel,
    bsetItemModel,
    deleteItemModelByID,
    bugetItemModel
	
}