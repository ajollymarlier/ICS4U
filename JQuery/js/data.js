$(document).ready(function(){

var horses = ["Downsham", "Black Caviar", "Clippity Clop", "Git Gud", "Corriner", "Sassafrazz", "Pepe", "Existential Dread", "AluTap", "Sarah Jessica Parker", "MemeLord", "Waste of Space", "Narco",
			 "TreeFiddy", "Boi", "Sanic", "Jeff", "Bernie", "Them...", "Hazard", "Japowatsits", "Pagal", "Chef Curry", "Obama", "Boi 2.0", "SAKE!", "Foxy Grandpa", "Horse", "Babajide", "Nostrils", "Glorious Leader",
			 "Spoderman", "Ice Cube", "¿Que?", "Tiffin", "El Rio Rey", "Heliskier", "Kitano Dai O", "Malt Queen", "Mannamead", "Perdita II", "The Tetrarch", "Footstepsinthesand"];

var raceHorses = [];
var wallet = 1000;
var playerName = "";

var raceArea = $('#race');
var bettingMenu = $('#betMenu');
var nameMenu = $('#nameMenu');
var playerTable = $('playerTable');

raceArea.hide();
bettingMenu.hide();
nameMenu.hide();

document.getElementById("raceButton").addEventListener("click", race);
document.getElementById("betButton").addEventListener("click", betMenu);
document
getName();
setRaceHorses();

function setRaceHorses(){
    var numHorses = Math.floor(Math.random() * 4) + 4;

    for(var i = 0; i < numHorses; i++){
      raceHorses[i] = horses[Math.floor(Math.random() * horses.length)];
    }
}

function getName(){
	nameMenu.dialog({closeOnEscape: false, resizable: false, title: 'Player Name', buttons: {"Start": addName}});
	//TODO enter thing still not working but it does work in betMenu
	nameMenu.keyPress(function(event){
		if (event.keyCode === 13) //13 is enter
        	event.preventDefault();
 	 })
	nameMenu.show();
}

function addName(){
	playerName = $('#nameInput').val();
	updateTable();
	nameMenu.dialog('close');
}

function updateTable(){
	$('#playerTable tbody').remove();
	$('#playerTable').append('<tbody><tr><td>' + playerName + '</td><td>$' + wallet + '</td></tr></tbody>');
}

function betMenu(){
	var betInput = $('#betAmount').spinner({min: 0, max: wallet, step: 10});
	bettingMenu.dialog({closeOnEscape: false, resizable: false, title: 'Betting Window', buttons: {"Bet": makeBet}});

	//TODO esc still exiting, enter works tho
	bettingMenu.keypress(function(event){
		if (event.keyCode === 13) //13 is enter
        	event.preventDefault();
 	 });
	bettingMenu.show();
}

//if you type as value higher than max, it still works
function makeBet(){
	if($('#betAmount').spinner('value') > wallet)
		$('#betAmount').val(wallet);

	wallet -= $('#betAmount').spinner('value');
	$('#betAmount').val(0);
	updateTable();
	bettingMenu.dialog('close');
}

});