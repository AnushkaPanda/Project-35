
var dog,dogIMG, happyDog, happyDogIMG;
var database, foodS, foodStock, Food;
var score = 20;
function preload()
{
  dogIMG=loadImage("images/dogImg.png")
  happyDogIMG=loadImage("images/dogImg1.png")
}

function setup() {
	database = firebase.database();
    createCanvas(500,500);
    dog = createSprite(250,250,10,10);
    dog.addImage(dogIMG)
    dog.scale = 0.15;

    foodStock = database.ref('Food');
    foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogIMG)
    score-=1
  }

  
  
  

  drawSprites();
  textSize(25)
  fill("blue");
  text("Food remaining : "+score,20,40);
  
  
}
function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



