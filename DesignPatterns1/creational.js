/**
 * @author harir_000
 */
//Constructor Pattern(Creational pattern)

function Car(model, year){
	this.model=model;
	this.year=year;
	
	this.getInfo= function () {
		return this.year + this.model;
	}
}

var tesla = new Car( " Tesla Model S costs: ", 2013);

function CarPrice()
{
	this.cost = function () {return 52400; };
}

//Decorator Pattern battery 

function Battery85kWh(modelS) {
	var delta = modelS.cost();
	modelS.cost = function(){
		return delta + 20000;
	}
		
	
}

//Decorator Pattern tech package

function TechPackage(modelS) {
	var delta = modelS.cost();
	modelS.cost = function(){
		return delta + 3750;
	}
		
	
}

//Decorator Pattern sound studio

function SoundPackage(modelS) {
	var delta = modelS.cost();
	modelS.cost = function(){
		return delta + 950;
	}
		
	
}

//Decorator Pattern Suspension

function ActiveAir(modelS) {
	var delta = modelS.cost();
	modelS.cost = function(){
		return delta + 1500;
	}
		
	
}

//Decorator Pattern charging

function WallPlusTwinCharger(modelS) {
	var delta = modelS.cost();
	modelS.cost = function(){
		return delta + 2700;
	}
		
	
}

var customS = new CarPrice();
Battery85kWh(customS);
TechPackage(customS);
SoundPackage(customS);
ActiveAir(customS);
WallPlusTwinCharger(customS);

//Outputs: Model PLus total COst

console.log(tesla.getInfo()+customS.cost())




