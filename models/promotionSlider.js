var db = require('../core/db');
var IpAddress = require('../iPAddress');
//get item color by itemcolorid
var getPromotionSlider = (req, res) => {
    db.executeSql("spGetCmnPromotionSlider", (data, err) => {
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
//get item slider for produt list page
var getSliderForProductList = (req, res, CategoryID)=> {
    db.executeSql("spGetCmnPromotionSliderCategoryWise " + CategoryID + " ", (data, err)=> {
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
var getDiscountSlider = (req, res) => {
    db.executeSql("spGetCmnDiscountSlider", (data, err) => {
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

var bsetpromotionSlider = function (req, res, reqBody) {

    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    } else {
        reqBody.IsActive = 0;
    }


    var sql = "bspSetpromotionSlider  " + reqBody.SliderID + ",'" + reqBody.SliderNo + "','" + reqBody.SliderName + "','" + reqBody.SliderURL + "','" + reqBody.Heading + "','" + reqBody.Title + "','" + reqBody.ActionUrl + "','" + reqBody.Body + "'," + reqBody.Sequence + "," + reqBody.IsActive + ",'" + reqBody.SliderUploadDate + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
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

var deletepromotionSliderByID = function (req, res, reqBody) {
    db.executeSql("BspDeletepromotionSlider " + reqBody.SliderID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetpromotionSlider = function (req, res, reqBody) {
    var sql = "buspGetpromotionSlider " + reqBody.CompanyID + ", " + reqBody.SliderID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var GetPromotionSequence = function (req, res, CompanyID) {

    db.executeSql("bspGetPromotionSequence " + CompanyID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

module.exports = {
    getPromotionSlider,
    bsetpromotionSlider,
    deletepromotionSliderByID,
    bugetpromotionSlider,
    GetPromotionSequence,
    getSliderForProductList,
    getDiscountSlider
}