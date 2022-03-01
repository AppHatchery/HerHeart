// Where is the circle
let draft, ready, i;
function preload() {
  ready = loadImage("heart-color.png");
  draft = loadImage("heart-bw.png");
}
function setup() {
  createCanvas(230, 225);
  image(ready, 0, 0);
  image(draft, 0, 0);
  i = 1;
}

function draw() {
  i = i-1;
  if (i > -50){
    copy(ready, 0, 240, 230, i*2, 0, 240, 230, i*2);
  }
}