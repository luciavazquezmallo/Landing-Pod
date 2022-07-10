/* Variables sonidos */
let soundFile
let song
let volumenSong
let volumen = 0

/*Variables visualizaciones */
let columnas = 2
let filas = 3
let anchoColumna
let distancia
let xOff = 0.0
let son1
let son2
let estrellita = [] //creamos una lista vacia para poder asignarle un valor de x en el for. Usamos como referencia: https://happycoding.io/examples/p5js/arrays/falling-points 

/*tipografias */
let fuente
let montserrat

/*visualizaciones*/
let prendido = false
let lluvia = false
let circulo = false
let movimiento = false
let circuloamarillo = false
let trama = false
let trama1 = false
let trama2 = false
let trama3 = false
let trama4 = false
let aumentoCirculos = false
let wave = false

/*angulos, velocidades, radios de giro*/
let angle = 0
let angle2 = 0
let angle3 = 0
let angle0 = 0
let angle4 = 0

let vel = 2
let vel2 = 1.9
let vel3 = 1.8
let vel4 = 1.7
let vel5 = 1.6

let radioGiro = 200
let radioGiro2 = 175
let radioGiro3 = 125
let radioGiro4 = 100
let radioGiro5 = 75


/* Colores */
let color1
let color2
let colorFondo
let colorFigura
let cambioColor = false


/*carga de archivos*/
function preload() {
  soundFile = loadSound("music/fur-elise.mp3")
  fuente = loadFont("fonts/Prisma.otf")
  montserrat = loadFont("fonts/Montserrat-Light.ttf")
  song = loadSound("music/ITHOFMK.mp3")
}

/*setup*/
function setup() {
  createCanvas(windowWidth, windowHeight)

  /*Volumenes para cada cancion */
  son1 = createVolume(soundFile)
  son2 = createVolume(song)

  /*invertir colores en "i" de visualzacion */
  color1 = color(124, 243, 5, 90)
  color2 = color(0, 3, 33, 30)
  colorFondo = color1
  colorFigura = color2
}

function draw() {
  /* Reemplaza al background */
  fill(0, 3, 33, 10)
  rect(0, 0, width, height)

  /*introduccion o visualizacion*/
  if (prendido) {
    drawCircles()
  } else {
    drawIntro()
  }
}

/* traduce el volumen*/
function createVolume(sound) {
  let vol = new p5.Amplitude()
  vol.setInput(sound)
  return vol
}

/*crea la introduccio n*/
function drawIntro() {
  background(0, 3, 33)

  /*estrellas amarillas*/
  push()
  fill(255, 238, 0)
  noStroke()
  for (let i = 0; i < width; i = i + 100) {
    ellipse(i, random(height), random(5, 10))
  }
  pop()

  /*barras laterales con letras de comando*/
  push()
  fill(0, 0, 51)
  stroke(255, 0, 136)
  rect(0, height / 4, width / 16, width / 4, 0, 30, 30, 0)
  rect(width * 15 / 16, height / 4, width / 16, width / 4, 30, 0, 0, 30)
  pop()

  push()
  fill(255, 0, 136)
  noStroke()
  textSize(25)
  textFont(montserrat)
  text("Q", 40, height / 4 + 80)
  text("w", 40, height / 4 + 120)
  text("E", 40, height / 4 + 160)
  text("R", 40, height / 4 + 200)
  text("T", 40, height / 4 + 240)
  text("A", 40, height / 4 + 280)
  text("S", 40, height / 4 + 320)
  text("D", 40, height / 4 + 360)

  text("I", width * 15 / 16 + 40, height / 4 + 160)
  text("K", width * 15 / 16 + 40, height / 4 + 200)
  text("L", width * 15 / 16 + 40, height / 4 + 240)
  text("J", width * 15 / 16 + 40, height / 4 + 280)
  text("H", width * 15 / 16 + 40, height / 4 + 320)
  pop()


  /*sectores en las esquinas para cada cancion*/
  push()
  fill(0, 0, 51)
  stroke(255, 0, 136)
  ellipse(0, height, width / 6)
  ellipse(width, 0, width / 6)
  pop()

  /*welcome*/
  push()
  fill(255, 0, 136)
  noStroke()
  textSize(100) //como hacemos para que sea mas interesante
  textAlign(CENTER, CENTER)
  textFont(fuente)
  text("WELCOME", width / 2, height / 2)
  pop()

  /*indicaciones de acciones*/
  push()
  fill(255, 0, 136)
  noStroke()
  textSize(20)
  textFont(montserrat)
  push()
  textAlign(CENTER)
  text("presiona -space- para comenzar", width / 2, (height / 2) + 100)
  pop()
  text("presiona 1 y 2 para activar las canciones", width / 8, height / 8)
  push()
  textAlign(RIGHT)
  text("acerca el mouse a -el rey- o a -elisa- para escuchar", width * 7 / 8, height / 8)
  pop()

  /*indicaciones de canciones*/
  push()
  textAlign(CENTER)
  noStroke()
  text("EL REY", width / 26, height * 15 / 16)
  text("ELISA", width * 24 / 25, height * 1 / 16)
  pop()

}

