var express = require('express');
var router = express.Router();
contents=[{name:'Lionel Messi', position:'Playing as midfielder in PSG',goals:'806',image:"https://www.pngmart.com/files/22/Messi-PNG-Image.png" },
{name:'Cristiano Ronaldo', position:'Playing as forward in United',goals:'800',image:"https://www.kindpng.com/picc/m/18-185153_real-fifa-cristiano-liga-la-madrid-ronaldo-clipart.png" },
{name:'Neymar', position:'Playing as forward in PSG',goals:'400',image:"https://www.kindpng.com/picc/m/147-1475430_neymar-hd-png-download.png" },
{name:'Sergio Ramos', position:'Playing as center back in PSG',goals:'500',image:"https://www.kindpng.com/picc/m/424-4244022_sergio-ramos-render-real-madrid-sergio-ramos-png.png" },
]
/* GET home page. */
router.get('/', function(req, res, next) {
 

  res.render('index', {contents});
});
router.get('/sample', function(req, res, next) {
 

  res.render('table', {contents});
});
router.get('/test', function(req, res, next) {
 

  res.render('sample3', {contents});
});


module.exports = router;
