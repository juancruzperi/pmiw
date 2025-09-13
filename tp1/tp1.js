//https://youtu.be/cjjVBj69sMc
//Juan Cruz Peri - Comision 1

let cambio = true;
let rotacion;
let click = false;
let color1 = 0, color2 = 255;
let imagen;

function preload() {
  imagen = loadImage('data/imagenTp1.png');
}

function setup() {
  createCanvas(800, 400);
  background(200);
  noStroke();
}

function draw() {
  background(200);
  image(imagen, 0, 0, 400, 400);
  dibujarCuadrados(color1, color2);
  cuadradoCentro(color1, color2);
}

function dibujarCuadrados(colorNegro, colorBlanco) {
  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 2; y++) {
      for (let z = 0; z < 5; z++) {
        if (z % 2 === 0) {
          fill(colorNegro);
        } else {
          fill(colorBlanco);
        }
        rect(
          400 + z * 23.5 + x * 188,
          0 + z * 23.5 + y * 188,
          211.7 - z * 47,
          211.7 - z * 47
          );
      }
    }
  }
}

function cuadradoCentro(colorNegro, colorBlanco) {
  if (click) {
    rotacion = mouseX * 0.009;
  } else {
    rotacion = 0;
  }

  for (let z = 0; z < 5; z++) {
    push();
    translate(600, 200);
    rotate(rotacion);
    if (z % 2 === 0) {
      fill(colorNegro);
    } else {
      fill(colorBlanco);
    }
    rect(-106 + z * 23.5, -106 + z * 23.5, 211.7 - z * 47, 211.7 - z * 47);
    pop();
  }
}

function dentroCuadradoCentro(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}

function mousePressed() {
  let ancho = 211.7;
  let alto = 211.7;
  let x = 600 - ancho / 2;
  let y = 200 - alto / 2;

  if (dentroCuadradoCentro(x, y, ancho, alto)) {
    click = !click;
  }
}

function keyPressed() {
  if (key === ' ') {
    cambio = !cambio;
    if (cambio) {
      color1 = 0;
      color2 = 255;
    } else {
      color1 = 255;
      color2 = 0;
    }
  }
}
