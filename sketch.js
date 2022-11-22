let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 34;
  let EllipseY = height / 23;
  let EllipseSize = vol;

  //vertical
  drawEllipse(EllipseX, EllipseY * 14, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 11, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 16, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 22, EllipseSize);
  drawEllipse(EllipseX * 14, EllipseY * 10, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 50);
    console.log(vol);
    //look up lerp for smoothness
  }

  function drawOtherEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 10);
    console.log(vol);
  }
  //Horizontal
  drawHorizontalEllipse(EllipseX, EllipseY * 14, EllipseSize);
  drawHorizontalEllipse(EllipseX * 2, EllipseY * 11, EllipseSize);
  drawHorizontalEllipse(EllipseX * 3, EllipseY * 16, EllipseSize);
  drawHorizontalEllipse(EllipseX * 5, EllipseY * 7, EllipseSize);
  drawHorizontalEllipse(EllipseX * 8, EllipseY * 3, EllipseSize);
  drawHorizontalEllipse(EllipseX * 9, EllipseY * 22, EllipseSize);
  drawHorizontalEllipse(EllipseX * 14, EllipseY * 10, EllipseSize);

  function drawHorizontalEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 50, vol * 4);
    console.log(vol);
    //look up lerp for smoothness
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  started = true;
  userStartAudio();
}
