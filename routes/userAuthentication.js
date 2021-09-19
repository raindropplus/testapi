const express = require('express');
const router = express.Router();
var model = require('../models/userAuthentication');
var nodemailer = require("nodemailer");

router.post('/api/setUserAndUserAuthenticationForFront', (req, res) => {
    model.setUserJoin(req, res, req.body);
});

router.post('/api/setUserForSocialNetwork', (req, res) => {
    model.setUserForSocialNetwork(req, res, req.body);
});

router.get('/api/getUserForSocialNetwork/:UserID', (req, res) => {
    model.getUserForSocialNetwork(req, res, req.params.UserID);
});

router.get('/api/getExistingParams/:Property/:Flag', (req, res) => {
    model.getExistingParams(req, res, req.params.Property, req.params.Flag);
});

router.get('/api/forgetPasswordEmailCheck/:Property', (req, res) => {
    model.forgetPasswordEmailCheck(req, res, req.params.Property);
});

router.get('/api/forgetMailDataForLogin/:AuthenticationID', (req, res) => {
    model.forgetMailData(req, res, req.params.AuthenticationID);
});

module.exports = router;