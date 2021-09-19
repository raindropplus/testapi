var db = require('../core/db');
var IpAddress = require('../iPAddress');

var setOrder = function (req, res, reqBody) {
    var CartItems = JSON.parse(JSON.stringify(reqBody.CartItems));
    var sql = "spSetSalInvoiceMaster " +
        reqBody.InvoiceID +
        ",'" +
        reqBody.InvoiceNo +
        "'," +
        parseInt(reqBody.UserID) +
        ",'" +
        reqBody.MobileNo +
        "', '" +
        reqBody.EmailID +
        "', " +
        reqBody.ShippingTypeID +
        "," +
        reqBody.CompanyID +
        "," +
        reqBody.StatusID +
        "," +
        reqBody.IsActive +
        "," +
        reqBody.IsApproved +
        "," +
        reqBody.IsDelivered +
        "," +
        reqBody.LoggedUserID + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted
        + ",'" + reqBody.Address + "'," + reqBody.PostCode + "," + reqBody.CityID + "," + reqBody.CountryID + "," + reqBody.CountryID;

    console.log('with shiping : ' + sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            console.log('inv----'+data.recordset[0].ReturnValue);
            var ids =data.recordset[0].ReturnValue.split(",");
           
            var InvoiceID = ids[0];
            var LastInvoiceItemID=parseInt(ids[1]);   
            console.log('inv----1----'+LastInvoiceItemID);
            console.log('inv----2----'+InvoiceID);        


           

            if (CartItems.length > 0) {
                var sql ='';
                CartItems.forEach(cartitem => {
                    //console.log('each item: ' + cartitem);
                    //+ cartitem.ItemCategoryID + "," 
                     sql += " INSERT INTO [dbo].[SalInvoiceItem] ([InvoiceItemID],[InvoiceID],[ItemID],[ColorID] ,[SizeID],[Price],[Qty],[ApprovedQty],[DiscountPercent] ,[cancelQty] ,[TotalAmount],[deliveryTime],[IsDoComplete],[IsApproved] ,[IsActive],[IsDelivered],[CompanyID],[CreateBy],[CreateOn],[CreatePc],[IsDeleted])VALUES (" 
                     + LastInvoiceItemID+ "," + InvoiceID + "," +  parseInt(cartitem.item.ItemID) +"," + parseInt(cartitem.ColorID) + "," + parseInt(cartitem.SizeID) + "," + cartitem.item.Price +"," +cartitem.qty + "," +0 +"," +0 +"," +0 +"," +cartitem.item.Price*cartitem.qty +"," +0+"," +0  +"," +reqBody.IsApproved +"," +reqBody.IsActive +"," + reqBody.IsDelivered 
                     + "," + reqBody.CompanyID +"," +  reqBody.LoggedUserID + ", GETDATE(), '" + IpAddress.IP +"', " + reqBody.IsDeleted +" ); ";
          

                        LastInvoiceItemID=LastInvoiceItemID+1;
                    // db.executeSql(sql, function (data, err) {
                    //     console.log('success: --------------------------/n');
                    // });
                    // console.log('each item set done:');
                });
                sql +=" EXEC SPUpdateMaxRowID 'SalInvoiceItem', "+LastInvoiceItemID+" ";
                sql +=" EXEC getSalInvoiceMasterByInvoiceID "+InvoiceID+" ";
                console.log('each sql: ' + sql);

                 db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                       
                        console.log('all items set done ');
                        var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
                        if (result.length == 0) {
                            res.send("[]");
                        } else {
                            //console.log('result: ' + result);
                            res.send(result);
                        }
                        console.log('all items get done : ----end');
                    }                   
                });                

            } else {

                res.send("[]");
                res.end();
            }
        }
    });
};

