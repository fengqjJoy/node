var express = require('express');
var router = express.Router();
var tem={
    message:"我是users中间部分"
};
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', function(req, res, next) {
    res.render('index', { title:tem.message });
});
module.exports = router;
