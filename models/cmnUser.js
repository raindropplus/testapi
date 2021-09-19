var db = require('../core/db');
var IpAddress = require('../iPAddress');
var bsetcmnUser = function (req, res, reqBody) {
    var UserMiddleName = (reqBody.UserMiddleName === undefined) ? ' ' : reqBody.UserMiddleName;
    var UserLastName = (reqBody.UserLastName === undefined) ? ' ': reqBody.UserLastName;
    var sql = "bspSetCmnUser  " + reqBody.UserID + ",'" + reqBody.UserNo + "'," + reqBody.UserTypeID + "," + reqBody.UserTitleID + ",'" + reqBody.UserFirstName + "','" + UserMiddleName + "','" + UserLastName + "','" + reqBody.UserFullName + "','" + reqBody.EmailID + "','" + reqBody.MobileNo + "'," + reqBody.GenderID + "," + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    console.log('set--------------',sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            //res.send(data.recordset);
            console.log('wwwwwwwwwwww', data.recordset[0])
            var userID = data.recordset[0].ReturnValue;
            var sql = "spSetCmnUserAuthentication   " + reqBody.AuthenticationID + ", " + userID + ", '" + reqBody.LoginID + "', '" + reqBody.EmailID + "', '" + reqBody.MobileNo + "', '" + reqBody.Password + "', '" + reqBody.ConfirmPassword + "', '" + reqBody.RegistrationDate + "', '" + reqBody.ExpireDate + "','" + reqBody.ExpireTime + "', '" + reqBody.ActivationDate + "', '" + reqBody.ActivationTime + "',  " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
            console.log('22set--------------',sql);
            db.executeSql(sql, function (data, err) {
                if (err) {
                    throw err;
                } else {
                    res.send(data.recordset);
                }
                res.end();
            });
        }
        res.end();

        // if (err) {
        //     throw err;
        // }
        // res.end();
    });
}

var deletecmnUserByID = function (req, res, reqBody) {
    db.executeSql("[BspDeleteCmnUser] " + reqBody.UserID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetcmnUser = function (req, res, reqBody) {
    var sql = "buspGetCmnUser " + reqBody.CompanyID + ", " + reqBody.UserID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
  // console.log('bugetcmnUser-----------------------------',sql);
    db.executeSql(sql, function (data, err) {

        if (err) {
            throw err;
        } else {
            //console.log('data---------------', data.recordset);
            res.send(data.recordset);
            
        }
        res.end();

    });
}



module.exports = {
    bsetcmnUser,
    deletecmnUserByID,
    bugetcmnUser

}