var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

/*ctx.beginPath();
ctx.rect(30, 30, 30, 30);
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();
*/

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
