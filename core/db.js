var sqlDB = require("mssql");
var settings = require("../settings");

var executeSql = function (sql, callback) {
  var conn = new sqlDB.ConnectionPool(settings.dbConfig);
  conn.connect().then(function () {
    var req = new sqlDB.Request(conn);
    req.query(sql).then(function (data) {
      callback(data);
    }).catch(function (err) {
      //console.log(err);
      callback(null, err);
    });
  })
    .catch(function (err) {
      //console.log(err);
      callback(null, err);
    });
};

////////////////// Updated sql execute method  //////////////

var executeSqlWithJson = (sql, callback) => {
  var conn = new sqlDB.ConnectionPool(settings.dbConfig);
  conn.connect().then(() => {
    var req = new sqlDB.Request(conn);
    req.query(sql).then((data) => {
      if(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']===null || 
         data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']===undefined || 
         data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']==='' || 
         data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']==NaN){
        callback([]);
      }else{
        callback(JSON.parse(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']));
      }
    }).catch((err) => {
      callback(null, err);
    });
  }).catch((err) => {
    //console.log(err);
    callback(null, err);
  });
};

////////////////// Updated sql execute method  //////////////


var executeSqlWithParameter = function (sql, tvp, callback) {
  var conn = new sqlDB.ConnectionPool(settings.dbConfig);
  conn
    .connect()
    .then(function () {
      var req = new sqlDB.Request(conn);
      req.input("tvp", tvp);
      req
        .execute(sql)
        .then(function (data) {
          callback(data);
        })

        .catch(function (err) {
          //console.log(err);
          callback(null, err);
        });
    })

    .catch(function (err) {
      //console.log(err);
      callback(null, err);
    });
};

module.exports = {
  executeSql,
  executeSqlWithJson,
  executeSqlWithParameter,
};
