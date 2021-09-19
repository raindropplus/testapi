var db = require('../core/db');

//get item color by itemcolorid
var getItemColor = function(req,res,id) {
    db.executeSql("spGetItemColor " + id,function (data,err) {
    	if (err) {
    		throw err;
    	} else {
    		res.json(data);
    	}
    	res.end();
    });
}

//item color post method
var addItemColor = function(req,res,reqBody) {
	var sql = "spCmnItemColorInsert " + reqBody.ItemColorID + ",'" + reqBody.CustomCode +"','" + reqBody.ColorName + "',' " + reqBody.ColorCode + "'";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//update item color
var updateItemColor = function(req,res,reqBody) {
	var sql = "spUpdateItemColor " + reqBody.ItemColorID + ",'" + reqBody.CustomCode +"','" + reqBody.ColorName + "',' " + reqBody.ColorCode + "'";
    db.executeSql(sql,function (data,err) {
    	if (err) {
    		throw err;
		}
		res.end();	
    });
}

//delete item color
var deleteItemColor = function(req,res,id) {
    db.executeSql("spDeleteItemColor " + id,function (data,err) {
    	if (err) {
    		throw err;
    	} else {
    		res.json(data);
    	}
    	res.end();
    });
}

//get all item color
var getAllItemColor = function(req,res) {
    db.executeSql("spGetAllItemColor",function (data,err) {
    	if (err) {
    		throw err;
    	} else {
    		res.json(data);
    	}
    	res.end();
    });
}


module.exports = {
	getItemColor,
	addItemColor,
	updateItemColor,
	deleteItemColor,
	getAllItemColor
}