var setOrderForApps = function (req, res, reqBody) {
    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 50);
        });
    }

    //console.log(reqBody);
    var sql = "spSetSalInvoiceMaster " + reqBody.InvoiceID + ",'" + reqBody.InvoiceNo + "'," + parseInt(reqBody.LoggedUserID) + ",'" + reqBody.MobileNo + "', '" + reqBody.EmailID + "', " + reqBody.ShippingTypeID + "," + reqBody.CompanyID + "," + reqBody.StatusID + "," + reqBody.IsActive + "," + reqBody.IsApproved + "," + reqBody.IsDelivered + "," + reqBody.LoggedUserID + ",'" + IpAddress.IP + "'," + reqBody.IsDeleted + "";
    //console.log(sql + "This is spSetSalInvoiceMaster");
    var cart = JSON.parse(reqBody.items);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            //res.send(data.recordset);
            //console.log(data.recordset);
            var InvoiceID = data.recordset[0].ReturnValue;
            //console.log(InvoiceID + "This is InvoiceID");

            async function asyncCall() {
                if (cart.length > 0) {
                    var cartItem = cart;
                    //console.log(cartItem)
                    for (var i = 0; i < cartItem.length; i++) {
                        var sql = "spSetSalInvoiceItem  " + reqBody.InvoiceItemID + "," + InvoiceID + "," + parseInt(cartItem[i].itemID) + "," + parseInt(cartItem[i].colorID) + "," + parseInt(cartItem[i].sizeID) + "," + cartItem[i].product_price + "," + cartItem[i].qty + "," + 0 + "," + 0 + "," + 0 + "," + 0 + "," + 0 + "," + reqBody.IsApproved + "," + reqBody.IsActive + "," + reqBody.IsDelivered + "," + reqBody.CompanyID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
                        //console.log(sql + "This is spSetSalInvoiceItem");

                        var detailDelay = await Delay();
                        db.executeSql(sql, function (data, err) {
                            if (err) {
                                throw err;
                            } else {
                                console.log("Order Details Posted");
                            }
                            //res.end();
                        });
                    }
                }

                var sql = "getSalInvoiceMasterByInvoiceID " + InvoiceID + " ";
                //console.log(sql + "This is getSalInvoiceMasterByInvoiceID");
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
                        console.log(result);
                        if (result.length == 0) {
                            result = "[]";
                            res.send(result);
                            console.log(result);
                            //console.log("result ");
                        } else {
                            res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
                        }
                    }

                });

            }
            asyncCall();
            var sql = "spSetSalInvoicePayment  " + reqBody.InvoicePaymentID + "," + InvoiceID + "," + reqBody.PaymentMethodID + "," + null + "," + null + "," + null + "," + null + "," + null + "," + null + "," + null + "," + reqBody.Amount + ",  " + reqBody.IsActive + "," + reqBody.CompanyID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
            //console.log(sql + "This is spSetSalInvoicePayment");
            db.executeSql(sql, function (data, err) {
                if (err) {
                    throw err;
                } else {
                    console.log("Payment Details Posted");
                }
                //res.end();
            });
            var sql = "spSetSalInvoiceShipping  " + reqBody.InvoiceShippingID + "," + InvoiceID + ",'" + reqBody.Address + "','" + reqBody.PostCode + "'," + reqBody.CityID + "," + null + "," + reqBody.CountryID + ",'" + '' + "'," + reqBody.CompanyID + "," + reqBody.LoggedUserID + ", '" + IpAddress.IP + "', " + reqBody.IsDeleted + "";
            //console.log(sql + "This is spSetSalInvoiceShipping");
            db.executeSql(sql, function (data, err) {
                if (err) {
                    throw err;
                } else {
                    console.log("Shipping Details Posted");
                }
                //res.end();InvoiceID
            });

        }
        //res.end();
    });
}
var getShippingType = function (req, res) {
    db.executeSql("spGetSalInvoiceShippingType", function (data, err) {
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
var getPaymentMethod = function (req, res) {
    db.executeSql("spGetCmnPaymentMethod", function (data, err) {
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
var getAddressCity = function (req, res) {
    db.executeSql("spGetCmnAddressCityForFront", function (data, err) {
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
var getUserOrderByUserID = function (req, res, UserID) {
    db.executeSql("getSalInvoiceForProfileByUserID " + UserID + "", function (data, err) {
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

var getUserInvoicePrice = function (req, res, InvoiceID) {
    db.executeSql("getSalInvoicePriceByInvoiceID " + InvoiceID + "", function (data, err) {
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
var getUserReviewByUserID = function (req, res, UserID) {
    db.executeSql("spGetCmnItemReview " + UserID + "", function (data, err) {
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
var getUserUserID = function (req, res, UserID) {
    db.executeSql("getCmnUserForProfileByUserID " + UserID + "", function (data, err) {
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
var getinvoiceForOrderPanel = function (req, res, CustomerID, ComapnyID, FromDate, ToDate) {
    var sql = "bGetInvoiceforPanel " + CustomerID + "," + ComapnyID + ",'" + FromDate + "','" + ToDate + "' ";
    console.log(sql)
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var addNewOrderItem = function (req, res, reqBody) {

    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 50);
        });
    }

    async function asyncCall() {
        var updateItems = reqBody.Items;
        console.log(updateItems);


        if (updateItems.length > 0) {
            var InvoiceID = updateItems[0].InvoiceID;
            var new_price = 0 + parseInt(updateItems[0].totalAmount);
            var Payment_ID = updateItems[0].PaymentId;

            for (var i = 0; i < updateItems.length; i++) {

                new_price += updateItems[i].Price;

                if (updateItems[i].ColorID === undefined) {
                    updateItems[i].ColorID = 0;
                }
                if (updateItems[i].SizeID === undefined) {
                    updateItems[i].SizeID = 0;
                }
                var sql = "spSetSalInvoiceItem  " + updateItems[i].InvoiceItemID + "," + updateItems[i].InvoiceID + "," + parseInt(updateItems[i].ItemID) + "," + parseInt(updateItems[i].ColorID) + "," + parseInt(updateItems[i].SizeID) + "," + updateItems[i].Price + "," + updateItems[i].Qty + "," + updateItems[i].ApprovedQty + "," + updateItems[i].DiscountPercent + "," + updateItems[i].cancelQty + "," + updateItems[i].deliveryTime + "," + updateItems[i].IsDoComplete + "," + updateItems[i].IsApproved + "," + updateItems[i].IsActive + "," + updateItems[i].IsDelivered + "," + updateItems[i].CompanyID + "," + 1 + ", '" + IpAddress.IP + "', " + updateItems[i].IsDeleted + "";
                console.log(sql);
                var detailDelay = await Delay();
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("New Order Item");
                        // if(Payment_ID !== undefined){
                        //     updatePaymentInfo(InvoiceID,new_price,Payment_ID)
                        // }

                    }
                    //res.end();
                });
            }
            //console.log(InvoiceID);
            //console.log(new_price);

            function updatePaymentInfo(InvoiceID, new_price, PaymentId) {
                var sql = "spSetSalInvoicePayment  " + parseInt(PaymentId) + "," + InvoiceID + "," + 1 + "," + null + "," + null + "," + null + "," + null + "," + null + "," + null + "," + null + "," + new_price + ",  " + 1 + "," + 1 + "," + 1 + ", '" + IpAddress.IP + "', " + 0 + "";
                console.log(sql);
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("New Payment Details Posted");
                    }
                    //res.end();
                });
            }

        }
    }
    asyncCall()
}
var getCmnOrderStatus = function (req, res) {
    console.log("bspGetCmnOrderStatus");
    db.executeSql("bspGetCmnOrderStatus", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var setItemOrderTracking = function (req, res, reqBody) {
    var sql = "bspSetOrderTracking " + reqBody.id + "," + reqBody.InvoiceID + "," + reqBody.InvoiceItemID + "," + reqBody.ItemID + "," + reqBody.StatusID + "," + reqBody.IsDeleted + ",'" + reqBody.Remarks + "' ";
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
var getOrderTracking = function (req, res) {
    console.log("getOrderTrackingStatus");
    db.executeSql("getOrderTrackingStatus", function (data, err) {
        if (err) {
            throw err;
        } else {
            res.send(data.recordset);
        }
        res.end();
    });
}
var getOrderItemByInvoiceId = (req, res, InvoiceID) => {
    var sql = "getSalInvoiceMasterByInvoiceID " + InvoiceID + " ";
    //console.log(sql);
    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
            //console.log(result);
            if (result.length == 0) {
                result = "[]";
                res.send(result);
                //console.log(result);
                //console.log("result ");
            } else {
                res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
            }
        }
    });
}

module.exports = {
    setOrder,
    setOrderForApps,
    getShippingType,
    getPaymentMethod,
    getAddressCity,
    getUserOrderByUserID,
    getUserInvoicePrice,
    getUserReviewByUserID,
    getUserUserID,
    addNewOrderItem,
    getinvoiceForOrderPanel,
    getCmnOrderStatus,
    setItemOrderTracking,
    getOrderTracking,
    getOrderItemByInvoiceId
}