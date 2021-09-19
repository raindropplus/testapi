var db = require('../core/db');
var IpAddress = require('../iPAddress');

//Set Item Origin Country
var setItemOriginCountry = function(req,res,reqBody) {
	var sql = "spSetCmnOriginCountry '" + reqBody.CountryNo + "','" + reqBody.CountryName +"','" + reqBody.CountryShortName + "', " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}


//Put Item Origin Country
var putItemOriginCountry = function(req,res,reqBody) {
	var sql = "spPutCmnOriginCountry "+ reqBody.CountryID +",'" + reqBody.CountryNo + "','" + reqBody.CountryName +"','" + reqBody.CountryShortName + "', " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}




//get Item Origin Country
var getItemOriginCountry = function(req,res) {
    db.executeSql("spGetCmnOriginCountry",function (data,err) {
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

var bsetItemCountry = function (req, res, reqBody) {
    var sql = "bspSetCmnItemCountry  " + reqBody.CountryID + ",'" + reqBody.CountryNo + "','" + reqBody.CountryName + "','" + reqBody.CountryShortName + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemCountryByID = function (req, res, reqBody) {
    db.executeSql("[BspDeleteCmnItemCountry] " + reqBody.CountryID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemCountry = function (req, res, reqBody) {
    var sql = "buspGetCmnCountry " + reqBody.CompanyID + ", " + reqBody.CountryID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
	getItemOriginCountry,
	setItemOriginCountry,
    putItemOriginCountry,
    bsetItemCountry,
    deleteItemCountryByID,
    bugetItemCountry
}