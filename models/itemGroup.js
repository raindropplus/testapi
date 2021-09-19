var db = require('../core/db');
var IpAddress = require('../iPAddress');

//Set item group
var setItemGroup = function (req, res, reqBody) {
    var sql = "spSetCmnItemGroup  '" + reqBody.ItemGroupNo + "'," + reqBody.ItemCategoryID + ",'" + reqBody.ItemGroupName + "','" + reqBody.ItemGroupUrl + "', " + reqBody.ParentID + ", " + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}


//put/update item group
var putItemGroup = function (req, res, reqBody) {
    var sql = "spPutCmnItemGroup " + reqBody.ItemGroupID + ",'" + reqBody.ItemGroupNo + "'," + reqBody.ItemCategoryID + ",'" + reqBody.ItemGroupName + "','" + reqBody.ItemGroupUrl + "', " + reqBody.ParentID + ", " + reqBody.CompanyID + "," + reqBody.IsDeleted + "";
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}


//get item group by cat id
var getItemGroupbyCatID = (req, res, id) => {
    db.executeSql("spGetCmnItemGroupbyCatid " + id, (data, err) => {
        // if (err) {
        //     res.json({
        //         error: err,
        //         status: false
        //     });
        // } else {
        //     res.json({
        //         data: data,
        //         status: true
        //     });
        // }
        // res.end();

        if (err) {
            throw err;
        } else {
            var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
            // console.log(result.length);
            if (result.length == 0) {
                result = "[]";
                res.send(result);
            } else {
                res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
            }
        }
        res.end();
    });
}

//get item group
var getItemGroup = (req, res) => {
    var sql = "spGetCmnItemGroup 1"
    console.log(sql);
    db.executeSql(sql, (data, err) => {
        // if (err) {
        //     res.json({
        //         error: err,
        //         status: false
        //     });
        // } else {
        //     res.json({
        //         data: data,
        //         status: true
        //     });
        // }
        // res.end();

        if (err) {
            throw err;
        } else {
            //console.log(JSON.parse(data.recordset[0].ParentDetails));
            res.send(data.recordset);
        }
        res.end();
    });
}


var bsetItemGroup = function (req, res, reqBody) {
    reqBody.IsActive = reqBody.IsActive === true ? 1 : 0;
    reqBody.IsFeature = reqBody.IsFeature === true ? 1 : 0;
    reqBody.ParentID = (reqBody.ParentID === undefined) ? null : reqBody.ParentID;
    reqBody.Sequence = (reqBody.Sequence === undefined) ? null : reqBody.Sequence;



    var sql = "bspSetCmnItemGroup  " + reqBody.ItemGroupID + ",'" + reqBody.ItemGroupNo + "'," + reqBody.ItemCategoryID + ",'" + reqBody.ItemGroupUrl + "','" + reqBody.ItemGroupName + "'," + reqBody.IsFeature + "," + reqBody.IsActive + "," + reqBody.Sequence + "," + reqBody.ParentID + "," + reqBody.CompanyID + "," + reqBody.LoggedUserID + ",'" + IpAddress.IP + "'";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteItemGroupByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteCmnItemGroup " + reqBody.ItemGroupID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetItemGroup = function (req, res, reqBody) {
    var sql = "buspGetCmnGroup " + reqBody.CompanyID + ", " + reqBody.ItemGroupID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var CategoryWizeGroup = function (req, res, CompanyID, ItemCategoryID, ItemGroupID) {

    db.executeSql("bspGetCmnItemGroup " + CompanyID + ", " + ItemCategoryID + "," + ItemGroupID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var CategoryWizeGroupDDL = function (req, res, CompanyID, ItemCategoryID, ItemGroupID) {

    var sql = "bspGetCmnItemGroupDDL " + CompanyID + ", " + ItemCategoryID + "," + ItemGroupID + " "

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var GetGroupSequence = function (req, res, CompanyID, ParentID) {

    db.executeSql("bspGetGroupSequence " + CompanyID + ", " + ParentID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


module.exports = {
    getItemGroup,
    setItemGroup,
    putItemGroup,
    getItemGroupbyCatID,
    bsetItemGroup,
    deleteItemGroupByID,
    bugetItemGroup,
    CategoryWizeGroup,
    GetGroupSequence,
    CategoryWizeGroupDDL
}