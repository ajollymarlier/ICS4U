function bet(){
	betMenu.show().dialog();
}

//Function for hiding and showing raceArea
function test(){
	if((raceArea).is(':visible'))
		raceArea.fadeOut('slow');
	else
		raceArea.show();
}