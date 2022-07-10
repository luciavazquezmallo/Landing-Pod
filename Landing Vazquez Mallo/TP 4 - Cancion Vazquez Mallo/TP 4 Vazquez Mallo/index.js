/*variables*/
let angulo = 0
let desplazamiento = 400
let escalar = 2
let velocidad = 0.006
let onda = 1
let control = 15
let t
lado = 500


function setup() {
    createCanvas(400, 400)
    fill(255)
    background(255)

}

function draw() {

    t = round(millis() / 1000) % 44 //tiempo

    if (t < 20) {
        //Ondas

        onda = onda - 0.01
        control = control + 1

        for (let y = height / 9; y < height; y = y + 10) {
            for (let x = 0; x < 80; x = x + 60) {
                  
                stroke(0, 255, 255)
                strokeWeight(2) 
                curveTightness(onda)
                curve(0, 0, x, y, width, y, control, control - 1)


            }
        }



    }
    //barras que caen
    else if (t < 21) {

        for (let x = 0; x < width; x = x + 100) {

            strokeWeight(1)
            stroke(0, 255, 255)
            line(x, 0, x + 80, height / 2)
            fill(255)
            rect(0, 0, width, height)

        }

        for (let y = 10; y < height; y += 90) {

            lado = lado + 10
            noFill()
            stroke(0, 255, 255)
            strokeWeight(15)
            line(y, 100, y + 80, lado)


        }

    }

    //cuadrado blanco
    else if (t < 22) {
        fill(255)
        rect(0, 0, width, height)

    }
    //onda color
    else if (t < 44) {

        for (let x = 0; x < width; x++) {

            //color    
            fill(80, 90 + x / 3, 100 + x)
            stroke(55, 80 + x / 3, 140 + x / 2)
            /*use el cos y sin sacando el angleMode porque funcionaba mejor para mi diseño*/
            let i = desplazamiento + cos(angulo) * escalar
            let y = desplazamiento + sin(angulo) * escalar
            //ondas
            ellipse(x, y, i - width / 2, i - height / 2)
            angulo += velocidad
            escalar += velocidad

            if (desplazamiento > 600) {
                desplazamiento = 0


            }

        }


    }



}

function keyPressed(){
    saveCanvas()
}

 