var horses = [{name: "Aliqyan", img: createImage("images/delo.png"), x: 0}, {name: "Rossos", img: createImage("images/delo.png"), x: 0},
              {name: "Horse", img: createImage("images/delo.png"), x: 0}, {name: "XQC", img: createImage("images/delo.png"), x: 0}];

var walletAmt = 1000;

var raceArea = $('#race');
var information = $('#information');
var betMenu = $('#betMenu');

raceArea.hide();
betMenu.hide();

function createImage(src){
    var tmp = new Image();
    tmp.src = src;
    return tmp;
}