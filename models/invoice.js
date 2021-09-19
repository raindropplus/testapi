var db = require('../core/db');
var IpAddress = require('../iPAddress');



var getInvoiceList = function (req, res, isMarchantDo) {

    var sql = "bGetSalInvoiceMaster " + isMarchantDo + "";
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


var getMarchentInvoice = function (req, res, reqBody) {

    var sql = "bGetMarchentInvoice";
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



var getInvoiceListForApprove = function (req, res, invoiceID, isMarchantDo) {

    var sql = "bGetInvoiceListForApprove " + invoiceID + "," + isMarchantDo + "";
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




var deleteInvoiceItem = function (req, res, invoiceID, tableType) {

    var sql = "bSpDeleteInvoiceItem '" + invoiceID + "','" + tableType + "' ";
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




var updateInvoiceItem = function (req, res, reqbody) {

    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }
    var invoiceItem = reqbody.invoiceItem;

    async function asyncCall() {
        if (invoiceItem.length > 0) {
            for (var i = 0; i < invoiceItem.length; i++) {

                var sql = "bUpdateSaleInvoiceItem " +
                    invoiceItem[i].InvoiceItemID + "," +
                    invoiceItem[i].InvoiceID + "," +
                    invoiceItem[i].ApprovedQty + "," +
                    invoiceItem[i].ordQty + "," +
                    invoiceItem[i].cancelQty + "," +
                    invoiceItem[i].isApproved + "," +
                    invoiceItem[i].deliveryDays + "";

                console.log(sql);
                var detailDelay = await Delay();

                db.executeSql(sql, function (data, err) {
                    if (err) {
                        //throw err;
                    } else {
                        res.send(data.recordset);
                        console.log("Post Success !!");
                    }
                    //res.end();
                });
            }
        }
    }
    asyncCall();
}




var ProductWiseMarchentList = function (req, res, ItemID, ItemCategoryID, ItemGroupID, ColorID, SizeID) {

    var sql = "bSpGetProductWiseMarchentList " + ItemID + "," + ItemCategoryID + "," + ItemGroupID + "," + ColorID + "," + SizeID + "";
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




var getMarchentDOID = function (req, res, reqBody) {

    var sql = "bGetMarchentDOID";
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




var saveMarchentDeliveryOrder = function (req, res, reqbody) {

    var MarchentDO = reqbody.MarchentDO;
    //console.log(MarchentDO);


    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }


    async function asyncCall() {
        for (var x = 0; x < MarchentDO.length; x++) {

            var remarks
            if (MarchentDO[x].Remarks === undefined) {
                remarks = 'No Remarks';
            } else {
                remarks = MarchentDO[x].Remarks;
            }

            var sql = "bSetMarchentDOMaster " +
                0 + "," +
                MarchentDO[x].InvoiceID + "," +
                MarchentDO[x].MarchentID + ",'" +
                MarchentDO[x].DONo + "','" +
                MarchentDO[x].InvoiceDate + "','" +
                MarchentDO[x].DODate + "','" +
                remarks + "'," +
                reqbody.CompanyID + "," +
                reqbody.CreateBy + ",'" +
                IpAddress.IP + "'," +
                reqbody.IsDeleted + "";

            console.log(sql);

            var detailDelay = await Delay();
            db.executeSql(sql, function (data, err) {
                if (err) {
                    throw err;
                } else {
                    console.log("Master Posted Successful !!");
                }

            });
        }
    }
    asyncCall();

}



var saveMarchentDeliveryOrderDetail = function (req, res, reqbody) {

    var MarchentDODetail = reqbody.MarchentDO;
    //console.log(MarchentDO);

    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    async function asyncCall() {

        for (var y = 0; y < MarchentDODetail.length; y++) {

            var amount = MarchentDODetail[y].OrderedQty * MarchentDODetail[y].CostPrice;
            var sql = "bSetMarchentDODetail " +
                0 + "," +
                MarchentDODetail[y].DOID + "," +
                MarchentDODetail[y].InvoiceID + "," +
                MarchentDODetail[y].ItemID + "," +
                MarchentDODetail[y].InvoiceItemID + ",'" +
                MarchentDODetail[y].DeliveryDate + "'," +
                MarchentDODetail[y].invoiceQty + "," +
                MarchentDODetail[y].ApprovedQty + "," +
                MarchentDODetail[y].OrderedQty + "," +
                MarchentDODetail[y].leadTime + "," +
                MarchentDODetail[y].unit + "," +
                MarchentDODetail[y].CostPrice + "," +
                amount + "," +
                reqbody.CompanyID + "," +
                reqbody.CreateBy + ",'" +
                IpAddress.IP + "'," +
                reqbody.IsDeleted + "";

            console.log(sql);


            var detailDelay = await Delay();
            db.executeSql(sql, function (data, err) {
                if (err) {
                    //throw err;
                } else {
                    res.send(data.recordset);
                    console.log("Detail Post Success !!");
                }
                res.end();
            });
        }
    }
    asyncCall();
}




var getMarchentDOList = function (req, res, reqBody) {

    var sql = "bGetDOList";
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


var getMarchentDOListUIGrid = function (req, res, reqbody) {

    var sql = "bGetDOList_UI_Grid " + reqbody.LoggedUserID + "," + reqbody.pageNumber + "," + reqbody.pageSize + "," + reqbody.IsPaging + ", '" + reqbody.SearchProperty + "' ";
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



var getInvoiceMRRList = function (req, res, reqBody) {

    var sql = "bInvoiceMRRList";
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


var getInvoiceMRRListUIGrid = function (req, res, reqbody) {

    var sql = "bInvoiceMRRList_UI_Grid " + reqbody.LoggedUserID + "," + reqbody.pageNumber + "," + reqbody.pageSize + "," + reqbody.IsPaging + ", '" + reqbody.SearchProperty + "' ";
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




var getMarchentDODetailList = function (req, res, DOID) {

    var sql = "bGetDODetailList " + DOID + "";
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



var DeleteMarchentDODetailList = function (req, res, DOItemID) {

    var sql = "bDeleteDODetailList " + DOItemID + "";
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




var updateDODetail = function (req, res, reqbody) {

    var DODetail = reqbody.DODetail;

    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    async function asyncCall() {

        for (var y = 0; y < DODetail.length; y++) {

            var sql = "bUpdateDODetail " +
                DODetail[y].DOItemID + "," +
                DODetail[y].DOID + "," +
                DODetail[y].OrderQty + "," +
                DODetail[y].Price + "";
            console.log(sql);

            var detailDelay = await Delay();
            db.executeSql(sql, function (data, err) {
                if (err) {
                    //throw err;
                } else {
                    res.send(data.recordset);
                    console.log("Detail Post Success !!");
                }
                res.end();
            });
        }
    }
    asyncCall();
}




var deleteDoMaster = function (req, res, DOID) {

    var sql = "bSpDeleteDO " + DOID + "";
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




var getCompanyInfo = function (req, res, companyID) {

    var sql = "bGetCompamyInformation " + companyID + "";
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




var saveInvoiceMRR = function (req, res, reqbody) {

    var InvoiceMRR = reqbody.InvoiceMRR;
    //console.log(MarchentDO);

    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 300);
        });
    }


    var sql = "bspSetInvMrrMaster " +
        reqbody.MrrID + "," +
        reqbody.MrrNo + ",'" +
        reqbody.MrrDate + "'," +
        reqbody.MrrTypeID + ",'" +
        reqbody.Remarks + "'," +
        reqbody.DOID + "," +
        reqbody.InvoiceID + "," +
        reqbody.CurrencyID + "," +
        reqbody.IsBillComplete + "," +
        reqbody.ISDCComplete + "," +
        reqbody.IsComplete + "," +
        reqbody.MarchentID + "," +
        reqbody.StatusID + "," +

        reqbody.CompanyID + "," +
        reqbody.CreateBy + ",'" +
        IpAddress.IP + "'," +
        reqbody.IsDeleted + "";

    console.log(sql);

    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {

            var MRRID = data.recordset[0].ReturnValue;
            res.send(data.recordset);
            console.log(MRRID);

            async function asyncCall() {
                if (InvoiceMRR.length > 0) {
                    for (var i = 0; i < InvoiceMRR.length; i++) {

                        var receiveQty = null

                        if (InvoiceMRR[i].receiveQty === undefined) {
                            receiveQty = InvoiceMRR[i].OrderQty;
                        } else {
                            receiveQty = InvoiceMRR[i].receiveQty;
                        }

                        var MrrDetailID = (InvoiceMRR[i].MrrDetailID === undefined || InvoiceMRR[i].MrrDetailID === null) ? 0 : InvoiceMRR[i].MrrDetailID;

                        var sql = "bspSetInvMrrDetail " +
                            MrrDetailID + "," +
                            MRRID + "," +
                            InvoiceMRR[i].ItemID + "," +
                            InvoiceMRR[i].DOItemID + "," +
                            InvoiceMRR[i].ItemColorID + "," +
                            InvoiceMRR[i].ItemSizeID + "," +
                            InvoiceMRR[i].DOID + ",'" +
                            InvoiceMRR[i].DeliveryDate + "','" +
                            InvoiceMRR[i].ItemName + "'," +
                            InvoiceMRR[i].LeadTime + "," +
                            InvoiceMRR[i].InvoiceQty + "," +
                            InvoiceMRR[i].ApprovedQty + "," +
                            InvoiceMRR[i].OrderQty + "," +
                            receiveQty + "," +
                            InvoiceMRR[i].Price + "," +
                            (InvoiceMRR[i].Price * receiveQty) + "," +
                            InvoiceMRR[i].UOMID + "," +

                            reqbody.CompanyID + "," +
                            reqbody.CreateBy + ",'" +
                            IpAddress.IP + "'," +
                            reqbody.IsDeleted + "";

                        console.log(sql);

                        var detailDelay = await Delay();

                        db.executeSql(sql, function (data, err) {
                            if (err) {
                                throw err;
                            } else {
                                res.send(data.recordset);
                                console.log("Post DsCount");
                            }
                        });
                    }
                }
            }


            asyncCall();
        }
        res.end();
    });

}




var getMrrDetailList = function (req, res, MrrID) {

    var sql = "bGetMRRDetailList " + MrrID + "";
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




var checkDOComplete = function (req, res, invoiceItemID) {

    var sql = "bSpCheckDOComplete " + invoiceItemID + "";
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



var getInvoiceWiseDOList = function (req, res, InvoiceID) {

    var sql = "bSpGetInvoiceWiseDOList " + InvoiceID + "";
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




var setShippingInfo = function (req, res, reqbody) {

    var sql = "bGspSetShippingInfo " +
        reqbody.InvoiceID + ",'" +
        reqbody.Address + "','" +
        reqbody.PostCode + "'," +
        reqbody.CityID + "," +
        reqbody.DivisionID + "," +
        reqbody.CountryID + "";

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




var setDCShipping = function (req, res, reqbody) {

    var sql = "bSpSetDCShippingAddress " +
        reqbody.DCShippingID + "," +
        reqbody.DCID + "," +
        reqbody.InvoiceID + ",'" +
        reqbody.Address + "','" +
        reqbody.PostCode + "'," +
        reqbody.CityID + "," +
        reqbody.DivisionID + "," +
        reqbody.CountryID + ",'" +
        reqbody.LandMark + "'," +

        reqbody.CompanyID + "," +
        reqbody.UpdateBy + ",'" +
        reqbody.UpdatePc + "'," +
        reqbody.IsDeleted + "";



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




var setDCPayment = function (req, res, reqbody) {

    var sql = "bSpSetInvDCPayment " +
        reqbody.DCPaymentID + "," +
        reqbody.DCID + "," +
        reqbody.InvoiceID + "," +
        reqbody.PaymentMethodID + ",'" +
        reqbody.AccountNo + "','" +
        reqbody.MAccountNo + "','" +
        reqbody.TransactionNo + "','" +
        reqbody.CardNo + "','" +
        reqbody.ChequeNo + "'," +
        reqbody.MBankID + "," +
        reqbody.BankID + "," +
        reqbody.Amount + "," +
        reqbody.IsActive + "," +


        reqbody.CompanyID + "," +
        reqbody.UpdateBy + ",'" +
        reqbody.UpdatePc + "'," +
        reqbody.IsDeleted + "";



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






var setSalDeliveryChallan = function (req, res, reqbody) {

    var salDeliveryChallan = reqbody.salDeliveryChallan;

    function Delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 300);
        });
    }


    var sql = "bspSetInvDCMaster " +
        reqbody.DCID + ",'" +
        reqbody.DCID + "','" +
        reqbody.DCDate + "'," +
        reqbody.DCTypeID + "," +
        reqbody.CustommerID + ",'" +
        reqbody.Remarks + "'," +
        reqbody.InvoiceID + "," +
        reqbody.CurrencyID + "," +
        reqbody.IsPaymentComplete + "," +
        reqbody.IsComplete + "," +
        reqbody.StatusID + "," +
        reqbody.CompanyID + "," +
        reqbody.UpdatePc + ",'" +
        IpAddress.IP + "'," +
        reqbody.IsDeleted + "";

    console.log(sql);



    db.executeSql(sql, function (data, err) {
        if (err) {
            throw err;
        } else {
            var DCID = data.recordset[0].ReturnValue;
            res.send(data.recordset);
            console.log(DCID);
            async function asyncCall() {

                if (salDeliveryChallan.length > 0) {

                    for (var i = 0; i < salDeliveryChallan.length; i++) {


                        var DCDetailID = (salDeliveryChallan[i].DCDetailID == null || salDeliveryChallan[i].DCDetailID === undefined) ? 0 : salDeliveryChallan[i].DCDetailID;
                        var IsActive = (salDeliveryChallan[i].isSelect === undefined) ? false : salDeliveryChallan[i].isSelect;
                        var totalAmount = (salDeliveryChallan[i].totalAmount === undefined) ? null : salDeliveryChallan[i].totalAmount;
                        var deliveryQty = (salDeliveryChallan[i].DeliveryQty === '' || salDeliveryChallan[i].DeliveryQty === undefined || salDeliveryChallan[i].DeliveryQty === 0) ? null : salDeliveryChallan[i].DeliveryQty;
                        
                        var sql = "bspSetInvDCDetail " +
                            DCDetailID  + "," +
                            DCID + "," +
                            salDeliveryChallan[i].ItemID + "," +
                            salDeliveryChallan[i].SizeID + "," +
                            salDeliveryChallan[i].ColorID + "," +
                            salDeliveryChallan[i].DeliveryQty + "," +
                            salDeliveryChallan[i].Price + "," +
                            totalAmount + "," +
                            salDeliveryChallan[i].UnitID + "," +
                            IsActive + "," +
                            reqbody.CompanyID + "," +
                            reqbody.UpdatePc + ",'" +
                            IpAddress.IP + "'," +
                            reqbody.IsDeleted + "";

                        console.log(sql);

                        var detailDelay = await Delay();
                        db.executeSql(sql, function (data, err) {
                            if (err) {
                                throw err;
                            } else {
                            }
                            res.end();
                        });
                    }
                }
            }
            asyncCall();
        }
        res.end();
    });

}





var getSalDeliveryChallan = function (req, res, InvoiceID, DOID) {

    var sql = "bSpGetSalDeliveryChallan " + InvoiceID + "," + DOID + "";
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





var getInvDCMasterListUIGrid = function (req, res, reqbody) {

    var sql = "bGetInvDCList_UI_Grid " + reqbody.LoggedUserID + "," + reqbody.pageNumber + "," + reqbody.pageSize + "," + reqbody.IsPaging + ", '" + reqbody.SearchProperty + "' ";
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




var getUniqueInvoiceList = function (req, res, reqBody) {

    var sql = "bGetInvoiceList";
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




var SpDeleteMrrMasterDetail = function (req, res, MrrID) {

    var sql = "bSpDeleteMrrMasterDetail " + MrrID + "";
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



var SpGetInvDCDetail = function (req, res, DCID) {

    var sql = "bSpInvDCDetail " + DCID + "";
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



var SpDeleteInvDCMasterDetail = function (req, res, DCID) {

    var sql = "bSpDeleteInvDCMasterDetail " + DCID + "";
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




var CheckApprovedQty = function (req, res, InvoiceItemID) {

    var sql = "bCheckApprovedQty " + InvoiceItemID + "";
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



var getApprovedInvoice = function (req, res, reqBody) {

    var sql = "bGetApprovedInvoice";
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



var getApprovedProduct = function (req, res, InvoiceID,IsDelivered) {

    var sql = "bGetApprovedProduct " + InvoiceID + ",'" + IsDelivered + "'";
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




module.exports = {
    getInvoiceList,
    setShippingInfo,
    getMarchentInvoice,
    getInvoiceListForApprove,
    deleteInvoiceItem,
    updateInvoiceItem,
    ProductWiseMarchentList,
    saveMarchentDeliveryOrder,
    saveMarchentDeliveryOrderDetail,
    getMarchentDOID,
    getMarchentDOList,
    getMarchentDODetailList,
    DeleteMarchentDODetailList,
    updateDODetail,
    getMarchentDOListUIGrid,
    deleteDoMaster,
    getCompanyInfo,
    saveInvoiceMRR,
    getInvoiceMRRList,
    getInvoiceMRRListUIGrid,
    getMrrDetailList,
    checkDOComplete,
    getInvoiceWiseDOList,
    setDCShipping,
    setDCPayment,
    getSalDeliveryChallan,
    setSalDeliveryChallan,
    getInvDCMasterListUIGrid,
    getUniqueInvoiceList,
    SpDeleteMrrMasterDetail,
    SpGetInvDCDetail,
    SpDeleteInvDCMasterDetail,
    CheckApprovedQty,
    getApprovedInvoice,
    getApprovedProduct,
}