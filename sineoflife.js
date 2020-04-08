let xspacing = 16;   // How far apart should each horizontal location be spaced
let w;              // Width of entire wave

let theta = 0.0;  // Start angle at 0
let amplitude = 75.0;  // Height of wave
let period = 500.0;  // How many pixels before the wave repeats
let dx;  // Value for incrementing X, a function of period and xspacing
let yvalues = [];  // Using an array to store height values for the wave
let x = theta;

function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent('sketch');
  stroke('#e7dd82');
  strokeWeight(10);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(w/xspacing);

}

function draw() {
  background('#200c45');
  calcWave();
  renderWave();
  if (mouseIsPressed) {
    amplitude += random(-100.0, 100.0);
    if (amplitude > 400){
      amplitude = -375
    }
    else if (amplitude < -400) {
      amplitude = 375

    }
  }
}

function calcWave() {
  theta += 0.05;

  let x = theta

  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  for (let x = 1; x < yvalues.length; x++) {
    //ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
    let lastx = x-1;
    line(
      lastx*xspacing,
      height/2+yvalues[lastx],
      x*xspacing, height/2+yvalues[x]);
  }
}
