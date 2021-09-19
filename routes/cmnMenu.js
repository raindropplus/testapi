const express = require('express');
const router = express.Router();
var model = require('../models/cmnMenu');

//VerifyToken Module
//let verifyToken = require('../core/verifyToken');

router.post('/api/setmenu', (req, res) => {
    model.setMenu(req, res, req.body);
});


router.post('/api/savePremissionRecord', (req, res) => {
    model.savePremissionRecord(req, res, req.body);
});


router.post('/api/setModule', (req, res) => {
    model.setModule(req, res, req.body);
});


router.post('/api/setMenuPermission', (req, res) => {
    model.setMenuPermission(req, res, req.body);
});


router.post('/api/updateModulePermission', (req, res) => {
    model.updateModulePermission(req, res, req.body);
});


router.get('/api/getmenu', (req, res) => {
    model.getMenuDdl(req, res);
});


router.get('/api/getmenuPermission/:InstituteID/:ModuleID/:UserTypeID', (req, res) => {
    model.getMenuPermission(req, res, req.params.InstituteID, req.params.ModuleID, req.params.UserTypeID);
});


router.get('/api/getmenu/:id', (req, res) => {
    model.getMenu(req, res, req.params.id);
});


router.get('/api/getmenutype', (req, res) => {
    model.getMenuType(req, res);
});


router.get('/api/getStatus', (req, res) => {
    model.getStatus(req, res);
});


router.get('/api/getLoginUser', (req, res) => {
    model.getLoginUser(req, res);
});


router.get('/api/getmodule/:moduleID', (req, res) => {
    model.getModule(req, res, req.params.moduleID);
});


router.get('/api/getmodulePermission/:InstituteID', (req, res) => {
    model.getModulePermission(req, res, req.params.InstituteID, req.params.UserTypeID);
});


module.exports = router;