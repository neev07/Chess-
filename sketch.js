var wp1,wp2,wp3,wp4,wp5,wp6,wp7,wp8;
var wr1,wk1,wb1,wq,wk,wr2,wk2,wb2;
var bp1,bp2,bp3,bp4,bp5,bp6,bp7,bp8;
var br1,bk1,bb1,bq,bk,br2,bk2,bb2;
var gameState="stop";
var database,position,canvas;
var wp_img, wb_img, wk_img, wr_img, wkg_img, wq_img; 
var bp_img, bb_img, bk_img, br_img, bkg_img, bq_img; 
var object1, object2;
var gs=0;

function preload(){
  wp_img = loadImage("Pawn.png");
  wb_img = loadImage("Bishop.png");
  wr_img = loadImage("Rook.png");
  wk_img = loadImage("Knight.png");
  wkg_img = loadImage("King.png");
  wq_img = loadImage("Queen.png");

  bp_img = loadImage("Pawn_B.png");
  bb_img = loadImage("Bishop_B.png");
  br_img = loadImage("Rook_B.png");
  bk_img = loadImage("Knight_B.png");
  bkg_img = loadImage("King_B.png");
  bq_img = loadImage("Queen_B.png");
}


function setup(){
  canvas = createCanvas(560,560);

  br1=createSprite(35,35,20,20);
  br1.addImage(br_img);
  br1.scale = 0.2;
  bk1=createSprite(105,35,20,20);
  bk1.addImage(bk_img);
  bk1.scale = 0.2;
  bb1=createSprite(175,35,20,20);
  bb1.addImage(bb_img);
  bb1.scale = 0.2;
  bq=createSprite(245,33,20,20);
  bq.addImage(bq_img);
  bq.scale = 0.2;
  bk=createSprite(315,30,20,20);
  bk.addImage(bkg_img);
  bk.scale = 0.2;
  bb2=createSprite(385,35,20,20);
  bb2.addImage(bb_img);
  bb2.scale = 0.2;
  bk2=createSprite(455,35,20,20);
  bk2.addImage(bk_img);
  bk2.scale = 0.2;
  br2=createSprite(525,35,20,20);
  br2.addImage(br_img);
  br2.scale = 0.2;

  bp1=createSprite(35,105,20,20);
  bp1.addImage(bp_img);
  bp1.scale = 0.2;
  bp2=createSprite(105,105,20,20);
  bp2.addImage(bp_img);
  bp2.scale = 0.2;
  bp3=createSprite(175,105,20,20);
  bp3.addImage(bp_img);
  bp3.scale = 0.2;
  bp4=createSprite(245,105,20,20);
  bp4.addImage(bp_img);
  bp4.scale = 0.2;
  bp5=createSprite(315,105,20,20);
  bp5.addImage(bp_img);
  bp5.scale = 0.2;
  bp6=createSprite(385,105,20,20);
  bp6.addImage(bp_img);
  bp6.scale = 0.2;
  bp7=createSprite(455,105,20,20);
  bp7.addImage(bp_img);
  bp7.scale = 0.2;
  bp8=createSprite(525,105,20,20);
  bp8.addImage(bp_img);
  bp8.scale = 0.2;



  wr1=createSprite(35,525,20,20);
  wr1.addImage(wr_img);
  wr1.scale = 0.2;
  wk1=createSprite(105,525,20,20);
  wk1.addImage(wk_img);
  wk1.scale = 0.2;
  wb1=createSprite(175,525,20,20);
  wb1.addImage(wb_img);
  wb1.scale = 0.2;
  wq=createSprite(245,525,20,20);
  wq.addImage(wq_img);
  wq.scale = 0.2;
  wk=createSprite(315,525,20,20);
  wk.addImage(wkg_img);
  wk.scale = 0.2;
  wb2=createSprite(385,525,20,20);
  wb2.addImage(wb_img);
  wb2.scale = 0.2;
  wk2=createSprite(455,525,20,20);
  wk2.addImage(wk_img);
  wk2.scale = 0.2;
  wr2=createSprite(525,525,20,20);
  wr2.addImage(wr_img);
  wr2.scale = 0.2;

  wp1=createSprite(35,455,20,20);
  wp1.addImage(wp_img);
  wp1.scale = 0.2;
  wp2=createSprite(105,455,20,20);
  wp2.addImage(wp_img);
  wp2.scale = 0.2;
  wp3=createSprite(175,455,20,20);
  wp3.addImage(wp_img);
  wp3.scale = 0.2;
  wp4=createSprite(245,455,20,20);
  wp4.addImage(wp_img);
  wp4.scale = 0.2;
  wp5=createSprite(315,455,20,20);
  wp5.addImage(wp_img);
  wp5.scale = 0.2;
  wp6=createSprite(385,455,20,20);
  wp6.addImage(wp_img);
  wp6.scale = 0.2;
  wp7=createSprite(455,455,20,20);
  wp7.addImage(wp_img);
  wp7.scale = 0.2;
  wp8=createSprite(525,455,20,20);
  wp8.addImage(wp_img);
  wp8.scale = 0.2; 


}


