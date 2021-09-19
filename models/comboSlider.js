var db = require('../core/db');
var IpAddress = require('../iPAddress');
//get item color by itemcolorid
var getComboSlider = function (req, res) {
    db.executeSql("spGetCmnComboSlider", function (data, err) {
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


var bsetComboSlider = function (req, res, reqBody) {

    if (reqBody.IsActive === 'true') {
        reqBody.IsActive = 1;
    } else {
        reqBody.IsActive = 0;
    }


    var sql = "bspSetComboSlider  " + reqBody.SliderID + ",'" + reqBody.SliderNo + "','" + reqBody.SliderName + "','" + reqBody.SliderURL + "','" + reqBody.Heading + "','" + reqBody.Title + "','" + reqBody.ActionUrl + "','" + reqBody.Body + "'," + reqBody.Sequence + "," + reqBody.IsActive + ",'" + reqBody.SliderUploadDate + "'," + reqBody.CompanyID + "," + reqBody.CreateBy + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset[0]);
        }
        res.end();
    });
}

var deleteComboSliderByID = function (req, res, reqBody) {
    db.executeSql("BspDeleteComboSlider " + reqBody.SliderID + ", " + reqBody.CompanyID + ", " + reqBody.LoggedUserID + ", '" + IpAddress.IP + "'", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

var bugetComboSlider = function (req, res, reqBody) {
    var sql = "buspGetComboSlider " + reqBody.CompanyID + ", " + reqBody.SliderID + "," + reqBody.LoggedUserID + "," + reqBody.pageNumber + "," + reqBody.pageSize + "," + reqBody.IsPaging + ",'" + reqBody.SearchProperty + "'";
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

var GetComboSequence = function (req, res, CompanyID) {
    console.log('seq work');

    db.executeSql("bspGetComboSequence " + CompanyID + " ", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}

//get item slider for produt list page
// var getSliderForProductList = function (req, res, CategoryID) {
//     db.executeSql("spGetCmnPromotionSliderCategoryWise " + CategoryID + " ", function (data, err) {
//         if (err) {
//             throw err;
//         } else {
//             var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
//             // console.log(result.length);
//             if (result.length == 0) {
//                 result = "[]";
//                 res.send(result);
//             } else {
//                 res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
//             }
//         }
//         res.end();
//     });
// }
// var getDiscountSlider = function (req, res) {
//     db.executeSql("spGetCmnDiscountSlider", function (data, err) {
//         if (err) {
//             throw err;
//         } else {
//             var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
//             // console.log(result.length);
//             if (result.length == 0) {
//                 result = "[]";
//                 res.send(result);
//             } else {
//                 res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
//             }
//         }
//         res.end();
//     });
// }

var getComboSliderForUI = (req, res) => {
    db.executeSqlWithJson("spGetCmnComboSliderForUI", (data, err) => {
        if (err) {
            res.json({
                error: err,
                status: false
            });
        } else {
            res.json({
                dashboard: data,
                status: true
            });
        }
        res.end();

        // if (err) {
        //     throw err;
        // } else {
        //     var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
        //     // console.log(result.length);
        //     if (result.length == 0) {
        //         result = "[]";
        //         res.send(result);
        //     } else {
        //         res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
        //     }
        // }
        // res.end();
    });
}

module.exports = {
    getComboSlider,
    bsetComboSlider,
    deleteComboSliderByID,
    bugetComboSlider,
    GetComboSequence,
    getComboSliderForUI
}