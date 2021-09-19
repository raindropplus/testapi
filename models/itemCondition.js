var db = require('../core/db');
var IpAddress = require('../iPAddress');
//item Condition post method
var setItemCondition = function(req,res,reqBody) {
	var sql = "spSetCmnItemCondition '" + reqBody.ItemConditionNo + "','" + reqBody.ConditionName +"'," + reqBody.CompanyID + ", " + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}


//item Condition put method
var putItemCondition = function(req,res,reqBody) {
	var sql = "spPutCmnItemCondition "+ reqBody.ItemConditionID +",'" + reqBody.ItemConditionNo + "','" + reqBody.ConditionName +"'," + reqBody.CompanyID + ", " + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//get item condition
var getItemCondition = function(req,res) {
    db.executeSql("spGetCmnItemCondition",function (data,err) {
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

var bsetItemCondition = function (req, res, reqBody) {

    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    }
    else {
        reqBody.IsActive = 0;
    }
    var sql = "bspSetCmnItemCondition  " + reqBody.ItemConditionID + ",'" + reqBody.ItemConditionNo + "','" + reqBody.ConditionName + "'," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemConditionByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemCondition " + reqBody.ItemConditionID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemCodition = function (req, res, reqBody) {
    var sql = "buspGetCmnCondition " + reqBody.CompanyID + ", " + reqBody.ItemConditionID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    getItemCondition,
	setItemCondition,
    putItemCondition,
    bsetItemCondition,
    deleteItemConditionByID,
    bugetItemCodition
}