function draw(){
  background("white");


  if(mousePressedOver(bk1))
   {
    gs=1;
     
   }
   if(gs===1)
   {
    bk1.x=mouseX;
    bk1.y=mouseY;
   }

   if(mousePressedOver(br1))
   {
    gs=2;
     
   }
   if(gs===2)
   {
    br1.x=mouseX;
    br1.y=mouseY;
   }

  if(mousePressedOver(bb1))
  {
    gs=3;
  }
  if(gs===3){
    bb1.x=mouseX;
    bb1.y=mouseY;
  }

  if(mousePressedOver(bq))
  {
    gs=4;
  }
  if(gs===4){
    bq.x=mouseX;
    bq.y=mouseY;
  }

  if(mousePressedOver(bk))
   {
    gs=5;
     
   }
   if(gs===5)
   {
    bk.x=mouseX;
    bk.y=mouseY;
   }

  if(mousePressedOver(br2))
  {
    gs=6;
  }
  if(gs===6){
    br2.x=mouseX;
    br2.y=mouseY;
  }

  if(mousePressedOver(bk2))
  {
    gs=7;
  }
  if(gs===7){
    bk2.x=mouseX;
    bk2.y=mouseY;
  }

  if(mousePressedOver(bb2))
  {
    gs=8;
  }
  if(gs===8){
    bb2.x=mouseX;
    bb2.y=mouseY;
  }

  if(mousePressedOver(bp1))
  {
    gs=9;
  }
  if(gs===9){
    bp1.x=mouseX;
    bp1.y=mouseY;
  }
  
  if(mousePressedOver(bp2))
  {
    gs=10;
  }
  if(gs===10){
    bp2.x=mouseX;
    bp2.y=mouseY;
  }

  if(mousePressedOver(bp3))
  {
    gs=11;
  }
  if(gs===11){
    bp3.x=mouseX;
    bp3.y=mouseY;
  }

  if(mousePressedOver(bp4))
  {
    gs=12;
  }
  if(gs===12){
    bp4.x=mouseX;
    bp4.y=mouseY;
  }

  if(mousePressedOver(bp5))
  {
    gs=13;
  }
  if(gs===13){
    bp5.x=mouseX;
    bp5.y=mouseY;
  }

  if(mousePressedOver(bp6))
  {
    gs=14;
  }
  if(gs===14){
    bp6.x=mouseX;
    bp6.y=mouseY;
  }

  if(mousePressedOver(bp7))
  {
    gs=15;
  }
  if(gs===15){
    bp7.x=mouseX;
    bp7.y=mouseY;
  }

  if(mousePressedOver(bp8))
  {
    gs=16;
  }
  if(gs===16){
    bp8.x=mouseX;
    bp8.y=mouseY;
  }






  if(mousePressedOver(wr1))
  {
    gs=17;
  }
  if(gs===17){
    wr1.x=mouseX;
    wr1.y=mouseY;
  }

  if(mousePressedOver(wk1))
  {
    gs=18;
  }
  if(gs===18){
    wk1.x=mouseX;
    wk1.y=mouseY;
  }

  if(mousePressedOver(wb1))
  {
    gs=19;
  }
  if(gs===19){
    wb1.x=mouseX;
    wb1.y=mouseY;
  }

  if(mousePressedOver(wk))
  {
    gs=20;
  }
  if(gs===20){
    wk.x=mouseX;
    wk.y=mouseY;
  }

  if(mousePressedOver(wq))
  {
    gs=21;
  }
  if(gs===21){
    wq.x=mouseX;
    wq.y=mouseY;
  }

  if(mousePressedOver(wr2))
  {
    gs=22;
  }
  if(gs===22){
    wr2.x=mouseX;
    wr2.y=mouseY;
  }

  if(mousePressedOver(wk2))
  {
    gs=23;
  }
  if(gs===23){
    wk2.x=mouseX;
    wk2.y=mouseY;
  }

  if(mousePressedOver(wb2))
  {
    gs=24;
  }
  if(gs===24){
    wb2.x=mouseX;
    wb2.y=mouseY;
  }

  if(mousePressedOver(wp1))
  {
    gs=25;
  }
  if(gs===25){
    wp1.x=mouseX;
    wp1.y=mouseY;
  }
  
  if(mousePressedOver(wp2))
  {
    gs=26;
  }
  if(gs===26){
    wp2.x=mouseX;
    wp2.y=mouseY;
  }

  if(mousePressedOver(wp3))
  {
    gs=27;
  }
  if(gs===27){
    wp3.x=mouseX;
    wp3.y=mouseY;
  }

  if(mousePressedOver(wp4))
  {
    gs=28;
  }
  if(gs===28){
    wp4.x=mouseX;
    wp4.y=mouseY;
  }

  if(mousePressedOver(wp5))
  {
    gs=29;
  }
  if(gs===29){
    wp5.x=mouseX;
    wp5.y=mouseY;
  }

  if(mousePressedOver(wp6))
  {
    gs=30;
  }
  if(gs===30){
    wp6.x=mouseX;
    wp6.y=mouseY;
  }

  if(mousePressedOver(wp7))
  {
    gs=31;
  }
  if(gs===31){
    wp7.x=mouseX;
    wp7.y=mouseY;
  }

  if(mousePressedOver(wp8))
  {
    gs=32;
  }
  if(gs===32){
    wp8.x=mouseX;
    wp8.y=mouseY;
  }

  for(var i=1;i<=560;i=i+70)
  {
    
    for(var j=1;j<=560;j=j+70)
    {
      
      fill("white");
      rect(j,i,70,70);
      drawSprites();
    }
   
  }
  
}

function mouseReleased(object2)
{
  gs=0;
  object2.x=object2.x;
  object2.y=object2.y;
  
}




// function readOp(data)
// {
//  pos=data.val();
//  br1.x=pos.x;
//  br1.y=pos.y;
// }

// function showerr()
// {
//   console.log("err");
// }
// function writePosition(x,y)
// {
//   database.ref("pieces/br1/pos").set({
//     x:br1.x+x,
//     y:br1.y+y
//   })
// }