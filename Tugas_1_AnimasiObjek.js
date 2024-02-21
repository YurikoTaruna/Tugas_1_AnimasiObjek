let j;
function setup() {
  createCanvas(1000,500);
  

  x1 = 75;
  x2 = 200;
  x3= 200;
  x4 = 200;
  x5 = 200;
  x6 = 230;
  x7 = 230;
  x8 = 230;
  x9 = 230;
  x10 = 75;
  x11 = 75;
  x12 = 75;
  y1 = 380;
  y2 = 380;
  y3 = 380;
  y4 = 400;
  y5 = 400;
  y6 = 400;
  y7 = 400;
  y8 = 430;
  y9 = 430;
  y10 = 430;
  y11 = 380;
  y12 = 430;
  j = 0;
}

function draw() {
 strokeWeight(4);
 
  var x1= 75 + 50 * Math.sin(PI/500*j)
  j+=1
  var x2= 200 + 50 * Math.sin(PI/500*j)
  j+=1
  var x3= 200 + 50 * Math.sin(PI/500*j)
  j+=1
  var x4= 200 + 50* Math.sin(PI/500*j)
  j+=1
  var x5= 200 + 50 * Math.sin(PI/500*j)
  j+=1
  var x6= 230 + 50 * Math.sin(PI/500*j)
  j+=1
  var x7= 230 + 50 * Math.sin(PI/500*j)
  j+=1
  var x8= 230 + 50* Math.sin(PI/500*j)
  j+=1
  var x9= 230 + 50 * Math.sin(PI/500*j)
  j+=1
  var x10= 75 + 50 * Math.sin(PI/500*j)
  j+=1
  var x11= 75 + 50 * Math.sin(PI/500*j)
  j+=1
  var x12= 75 + 50 * Math.sin(PI/500*j)
  j+=1
  
  
  
  background(255,255,255);
  fill(0,0,255);
  line(x1,y1,x2,y2);
  line(x3,y3,x4,y4);
  line(x5,y5,x6,y6);
  line(x7,y7,x8,y8);
  line(x9,y9,x10,y10);
  line(x11,y11,x12,y12);
  
  

  l1 = 95;
  l2= 200;
  var l1=95 + 50* Math.sin(PI/500*j)
  j+=1
  var l2=200 + 50* Math.sin(PI/500*j)
  j+=1
  fill(0,0,0);
  ellipse(l1,449,30,30) //roda kiri
  ellipse(l2,449,30,30) //roda kanan

  
  
  beginShape();
  fill(225,225,225);
  vertex(575,380);
  vertex(700,380);
  vertex(700,400);
  vertex(730,400);
  vertex(730,430);
  vertex(575,430);
  vertex(575,380);
  endShape();
  fill(0,0,0);
  ellipse(595,449,30,30) //roda kiri
  ellipse(700,449,30,30)//roda kanan

  line(500,0,500,500);
  



}
