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
var horseTable = $('raceHorseInfo');

raceArea.hide();
bettingMenu.hide();
nameMenu.hide();

document.getElementById("raceButton").addEventListener("click", race);
document.getElementById("betButton").addEventListener("click", betMenu);

getName();
setRaceHorses();
updateHorseTable();
	
//TODO need to find which horse is checked
function setRaceHorses(){
    var numHorses = Math.floor(Math.random() * 4) + 4;

    for(var i = 0; i < numHorses; i++){
      //Creates object with horse name and bet
      //will need to adjust x value to fit with start of track
      var temp = {name: horses[Math.floor(Math.random() * horses.length)], bet: 0, x: 0};

      if(!contains(temp, raceHorses))
      	raceHorses[i] = temp;
      else
      	i--;
    }

    for(var i = 0; i < raceHorses.length; i++){
    	$("#betMenu form").append('<input type="radio" name="horseSelect" value=' + i +'><label>'+ raceHorses[i].name +'</label><br>');
    }
}

//Returns if array contains element
function contains(element, arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].name === element.name)
			return true;
	}

	return false;
}

function updateHorseTable(){
	$('#horseTable tbody').remove();

	for(var i = 0; i < raceHorses.length; i++){
		$('#horseTable').append('<tbody><tr><td>' + raceHorses[i].name + '</td><td>$' + raceHorses[i].bet + '</td></tr></tbody>');
	}
}

function getName(){
	nameMenu.dialog({closeOnEscape: false, resizable: false, title: 'Enter a name for your player', buttons: {"Start": addName}, open: function(event, ui) {
        $(".ui-dialog-titlebar-close", ui.dialog | ui).fadeOut('slow');
    }});
	//TODO enter thing still not working but it does work in betMenu
	/*nameMenu.keyPress(function(event){
		if (event.keyCode === 13) //13 is enter
        	event.preventDefault();
 	 });*/	
	nameMenu.fadeIn('slow');
}

function addName(){
	playerName = $('#nameInput').val();
	updatePlayerTable();
	nameMenu.dialog('close');
}

function updatePlayerTable(){
	$('#playerTable tbody').remove();
	$('#playerTable').append('<tbody><tr><td>' + playerName + '</td><td>$' + wallet + '</td></tr></tbody>');
}

function betMenu(){
	var betInput = $('#betAmount').spinner({min: 0, max: wallet, step: 10});
	bettingMenu.dialog({closeOnEscape: false, resizable: false, title: 'Betting Window', buttons: {"Bet": makeBet}});

	bettingMenu.keypress(function(event){
		if (event.keyCode === 13) //13 is enter
        	event.preventDefault();
 	 });
	bettingMenu.fadeIn('slow');
}

function makeBet(){
	if($('#betAmount').spinner('value') > wallet)
		$('#betAmount').val(wallet);

	wallet -= $('#betAmount').spinner('value');
	var betIndex = $('input[name="horseSelect"]:checked').val();
	raceHorses[betIndex].bet += $('#betAmount').spinner('value');

	$('#betAmount').val(0);
	updatePlayerTable();
	updateHorseTable();
	bettingMenu.dialog('close');
}

function race(){
    if(!$('#race').is(":visible")){
     	$('#race').fadeIn('slow');
    }

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');

    while(!raceFinished()){
    	for(var i = 0; i < raceHorses.length; i++){
    		raceHorses[i].x += Math.floor(Math.random() * 10);
    	}

    	//Waitz 30 milliseconds for image to load then calls draw Horses
    	//setTimeout(function(){drawHorses(canvas, ctx);}, 30);

	    function drawHorses(canvas, ctx){
	      var startY = 0;
	     // ctx.beginPath();
	      for(var i = 0; i < horses.length; i++){
	       // ctx.drawImage("horseSprites.png", 10, startY, 100, 100);
	        startY += 100;
	      } 
	      //ctx.closePath();
	    }
    }

    var winningHorse = {x: 0};
    for(var i = 0; i < raceHorses.length; i++){
    	if(raceHorses[i].x > winningHorse.x)
    		winningHorse = raceHorses[i];
    }

    if(winningHorse.bet > 0)
    	wallet += winningHorse.bet * 2;

    //TODO when refreshing horses, array size is always same
    setTimeout(function(){
    	raceArea.hide();
    	setRaceHorses();
   		updatePlayerTable();
		updateHorseTable();
    }, 1000);
  }

  function raceFinished(){
  	var maxX = 300; //Temp value. Will adjust for size of track.

  	for(var i = 0; i < raceHorses.length; i++){
  		if(raceHorses[i].x >= maxX)
  			return true;
  	}

  	return false;
  }

});