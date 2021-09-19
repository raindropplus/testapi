var db = require('../core/db');
//var httpMsgs = require('../core/httpMsgs');

var setMenu = function (req, res, reqbody) {
    var sql = "spSetCmnMenu " + reqbody.MenuID + ",'" + reqbody.MenuCode + "','" + reqbody.MenuName + "','" + reqbody.MenuShortName + "'," + reqbody.ModuleID + ",'" + reqbody.MenuPath + "','" + reqbody.ReportName + "','" + reqbody.ReportPath + "'," + reqbody.ParentID + "," + reqbody.Sequence + "," + reqbody.MenuTypeID + ",'" + reqbody.MenuIconCss + "'," + reqbody.IsDeleted + "";
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

var setModule = function (req, res, reqbody) {

    var sql = "spSetCmnModule " +
        reqbody.ModuleID + ",'" +
        reqbody.ModuleNo + "','" +
        reqbody.ModuleName + "','" +
        reqbody.Description + "','" +
        reqbody.ImageURL + "','" +
        reqbody.ModulePath + "'," +
        reqbody.Sequence + "," +
        reqbody.StatusID + ",'" +
        reqbody.IconCss + "'," +
        reqbody.InstituteID + "," +
        reqbody.IsDelete + "," +
        //common parameter
        reqbody.CreateBy + ",'" +
        reqbody.CreateOn + "','" +
        reqbody.CreatePc + "'," +
        reqbody.UpdateBy + ",'" +
        reqbody.UpdateOn + "','" +
        reqbody.UpdatePc + "'," +
        reqbody.IsDeleted + "," +
        reqbody.DeleteBy + ",'" +
        reqbody.DeleteOn + "','" +
        reqbody.DeletePc + "'";
    //common parameter
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



var setMenuPermission = function (req, res, reqbody) {
    var MenuPerArr = reqbody.menuPerArr;
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 500);
        });
    }


    async function asyncCall() {

        if (MenuPerArr.length > 0) {
            for (var i = 0; i < MenuPerArr.length; i++) {

                if (MenuPerArr[i].MenuPermissionID === undefined || MenuPerArr[i].MenuPermissionID === null) {
                    MenuPerArr[i].MenuPermissionID = 0;
                }

                if (MenuPerArr[i].EnableView === null) {
                    MenuPerArr[i].EnableView = false;
                }

                if (MenuPerArr[i].EnableInsert === null) {
                    MenuPerArr[i].EnableInsert = false;
                }


                if (MenuPerArr[i].EnableUpdate === null) {
                    MenuPerArr[i].EnableUpdate = false;
                }


                if (MenuPerArr[i].EnableDelete === null) {
                    MenuPerArr[i].EnableDelete = false;
                }


                var sql = "spSetCmnMenuPermission " +
                    //parameter
                    MenuPerArr[i].MenuPermissionID + ",'" +
                    'Custom Code'/*MenuPerArr[i].CustomCode*/ + "'," +
                    MenuPerArr[i].MenuID + "," +
                    0/*MenuPerArr[i].UserParmissionGroupID*/ + "," +
                    1/*MenuPerArr[i].UserID*/ + "," +
                    reqbody.UserTypeID + "," +
                    MenuPerArr[i].EnableView + "," +
                    MenuPerArr[i].EnableInsert + "," +
                    MenuPerArr[i].EnableUpdate + "," +
                    MenuPerArr[i].EnableDelete + "," +
                    1/*MenuPerArr[i].BrunchID*/ + "," +
                    reqbody.InstituteID + "," +
                    1/*MenuPerArr[i].IsActive*/ + ",'" +
                    reqbody.EffectiveDate + "'," +


                    // common
                    reqbody.CreateBy + ",'" +
                    reqbody.CreateOn + "','" +
                    reqbody.CreatePc + "'," +
                    reqbody.UpdateBy + ",'" +
                    reqbody.UpdateOn + "','" +
                    reqbody.UpdatePc + "'," +
                    reqbody.IsDeleted + "," +
                    reqbody.DeleteBy + ",'" +
                    reqbody.DeleteOn + "','" +
                    reqbody.DeletePc + "'";
                //common

                console.log(sql);
                var detailDelay = await Delay();
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data.recordset);
                        console.log("Success");

                    }
                    //  res.end();
                });

            }
        }
    }
    asyncCall();
}




