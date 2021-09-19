var db = require("../core/db");
var IpAddress = require("../iPAddress");
var nodemailer = require("nodemailer");
//for front end Join now option

var setUserJoin = function (req, res, reqBody) {
  console.log(req.reqBody);
  var sql =
    "bspSetCmnUser  " +
    reqBody.UserID +
    ",'" +
    reqBody.UserNo +
    "'," +
    reqBody.UserTypeID +
    ",'" +
    reqBody.UserTitleID +
    "','" +
    reqBody.UserFirstName +
    "','" +
    reqBody.UserMiddleName +
    "','" +
    reqBody.UserLastName +
    "','" +
    reqBody.UserFullName +
    "','" +
    reqBody.EmailID +
    "','" +
    reqBody.MobileNo +
    "'," +
    reqBody.GenderID +
    "," +
    reqBody.IsActive +
    "," +
    reqBody.CompanyID +
    "," +
    reqBody.LoggedUserID +
    ",'" +
    IpAddress.IP +
    "'," +
    reqBody.IsDeleted +
    "";
  console.log("User data");
  console.log(sql);
  db.executeSql(sql, function (data, err) {
    if (err) {
      throw err;
    } else {
      res.send(data.recordset);
      console.log(data.recordset[0]);
      var userID = data.recordset[0].ReturnValue;
      var sql =
        "spSetCmnUserAuthentication   " +
        reqBody.AuthenticationID +
        ", " +
        userID +
        ", '" +
        reqBody.LoginID +
        "', '" +
        reqBody.EmailID +
        "', '" +
        reqBody.MobileNo +
        "', '" +
        reqBody.Password +
        "', '" +
        reqBody.ConfirmPassword +
        "', '" +
        reqBody.RegistrationDate +
        "', '" +
        reqBody.ExpireDate +
        "','" +
        reqBody.ExpireTime +
        "', '" +
        reqBody.ActivationDate +
        "', '" +
        reqBody.ActivationTime +
        "',  " +
        reqBody.CompanyID +
        ", " +
        reqBody.LoggedUserID +
        ", '" +
        IpAddress.IP +
        "'";
      console.log("Auth data");
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
    res.end();
  });
};

var setUserForSocialNetwork = function (req, res, reqBody) {
  var sql =
    "spSetCmnUserForSocial  " +
    reqBody.UserID +
    ",'" +
    reqBody.UserNo +
    "'," +
    reqBody.UserTypeID +
    ",'" +
    reqBody.UserTitleID +
    "','" +
    reqBody.UserFirstName +
    "','" +
    reqBody.UserMiddleName +
    "','" +
    reqBody.UserLastName +
    "','" +
    reqBody.UserFullName +
    "','" +
    reqBody.EmailID +
    "','" +
    reqBody.MobileNo +
    "'," +
    reqBody.GenderID +
    "," +
    reqBody.IsActive +
    "," +
    reqBody.CompanyID +
    "," +
    reqBody.LoggedUserID +
    ",'" +
    IpAddress.IP +
    "'," +
    reqBody.IsDeleted +
    "";
  console.log(sql);
  db.executeSql(sql, function (data, err) {
    if (err) {
      throw err;
    } else {
      res.send(data.recordset);
    }
    res.end();
  });
};

var getUserForSocialNetwork = function (req, res, UserID) {
  db.executeSql(
    "spGeSocialUserDataByUserID " + UserID + " ",
    function (data, err) {
      if (err) {
        throw err;
      } else {
        res.send(data.recordset);
      }
      res.end();
    }
  );
};

var getExistingParams = function (req, res, Property, Flag) {
  db.executeSql(
    "spCmnUserAuthenticationExistingParams '" + Property + "', " + Flag + " ",
    function (data, err) {
      if (err) {
        throw err;
      } else {
        res.send(data.recordset);
      }
      res.end();
    }
  );
};

var forgetPasswordEmailCheck = function (req, res, Property) {
  console.log("spGetCmnUserAuthenticationEmailIfExist " + Property + " ");
  db.executeSql(
    "spGetCmnUserAuthenticationEmailIfExist " + Property + "",
    function (data, err) {
      if (err) {
        throw err;
      } else {
        res.send(data.recordset);
      }
      res.end();
    }
  );
};

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: true, // use SSL
  auth: {
    user: "service@bongobaba.co",
    pass: "rwhljkfvyehcolrd",
  },
});

