var db = require("../core/db");


var get_daily_sales = (req, res, FromDate,ToDate) => {
  var sql="sp_reports_getDailySales '"+FromDate+"','"+ToDate+"' ";

  console.log('ddddddddd',sql)
  db.executeSqlWithJson(sql, (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};
var get_sales_summary = (req, res, FromDate,ToDate) => {
  var sql="sp_reports_getSalesSummary '"+FromDate+"','"+ToDate+"' ";

  console.log('ddddddddd',sql)
  db.executeSqlWithJson(sql, (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};

var get_item_wise_sales = (req, res,ItemCategoryID, FromDate,ToDate) => {
  var sql="sp_reports_getItemWiseSales "+ItemCategoryID+",'"+FromDate+"','"+ToDate+"' ";

  console.log('ddddddddd',sql)
  db.executeSqlWithJson(sql, (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};


var get_bestsellers = (req, res, FromDate,ToDate) => {
  var sql="sp_reports_getBestsellers '"+FromDate+"','"+ToDate+"' ";

  console.log('ddddddddd',sql)
  db.executeSqlWithJson(sql, (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};




var getOrderItemByInvoiceId = (req, res, InvoiceID) => {
  var sql = "getSalInvoiceMasterByInvoiceID " + InvoiceID + " ";
  //console.log(sql);
  db.executeSqlWithJson(sql, (data, err) => {
    console.log(data);
    if (err) {
      res.json({
        error: err,
        status: false,
      });
    } else {
      res.json({
        data: data,
        status: true,
      });
    }
    res.end();
  });
};



module.exports = {
  get_daily_sales,
  get_item_wise_sales,
  get_sales_summary,
  get_bestsellers,
  getOrderItemByInvoiceId
};
