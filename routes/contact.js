const express = require("express");
const router = express.Router();
var model = require("../models/contact");

router.post("/api/contact", (req, res) => {
  model.setContact(req, res, req.body);
});

module.exports = router;