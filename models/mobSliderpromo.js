var db = require('../core/db');
var IpAddress = require('../iPAddress');

var getItemWizeSize = function (req, res, ItemID) {
    var sql = "bspGetItemMulSize " + ItemID + "";
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
    getItemWizeSize
}