var multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const imageType = file.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + imageType);
    }
});

var upload = multer({ storage: storage }).single('UserImage');

module.exports = {
    storage,
    upload
};