function bet(){
	var betSpinner = $('#betAmount').spinner();
	betSpinner.spinner({min: 0, max: walletAmt, step: 10});
	betMenu.show().dialog({modal: true, resizable: false, title: 'title', buttons: {Ok: "makeBet()"}});
}

//TODO submitting modal refreshes walletAmt and calls through js files again
function makeBet(){
	walletAmt -= $('#betAmount').spinner('value');
	alert(walletAmt);
}

//Function for hiding and showing raceArea
function test(){
	if((raceArea).is(':visible'))
		raceArea.fadeOut('slow');
	else
		raceArea.show();
}