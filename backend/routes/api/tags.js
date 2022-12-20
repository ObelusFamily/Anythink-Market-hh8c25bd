var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// return a list of tags
router.get('/', function(req, res, next) {
  Item.find().distinct('tagList','title').then(function(tags){
    return res.json({
      tags: tags,
      title : title                      
    });
  }).catch(next);
});

module.exports = router;
