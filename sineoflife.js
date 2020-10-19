let xspacing = 32;   // How far apart should each horizontal location be spaced
let w;              // Width of entire wave

let height;
let width;
let theta = 0.0;  // Start angle at 0
let maxAmplitude;
let amplitude;  // Height of wave
let period = 1500.0;  // How many pixels before the wave repeats
let dx;  // Value for incrementing X, a function of period and xspacing
let yvalues = [];  // Using an array to store height values for the wave
let x = theta;
let inc = 1;

let fillColor;

function setup() {
  colorMode(RGB, 100);
  fillColor = color(100,3,30,40);
  height = windowHeight;
  width = windowWidth;
  maxAmplitude = height/ 2.5;
  amplitude = height / 5;
  w = width + xspacing * 2;
  var canvas = createCanvas(width, height);


  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array( Math.floor(w / xspacing));
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  calcWave();
  renderWave();
  if (mouseIsPressed) {
    amplitude += inc
    theta += random(.01, .02);
    if (Math.abs(amplitude) > height / 2.5){
      inc = -Math.sign(inc) * random(1,10);
    }
    else if (amplitude < -windowHeight) {
      amplitude = windowHeight;
    }
  }
  else{
    theta -= random(.02, .03);
  }
}

function calcWave() {
  let x = theta

  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  background(10,4,15);

  fillColor
  fill(fillColor);
  stroke(20,10,60,40);
  strokeWeight(8);

  for (let x = 1; x < yvalues.length; x++) {
    //ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
    let lastx = x-1;
    quad(
        lastx * xspacing,
        height/2 + yvalues[lastx],
        x * xspacing,
        height/2 + yvalues[x],
        lastx * xspacing,
        0,
        x * xspacing,
        0);
  }
}

function clampColor(color) {
  let new_color = Color();
}
