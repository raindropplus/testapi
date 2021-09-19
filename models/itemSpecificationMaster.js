var db = require('../core/db');




//Set item specification Master
var setItemSpecificationMaster = function(req,res,reqBody) {
	var sql = "spSetCmnItemSpecificationMaster  '" + reqBody.ItemSpecificationNo + "','" + reqBody.SpecificationName +"', " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//Update item specification Master
var putItemSpecificationMaster = function(req,res,reqBody) {
	var sql = "spputCmnItemSpecificationMaster  "+ reqBody.ItemSpecificationID +",'" + reqBody.ItemSpecificationNo + "','" + reqBody.SpecificationName +"', " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//get item specification Master
var getItemSpecificationMaster = function(req,res) {
    db.executeSql("spGetCmnItemSpecificationMaster",function (data,err) {
    	if (err) {
    		throw err;
    	}  else {
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
    getItemSpecificationMaster,
    setItemSpecificationMaster,
    putItemSpecificationMaster
}