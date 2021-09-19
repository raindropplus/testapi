var db = require('../core/db');
//Set cmn season
var setCmnSeason = (req, res, reqBody)=> {
	var sql = "spSetCmnSeason  '" + reqBody.SeasonNo + "','" + reqBody.SeasonName + "'," + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
	db.executeSql(sql, (data, err)=> {
		if (err) {
			res.json({
				error: err,
				status: false
			});			
		} else {
			res.json({
				data: data,
				status: true
			});
		}
		res.end();
	});
}


//Put cmn season
var putCmnSeason = (req, res, reqBody)=> {
	var sql = "spPutCmnSeason  " + reqBody.SeasonID + ",'" + reqBody.SeasonNo + "','" + reqBody.SeasonName + "'," + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
	db.executeSql(sql, (data, err)=> {
		if (err) {
			res.json({
				error: err,
				status: false
			});			
		} else {
			res.json({
				data: data,
				status: true
			});
		}
		res.end();
	});
}

//get cmn season
var getCmnSeason = (req, res) => {
	db.executeSql("spGetCmnSeason", (data, err)=> {
		if (err) {
			res.send({
				error: err,
				status: false
			});
		} else {
			res.send({
				data: data,
				status: true
			});
		}
		res.end();
	});
}

module.exports = {
	getCmnSeason,
	setCmnSeason,
	putCmnSeason
}