/**
 * @author harir_000
 */

//Flyweight optimized Cellphone Stock for a retail store
var CellPhone = function( carrier, manufac, radio, model, availability,stock ){

   this.carrier = carrier;
   this.manufac = manufac;
   this.radio = radio;
   this.model = model;
   this.availability = avilability;
   this.stock = stock;

};

//Cellphone stock singleton

var CellPhones = (function () {
	var existingPhones = {}, existingPhone;
	
	return {
		createPhone : function (carrier, manufac, radio, model, availability, stock) {
			
			//Find out if cell phone model exists in database or force boolean to be returned
			
			existingPhone = existingPhones[model];
			if(!!existingPhone){
				return existingPhone;
			}else {
			
			//otherwise create instance of a new phone model
			var phone = new Phone(carrier, manufac, radio, model, availability, stock);
			existingPhones[model] = phone;
			return phone;
			
			}
		}
	};
};)
