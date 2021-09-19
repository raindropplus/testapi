var db = require('../core/db');
var IpAddress = require('../iPAddress');


var sqlDB = require("mssql");
var settings = require("../settings");


var getDataForDDL = function (req, res) {
    console.log("spGetCmnItemItemForSearchDDL")
    db.executeSql("spGetCmnItemItemForSearchDDL ", function (data, err) {
        if (err) {
            throw err;
        } else {
            var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
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

var xgetProductForSearch = (req, res, value) => {
    var sql = "spGetProductJsonForSearch " + 0 + ", " + 0 + ", " + value;
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
            var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
            console.log(result);
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


var getProductForSearch = (req, res, value) => {  
    var conn = new sqlDB.ConnectionPool(settings.dbConfig);
    conn.connect().then(function () {
        var req = new sqlDB.Request(conn);
        req.input("GroupID", 0);
        req.input("CategoryID", 0);
        req.input("SearchCriteria", value);
        req.execute("spGetProductJsonForSearch")
          .then(function (data,err) {
            //callback(data);
            if (err) {
                throw err;
            } else {
                var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
                console.log(result);
                if (result.length == 0) {                   
                    res.send("[]");
                } else {
                    res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
                }
            }
            res.end();


          }).catch(function (err) {            
            //callback(null, err);
          });
      })
  
      .catch(function (err) {
        //console.log(err);
        callback(null, err);
      });    
    
}




module.exports = {
    getDataForDDL,
    getProductForSearch
}