let xBolinha = 20;
let yBolinha = 20;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;
function setup() {
  createCanvas(600, 400);
  fill("green");
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
}
function mostraBolinha() {
  fill("white");
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha() {
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}
function verificaColisaoBorda() {
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha = velocidadeYBolinha * -1;
  }
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha = velocidadeXBolinha * -1;
  }
}
function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}
function movimentaRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 5;
  }
  if (keyIsDown(83)) {
    yRaquete += 5;
  }
}
function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if(colidiu){
    velocidadeXBolinha *=-1;
  }
}
