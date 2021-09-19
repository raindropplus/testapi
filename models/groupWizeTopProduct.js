
var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetGroupWizTopPro = function (req, res, reqBody) {
    reqBody.IsActive = reqBody.IsActive === true ? 1 : 0;
    var sql = "bspSetCmnItemTopGroupWise " + reqBody.TopItemID + "," + reqBody.GroupID + "," + reqBody.CategoryID + "," + reqBody.ItemID + "," + reqBody.Sequence + ",'" + reqBody.TopItemNo + "'," + reqBody.IsActive + ",'" + reqBody.EffectiveDate + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteGroupWizTopProByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemTopGroupWise " + reqBody.TopItemID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetGroupWizeTopPro = function (req, res, reqBody) {
    var sql = "buspGetCmnItemTopGroupWise " + reqBody.CompanyID + ", " + reqBody.TopItemID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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
var GetGroupSequence = function (req, res, CompanyID, GroupID) {
    var sql = "bspGetGroupTopSequence " + CompanyID + ", " + GroupID + " ";
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
    bsetGroupWizTopPro,
    deleteGroupWizTopProByID,
    bugetGroupWizeTopPro,
    GetGroupSequence
}