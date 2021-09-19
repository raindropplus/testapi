var db = require('../core/db');
var IpAddress = require('../iPAddress');

// //item color post method
// var setItemColor = function (req, res, reqBody) {
//     if (reqBody.ColorCode == undefine) {
//         reqBody.ColorCode = null;
//     }

// 	var sql = "spSetCmnItemColor '" + reqBody.ItemColorNo + "','" + reqBody.ColorName +"','" + reqBody.ColorCode + "', " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
//     db.executeSql(sql,function (data,err) {
//     	if (err) {
//     		throw err;
// 		}
// 		res.end();	
//     });
// }



//  //item color Put/update method
// var putItemColor = function(req,res,reqBody) {
// 	var sql = "spPutCmnItemColor "+reqBody.ItemColorID+",'" + reqBody.ItemColorNo + "','" + reqBody.ColorName +"','" + reqBody.ColorCode + "', " + reqBody.CompanyID + ","+reqBody.IsDeleted+"";
//     db.executeSql(sql,function (data,err) {
//     	if (err) {
//     		throw err;
// 		}
// 		res.end();	
//     });
// }



//get item color
var getDashboardData = (req, res) => {
	db.executeSqlWithJson("bGetDashboardData", (data, err) => {
		if (err) {
			res.json({
				error: err,
				status: false
			});
		} else {
			res.json({
				dashboard: data,
				status: true
			});
		}
		res.end();



		// if (err) {
		// 	throw err;
		// } else {
		// 	var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
		// 	// console.log(result.length);
		// 	if (result.length == 0) {
		// 		result = "[]";
		// 		res.send(result);
		// 	} else {
		// 		res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
		// 	}
		// }
		//res.end();
	});
}

// //==========backOffice============
// var bsetItemColor = function (req, res, reqBody) {
//     if (reqBody.IsActive === 'true') {
//         reqBody.IsActive = 1;
//     }
//     else {
//         reqBody.IsActive = 0;
//     }
//     var sql = "bspSetCmnItemColor  " + reqBody.ItemColorID + ",'" + reqBody.ItemColorNo + "','" + reqBody.ColorName + "','" + reqBody.ColorCode + "'," + reqBody.IsActive+ "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
//     //console.log(sql);
//     db.executeSql(sql, function (data, err) {              
//         if (err) {
//             throw err;
//         }
//         res.end();
//     });
// }

// var deleteItemColorByID = function (req, res, reqBody) {
//     db.executeSql("BspDeleteCmnItemColor " + reqBody.ItemColorID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
//         if (err) {
//             throw err;
//         } else {
//             res.send(data.recordset);
//         }
//         res.end();
//     });
// }

// var bugetItemColor = function (req, res, reqBody)   {
//     var sql = "buspGetCmnColor " + reqBody.CompanyID + ", " + reqBody.ItemColorID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
//     //console.log(sql);
//     db.executeSql(sql, function (data, err) {

//         if (err) {
//             throw err;
//         } else {
//             res.send(data.recordset);
//         }
//         res.end();

//     });
// }

module.exports = {
	getDashboardData
	// setItemColor,
	// putItemColor,
	// bsetItemColor,
	// deleteItemColorByID,
	// bugetItemColor

}