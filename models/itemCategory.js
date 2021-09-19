var db = require('../core/db');
var IpAddress = require('../iPAddress');

//Set item category
var setItemCategory = function(req,res,reqBody) {
    var sql = "spSetCmnItemCategory  '" + reqBody.ItemCategoryNo + "','" + reqBody.ItemCategoryName + "','" + reqBody.ItemCategoryUrl + "'," + reqBody.ParentID + ", " + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
  
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}



//get item category
var getItemCategory = function(req,res) {
    db.executeSql("spGetCmnItemCategory",function (data,err) {
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

//put/update item category
var putItemCategory = function(req,res,reqBody) {
	var sql = "spPutCmnItemCategory "+ reqBody.ItemCategoryID +",'" + reqBody.ItemCategoryNo + "','" + reqBody.ItemCategoryName +"','" + reqBody.ItemCategoryUrl + "',"+ reqBody.ParentID +", " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//back office       
var bsetItemCategories = function (req, res, reqBody) {
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    }
    else {
        reqBody.IsActive = 0;
    }

    var sql = "bspSetCmnItemCategory  " + reqBody.ItemCategoryID + ",'" + reqBody.ItemCategoryNo + "','" + reqBody.CategoryLandscapImg + "','" + reqBody.ItemCategoryUrl + "'," + reqBody.ItemColorID + ",'" + reqBody.CatFirstLetter + "','" + reqBody.CatColor + "'," + reqBody.Sequence + ",'" + reqBody.ItemCategoryName + "'," + reqBody.ParentID + "," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
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

var deleteItemCategoryByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemCategory  " + reqBody.ItemCategoryID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemCategory = function (req, res, reqBody) {
    var sql = "buspGetCmnItemCategory " + reqBody.CompanyID + ", " + reqBody.ItemCategoryID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var GetCategorySequence = function (req, res, CompanyID) {

    db.executeSql("bspGetSequenceCategory " + CompanyID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


module.exports = {
	getItemCategory,
	setItemCategory,
    putItemCategory,
    bsetItemCategories,
    deleteItemCategoryByID,
    bugetItemCategory,
    GetCategorySequence
}