var db = require('../core/db');


//Set UOM
var setUOM = function(req,res,reqBody) {
	var sql = "spSetCmnUOM  '" + reqBody.UOMNo + "','" + reqBody.UOMName +"','" + reqBody.UOMShortName + "', " + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}


//Update/Put  UOM
var putUOM = function(req,res,reqBody) {
	var sql = "spPutCmnUOM  " + reqBody.UOMID + ",'" + reqBody.UOMNo + "','" + reqBody.UOMName +"','" + reqBody.UOMShortName + "', " + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}





//get UOM
var getUOM = function(req,res) {
    db.executeSql("spGetCmnUOM",function (data,err) {
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

module.exports = {
	getUOM,
	setUOM,
	putUOM
}