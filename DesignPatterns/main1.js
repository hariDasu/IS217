/*
function Car ( model ) 
	{
	this.model = model;
	this.color = "red";
	this.year = "2010";
		
	this.getInfo = function() 
	{
		return this.color; //+ " " + this.model + " "  + this.year;
		};
	}


var myCar = new Car("Tesla");

	//myCar.year =  "2013";
	myCar.color = "silver";
*/

function Car( model ) {

  this.model = model;
  this.color = "silver";
  this.year  = "2012";

  this.getInfo = function () {
    return this.model + " " + this.year;
  };

}
