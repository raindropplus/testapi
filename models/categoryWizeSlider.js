
var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetCatWizeSlider = function (req, res, reqBody) {
	if (reqBody.IsActive === 'true') {
		reqBody.IsActive = 1;
	}
	else {
		reqBody.IsActive = 0;
	}

    var sql = "bspSetCmnPromotionSliderCategoryWise  " + reqBody.SliderID + ",'" + reqBody.SliderNo + "','" + reqBody.SliderName + "','" + reqBody.SliderURL + "'," + reqBody.ItemCategoryID + ",'" + reqBody.Title + "','" + reqBody.ActionUrl + "','" + reqBody.Body + "'," + reqBody.Sequence + "," + reqBody.IsActive + ",'" + reqBody.SliderUploadDate + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
	//console.log(sql);
	db.executeSql(sql, function (data, err) {
		if (err) {
			throw err;
		}
		res.end();
	});
}

var deleteCatWizeSliderByID = function (req, res, reqBody) {
	db.executeSql("BspDeleteCmnPromotionSliderCategoryWise " + reqBody.SliderID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
		if (err) {
			throw err;
		} else {
			res.send(data.recordset);
		}
		res.end();
	});
}

var bugetCatWizeSlider = function (req, res, reqBody) {
	var sql = "buspGetCmnPromotionSliderCategoryWise " + reqBody.CompanyID + ", " + reqBody.SliderID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var GetCatWizeSequence = function (req, res, CompanyID) {
var sql = "bspGetCmnPromotionSliderCategoryWiseSequence " + CompanyID ;
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
	bsetCatWizeSlider,
	deleteCatWizeSliderByID,
	bugetCatWizeSlider,
	GetCatWizeSequence
}