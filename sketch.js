let hiArray;
let pg;
let roboto;
let slider;

function setup() {
  createCanvas(4914, 3231);
  pg = createGraphics(width,height);
  roboto = loadFont('assets/RobotoMono-Bold.ttf');
  //textFont(roboto);

  slider = createSlider(0, 90, 5, 1);
  slider.position(10, 1100);
  slider.style('width', '80px');
}

function draw() {
  background(255);
  var wave = sin(radians(frameCount)) * 100;

  for (var a = 0; a < width-100; a = a + 275){
    for (var b = 0; b < height-100; b = b  + 20){

      let val = slider.value();

      fill(0);
      textSize(20);
      translate(mouseX,mouseY);
      rotate(val);
      //text('Networks•Positions•Designers•',a,b);
      text('Designers',50+a,50+b);
      rotate(val);
      text('Networks',150+a,50+b);
      rotate(val);
      text('Positions',240+a,50+b);
    }
  }

/*   pg.push();
  pg.textAlign(LEFT);
  pg.textSize(100);
  pg.fill(0);
  pg.text('DIVERSITY', 200, 200);
  pg.text('ARCHIVES', 200, 500);
  pg.text('SEGREGATION', 200, 800);
  pg.pop();

  var tilesx = map(mouseX,0,width,0,5);
  var tilesy = map(mouseY,0,height,0,5);
  var tileW = width/tilesx;
  var tileH = height/tilesy;


 for (var y = 0; y < tilesy; y++){
  for (var x = 0; x < tilesx; x++) {

 var wave1 = sin(frameCount * 0.01 * (x+y)) * (mouseX*0.1);
 var wave2 = cos(frameCount * 0.01 * (x+y)) * (mouseY*0.1);
 var wave3 = tan(frameCount * 0.01 * (x+y)) * (mouseY*0.1);
  
  // SOURCE
    var sx = x*tileW+wave2;
    var sy = y*tileH+wave1;
    var sw = tileW;
    var sh = tileH;


    // DESTINATION

    var dx = 50+(x*tileW);
    var dy = 50+(y*tileH);
    var dw = tileW + wave3;
    var dh = tileH;

    copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
  }
  } */

/* let fidelity = 0.1;
let xPosition = 50;
let yPosition = 500;
let defineSize = 90;
let circleRadius = 5;
let lineLength = 10;

hiArray = roboto.textToPoints('DIVERSITY/ARCHIVE/SEGREGATION',xPosition,yPosition,defineSize, {

  sampleFactor: fidelity

});

for (let i = 0; i < hiArray.length; i++){
  noStroke();
  fill(0);
  ellipse(hiArray[i].x*wave, hiArray[i].y,circleRadius,circleRadius);

  //translate(hiArray[i].x, hiArray[i].y);
    //line(i, i, hiArray[i].x,hiArray[i].y);
} */

} 




function keyPressed(){

  if (keyCode === ENTER) {
    save('cover.jpg');
  }
}
