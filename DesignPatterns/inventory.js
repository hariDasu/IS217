/*
   Patterns Used :
       Module (Creational)
       Facade (Structural)

#--------------------------------------
   Problem:  Subscriber 
   ItemTypes : Pens, Notebooks, Staplers
   Low Mark  : 20    12         6
       Max   : 50    30         20
   When inventory falls below  low water mark - it should place an order for appropriate amount
*/

var inventory = ( function() {
    var _private = {
         actuals :  {
                  pens :  10,
             notebooks :  15,
              staplers :  5
         } ,

         lowMarks : {
              pens : 20,
         notebooks : 12,
          stapler  : 6
         } , 

         maxStock : {
              pens : 50,
          notebooks: 30,
          staplers : 20
         } ,

         //--------------------------------------
         getInStock : function (itemType) {
             return this.actuals[itemType]
         } ,

         //--------------------------------------
         genToOrder : function(itemType) {
             var inStock=this.actuals[itemType]
             var lowMark=this.lowMarks[itemType]
             var max= this.maxStock[itemType]
             if  (inStock <= lowMark )  {
                 return max - inStock 
             } else {
                return 0
             }
         } 
         //--------------------------------------
    } ;
    return {
         checkInStock:  function()  {
             var allItems = [ 'pens', 'notebooks', 'staplers' ] ;
             for (var i=0 ; i< allItems.length; i++ ) {
                 itemType=allItems[i] ;
                 var cnt=_private.getInStock (itemType) 
                 console.log ("In stock for " + itemType + "=" + cnt)
             }
         } , 
         generateOrders : function(purchaseMgr) {
             var allItems = [ 'pens', 'notebooks', 'staplers' ] ;
             for (var i=0 ; i< allItems.length; i++ ) {
                 itemType=allItems[i] ;
                 var cnt=_private.genToOrder (itemType) 
                 console.log ("Deficit to order for " + itemType + "=" + cnt )
                  purchaseMgr.execute(itemType, cnt)                    
                 // purchaseMgr.execute( "placeOrder", itemType, cnt)    
                 // purchaseMgr.execute( "updateBooks", itemType, cnt)
             }
         }
    } 
}()) ;