function drawCircles() {

  /*volumen de cada cancion segun mouseX y mouseY*/
  volumen = map(mouseX, 0, width, 0, 1)
  soundFile.setVolume(volumen)

  volumen = map(mouseY, 0, height, 0, 1)
  song.setVolume(volumen)


  /*volumenes en visualizacion*/
  let level = son1.getLevel()
  let level2 = son2.getLevel()

  /*mapeo de diametros y grosor*/
  let diametro = map(level, 0, 1, 0, windowWidth)
  let diametro2 = map(level, 0, 1, 0, windowWidth / 3)
  let grosor = map(level, 0, 1, 0, 50)
  let diametroSon2 = map(level2, 0, 1, 0, height)
  let grosorSon2 = map(level2, 0, 1, 0, 50)


/*visualizaciones*/
  /* circulos cian*/
  if (circulo) {
    push()
    noFill()
    stroke(79, 255, 220)
    strokeWeight(grosor)
    ellipse(windowWidth / 3, windowHeight / 2, diametro / 2)
    ellipse(windowWidth * 2 / 3, windowHeight / 2, diametro / 2)
    pop()
  }


  /*circulos con cambio de color*/
  if (aumentoCirculos) {
    anchoColumna = width / columnas
    altoFila = height / filas

    fill(colorFondo)
    rect(0, 0, width, height)

    for (let x = 1; x < columnas; x++) {
      let posX = anchoColumna * x
      for (let y = 1; y < filas; y++) {
        let posY = altoFila * y
        push()
        fill(colorFigura)
        strokeWeight(grosorSon2)
        stroke(6, 0, 59)
        ellipse(posX, posY, diametroSon2)
        pop()
      }
    }
  }

  /*onda con noise*/
  if (wave) {
    for (let x = 0; x < width; x++) {
      xOff = xOff + 0.001
      let noiseVal = noise(xOff) * width
      push()
      noStroke()
      fill(79, 255, 220)
      ellipse(x, noiseVal, diametroSon2 / 9)
      pop()
    }
  }

  /*cirulo amarillo central*/
  if (circuloamarillo) {
    push()
    stroke(255, 238, 0)
    strokeWeight(grosor)
    noFill()
    ellipse(windowWidth / 2, windowHeight / 2, diametroSon2)
    pop()
  }

  /*orbitas*/
  if (trama) {
    angleMode(DEGREES)
    push()
    noFill()
    strokeWeight(diametro2)
    stroke(255, 0, 136)
    translate(width / 2, height / 2)
    rotate(angle0)
    ellipse(radioGiro, radioGiro, 30)
    angle0 = angle0 + vel
    pop()
  }

  if (trama1) {
    push()
    noFill()
    strokeWeight(diametro2 / 2)
    stroke(255, 0, 136)
    angleMode(DEGREES)
    translate(width / 2, height / 2)
    rotate(angle)
    ellipse(radioGiro2, radioGiro2, 30)
    angle = angle + vel2
    pop()
  }

  if (trama2) {
    push()
    noFill()
    strokeWeight(diametro2 / 3)
    stroke(255, 0, 136)
    angleMode(DEGREES)
    translate(width / 2, height / 2)
    rotate(angle2)
    ellipse(radioGiro3, radioGiro3, 30)
    angle2 = angle2 + vel3
    pop()
  }

  if (trama3) {
    push()
    noFill()
    strokeWeight(diametro2 / 4)
    stroke(255, 0, 136)
    angleMode(DEGREES)
    translate(width / 2, height / 2)
    rotate(angle3)
    ellipse(radioGiro4, radioGiro4, 30)
    angle3 = angle3 + vel4
    pop()
  }

  if (trama4) {
    push()
    noFill()
    strokeWeight(diametro2 / 4)
    stroke(255, 0, 136)
    angleMode(DEGREES)
    translate(width / 2, height / 2)
    rotate(angle4)
    ellipse(radioGiro5, radioGiro5, 30)
    angle4 = angle4 + vel5
    pop()
  }


  /*lluvia de estrellas*/
  if (lluvia) {
    push()
    stroke(7, 114, 255)
    strokeWeight(grosor / 5)
    noFill()

    for (x = 0; x < width; x = x + 10) {
      estrellita[x] = random(height)

      for (x = 0; x < estrellita.length; x++) {
        estrellita[x] += 2
        if (estrellita[x] > height) {
          estrellita[x] = -0
        }
        point(x, estrellita[x])
      }
    }
    pop()
  }
}


/*keyPressed para actuvar las visualizaciones*/
function keyPressed() {
  if (key == "1") {
    if (soundFile.isPlaying()) {
      soundFile.stop()
    } else {
      soundFile.play()
    }
  } if (key == "2") {
    if (song.isPlaying()) {
      song.stop()
    } else {
      song.play()
    }
  }
  if (key == " ") {
    prendido = !prendido
    if (soundFile.isPlaying()) {
      soundFile.pause()
    }
    if (song.isPlaying()) {
      song.pause()
    }
  } else if (key == "h") {
    lluvia = !lluvia
  } else if (key == "d") {
    circulo = !circulo
  } else if (key == "i") {
    aumentoCirculos = !aumentoCirculos
  } else if (key == "k") {
    cambioColor = !cambioColor
    if (cambioColor) {
      colorFondo = color2
      colorFigura = color1
    } else {
      colorFondo = color1
      colorFigura = color2
    }
  } else if (key == "w") {
    trama1 = !trama1
  } else if (key == "q") {
    trama = !trama
  } else if (key == "e") {
    trama2 = !trama2
  } else if (key == "r") {
    trama3 = !trama3
  } else if (key == "t") {
    trama4 = !trama4
  } else if (key == "a") {
    circuloamarillo = !circuloamarillo
  } else if (key == "l") {
    columnas++
  } else if (key === "j") {
    columnas--
    if (columnas < 2) {
      columnas = 2
    }
  } else if (key == "s") {
    wave = !wave
  }
}

