let xLinea
let yLinea
let y = 0
let x = 0
let data
let personajes
let minNacimiento
let maxNacimiento
let fuente
let fondo
let numero
let carasCargadas = []


/*creacion de lista personalizada para los años en el eje y*/

let fechas = [1981, 1979, 1977, 1975, 1973, 1971, 1969, 1967, 1965, 1963, 1961, 1959, 1957, 1956, 1955, 1951, 1949, 1947, 1945, 1943, 1941, 1939, 1937, 1935, 1393, 1931, 1929, 1927, 1925]

/*todos los preloads*/
function preload() {
    data = loadJSON("harryPotter_by_nacimiento.json")
    fuente = loadFont("Fonts/Montserrat-Bold.ttf")
    fondo = loadImage("imagenes/fondo.jpg")
}

function setup() {

    createCanvas(1400, 800)

    /*llamada de los datos del json*/

    personajes = data.characters
    minNacimiento = data.minNacimiento
    maxNacimiento = data.maxNacimiento
    numero = data.numero

    for (i = 0; i < personajes.length; i++) {
        if (personajes[i] != undefined) {
            let caras = loadImage("imagenes/" + personajes[i].cara)
            carasCargadas.push(caras)
        }
    }

}


function draw() {
    push()
    image(fondo, 0, 0, width, height)


    /*banderines*/
    bandera(100, 197, 22, 23, 253, 196, 6)
    bandera(400, 255, 219, 1, 0)
    bandera(700, 24, 25, 135, 155, 167, 183)
    bandera(1000, 49, 118, 49, 205, 204, 204)

    /*creacion del eje x y el y*/
    push()
    strokeWeight(5)
    stroke(255)
    line(100, 50, 100, 600)
    line(100, 50, 1300, 50)
    pop()

    /*nombres de cada banderin y titulo*/
    push()
    textSize(20)
    noStroke()
    fill(253, 196, 6)
    textFont(fuente)
    textAlign(CENTER, CENTER)
    text("Gryffindor", 250, 100)
    fill(0)
    text("Hufflepuff", 550, 100)
    fill(155, 167, 183)
    text("Ravenclaw", 850, 100)
    fill(205, 204, 204)
    text("Slytherin", 1150, 100)
    pop()


    push()
    rectMode(CENTER)
    fill(255, 100)
    rect(width / 2, 725, 400, 60, 10)
    pop()

    push()
    fill(255)
    noStroke()
    textSize(25)
    textFont(fuente)
    textAlign(CENTER, CENTER)
    text("PERSONAJES POR EDADES", width / 2, 725)
    pop()


    /*fechas en el eje y*/
    for (let f = 0; f <= fechas.length; f++) {
        push()
        fill(255)
        noStroke()
        textFont(fuente)
        text(fechas[f], 50, 50 + 19 * [f])
        pop()
    }

    /*lectura de todos los objetos dentro del json*/
    for (i = 0; i < personajes.length; i++) {

        if (personajes[i]) {
            /*mapeo de los personajes en funcion de la fecha de nacimiento*/
            posY = map(personajes[i].nacimiento, maxNacimiento, minNacimiento, 50, 570)

            /*para que se distribuya en los banderines (se agrego en el json un objeto mas para la distribucion)*/
            posX = personajes[i].numero



            /*color depende de vivo o fallecido*/
            if (personajes[i].vivo) {
                noStroke()
                fill(255)
            } else {
                fill(0)
            }


            ellipse(posX, posY, 40)

            /*distancia para hacer un hover*/
            let d = dist(posX, posY, mouseX, mouseY)

            /*hover para mostrar tarjetas de informacion*/
            if (d < 20 && personajes[i].vivo==false) {
                fill(0)
                push()
                push()
                rectMode(CENTER)
                rect(posX, posY + 100, 200, 200, 10)
                pop()
                
                push()
                fill(255)
                textAlign(CENTER)
                noStroke()
                textSize(12)
                textFont(fuente)
                text(personajes[i].nombre, posX, posY + 50)
                text('Varita' + ':' + personajes[i].varitaCm, posX, posY + 65)
                text('Edad' + ':' + personajes[i].nacimiento, posX, posY + 80)
                text('Vivo' + ':' + personajes[i].vivo, posX, posY + 95)
                pop()
                
            } else if (d < 20 && personajes[i].vivo) {
                fill(255)
                push()
                rectMode(CENTER)
                rect(posX, posY + 100, 200, 200, 10)
                pop()
                
                push()
                fill(0)
                textAlign(CENTER)
                noStroke()
                textSize(12)
                textFont(fuente)
                text(personajes[i].nombre, posX, posY + 50)
                text('Varita' + ':' + personajes[i].varitaCm, posX, posY + 65)
                text('Edad' + ':' + personajes[i].nacimiento, posX, posY + 80)
                text('Vivo' + ':' + personajes[i].vivo, posX, posY + 95)
                pop()
            }
           
           
            if (d<20){
             push()
             imageMode(CENTER)
             image(carasCargadas[i], posX, posY + 180, 134, 134)
             pop ()
            }
        }
    }
}

/*funcion para banderines*/
function bandera(posX, r, g, b, r1, g1, b1) {
    push()
    noStroke()
    fill(r, g, b)
    rect(posX, 50, 300, 470)
    triangle(posX, 520, 300 + posX, 520, 150 + posX, 650)
    pop()

    push()
    stroke(r1, g1, b1)
    strokeWeight(5)
    noFill()
    beginShape()
    vertex(posX + 25, 70)
    vertex(275 + posX, 70)
    vertex(275 + posX, 510)
    vertex(150 + posX, 620)
    vertex(posX + 25, 510)
    vertex(posX + 25, 70)
    endShape()
    pop()

}




