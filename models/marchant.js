var db = require('../core/db');
var IpAddress = require('../iPAddress');

//item Grade post method
var setMarchant = function(req,res,reqBody) {
    var MarchantRcNo = reqBody.MarchantRcNo === undefined ? '' : reqBody.MarchantRcNo;
	var sql = "spSetCmnMarchant "+reqBody.MarchantID+",'" + MarchantRcNo +"','" + reqBody.MarchantName + "','" + reqBody.MarchantTradingName + "','" + reqBody.MarchantAccountNumber + "','" + reqBody.MarchantAccountType + "','" + reqBody.phone + "','" + reqBody.MarchantAddress + "', '" + reqBody.MarchantLogo + "',"+0+","+0+"," + reqBody.IsActive + "," + reqBody.IsDeleted +"," + reqBody.LoggedUserID + ",'" + IpAddress.IP + "' ";
    console.log(sql);
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

var getMarchant = function (req, res, MarchantID) {
    var sql = "bspGetCmnMarchant " + MarchantID + " ";
    console.log(sql);
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
    getMarchant,
    setMarchant
}