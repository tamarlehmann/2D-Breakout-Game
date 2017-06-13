// starting positions for the ball, bottom centre.
var x = canvas.width/2
var y = canvas.height-30

// position of movement
var dx = 2;
var dy = -2;

// ball radius
var ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();

  // if ball hits the sides change to the opposite direction
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  // if ball hits the top change to the opposite direction, if ball hits paddle, change direction, if ball hits botttom not paddle alert game over.
  if(y + dy < ballRadius) {
    dy = -dy;
  } else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      lives--;
      if (!lives) {
        alert("GAME OVER");
        document.location.reload();
      }
      else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }

  collisionLogic();

  x += dx;
  y += dy;

  // if right/left pressed and paddle is within canvas boundaries
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
      paddleX -= 7;
    }
  }

setInterval(draw, 10);
