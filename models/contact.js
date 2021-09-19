var db = require("../core/db");

var setContact = function (req, res, reqBody) {
  var sql =
    "bspSetCmnContact " +
    reqBody.id +
    ",'" +
    reqBody.name +
    "','" +
    reqBody.email +
    "'," +
    reqBody.phone +
    ",'" +
    reqBody.message +
    "'," +
    reqBody.isDeleted +
    +"";
  console.log(sql);
  db.executeSql(sql, function (data, err) {
    console.log(data);
    if (err) {
      throw err;
    } else {
      res.send(data.recordset);
    }
    res.end();
  });
};

module.exports = {
  setContact,
};
