$(document).ready(function(){

var horses = ["Downsham", "Black Caviar", "Clippity Clop", "Git Gud", "Corriner", "Sassafrazz", "Pepe", "Existential Dread", "AluTap", "Sarah Jessica Parker", "MemeLord", "Waste of Space", "Narco",
			 "TreeFiddy", "Boi", "Sanic", "Jeff", "Bernie", "Them...", "Hazard", "Japowatsits", "Pagal", "Chef Curry", "Obama", "Boi 2.0", "SAKE!", "Foxy Grandpa", "Horse", "Babajide", "Nostrils", "Glorious Leader",
			 "Spoderman", "Ice Cube", "¿Que?", "Tiffin", "El Rio Rey", "Heliskier", "Kitano Dai O", "Malt Queen", "Mannamead", "Perdita II", "The Tetrarch", "Footstepsinthesand"];

var horseImages = [];
horseImages[0] = [createImage("images/horses/Brown-and-Red_1.png"), createImage("images/horses/Brown-and-Red_2.png"), createImage("images/horses/Brown-and-Red_3.png"), createImage("images/horses/Brown-and-Red_4.png")];
horseImages[1] = [createImage("images/horses/Chestnut-and-White_1.png"), createImage("images/horses/Chestnut-and-White_2.png"), createImage("images/horses/Chestnut-and-White_3.png"), createImage("images/horses/Chestnut-and-White_4.png")];
horseImages[2] = [createImage("images/horses/Dark-Brown-and-Black_1.png"), createImage("images/horses/Dark-Brown-and-Black_2.png"), createImage("images/horses/Dark-Brown-and-Black_3.png"), createImage("images/horses/Dark-Brown-and-Black_4.png")];
horseImages[3] = [createImage("images/horses/Dark-Brown_1.png"), createImage("images/horses/Dark-Brown_2.png"), createImage("images/horses/Dark-Brown_3.png"), createImage("images/horses/Dark-Brown_4.png")];
horseImages[4] = [createImage("images/horses/Dark-White_1.png"), createImage("images/horses/Dark-White_2.png"), createImage("images/horses/Dark-White_3.png"), createImage("images/horses/Dark-White_4.png")];
horseImages[5] = [createImage("images/horses/Tan-and-Brown_1.png"), createImage("images/horses/Tan-and-Brown_2.png"), createImage("images/horses/Tan-and-Brown_3.png"), createImage("images/horses/Tan-and-Brown_4.png")];
horseImages[6] = [createImage("images/horses/White_1.png"), createImage("images/horses/White_2.png"), createImage("images/horses/White_3.png"), createImage("images/horses/White_4.png")];
horseImages[7] = [createImage("images/horses/Yellow_1.png"), createImage("images/horses/Yellow_2.png"), createImage("images/horses/Yellow_3.png"), createImage("images/horses/Yellow_4.png")];

var raceHorses = [];
var wallet = 1000;
var playerName = "";

var frameCount = 0;
var raceInterval = null;

var raceArea = $('#race');
var selectArea = $('#selectArea');
var bettingMenu = $('#betMenu');
var nameMenu = $('#nameMenu');
var playerTable = $('playerTable');
var horseTable = $('raceHorseInfo');

raceArea.hide();
bettingMenu.hide();
nameMenu.hide();
$('#playArea').hide();
$('#infoArea').hide();

document.getElementById("raceButton").addEventListener("click", race);
document.getElementById("betButton").addEventListener("click", betMenu);

getName();

function createImage(source){
	var temp = new Image();
	temp.src = source;
	return temp;
}

function setRaceHorses(){
	raceHorses = [];
    var numHorses = Math.floor(Math.random() * 3) + 4;

    for(var i = 0; i < numHorses; i++){
      //Creates object with horse name and bet
      //will need to adjust x value to fit with start of track
      var temp = {name: horses[Math.floor(Math.random() * horses.length)], bet: 0, x: 0, imageArr: horseImages[Math.floor(Math.random() * 8)]};

      //Checks if horse is already chosen
      if(!contains(temp, raceHorses))
      	raceHorses[i] = temp;
      else
      	i--;
    }

    //TODO Spacing from removed horses still stays
    $(".raceHorseSelect").remove();
    for(var i = 0; i < raceHorses.length; i++){
    	$("#betMenu form").append('<input type="radio" name="horseSelect" value=' + i +' class="raceHorseSelect"><label class="raceHorseSelect">'+ raceHorses[i].name +'</label><br>');
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
    
	nameMenu.keypress(function(event){
		if (event.keyCode === 13) //13 is enter
        	event.preventDefault();
 	 });

	nameMenu.show();
}

function addName(){
	playerName = $('#nameInput').val();
	updatePlayerTable();
	setRaceHorses();
	updateHorseTable();

	$('#playArea').show();
	$('#infoArea').show();
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

function drawRace(canvas, ctx){
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i < raceHorses.length; i++){
    		raceHorses[i].x += Math.floor(Math.random() * 5) + 1;
    }

	var startY = 0;
	ctx.beginPath();
	for(var i = 0; i < raceHorses.length; i++){
		ctx.drawImage(raceHorses[i].imageArr[Math.floor((frameCount % 16) / 4)], raceHorses[i].x, startY, 20, 16);
	    startY += 25;
	}
	ctx.closePath();
	frameCount++;

	if(raceFinished()){
		var winningHorse = {x: 0};
    	for(var i = 0; i < raceHorses.length; i++){
    	if(raceHorses[i].x > winningHorse.x)
    		winningHorse = raceHorses[i];
    	}

	    if(winningHorse.bet > 0)
	    	wallet += winningHorse.bet * 2;

	    alert(winningHorse.name + " Wins!");
	    $('#selectArea').show();
		$('#buttons').show();
	    raceArea.hide();
	   	updatePlayerTable();
	   	setRaceHorses();
		updateHorseTable();
		clearInterval(raceInterval);

		//Game Over Scenario
		if(wallet === 0){
	    	alert("You Have Run Out Of Money! Thanks For Playing!");
	    	document.location.reload();
	    }
	}
  }

function race(){
	$('#selectArea').hide();
	$('#buttons').hide();
	if(bettingMenu.is(":visible"))
		bettingMenu.dialog('close');
	raceArea.show();

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');

    //Render loop for horses
    raceInterval = setInterval(drawRace, 15, canvas, ctx);
  }

  function raceFinished(){
  	//20 is specified width of images
  	var maxX = 300 - 20;

  	for(var i = 0; i < raceHorses.length; i++){
  		if(raceHorses[i].x >= maxX)
  			return true;
  	}

  	return false;
  }

});