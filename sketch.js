function setup() {
  createCanvas(800,400);
  a = createSprite(400,200,60,50);
  b = createSprite(200,100,40,50);
  a.shapeColor = 'green';
  b.shapeColor = 'green';
  car = createSprite(100,200,40,40);
   car.shapeColor = 'blue' 
   car.velocityX = 3; 
   wall = createSprite(700,200,20,80);
    wall.shapeColor = 'brown' 
 
}

function draw() {
  hello janmay
  background(255,255,255);  
 a.x = World.mouseX;
 a.y = World.mouseY;
 if(isTouching(a,b)){
  a.shapeColor = 'red' 
  b.shapeColor = 'red';
 }
 else
 {
   a.shapeColor = 'green';
   b.shapeColor = 'green';
 }
 bounceoff(car,wall) 
 
 drawSprites();
}



function isTouching(object1,object2){
  if(object1.x-object2.x<(object1.width/2+object2.width/2)
  &&object2.x-object1.x<(object2.width/2+object1.width/2)
  &&object1.y-object2.y<(object1.height/2+object2.height/2)
  &&object2.y-object1.y<(object1.height/2+object2.height/2)){

return true
  
  }
else{
  return false
}

}

function bounceoff(object1,object2){
  if(object1.x-object2.x<(object1.width/2+object2.width/2){
  &&object2.x-object1.x<(object2.width/2+object1.width/2)
object1.velocityX = (-1)*object1.velocityX  
object1.x-object2.x<(object1.width/2+object2.width/2)
  &&object2.x-object1.x<(object2.width/2+object1.width/2))
object1.velocityX = (-1)*object1.velocityX
}
}
