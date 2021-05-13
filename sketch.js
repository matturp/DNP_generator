let slider;
let slider2;
let slider3;

function setup() {
  createCanvas(3274, 2514);

  slider = createSlider(0, 90, 5, 1);
  slider.position(100, height+50);
  slider.style('width', '200px');
  
  slider2 = createSlider(0, 50, 25, 5);
  slider2.position(300, height+50);
  slider2.style('width', '200px');
  
  slider3 = createSlider(0, 5000, 50, 25);
  slider3.position(500, height+50);
  slider3.style('width', '500px');
}

function draw() {
  background(255);

  for (var a = 0; a < width-100; a = a + 275){
    for (var b = 0; b < height-100; b = b  + 20){

      let val = slider.value();
      let txtsize = slider2.value();
      let space = slider3.value();

      fill(0);
      textSize(txtsize);
      translate(mouseX,mouseY);
      rotate(val);
      //text('Networks•Positions•Designers•',a,b);
      text('Designers',space+a,space+b);
      rotate(val);
      text('Networks',space+a,space+b);
      rotate(val);
      text('Positions',space+a,space+b);
    }
  }

} 




function keyPressed(){

  if (keyCode === ENTER) {
    save('cover.jpg');
  }
}
