var hands = new HandRecognizer();


var myPainter = new Painter()


function setup() {
    createCanvas(windowWidth, windowHeight);
  
    frameRate(30);
  figure();
  colors();
    
}

function draw() {
  
  
    hands.predict();
  var dedoColor = hands.getLeftLandmark(Landmarks.Pointer_Tip);
  
  
    var thumbTip = hands.getRightLandmark(Landmarks.Thumb_Tip);
    var pointerTip =  hands.getRightLandmark(Landmarks.Pointer_Tip);
  
    var landmarkDist;
    if (hands.rightHandVisible()){
        landmarkDist = dist(thumbTip.x, thumbTip.y, pointerTip.x, pointerTip.y);
    } else{
        landmarkDist = Infinity;
    }
    var threshold = 30;
    if (landmarkDist < threshold) {    
        console.log("Pinched!");
        myPainter.penDown(thumbTip.x,thumbTip.y);
    } else {
        myPainter.penUp();
    }
  
  if(pointerTip.x >=30 && pointerTip.x <= 60 &&
         pointerTip.y >=50 && pointerTip.y <=80){
        myPainter.penDownBl(thumbTip.x,thumbTip.y);
      }
  
  else if(pointerTip.x >=30 && pointerTip.x <= 60 &&
         pointerTip.y >=100 && pointerTip.y <=130){
        myPainter.penDownR(thumbTip.x,thumbTip.y);
      }
  else if(pointerTip.x >=30 && pointerTip.x <= 60 &&
         pointerTip.y >=150 && pointerTip.y <=180){
        myPainter.penDownG(thumbTip.x,thumbTip.y);
      }
  else if(pointerTip.x >=30 && pointerTip.x <= 60 &&
         pointerTip.y >=200 && pointerTip.y <=230){
        myPainter.penDownB(thumbTip.x,thumbTip.y);
      }
  
  if(pointerTip.x >=20 && pointerTip.x <= 50 &&
         pointerTip.y >=250 && pointerTip.y <=280){
    clear();
    figure();
    colors();
      }
    
    hands.drawLandmarks(false);
  
  
  

}

function colors(){
  strokeWeight(2)
  //stroke("black");
  fill("black");
  rect(30,50,30,30);
  
  //stroke("red");
  fill("#F13C10");
  rect(30,100,30,30);
  
  fill("#098B15");
  rect(30,150,30,30);
  
  fill("#A620CA");
  rect(30,200,30,30);
  
  noStroke();
  fill("#079BBF");
  rect(20,250,50,30);
  fill("black");
  text("limpiar", 27,270)
}

function figure(){
   strokeWeight(2);
    stroke("black");
  fill(153, 102, 0);
    ellipse(windowWidth/2, windowHeight/2, 400, 500);
  
    fill(255,255,255);
    circle(windowWidth/2-50, windowHeight/2-80, 70);
    circle(windowWidth/2+50, windowHeight/2-80, 70);
  
    fill(0,0,0);
    circle(windowWidth/2-50, windowHeight/2-80, 30);
    circle(windowWidth/2+50, windowHeight/2-80, 30);
}
