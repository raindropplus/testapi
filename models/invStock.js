var db = require('../core/db');
var IpAddress = require('../iPAddress');


var bugetInvStockMaster = function (req, res, reqBody) {
    var sql = "buspGetInvStockMaster " + reqBody.CompanyID + ", " + reqBody.MarchentID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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



var getCurrenctStock = function (req, res, CompanyID, MarchentID, ItemID) {
    db.executeSql("bspGetCurrentStock " + CompanyID + "," + MarchentID + "," + ItemID +"", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}







var setStock = function (req, res, reqbody) {


    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 300);
        });
    }


    var CreateBy = reqbody.CreateBy === undefined ? 1 : reqbody.CreateBy;
    
    
    var sql = "bspSetInvStockMaster " +
        reqbody.StockID + "," + 
        reqbody.MarchantID + "," +
        reqbody.ItemID + "," +  
        reqbody.ItemCategoryID + "," +   
        reqbody.ItemGroupID + "," +   
        reqbody.ItemColorID + "," +   
        reqbody.ItemSizeID + "," +   
        reqbody.UOMID + "," +   
        reqbody.CurrentStock+ ",'" +   
        reqbody.LastReceiveDate + "'," +   
        1 + ", " +
        CreateBy + ", '" +
        IpAddress.IP + "', " +
        reqbody.IsDeleted + "";


    console.log(sql);

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
            console.log("-------Stock Posted------");
        }
    });
        
            
}
       



function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}







var getStockMaster = function (req, res, CompanyID, MarchentID) {
    var sql = "bspGetInvStockMaster " + CompanyID + "," + MarchentID + "";
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


var deleteStockByID = function (req, res, reqBody) {

    var sql = "BspDeleteInvStockMaster " + reqBody.StockID + ", " + reqBody.MarchentID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
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



var deleteStockDetail = function (req, res, reqBody) {

    var sql = "BspDeleteInvStockDetail " + reqBody.StockID + ", " + reqBody.MarchentID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
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


var getStockMasterNDetailsArray = function (req, res, CompanyID, ItemID) {
    var sql = "bspGetStockByItemNMarchentID " + CompanyID + ", " + ItemID + " ";
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
    bugetInvStockMaster,
    getCurrenctStock,
    setStock,
    getStockMaster,
    deleteStockByID,
    deleteStockDetail,
    getStockMasterNDetailsArray
}