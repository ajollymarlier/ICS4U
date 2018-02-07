$(document).ready(function(){

//Array of horse names
var horses = ["Downsham", "Black Caviar", "Clippity Clop", "Git Gud", "Corriner", "Sassafrazz", "Pepe", "Existential Dread", "AluTap", "Sarah Jessica Parker", "MemeLord", "Waste of Space", "Narco",
			 "TreeFiddy", "Boi", "Sanic", "Jeff", "Bernie", "Them...", "Hazard", "Japowatsits", "Pagal", "Chef Curry", "Obama", "Boi 2.0", "SAKE!", "Foxy Grandpa", "Horse", "Babajide", "Nostrils", "Glorious Leader",
			 "Spoderman", "Ice Cube", "¿Que?", "Tiffin", "El Rio Rey", "Heliskier", "Kitano Dai O", "Malt Queen", "Mannamead", "Perdita II", "The Tetrarch", "Footstepsinthesand"];

//2D array containing 4 different running sprites for each version of horse
var horseImages = [];
horseImages[0] = [createImage("images/horses/Brown-and-Red_1.png"), createImage("images/horses/Brown-and-Red_2.png"), createImage("images/horses/Brown-and-Red_3.png"), createImage("images/horses/Brown-and-Red_4.png")];
horseImages[1] = [createImage("images/horses/Chestnut-and-White_1.png"), createImage("images/horses/Chestnut-and-White_2.png"), createImage("images/horses/Chestnut-and-White_3.png"), createImage("images/horses/Chestnut-and-White_4.png")];
horseImages[2] = [createImage("images/horses/Dark-Brown-and-Black_1.png"), createImage("images/horses/Dark-Brown-and-Black_2.png"), createImage("images/horses/Dark-Brown-and-Black_3.png"), createImage("images/horses/Dark-Brown-and-Black_4.png")];
horseImages[3] = [createImage("images/horses/Dark-Brown_1.png"), createImage("images/horses/Dark-Brown_2.png"), createImage("images/horses/Dark-Brown_3.png"), createImage("images/horses/Dark-Brown_4.png")];
horseImages[4] = [createImage("images/horses/Dark-White_1.png"), createImage("images/horses/Dark-White_2.png"), createImage("images/horses/Dark-White_3.png"), createImage("images/horses/Dark-White_4.png")];
horseImages[5] = [createImage("images/horses/Tan-and-Brown_1.png"), createImage("images/horses/Tan-and-Brown_2.png"), createImage("images/horses/Tan-and-Brown_3.png"), createImage("images/horses/Tan-and-Brown_4.png")];
horseImages[6] = [createImage("images/horses/White_1.png"), createImage("images/horses/White_2.png"), createImage("images/horses/White_3.png"), createImage("images/horses/White_4.png")];
horseImages[7] = [createImage("images/horses/Yellow_1.png"), createImage("images/horses/Yellow_2.png"), createImage("images/horses/Yellow_3.png"), createImage("images/horses/Yellow_4.png")];

//Player Information
var wallet = 1000;
var playerName = "";

//Race Information
var raceHorses = [];
var frameCount = 0;
var raceInterval = null;

//Manipulated Divs
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

//Listeners for Bet and Race buttons
document.getElementById("raceButton").addEventListener("click", race);
document.getElementById("betButton").addEventListener("click", betMenu);

//Recieves Player Name
getName();

//Helper method for loading images in one line
function createImage(source){
	var temp = new Image();
	temp.src = source;
	return temp;
}

//Chooses the horses to be in race
function setRaceHorses(){
	//Resets raceHorses arr and chooses new length
	raceHorses = [];
    var numHorses = Math.floor(Math.random() * 3) + 4;

    for(var i = 0; i < numHorses; i++){
      //Creates object with horse name and bet
      var temp = {name: horses[Math.floor(Math.random() * horses.length)], bet: 0, x: 0, imageArr: horseImages[Math.floor(Math.random() * 8)]};

      //Checks if horse is already chosen
      if(!contains(temp, raceHorses))
      	raceHorses[i] = temp;
      else
      	i--;
    }

    //Removes all horse radio buttons and breaks from betMenu
    $(".raceHorseSelect").remove();
    $("br").remove();

    //Adds new radio buttons with raceHorse labels to betMenu
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

//Removes and updates horses in race
function updateHorseTable(){
	$('#horseTable tbody').remove();

	for(var i = 0; i < raceHorses.length; i++){
		$('#horseTable').append('<tbody><tr><td>' + raceHorses[i].name + '</td><td>$' + raceHorses[i].bet + '</td></tr></tbody>');
	}
}

//Asks for player name
//Is a mandatory menu
function getName(){
	nameMenu.dialog({closeOnEscape: false, resizable: false, title: 'Enter a name for your player', buttons: {"Start": addName}, open: function(event, ui) {
        $(".ui-dialog-titlebar-close", ui.dialog | ui).fadeOut('slow');
    }});

	//Prevents user from pressing enter and refreshing the page
	nameMenu.keypress(function(event){
		if (event.keyCode === 13) //13 is enter
        	event.preventDefault();
 	 });

	nameMenu.show();
}

//Adds name to player table, updates race horses and updates race horse table
function addName(){
	playerName = $('#nameInput').val();
	updatePlayerTable();
	setRaceHorses();
	updateHorseTable();

	$('#playArea').show();
	$('#infoArea').show();
	nameMenu.dialog('close');
}

//Updates player table
function updatePlayerTable(){
	$('#playerTable tbody').remove();
	$('#playerTable').append('<tbody><tr><td>' + playerName + '</td><td>$' + wallet + '</td></tr></tbody>');
}

//Creates menu with race horse selections and a bet spinner
function betMenu(){
	var betInput = $('#betAmount').spinner({min: 0, max: wallet, step: 10});
	bettingMenu.dialog({closeOnEscape: false, resizable: false, title: 'Betting Window', buttons: {"Bet": makeBet}});

	//Prevents enter
	bettingMenu.keypress(function(event){
		if (event.keyCode === 13) //13 is enter
        	event.preventDefault();
 	 });

	bettingMenu.fadeIn('slow');
}

//Places bet on selected horse and updates said horse's bet var
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

//Draws race on canvas
function drawRace(canvas, ctx){
  	ctx.clearRect(0, 0, canvas.width, canvas.height);

  	//Chooses distance moved in this frame from 1 to 4
    for(var i = 0; i < raceHorses.length; i++){
    		raceHorses[i].x += Math.floor(Math.random() * 4) + 1;
    }

    //Draws horses and selects sprite based on number of frames passed
	var startY = 0;
	ctx.beginPath();
	for(var i = 0; i < raceHorses.length; i++){
		ctx.drawImage(raceHorses[i].imageArr[Math.floor((frameCount % 16) / 4)], raceHorses[i].x, startY, 20, 16);
	    startY += 25;
	}
	ctx.closePath();
	frameCount++;

	//Checks if a horse has won
	if(raceFinished()){
		var winningHorse = {x: 0};
    	for(var i = 0; i < raceHorses.length; i++){
    	if(raceHorses[i].x > winningHorse.x)
    		winningHorse = raceHorses[i];
    	}

    	//Doubles player bet if correct
	    if(winningHorse.bet > 0)
	    	wallet += winningHorse.bet * 2;

	    //Alerts player to who won and resets menus and tables
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

//Sets up race envornment in html and sets interval
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

  //Checvks if horse has reached maxX
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