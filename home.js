var showHome = (req, res) => {
  res.set({ "content-type": "application/json",})
    .send(JSON.stringify([
      //    {
      //    url : '/api/itemMaster',
      //    operation: "GET",
      //    description: 'Get into Item master'
      //},

      //menu permission

      {
        url: "/api/setmenu",
        operation: "POST",
        description: "Post cmnMenu",
      },
      {
        url: "/api/setModule",
        operation: "POST",
        description: "Post cmnMenu",
      },
      {
        url: "/api/savePremissionRecord",
        operation: "POST",
        description: "Post savePremissionRecord",
      },
      {
        url: "/api/setMenuPermission",
        operation: "POST",
        description: "Post set Menu Permission",
      },
      {
        url: "/api/updateModulePermission",
        operation: "POST",
        description: "Update Module Permission",
      },
      {
        url: "/api/getmenu",
        operation: "GET",
        description: "GET All Menu",
      },
      {
        url: "/api/getmenu/:id",
        operation: "GET",
        description: "GET Menu By Id",
      },
      {
        url: "/api/getmenutype",
        operation: "GET",
        description: "GET All Menutype",
      },
      {
        url: "/api/getmodule/:moduleID",
        operation: "GET",
        description: "GET All Module",
      },

      //menu permission

      {
        url: "/api/getItemMaster/:ComID/:ItemID/:LogUserID/:PNumber/:PSize/:IsPage",
        operation: "GET",
        description: "GET getItemMaster by  ids",
      },

      {
        url: "/api/itemMaster",
        operation: "POST",
        description: "Post into Item master",
      },

      {
        url: "/api/itemMaster",
        operation: "PUT",
        description: "put/update item  master",
      },
      {
        url: "/api/promotion-products",
        operation: "GET",
        description: "Get all active promotion products",
      },
      {
        url: "/api/itemColor",
        operation: "POST",
        description: "Set item color ",
      },

      {
        url: "/api/itemColor",
        operation: "PUT",
        description: "Update item color ",
      },

      {
        url: "/api/itemColor",
        operation: "GET",
        description: "Get all item color",
      },
      {
        url: "/api/itemModel",
        operation: "GET",
        description: "Get  item Model",
      },

      {
        url: "/api/itemModel",
        operation: "POST",
        description: "set item Model",
      },

      {
        url: "/api/itemModel",
        operation: "PUT",
        description: "put item Model",
      },
      {
        url: "/api/itemBrand",
        operation: "GET",
        description: "Get item Brand",
      },
      {
        url: "/api/itemBrand",
        operation: "POST",
        description: "POST item Brand",
      },
      {
        url: "/api/itemBrand",
        operation: "Put",
        description: "put item Brand",
      },
      {
        url: "/api/originCountry",
        operation: "GET",
        description: "Get item Origin Country",
      },
      {
        url: "/api/originCountry",
        operation: "POST",
        description: "Post item Origin Country",
      },
      {
        url: "/api/originCountry",
        operation: "PUT",
        description: "Put item Origin Country",
      },
      {
        url: "/api/UOM",
        operation: "GET",
        description: "Get item UOM",
      },
      {
        url: "/api/UOM",
        operation: "POST",
        description: "Post item UOM",
      },
      {
        url: "/api/UOM",
        operation: "PUT",
        description: "Put item UOM",
      },
      {
        url: "/api/currency",
        operation: "GET",
        description: "Get all item currency",
      },
      {
        url: "/api/cmnTaxMaster",
        operation: "GET",
        description: "Get all cmn Tax master",
      },
      {
        url: "/api/getItemGroup",
        operation: "GET",
        description: "Get item group",
      },
      {
        url: "/api/itemGroup/:id",
        operation: "GET",
        description: "Get item group by Cat ID",
      },
      {
        url: "/api/itemGroup",
        operation: "POST",
        description: "Post item group",
      },
      {
        url: "/api/itemGroup",
        operation: "PUT",
        description: "Put item group",
      },
      {
        url: "/api/getItemList/:GroupID",
        operation: "GET",
        description: "GET item List",
        model: "ItemList",
      },
      {
        url: "/api/getItemByGroupIDWithQty/:GroupID",
        operation: "GET",
        description: "GET item List",
        model: "ItemList",
      },
      {
        url: "/api/getItemDetailsByItemID/:ItemID",
        operation: "GET",
        description: "GET item Details By ItemID",
        model: "ItemList",
      },
      {
        url: "/api/getItemDetailsByMarchantID/:MarchantID",
        operation: "GET",
        description: "GET item Details By MarchantID",
        model: "ItemList",
      },
      {
        url: "/api/itemCategory",
        operation: "GET",
        description: "Get item category",
      },
      {
        url: "/api/itemCategory",
        operation: "POST",
        description: "POST item category",
      },
      {
        url: "/api/itemCategory",
        operation: "PUT",
        description: "Put item category",
      },
      {
        url: "/api/itemGrade",
        operation: "GET",
        description: "Get item Grade",
      },
      {
        url: "/api/itemGrade",
        operation: "POST",
        description: "Post item Grade",
      },

      {
        url: "/api/itemGrade",
        operation: "PUT",
        description: "Put item Grade",
      },
      {
        url: "/api/itemCondition",
        operation: "Get",
        description: "Get item Condition",
      },
      {
        url: "/api/itemCondition",
        operation: "POST",
        description: "Set item Condition",
      },
      {
        url: "/api/itemImage",
        operation: "GET",
        description: "Get item Image",
      },
      {
        url: "/api/itemImage",
        operation: "PUT",
        description: "Put item Image",
      },
      {
        url: "/api/itemImage",
        operation: "POST",
        description: "Post item Image",
      },
      {
        url: "/api/itemSizeMaster",
        operation: "GET",
        description: "Get item size Master",
      },
      {
        url: "/api/itemSizeMaster",
        operation: "POST",
        description: "Post item size Master",
      },
      {
        url: "/api/itemSizeMaster",
        operation: "PUT",
        description: "Put item size Master",
      },
      {
        url: "/api/itemSpecificationMaster",
        operation: "GET",
        description: "Get item specification Master",
      },
      {
        url: "/api/itemSpecificationMaster",
        operation: "POST",
        description: "Post item specification Master",
      },
      {
        url: "/api/itemSpecificationMaster",
        operation: "PUT",
        description: "Put item specification Master",
      },
      {
        url: "/api/cmnSeason",
        operation: "GET",
        description: "get cmn season",
      },
      {
        url: "/api/cmnSeason",
        operation: "POST",
        description: "Post cmn season",
      },
      {
        url: "/api/cmnSeason",
        operation: "PUT",
        description: "Put cmn season",
      },
      {
        url: "/api/salItemSalesPrice",
        operation: "GET",
        description: "Get Item Sales price",
      },
      {
        url: "/api/salItemSalesPrice",
        operation: "POST",
        description: "post Item Sales price",
      },
      {
        url: "/api/salItemSalesPrice",
        operation: "PUT",
        description: "Put Item Sales price",
      },
      {
        url: "/api/bsetItemColor",
        operation: "POST",
        description: "post Item Color",
      },
      {
        url: "/api/bsetItemSize",
        operation: "POST",
        description: "post Item Size",
      },

      {
        url: "/api/bsetItemCondition",
        operation: "POST",
        description: "post Item Condition",
      },
      {
        url: "/api/bsetItemGrade",
        operation: "POST",
        description: "post Item Grade",
      },
      {
        url: "/api/bsetItemGroup",
        operation: "POST",
        description: "post Item Group",
      },
      {
        url: "/api/bsetItemSession",
        operation: "POST",
        description: "post Item session",
      },
      {
        url: "/api/getItemColor/:CompanyID/:ItemColorID",
        operation: "GET",
        description: "Get Color",
      },

      {
        url: "/api/getItemCondition/:CompanyID/:ItemConditionID",
        operation: "GET",
        description: "Get Condition",
      },
      {
        url: "/api/getItemGrade/:CompanyID/:ItemGradeID",
        operation: "GET",
        description: "Get Grade",
      },

      {
        url: "/api/getItemGrade/:CompanyID/:ItemGroupID",
        operation: "GET",
        description: "Get Group",
      },

      {
        url: "/api/getItemSeason/:CompanyID/:SeasonID",
        operation: "GET",
        description: "Get Session",
      },

      {
        url: "/api/getItemSize/:CompanyID/:ItemSizeID",
        operation: "GET",
        description: "Get Size",
      },
      {
        url: "/api/deleteItemByID",
        operation: "Delete",
        description: "Delete Item ",
      },
      {
        url: "/api/deleteItemColorByID",
        operation: "Delete",
        description: "Delete Item ",
      },
      {
        url: "/api/deleteItemConditionByID",
        operation: "Delete",
        description: "Delete Item ",
      },
      {
        url: "/api/deleteItemGradeByID",
        operation: "Delete",
        description: "Delete Item ",
      },
      {
        url: "/api/deleteItemGroupByID",
        operation: "Delete",
        description: "Delete Item ",
      },
      {
        url: "/api/deleteItemGroupByID",
        operation: "Delete",
        description: "Delete Item ",
      },
      {
        url: "/api/deleteItemSizeByID",
        operation: "Delete",
        description: "Delete Item ",
      },
      {
        url: "/api/bgetItemColor",
        operation: "POST",
        description: "post Item Color",
      },
      {
        url: "/api/getItemBrand/:CompanyID/:ItemBrandID",
        operation: "GET",
        description: "Get item Brand",
      },
      {
        url: "/api/bsetItemBrands",
        operation: "POST",
        description: "post Brand",
        model: "commonService",
      },
      {
        url: "/api/getItemModel/:CompanyID/:ItemModelID",
        operation: "GET",
        description: "Get item Model",
        model: "commonService",
      },
      {
        url: "/api/GetCmnSeason/:CompanyID/:SeasonID",
        operation: "GET",
        description: "Get item Season",
        model: "commonService",
      },
      {
        url: "/api/GetCmnItemStyleMaster/:CompanyID/:ItemStyleID",
        operation: "GET",
        description: "Get item Style",
        model: "commonService",
      },
      {
        url: "/api/GetCmnYear/:CompanyID/:YearID",
        operation: "GET",
        description: "Get  Year",
        model: "commonService",
      },
      {
        url: "/api/CmnOriginCountry/:CompanyID/:CountryID",
        operation: "GET",
        description: "Get  Origin Country",
        model: "commonService",
      },
      {
        url: "/api/CmnUOM/:CompanyID/:UOMID",
        operation: "GET",
        description: "Get  UOM",
        model: "commonService",
      },
      {
        url: "/api/CmnItemGradeDDL/:CompanyID/:ItemGradeID",
        operation: "GET",
        description: "Get  Grade",
        model: "commonService",
      },
      {
        url: "/api/getItemGroupDDL/:CompanyID/:ItemCategoryID/:ItemGroupID",
        operation: "GET",
        description: "Get  Item Group",
        model: "commonService",
      },
      {
        url: "/api/CmnItemMasterParent/:CompanyID/:ItemID",
        operation: "GET",
        description: "Get  Item ",
        model: "commonService",
      },
      {
        url: "/api/bsetcmnUserTitle",
        operation: "Post",
        description: "Post Title ",
      },
      {
        url: "/api/getuserType/:CompanyID/:UserTypeID",
        operation: "GET",
        description: "Get  User Type ",
        model: "commonService",
      },
      {
        url: "/api/getuserTitle/:CompanyID/:UserTitleID",
        operation: "GET",
        description: "Get  User Title ",
        model: "commonService",
      },
      {
        url: "/api/getItemWizeColor/:ItemID",
        operation: "GET",
        description: "Get Color",
        model: "itemColor",
      },
      {
        url: "/api/getItemWizeSize/:ItemID",
        operation: "GET",
        description: "Get Size",
        model: "item Wize Size",
      },

      {
        url: "/api/getDiscountType/:CompanyID/:DiscountTypeID",
        operation: "GET",
        description: "Get  Discount Type ",
        model: "commonService",
      },

      {
        url: "/api/setDiscount",
        operation: "Post",
        description: "Post Discount ",
        model: "discountSetting",
      },

      {
        url: "/api/getAllDiscountType/:CompanyID/:DiscountPolicyDetailID/:DiscountTypeID",
        operation: "GET",
        description: "GET Discount ",
        model: "discountSetting",
      },

      {
        url: "/api/CategoryWizeGroupDDL/:CompanyID/:ItemCategoryID",
        operation: "GET",
        description: "GET group ",
        model: "groupSetting",
      },
      {
        url: "/api/CategoryWizeGroup/:CompanyID/:ItemCategoryID",
        operation: "GET",
        description: "GET group ",
        model: "groupSetting",
      },

      {
        url: "/api/GetGroupSequence/:CompanyID/:ParentID",
        operation: "GET",
        description: "GET Sequence ",
        model: "groupSetting",
      },

      {
        url: "/api/GetPromotionSequence/:CompanyID",
        operation: "GET",
        description: "GET Sequence ",
        model: "promotionSlider",
      },

      {
        url: "/api/GetProductSequence/:CompanyID",
        operation: "GET",
        description: "GET Sequence ",
        model: "Categorywize Feature Product",
      },
      {
        url: "/api/GetComboSequence/:CompanyID",
        operation: "GET",
        description: "GET Sequence ",
        model: "comboSlider",
      },

      {
        url: "/api/getPriceType/:CompanyID/:PriceTypeID",
        operation: "GET",
        description: "GET Price Type ",
        model: "CommonService",
      },

      {
        url: "/api/getCurrencyType/:CompanyID/:CurrencyID",
        operation: "GET",
        description: "GET Currency Type ",
        model: "CommonService",
      },

      {
        url: "/api/getitemWizeColor/:CompanyID/:ItemID",
        operation: "GET",
        description: "GET Color Item Wize ",
        model: "CommonService",
      },

      {
        url: "/api/getitemWizeSize/:CompanyID/:ItemID",
        operation: "GET",
        description: "GET Size Item Wize ",
        model: "CommonService",
      },

      {
        url: "/api/getTaxType/:CompanyID/:TaxTypeID",
        operation: "GET",
        description: "GET Tax Type ",
        model: "CommonService",
      },

      {
        url: "/api/getTaxDetail/:CompanyID/:TaxID",
        operation: "GET",
        description: "GET Tax Detail ",
        model: "TaxRate",
      },

      {
        url: "/api/getInvoiceList/:isMarchantDo",
        operation: "GET",
        description: "GET Invoice LIst ",
        model: "invoice",
      },
      {
        url: "/api/getMarchentInvoice/",
        operation: "GET",
        description: "GET Marchent Invoice",
        model: "invoice",
      },

      {
        url: "/api/setShippingInfo/",
        operation: "POST",
        description: "UPDATE Shipping Information ",
        model: "invoice",
      },

      {
        url: "/api/getCity/",
        operation: "GET",
        description: "GET City ",
        model: "Common",
      },
      {
        url: "/api/getCountry/",
        operation: "GET",
        description: "GET Country",
        model: "Common",
      },
      {
        url: "/api/getInvoiceListForApprove/:invoiceID/:isMarchantDo",
        operation: "GET",
        description: "GET InvoiceList For Approve",
        model: "invoice",
      },

      {
        url: "/api/ProductWiseMarchentList/:ItemID/:ItemCategoryID/:ItemGroupID/:ColorID/:SizeID",
        operation: "GET",
        description: "GET Product Wise Marchent List",
        model: "invoice",
      },

      {
        url: "/api/deleteInvoiceItem/:invoiceID",
        operation: "GET",
        description: "Delete Invoice Item",
        model: "invoice",
      },

      {
        url: "/api/getStockDetail/:CompanyID/:StockID",
        operation: "GET",
        description: "GET Stock Details",
        model: "invStock",
      },
      {
        url: "/api/updateInvoiceItem",
        operation: "POST",
        description: "Update Invoice Item",
      },
      {
        url: "/api/saveMarchentDeliveryOrder",
        operation: "POST",
        description: "Save Marchent Delivery Order",
      },
      {
        url: "/api/getMarchentDOID",
        operation: "GET",
        description: "GET Marchent DOID",
        model: "invoice",
      },

      {
        url: "/api/getMarchentDOList",
        operation: "GET",
        description: "GET Marchent DO List",
        model: "invoice",
      },
      {
        url: "/api/getMarchentDODetailList/:DOID",
        operation: "GET",
        description: "Get DO Detail List",
        model: "invoice",
      },
      {
        url: "/api/DeleteMarchentDODetailList/:DOItemID",
        operation: "GET",
        description: "Delete Marchent DODetail List",
        model: "invoice",
      },
      {
        url: "/api/updateDODetail",
        operation: "POST",
        description: "Update DO Detail",
      },
      {
        url: "/api/getMarchentDOListUIGrid/:user/:pageNo/:rowCount/:paging/:search",
        operation: "GET",
        description: "GET Marchent DO List For UI Grid",
      },
      {
        url: "/api/getCatWiseBrand/:CategoryID",
        operation: "GET",
        description: "GET spGetCatWiseBrandJson by category ID List",
        model: "ItemList",
      },
      {
        url: "/api/getItemList/:GroupID/:CategoryID",
        operation: "GET",
        description: "GET item List",
        model: "ItemList",
      },
      {
        url: "/api/getItemList/:GroupID/:CategoryID",
        operation: "GET",
        description: "GET item List",
        model: "ItemList",
      },
      {
        url: "/api/setItemReview",
        operation: "SET",
        description: "SET Item Review",
        model: "itemMaster",
      },

      {
        url: "/api/saveInvoiceMRR",
        operation: "POST",
        description: "Save Invoice MRR",
      },
      {
        url: "/api/getUomByItem/:CompanyID/:ItemID",
        operation: "GET",
        description: "GET UOM",
        model: "priceSetting",
      },
      {
        url: "/api/getInvoiceMRRListUIGrid/:user/:pageNo/:rowCount/:paging/:search",
        operation: "GET",
        description: "GET Invoice MRR List UI Grid",
      },
      {
        url: "/api/getInvoiceMRRList",
        operation: "GET",
        description: "GET Invoice MRR List UI Grid",
        model: "invoice",
      },
      {
        url: "/api/getMrrDetailList/:MrrID",
        operation: "GET",
        description: "GET Mrr Detail List",
        model: "invoice",
      },
      {
        url: "/api/checkDOComplete/:invoiceItemID",
        operation: "GET",
        description: "Check DO Complete",
        model: "invoice",
      },
      // user Authentication for front end
      {
        url: "/api/setUserAndUserAuthenticationForFront",
        operation: "POST",
        description: "set CMN USER ANDUSER AUTHENTICATION",
        model: "UserAuthentication",
      },
      {
        url: "/api/getGender/:CompanyID/:GenderID",
        operation: "GET",
        description: "GET gender",
        model: "commonService",
      },
      {
        url: "/api/setDCShipping",
        operation: "POST",
        description: "Set DC Shipping",
      },

      {
        url: "/api/setDCPayment",
        operation: "POST",
        description: "Set DC Payment",
      },
      {
        url: "/api/getSalDeliveryChallan/:InvoiceID/:DOID",
        operation: "GET",
        description: "GET Sal Delivery Challan",
        model: "invoice",
      },

      {
        url: "/api/setSalDeliveryChallan",
        operation: "Post",
        description: "Post Master DC Payment",
        model: "invoice",
      },
      {
        url: "/api/getInvDCMasterListUIGrid/:user/:pageNo/:rowCount/:paging/:search",
        operation: "GET",
        description: "GET Invoice DC Master UI Grid",
      },
      {
        url: "/api/getUniqueInvoiceList",
        operation: "GET",
        description: "GET Invoice List",
        model: "invoice",
      },
      {
        url: "/api/SpDeleteMrrMasterDetail/:MrrID",
        operation: "GET",
        description: "GET Delete Mrr List",
        model: "invoice",
      },
      {
        url: "/api/SpGetInvDCDetail/:DCID",
        operation: "GET",
        description: "GET Invoice DC Detail",
        model: "invoice",
      },
      {
        url: "/api/SpDeleteInvDCMasterDetail/:DCID",
        operation: "GET",
        description: "GET Delete Invoice DC MasterDetail",
        model: "invoice",
      },
      {
        url: "/api/CheckApprovedQty/:InvoiceItemID",
        operation: "GET",
        description: "GET Check Approved Qty",
        model: "invoice",
      },
      {
        url: "/api/setOrder",
        operation: "SET",
        description: "SET ORDER",
        model: "order",
      },
      {
        url: "/api/setOrder/mobileApps",
        operation: "SET",
        description: "SET ORDER",
        model: "order",
      },
      {
        url: "/api/GetDealPromotionSequence/:CompanyID/:ItemID",
        operation: "GET",
        description: "GET Sequence",
        model: "dealPromotion",
      },
      {
        url: "/api/GetCatWizeItem/:CompanyID/:ItemCategoryID",
        operation: "GET",
        description: "GET Item",
        model: "FeatureProduct",
      },
      {
        url: "/api/GetCategorySequence/:CompanyID/:ItemCategoryID",
        operation: "GET",
        description: "GET Sequence",
        model: "catWizeBrand",
      },
      {
        url: "/api/GetGroupSequence/:CompanyID/:GroupID",
        operation: "GET",
        description: "GET Sequence",
        model: "groupWizeTopProduct",
      },

      {
        url: "/api/getStockMaster/:CompanyID/:MarchentID",
        operation: "GET",
        description: "GET Master",
        model: "invStock",
      },
      {
        url: "/api/deleteStockDetail",
        operation: "POST",
        description: "Delete Inv Stock Detail",
      },
      {
        url: "/api/CmnBrandWizeModel/:CompanyID/:ItemBrandID/:ItemModelID",
        operation: "GET",
        description: "GET Model",
        model: "itemMaster",
      },
      {
        url: "/api/getApprovedInvoice",
        operation: "GET",
        description: "Get Approved Invoice",
      },
      {
        url: "/api/getApprovedProduct/:InvoiceID",
        operation: "GET",
        description: "GET Approved Product",
        model: "invoice",
      },
      {
        url: "/api/GetBestsellingSequence/:CompanyID",
        operation: "GET",
        description: "GET Sequence",
        model: "bestSelling",
      },
      {
        url: "/api/GetItemGroupWize/:CompanyID/:ItemGroupID/:ItemID ",
        operation: "GET",
        description: "GET Item",
        model: "bestSelling",
      },
      {
        url: "/api/CategoryWizeGroup/:CompanyID/:ItemCategoryID/:ItemGroupID",
        operation: "GET",
        description: "GET group",
        model: "group",
      },
      {
        url: "/api/CategoryWizeGroupDDL/:CompanyID/:ItemCategoryID/:ItemGroupID",
        operation: "GET",
        description: "GET group",
        model: "group",
      },
      {
        url: "/api/GetUserAsEmployee/:CompanyID/:UserID",
        operation: "GET",
        description: "GET Employee",
        model: "cmnItemreview",
      },
      {
        url: "/api/GetUserAsCustomer/:CompanyID/:UserID",
        operation: "GET",
        description: "GET Costomer",
        model: "cmnItemreview",
      },
      {
        url: "/api/contact",
        operation: "POST",
        description: "contact",
      },
    ]));
};

module.exports = {
  showHome
};