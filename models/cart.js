module.exports = function Cart(oldCart){
  this.items = oldCart.items || {};
  this.totalSize = oldCart.totalSize || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function(item, id){
    var storedItem = this.items[id];
    if(!storedItem){
      storedItem = this.items[id] = {item: item, size:0, price:0};
    }
    storedItem.size++;
    storedItem.price = storedItem.item.price * storedItem.size;
    this.totalSize++;
    this.totalPrice += storedItem.item.price;
  };

  this.generateArr = function(){
    var arr = [];
    for(var id in this.items){
      arr.push(this.items[id]);
    }
    return arr;
  };
};
