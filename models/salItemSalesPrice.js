var db = require('../core/db');
var BaseJoi = require('joi');
var Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);


const schema = Joi.object().keys({
	dateTime: Joi.date().format('YYYY-MM-DD')
});

const result = Joi.validate({
	dateTime: "2016-02-29"
} , schema, function(err,value){
	if(err){
		console.log(err);
	}else {
		console.log(value);
	}
});



//get item sales price
var getItemSalesPrice = function(req,res) {
    db.executeSql("spGetSalItemSalesPrice",function (data,err) {
    	if (err) {
    		throw err;
    	}else {
			var result = data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];
			// console.log(result.length);
			if(result.length == 0) {
				result = "[]";
				res.send(result);
			} else {
				res.send(data.recordset[0]['JSON_F52E2B61-18A1-11d1-B105-00805F49916B']);
			}
    	}
    	res.end();
    });
}

//set item sales price
var setItemSalesPrice = function(req,res,reqBody) {
	var sql = "spSetSalItemSalesPrice '" + reqBody.SalesPriceNo + "','" + reqBody.Description +"'," + reqBody.ItemID +"," + reqBody.Unit +"," + reqBody.UOMID +",'" + reqBody.PricingDate +"'," + reqBody.PriceDeclaration +",'" + reqBody.ItemTrackingID +"','" + reqBody.GUID +"'," + reqBody.PackID +"," + reqBody.CurrencyID +"," + reqBody.IsActive +",'" + reqBody.EffectiveDate +"'," + reqBody.PriceTypeID +"," + reqBody.IsBidPrice +"," + reqBody.CompanyID + ", " + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//put item sales price
var putItemSalesPrice = function(req,res,reqBody) {
	var sql = "spPutSalItemSalesPrice "+ reqBody.SalesPriceID  +",'" + reqBody.SalesPriceNo + "','" + reqBody.Description +"'," + reqBody.ItemID +"," + reqBody.Unit +"," + reqBody.UOMID +",'" + reqBody.PricingDate +"'," + reqBody.PriceDeclaration +",'" + reqBody.ItemTrackingID +"','" + reqBody.GUID +"'," + reqBody.PackID +"," + reqBody.CurrencyID +"," + reqBody.IsActive +",'" + reqBody.EffectiveDate +"'," + reqBody.PriceTypeID +"," + reqBody.IsBidPrice +"," + reqBody.CompanyID + ", " + reqBody.IsDeleted + "";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}


module.exports = {
    getItemSalesPrice,
    setItemSalesPrice,
    putItemSalesPrice
}