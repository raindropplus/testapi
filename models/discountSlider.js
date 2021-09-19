var db = require('../core/db');
var IpAddress = require('../iPAddress');

var bsetDiscountSlider = function (req, res, reqBody) {

    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    }
    else {
        reqBody.IsActive = 0;
    }


    var sql = "bspSetCmnDiscountSlider  " + reqBody.SliderID + ",'" + reqBody.SliderNo + "','" + reqBody.SliderName + "','" + reqBody.SliderURL + "','" + reqBody.Title + "','" + reqBody.ActionUrl + "','" + reqBody.Body+"'," + reqBody.Sequence + "," + reqBody.IsActive + ",'" + reqBody.SliderUploadDate + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        }
        res.end();
    });
}

var deleteDiscountSliderByID = function (req, res, reqBody) {
    var sql = "BspDeleteCmnDiscountSlider " + reqBody.SliderID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'";
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

var bugetDiscountSlider = function (req, res, reqBody) {
    var sql = "buspGetCmnDiscountSlider " + reqBody.CompanyID + ", " + reqBody.SliderID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var GetDiscountSequence = function (req, res, CompanyID) {

    db.executeSql("bspGetCmnDiscountSliderSequence " + CompanyID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

module.exports = {

    bsetDiscountSlider,
    deleteDiscountSliderByID,
    bugetDiscountSlider,
    GetDiscountSequence
}