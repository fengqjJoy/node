var express = require('express');
var router = express.Router();
//定义变量
var tem={
    message:"我是中间部分"
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:tem.message });
});
module.exports = router;
router.get('/test/test', function(req, res, next) {
    res.render('test/test', { title:tem.message });
});