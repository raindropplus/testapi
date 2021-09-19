var db = require('../core/db');
var getCatSubCat = (req, res) => {
	db.executeSql("spGetCmnItemCatAndSubCat", (data, err) => {
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

module.exports = {
	getCatSubCat
}