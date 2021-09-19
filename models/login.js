var db = require('../core/db');
//Get login info using this function
var getLoginData = function (req, res, userName, password) {
    
    db.executeSql("spGetUserLoginData '"+userName+"','"+password+"' ",function (data,err) {
     	if (err) {
     		throw err;
     	}  else {
             res.send(data.recordset);
         }
     	res.end();   
     });
   
}


var getOTPLoginData = function (req, res, PhoneNumber) {
    
    db.executeSql("spGetUserOTPLoginData '"+PhoneNumber+"' ",function (data,err) {
     	if (err) {
     		throw err;
     	}  else {
             res.send(data.recordset);
         }
     	res.end();   
     });
   
}

var saveOTPLoginData = function (req, res, AuthenticationID,OTP) {
    
    db.executeSql("spSaveLoginOTP "+AuthenticationID+","+OTP+" ",function (data,err) {
     	if (err) {
     		throw err;
     	}  else {
             res.send(data.recordset);
         }
     	res.end();   
     });
   
}

var getOTPforLogin = function (req, res, PhoneNumber) {
    
    db.executeSql("sp_Get_OTP_For_Login '"+PhoneNumber+"' ",function (data,err) {
     	if (err) {
     		throw err;
     	}  else {
             res.send(data.recordset);
         }
     	res.end();   
     });
   
}


var getPassword = function (req, res, userID) {
    
    db.executeSql("sp_GetPassword "+userID+ " ",function (data,err) {
     	if (err) {
     		throw err;
     	}  else {
             res.send(data.recordset);
         }
     	res.end();   
     });
   
}


var savePasswordChange = function (req, res, userID, password) {
    
    db.executeSql("sp_ChangePassword  "+userID+",'"+password+"' ",function (data,err) {
     	if (err) {
     		throw err;
     	}  else {
             res.send(data.recordset);
         }
     	res.end();   
     });
   
}




module.exports = {
    getLoginData,
    getOTPLoginData,
    saveOTPLoginData,
    getOTPforLogin,
    getPassword,
    savePasswordChange
}