//get cmn menu
var getMenuDdl = function (req, res) {

    console.log("spGetCmnMenu 0");

    db.executeSql("spGetCmnMenu 0", function (data, err) {
        if (err) {
            //httpMsgs.show500(req, res, err);
            throw err;
        } else {
            //httpMsgs.sendJson(req, res, data.recordset);
            res.send(data.recordset);
        }
        res.end();
    });
}

var getMenu = function (req, res, id) {

    console.log("spGetCmnMenu " + id + "");

    db.executeSql("spGetCmnMenu " + id + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getMenuPermission = function (req, res, InstituteID, ModuleID, UserTypeID) {

    console.log("spGetCmnMenuByPermission " + InstituteID + "," + ModuleID + "," + UserTypeID + "");
    db.executeSql("spGetCmnMenuByPermission " + InstituteID + "," + ModuleID + "," + UserTypeID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}



var getMenuType = function (req, res) {

    console.log("spGetCmnMenuType 0");

    db.executeSql("spGetCmnMenuType 0", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var getModule = function (req, res, moduleID) {


    console.log("spGetCmnModule " + moduleID + "");
    db.executeSql("spGetCmnModule " + moduleID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}


var getModulePermission = function (req, res, InstituteID) {

    console.log("spGetCmnModuleByPermission " + InstituteID + "");
    db.executeSql("spGetCmnModuleByPermission " + InstituteID + "", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}



var updateModulePermission = function (req, res, reqbody) {

    var ModulePerArr = reqbody.modulePerArr;

    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 500);
        });
    }
    async function asyncCall() {

        if (ModulePerArr.length > 0) {
            for (var i = 0; i < ModulePerArr.length; i++) {

                var sql = "spUpdateCmnModulPermission " + ModulePerArr[i].ModuleID + "," + reqbody.InstituteID + "," + ModulePerArr[i].EnableView + "";
                console.log(sql);

                var detailDelay = await Delay();

                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data.recordset);
                        console.log("Success");
                    }
                });

            }
        }
    }
    asyncCall();
}



var getStatus = function (req, res) {

    console.log("spGetCmnStatus");

    db.executeSql("spGetCmnStatus", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}



var getLoginUser = function (req, res) {

    console.log("spGetLoginUser");

    db.executeSql("spGetLoginUser", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}







var savePremissionRecord = function (req, res, reqbody) {


    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }
    console.log(reqbody);


    var PerRecord = reqbody.PerRecordArr;
    console.log(PerRecord);

    async function asyncCall() {
        if (PerRecord.length > 0) {
            for (var i = 0; i < PerRecord.length; i++) {

                if (PerRecord[i].PerRecord === undefined || PerRecord[i].PremissionRecordID === null) {
                    PerRecord[i].PerRecord = 0;
                }

                if (FeeSetupArr[i].inputFee === undefined) { } else {
                    var sql = "spSetPerRecord " +
                        PerRecord[i].StatusID + "," +
                        PerRecord[i].loginUserID + "," +
                        PerRecord[i].sequence + "," +

                        reqbody.MenuID + ",'" +
                        reqbody.InstituteID + "','" +
                        reqbody.IsActive + "'," +

                        // common
                        reqbody.CreateBy + ",'" +
                        reqbody.CreateOn + "','" +
                        reqbody.CreatePc + "'," +
                        reqbody.UpdateBy + ",'" +
                        reqbody.UpdateOn + "','" +
                        reqbody.UpdatePc + "'," +
                        reqbody.IsDeleted + "," +
                        reqbody.DeleteBy + ",'" +
                        reqbody.DeleteOn + "','" +
                        reqbody.DeletePc + "'";
                    //common
                    //parameter
                    console.log(sql);
                    var detailDelay = await Delay();
                    db.executeSql(sql, function (data, err) {
                        if (err) {
                            //throw err;
                        } else {
                            res.send(data.recordset);
                            console.log("Post Depertment");
                        }
                        //res.end();
                    });
                }
            }
        }
    }
    asyncCall();
}






module.exports = {
    setMenu,
    setModule,
    setMenuPermission,
    getMenuPermission,
    getMenuDdl,
    getMenu,
    getMenuType,
    getModule,
    getModulePermission,
    updateModulePermission,
    getStatus,
    getLoginUser,
    savePremissionRecord
}