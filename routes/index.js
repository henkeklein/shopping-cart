var express = require('express');
var router = express.Router();

var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunk = [];
    var chunkSize = 3;
    //Print chunks from 0 to chunkSize, remove the 4.
    for (var i = 0; i < docs.length; i += chunkSize){
      productChunk.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunk});

  });
});



module.exports = router;
