/**
 * @author kinghenry8
 */




function links(array ) {
	
	var myLinks = [];
	
  	for (var i=0;i<array.length;i++)
  	{
  		
		
  		var link = document.createElement('a');
  		link.href=array[i];
  		link.textContent= i+1;
  		myLinks.push(link);
  	}
	return myLinks;
  	
  };

var linkList = ['http://www.google.com','http://www.di.fm','http://www.beatport.com'];
console.log( links(linkList));