var xforgetMailData = function (req, res, AuthenticationID) {
  console.log(
    "spGetUserAuthenticationForgetPassData " + AuthenticationID + " "
  );
  db.executeSql(
    "spGetUserAuthenticationForgetPassData " + AuthenticationID + "",
    function (data, err) {
      if (err) {
        throw err;
      } else {
        var result =
          data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
        var datas = JSON.parse(result);
        var mailOptions = {
          from: "Bongobaba <service@bongobaba.co>",
          to: datas[0].LoginEmail,
          subject: "Reset Password",
          html:
            "<h1><span style='color:green'>Don't panic.. We got your Password. Here It's Your Password  &nbsp;" +
            datas[0].Password +
            "  </span><br/><br/> </h1>",
        };
        //consloe.log(mailOptions);

        // smtpTransport.sendMail(mailOptions, function (error, response) {
        //   if (error) {
        //     console.log(error);
        //     res.end("error");
        //   } else {
        //     console.log("Message sent: " + response.message);
        //     res.end("sent");
        //   }
        // });

        smtpTransport.sendMail(mailOptions, function (error, info) {
          if (error) {
            return console.log(error);
          }
          console.log("Message %s sent: %s", info.messageId, info.response);
          console.log("mail send");
          return response.status(200).json({ status: 200 });
        });

        // console.log(result.length);
        if (result.length == 0) {
          result = "[]";
          res.send(result);
        } else {
          res.send(
            data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
          );
        }
      }
      res.end();
    }
  );
};
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var forgetMailData = function (req, res, AuthenticationID) {
  var sql="spGetUserAuthenticationForgetPassData " + AuthenticationID + " ";
  console.log('sql',sql);
  db.executeSql( sql, function (data, err) {
      if (err) {
        throw err;
      } else {
        //new pasword create        
        var newPassword=getRndInteger(100000,999999);
        var sql1="sp_ResetPassword " + AuthenticationID + " ,'"+newPassword+"' ";
        console.log('sql1',sql1);
        console.log('newPassword',newPassword);
        db.executeSql( sql1, function (resetdata, err) {
          /////////////////////////////////////////
        var result =data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"];
        var datas = JSON.parse(result);
        var mailOptions = {
          from: "Bongobaba <service@bongobaba.co>",
          to: datas[0].LoginEmail,
          subject: "Reset Password",
          html:`<div>
          <h4>Dear Sir/Ma’am</h4>
          <p>A request has been received to change the password for your BONGOBABA account.    Here is your new password <span style='color:green'>&nbsp;` + newPassword + `</span></p>
          <h4>Thank you<br>The BONGOBABA Team</h4> 
          </div>`
          ,
        };
      

        smtpTransport.sendMail(mailOptions, function (error, info) {
          if (error) {
            return console.log(error);
          }
          console.log("Message %s sent: %s", info.messageId, info.response);
          console.log("mail send");
          return response.status(200).json({ status: 200 });
        });

        // console.log(result.length);
        if (result.length == 0) {
          result = "[]";
          res.send(result);
        } else {
          res.send(
            data.recordset[0]["JSON_F52E2B61-18A1-11d1-B105-00805F49916B"]
          );
        }
        ////////////////////////////////////////

        res.end();
        })
       



      }//else
      
    }
  );//spGetUserAuthenticationForgetPassData
};

module.exports = {
  setUserJoin,
  getExistingParams,
  setUserForSocialNetwork,
  getUserForSocialNetwork,
  forgetPasswordEmailCheck,
  forgetMailData,
};
