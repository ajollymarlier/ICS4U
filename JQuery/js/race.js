var walletAmount = 1000;
var horses = [{name: "Aliqyan", img: createImage("images/test.jpg")}, {name: "Rossos", img: createImage("images/test.jpg")},
              {name: "Bigdee", img: createImage("images/test.jpg")}, {name: "XQC", img: createImage("images/test.jpg")}];

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(30, 30, 30, 30);
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();

drawHorses(canvas, ctx);

function drawHorses(canvas, ctx){
  var startY = 100;
  ctx.beginPath();
  for(var i = 0; i < 4; i++){
    ctx.drawImage(horses[i].img, 20, startY);
    ctx.fill();
    startY += 100;
  }
  ctx.closePath();
}

function createImage(src){
    var tmp = new Image();
    tmp.src = src;
    return tmp;
}
