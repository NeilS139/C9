var sprite;
function setup() 
{
  createCanvas(400, 400);
  sprite=createSprite(200,200,10,10);
}

function draw() 
{
  background(220);

 if(keyIsDown(UP_ARROW))
 {
   sprite.y-=10;
 }
 if(keyIsDown(DOWN_ARROW))
 {
   sprite.y+=10;
 }
 if(keyIsDown(RIGHT_ARROW))
 {
   sprite.x+=10;
 }

 if(keyIsDown(LEFT_ARROW))
 {
   sprite.x-=10;
 }
 

 drawSprites();
}


