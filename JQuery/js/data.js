$(document).ready(function(){

var horses = [{name: "Aliqyan", img: createImage("images/delo.png"), x: 0}, {name: "Rossos", img: createImage("images/delo.png"), x: 0},
              {name: "Horse", img: createImage("images/delo.png"), x: 0}, {name: "XQC", img: createImage("images/delo.png"), x: 0}];

var wallet = 1000;
//Add a dialog at the beginning of game to add name
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
getName();

//document.getElementById("horse1Att").getElementsByTagName('p').innerHTML = 	horses[0];

function getName(){
	nameMenu.dialog({modal: true, resizable: false, title: 'Player Name', buttons: {"Start": addName}});
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

function createImage(src){
    var tmp = new Image();
    tmp.src = src;
    return tmp;
}

function betMenu(){
	var betInput = $('#betAmount').spinner();
	betInput.spinner({min: 0, max: wallet, step: 10});
	bettingMenu.dialog({modal: true, resizable: false, title: 'Betting Window', buttons: {"Bet": makeBet}});
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

function race(){
	if($('#race').is(":visible")){
		$('#race').fadeOut('slow');
	}else{
		$('#race').fadeIn('slow');
	}

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext('2d');

//Waitz 30 milliseconds for image to load then calls draw Horses
	setTimeout(function (){drawHorses(canvas, ctx);}, 30)

	function drawHorses(canvas, ctx){
 	var startY = 0;
  	ctx.beginPath();
  	for(var i = 0; i < horses.length; i++){
    	ctx.drawImage(horses[i].img, 10, startY, 100, 100);
    	startY += 100;
  		}
  		ctx.closePath();
	}
}

});