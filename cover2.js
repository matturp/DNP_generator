let slider;

function setup() {
  createCanvas(3274, 2514);

  slider = createSlider(0, 90, 20, 1);
  slider.position(10, 0);
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

      text('Designers',50+a,50+b);
      rotate(val);
      text('Networks',150+a,50+b);
      rotate(val);
      text('Positions',240+a,50+b);
    }
  }

} 




function keyPressed(){

  if (keyCode === ENTER) {
    save('cover.jpg');
  }
}
