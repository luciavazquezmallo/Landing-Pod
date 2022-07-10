//Tp2

//Declaro variables
let color1 
let color2 
let color3 
let x 
let y

//canvas y background
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(18, 18, 37)


}

function draw() {

    frameRate(3)

    //Determino random a las variables
 
    color1 = random(100, 255)
    color2 = random(200, 250)
    color3 = random(100, 240)

    
    x = random(0, width)
    y = random(width, 0)

    //retraso los frame para buscar una mejor compo

    frameRate(10)   

    //Primeras lineas
    stroke(color1, color2, color3)
    line(x, y, width/2,height)

    //segunda linea
    stroke(random(160, 200), color1, color3)
    //Varia el espesor
    strokeWeight(random(0.5, 3))
    line(width/2,height/2,x, y) 

   
}

//Captura de pantalla con key
function keyPressed() {
    saveCanvas()


}

///fin=)
