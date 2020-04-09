let xspacing = 32;   // How far apart should each horizontal location be spaced
let w;              // Width of entire wave

let height;
let width
let theta = 0.0;  // Start angle at 0
let maxAmplitude;
let amplitude;  // Height of wave
let period = 1500.0;  // How many pixels before the wave repeats
let dx;  // Value for incrementing X, a function of period and xspacing
let yvalues = [];  // Using an array to store height values for the wave
let x = theta;

function setup() {

  height = windowHeight;
  width = windowWidth;
  maxAmplitude = height/ 2.5;
  amplitude = height / 5;
  w = width + xspacing * 2;
  var canvas = createCanvas(width, height);
  stroke('rgba(221, 180, 101, 0.8)');
  strokeWeight(10);


  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array( Math.floor(w / xspacing));
}

function draw() {
  calcWave();
  renderWave();
  if (mouseIsPressed) {
    amplitude += random(-1, 1) * 10;
    if (amplitude > height / 2.5){
      amplitude = -windowHeight /2;
    }
    else if (amplitude < -windowHeight) {
      amplitude = windowHeight;

    }
  }
  else{
    theta += .08;
  }
}

function calcWave() {
  theta -= 0.04;

  let x = theta

  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  background('#200c45');
  fill('#3476e4');

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
