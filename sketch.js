var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height / 2);

  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(200, 200, 50, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);

  if (collide(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if (damage > 10) {
      wall.shapeColor = "red";
    } else {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function collide(bullet, wall) {
  var bulletRightEdge = bullet.x + bullet.width;
  var wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  } else {
    return false;
  }
}