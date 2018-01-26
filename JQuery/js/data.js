var horses = [{name: "Aliqyan", img: createImage("images/delo.png"), x: 0}, {name: "Rossos", img: createImage("images/delo.png"), x: 0},
              {name: "Horse", img: createImage("images/delo.png"), x: 0}, {name: "XQC", img: createImage("images/delo.png"), x: 0}];

var walletAmt = 1000;

var information = $('#information');
var raceArea = $('#race');
var betMenu = $('#betMenu');
var horseInfo = $('#horseInfo');



raceArea.hide();
betMenu.hide();
horseInfo.tabs();

function createImage(src){
    var tmp = new Image();
    tmp.src = src;
    return tmp;
}