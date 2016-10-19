var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
  imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
  title: 'Gothic',
  description: 'Awesome Game!!! Never played it',
  price: 249
  }),

  new Product({
  imagePath: 'http://media.comicbook.com/2015/11/battlefrontslide-160199.jpg',
  title: 'Star Wars Battlefront',
  description: 'Really cool video game makes you wanna play all the time',
  price: 499
  }),

  new Product({
  imagePath: 'http://cdn.images.dailystar.co.uk/dynamic/184/photos/70000/620x/FIFA-17-Release-Date-New-Features-521304.jpg',
  title: 'FIFA-17',
  description: 'Create your own team and play online. A game that takes in into the world of soccer',
  price: 699
  }),

  new Product({
  imagePath: 'https://media.easports.com/content/www-easports/sv_SE/nhl/news/2016/nhl-17-beta-information/_jcr_content/headerImages/image.img.jpg',
  title: 'NHL-17',
  description: 'A game that takes in into the world of icehockey',
  price: 699
  }),
];

var done = 0;
for (var i=0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if(done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
