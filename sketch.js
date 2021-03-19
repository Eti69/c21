var canvas;
var music;
var block1, block2, block3, block4;
var ball, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(100,200,100,40);
    block1.shapeColor="blue";
    block2=createSprite(300,400,100,40);
    block2.shapeColor="red";
    block3=createSprite(300,200,40,100);
    block3.shapeColor="green";
    block4=createSprite(500,550,40,100);
    block4.shapeColor="white";
    ball=createSprite(200,100,20,20);
    ball.shapeColor="purple";
    ball.velocityX=8;
    ball.velocityY=9;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
    ball.shapeColor="blue";
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor="red";
        }
        if(block3.isTouching(ball)&&ball.bounceOff(block3)){
            ball.shapeColor="green";
            }
            if(block4.isTouching(ball)&&ball.bounceOff(block4)){
                ball.shapeColor="white";
                }
    drawSprites()
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
