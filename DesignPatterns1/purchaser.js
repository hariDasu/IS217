function  Purchaser() {
   console.log ("purchaser created")
}

// Order the item
Purchaser.prototype.placeOrder=function(itemType, quantity) {
    console.log ( "Ordered qty=" + quantity  + " for " + itemType ) ;
}
      
//  Update the books
Purchaser.prototype.updateBooks=function( itemType, quantity) {
    console.log ("Updated Books  qty=" + quantity  + " for " + itemType ) ;
}

// -- implemnts the command pattern (but is not working properly)i
Purchaser.prototype.execute = function(name)  {
    return  Purchaser.apply( Purchaser, [].slice.call(arguments,1) );
};

//--- acts as  a PROXY / DELEGATE method - same goal as execute above
Purchaser.prototype.execute = function(itemType, quantity)  {
    this.placeOrder(itemType, quantity)
    this.updateBooks(itemType, quantity)
};