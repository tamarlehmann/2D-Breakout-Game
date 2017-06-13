var score = 0

var lives = 3;

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function collisionLogic() {
  for(c = 0; c < brickColumnCount; c++) {
    for(r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r]
       if (b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          b.status = 0;
          dy = -dy;
          score++
          if (score == brickRowCount*brickColumnCount) {
            alert("CONGRATULATIONS, YOU WIN");
            document.location.reload();
          }
        }
      }
    }
  }
}
