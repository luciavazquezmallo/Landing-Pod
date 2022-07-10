
//declaraciones globales

let torre 
let barco 
let cuna
let redondo
let cubos
let mueble
let alma 
let casa 
let papel

let x
let y

let x1
let y1

let x2
let y2

let x3
let y3

let x4
let y4

let tx 
let ty 

function preload(){

    //carga de imagenes

    torre = loadImage('Img/1.png')
    barco = loadImage('Img/2.png')
    cuna =  loadImage('Img/3.png')
    redondo = loadImage('Img/4.png')
    cubos = loadImage('Img/5.png')
    mueble =  loadImage('Img/6.png')
    alma = loadImage ('Img/7.png')
    casa = loadImage ('Img/8.png')
    papel = loadImage('Img/9.png')
    papel2 = loadImage('Img/10.png')
    juego = loadImage('Img/11.png')

}


function setup() {

    //canvas
     createCanvas(400, 400)
     background(236)

   

    //Variables

    x = random(10, 300)
    y = random(10, 300)

    x1 = random(10, 100)
    y1 = random(10, 100)

    x2 = random(10, 200)
    y2 = random(10, 200)

    x3 = random(50, 300)
    y3 = random(50, 300)

    x4 = random(20, 350)
    y4 = random(20, 350)


   
  
    //imagenes fijas

        image(papel, 10, 50, papel.width, papel.height)

        image(papel2, 200, 50, papel2.width, papel2.height)

        image(juego, 0, 150, juego.width, juego.height)

        image(alma, 50, 80, alma.width/2, alma.height/2)

        image(casa, 20, 100, casa.width, casa.height)

        

    //imagenes variables

        image(mueble, x, y,mueble.width*1.5,mueble.height*1.5)
        filter(GRAY, 200) //Escala de grises

        
        image(cubos, x1, y1, cubos.width/6,cubos.height/6)

       
        image(torre, x2, y2, torre.width/3, torre.height/3)

         rotate(random(0, 45))     
        image(barco, x, y, barco.width/6,barco.height/6)       
        
        rotate(random(0, 45))
        image(cuna, x3, y3, cuna.width,cuna.height)
        
        rotate(random(0, 45))
        image(redondo, x4, y4, redondo.width,redondo.height)

       
    // cuadrados
        noStroke()
        fill(255, 0, 0, 90)
        rect(x4, y3, 100, 100)

        noStroke()
        fill(255, 255, 0, 90)
        rect(x4, y3, 200, 200)  
        
        noStroke()
        fill(0, 0, 255, 90)
        rect(x4, y3, 100, 100) 

        push()

        //para texto
        
        tx = 40
        ty = 60
                
        //texto       
         fill(255)
         textSize(30)
         text('Alma Siedhoff-Buscher', tx, ty, width, height)  
             
        pop() 
    
    
       
} 

function keyPressed(){
 saveCanvas()
}


  
 



    
   

