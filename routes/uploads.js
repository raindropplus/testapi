const express = require('express');
const router = express.Router();
// var model = require('../models/uploads');
var multer = require("multer");

const multerConfig = {
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            next(null, 'uploads/');
        },
        filename: function (req, file, next) {
            console.log(file);
            const imageType = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.' + imageType);
        }
    })
    // fileFilter : function(req,file,next){
    //     if(!file)
    // }
};

router.post('/api/uploads', multer(multerConfig).single('file'), (req, res) => {
    if (req.file) {
        console.log(req.file);
        res.json(JSON.stringify(req.file));
        req.body.photo = req.file.filename;
        console.log(req.body.photo);

    }
});
router.post('/api/uploads', multer(multerConfig).single('file'), (req, res) => {
    if (req.file) {
        console.log(req.file);
        res.json(JSON.parse(JSON.stringify(req.file)));
        req.body.photo = req.file.filename;
        console.log(req.body.photo);

    }
});

module.exports = router;