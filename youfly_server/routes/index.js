var express = require('express');
var router = express.Router();
/**
 * @swagger
 * /homePage:
 * get:
 *    description: provide main page 
 *    responses:
 *      '200':
 *        description: A successful response
 */
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'youfly API' });
});

module.exports = router;
