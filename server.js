const express = require("express");
const server = express();
const bodyParser = require("body-parser");
var ip = require("ip");
var settings = require("./settings");
// var test = require('./routes/test');
var deals = require("./routes/deals");
var catSubCat = require("./routes/catSubCat");
var itemColor = require("./routes/itemColor");
var itemModel = require("./routes/itemModel");
var itemBrand = require("./routes/itemBrand");
var originCountry = require("./routes/originCountry");
var UOM = require("./routes/UOM");
var currency = require("./routes/currency");
var cmnTaxMaster = require("./routes/cmnTaxMaster");
var itemMaster = require("./routes/itemMaster");
var itemGroup = require("./routes/itemGroup");
var itemCategory = require("./routes/itemCategory");
var itemList = require("./routes/itemList");
var itemGrade = require("./routes/itemGrade");
var itemCondition = require("./routes/itemCondition");
var itemImage = require("./routes/itemImage");
var itemSizeMaster = require("./routes/itemSizeMaster");
var itemSpecificationMaster = require("./routes/itemSpecificationMaster");
var cmnSeason = require("./routes/cmnSeason");
var salItemSalesPrice = require("./routes/salItemSalesPrice");
var getItemGroupCategoryJson = require("./routes/getItemGroupCategoryJson");
var home = require("./home");
var promotionSlider = require("./routes/promotionSlider");
var featureProducts = require("./routes/featureProducts");
var commonService = require("./routes/commonService");
var itemSession = require("./routes/itemSession");
var taxEntry = require("./routes/taxEntry");
var uploads = require("./routes/uploads");
var path = require("path");
var userTitle = require("./routes/userTitle");
var userType = require("./routes/userType");
var cmnUser = require("./routes/cmnUser");
var ItemWiseColor = require("./routes/ItemWiseColor");
var itemWizeSize = require("./routes/itemWizeSize");
var pymentMethod = require("./routes/pymentMethod");
var salCoustomerType = require("./routes/salCoustomerType");
var salDiscountType = require("./routes/salDiscountType");
var discountSetting = require("./routes/discountSetting");
var cmnUOM = require("./routes/cmnUOM");
var cmnCurrency = require("./routes/cmnCurrency");
var priceSetting = require("./routes/priceSetting");
var taxRate = require("./routes/taxRate");
var cmnMenu = require("./routes/cmnMenu");
var invStock = require("./routes/invStock");
var invStockView = require("./routes/invStockView");
var invoice = require("./routes/invoice");
var userAuthentication = require("./routes/userAuthentication");
var discountSlider = require("./routes/discountSlider");
var categoryWizeSlider = require("./routes/categoryWizeSlider");
var login = require("./routes/login");
var order = require("./routes/order");
var bannerImage = require("./routes/bannerImage");
var dealPromotion = require("./routes/dealPromotion");
var catWizeBrand = require("./routes/catWizeBrand");
var groupWizeTopProduct = require("./routes/groupWizeTopProduct");
var ItemSearch = require("./routes/ItemSearch");
var itemStyle = require("./routes/itemStyle");
var bestSelling = require("./routes/bestSelling");
var cmnItemreview = require("./routes/cmnItemreview");
var marchant = require("./routes/marchant");
var contact = require("./routes/contact");
var comboSlider = require("./routes/comboSlider");
var dashboard = require("./routes/dashboard");
var fontpage=require("./routes/fontpage");
var reports=require("./routes/reports");
//=================================================================================

//server.use(json());
//server.use(urlencoded({ extended: true }));
server.use(bodyParser.json({limit: '500mb'}));
server.use(bodyParser.urlencoded({limit: '500mb', extended: true, parameterLimit: 1000000}));
//Get info of all APIs
server.get("/", function (req, res) {
  home.showHome(req, res);
});

//for testing
// server.use('/', test);

//server.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//  res.header("Access-Control-Allow-Headers",'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//  next();
//});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

server.use("/", deals, catSubCat, itemColor, itemModel, itemBrand, originCountry, UOM, currency,
  cmnTaxMaster, itemMaster, itemGroup, itemCategory, itemList, itemGrade, itemCondition, itemImage,
  itemSizeMaster, itemSpecificationMaster, cmnSeason, userTitle, userType, cmnUser, salItemSalesPrice,
  promotionSlider, getItemGroupCategoryJson, featureProducts, commonService, itemSession, taxEntry,
  ItemWiseColor, itemWizeSize, pymentMethod, salCoustomerType, salDiscountType, discountSetting, uploads,
  cmnUOM, cmnCurrency, priceSetting, taxRate, cmnMenu, invStock, invStockView, invoice, userAuthentication,
  discountSlider, categoryWizeSlider, login, order, bannerImage, dealPromotion, catWizeBrand, groupWizeTopProduct,
  ItemSearch, itemStyle, bestSelling, cmnItemreview, marchant, contact, comboSlider,dashboard,fontpage,reports);

server.use("/uploads", express.static(path.join(__dirname, "uploads")));
server.use("/images", express.static(path.join(__dirname, "images")));

///////======================================================================================//////

server.listen(settings.webPort, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("server started at: http://" + ip.address() + ':' + settings.webPort);
  }
});