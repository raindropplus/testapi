var db = require('../core/db');

//get item currency
var getCurrency = function(req,res) {
    db.executeSql("spGetCmnCurrencyMaster",function (data,err) {
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

module.exports = {
	getCurrency
}