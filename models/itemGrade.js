var db = require('../core/db');
var IpAddress = require('../iPAddress');

//item Grade post method
var setItemGrade = function(req,res,reqBody) {
	var sql = "spSetCmnItemGrade '" + reqBody.ItemGradeNo +"','" + reqBody.GradName + "', " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//item Grade put method
var putItemGrade = function(req,res,reqBody) {
	var sql = "spPutCmnItemGrade "+ reqBody.ItemGradeID +",'" + reqBody.ItemGradeNo +"','" + reqBody.GradName + "', " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}



//get item grade
var getItemGrade = function(req,res) {
    db.executeSql("spGetCmnItemGrade",function (data,err) {
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

var bsetItemGrade = function (req, res, reqBody) {
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    }
    else {
        reqBody.IsActive = 0;
    }
    var sql = "bspSetCmnItemGrade  " + reqBody.ItemGradeID + ",'" + reqBody.ItemGradNo + "','" + reqBody.GradeName + "'," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemGradeByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemGrade " + reqBody.ItemGradeID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemGrade = function (req, res, reqBody) {
    var sql = "buspGetCmnGrade " + reqBody.CompanyID + ", " + reqBody.ItemGradeID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    getItemGrade,
    setItemGrade,
    putItemGrade,
    bsetItemGrade,
    deleteItemGradeByID,
    bugetItemGrade
}