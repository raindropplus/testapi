var db = require('../core/db');
var IpAddress = require('../iPAddress');
//item Image post method
var setItemImage = function(req,res,reqBody) {
	var sql = "spSetCmnItemImage " + reqBody.ItemID + ",'" + reqBody.ImageName +"','"+ reqBody.ImageUrl +"',"+ reqBody.IsDefaultImage +","+ reqBody.IsActive +"," + reqBody.CompanyID + ", " + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//item Image put method
var putItemImage = function(req,res,reqBody) {
	var sql = "spPutCmnItemImage "+ reqBody.ItemImageID +"," + reqBody.ItemID + ",'" + reqBody.ImageName +"','"+ reqBody.ImageUrl +"',"+ reqBody.IsDefaultImage +","+ reqBody.IsActive +"," + reqBody.CompanyID + ", " + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}


//get item color by itemcolorid
var getItemImage = function(req,res) {
    db.executeSql("spGetCmnItemImage",function (data,err) {
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

var bsetItemImages = function (req, res, reqBody) {
    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    }
    else {
        reqBody.IsActive = 0;
    }
    if (reqBody.IsDefaultImage === 'true') {
        reqBody.IsDefaultImage = 1;
    }
    else {
        reqBody.IsDefaultImage = 0;
    }
    var sql = "bspSetCmnItemImage  " + reqBody.ItemImageID + "," + reqBody.ItemID + ",'" + reqBody.ImageName + "','" + reqBody.ImageUrl + "'," + reqBody.IsDefaultImage + "," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemImageByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemImage " + reqBody.ItemImageID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemImage = function (req, res, reqBody) {
    var sql = "buspGetCmnItemImage " + reqBody.CompanyID + ", " + reqBody.ItemImageID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
    getItemImage,
    setItemImage,
    putItemImage,
    bsetItemImages,
    deleteItemImageByID,
    bugetItemImage

}