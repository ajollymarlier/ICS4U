var walletAmount = 1000;
/*var horses = [{name: "Aliqyan", img: createImage("images/delo.png")}, {name: "Rossos", img: createImage("images/delo.png")},
              {name: "Bigdee", img: createImage("images/delo.png")}, {name: "XQC", img: createImage("images/delo.png")}];*/

var horses = [{name: "Aliqyan", img: new Image()}, {name: "Rossos", img: new Image()},
              {name: "Bigdee", img: new Image()}, {name: "XQC", img: new Image()}];

for(var i = 0; i < horses.length; i++){
  horses[i].img.src = "images/delo.png";
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

drawHorses(canvas, ctx);

function drawHorses(canvas, ctx){
  var startY = 100;
  for(var i = 0; i < 4; i++){
    ctx.beginPath();
    ctx.drawImage(horses[i].img, 300, startY);
    ctx.closePath();
    startY += 100;
  }
}

function createImage(src){
    var tmp = new Image();
    tmp.src = src;
    return tmp;
}
