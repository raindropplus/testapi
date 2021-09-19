const express = require('express');
const router = express.Router();
var model = require('../models/login');

router.get('/api/getLoginInformation/:userName/:password', (req, res) => {
    model.getLoginData(req, res, req.params.userName, req.params.password);
});
router.get('/api/getOTPLoginInformation/:PhoneNumber', (req, res) => {
    model.getOTPLoginData(req, res, req.params.PhoneNumber);
});

router.get('/api/saveOTPLoginInformation/:AuthenticationID/:OTP', (req, res) => {
    model.saveOTPLoginData(req, res, req.params.AuthenticationID, req.params.OTP);
});
router.get('/api/getOTPforLogin/:PhoneNumber', (req, res) => {
    model.getOTPforLogin(req, res, req.params.PhoneNumber);
});


router.get('/api/getPassword/:userID', (req, res) => {
    model.getPassword(req, res, req.params.userID);
});

router.get('/api/savePasswordChange/:userID/:password', (req, res) => {
    model.savePasswordChange(req, res, req.params.userID, req.params.password);
});

module.exports = router;