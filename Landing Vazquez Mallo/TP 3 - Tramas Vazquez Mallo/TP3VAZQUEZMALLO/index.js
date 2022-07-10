let lado = 50
let x = 0
let y = 0
let sorteo 



function setup() {
    createCanvas(500, 500)
    frameRate(30)
    angleMode(DEGREES)
}

function draw() {

sorteo = random(0, 100)

//Modulo 1
if (sorteo > 75) {
fill(159, 101, 247) 
noStroke() 
 rect(x, y, lado)//fondo

 //Arcos
fill(77, 247, 210)
 noStroke()
arc(x , y + lado,lado, lado, 270, 0)

arc(x + lado , y+ lado,lado, lado, 180, 270)

//Arcos stroke

stroke(77, 247, 210)
noFill()
strokeWeight(3)

arc(x, y + lado/2, lado, lado, 270, 0)//inferior derecho stroke
        
arc(x + lado , y + lado/2, lado, lado, 90,270) //inferior izquierdo stroke
      
}

//Modulo 2
else if (sorteo > 50){

//Fondo

fill(159, 101, 247) 
noStroke() 
rect(x, y, lado)

//arcos lado derecho

fill(77, 247, 210)
noStroke()

arc(x + lado  , y, lado, lado, 90, 180)

arc(x + lado , y+ lado,lado, lado, 180, 270)


//arcos lado izquierdo

fill(77, 247, 210)
noStroke()

arc(x, y, lado, lado,0, 90)

arc(x , y + lado,lado, lado, 270, 0)


}

//modulo 3
else if (sorteo > 25){
 
//fondo
fill(159, 101, 247)
noStroke()  
rect(x, y, lado)

//arcos
strokeWeight(3)
stroke(77, 247, 210)

arc(x , y + lado,lado, lado, 270, 0)//inferior izquierdo

arc(x + lado , y+ lado,lado, lado, 180, 270)//inferior derecho

arc(x, y, lado, lado,0, 90)//superior derecho

arc(x + lado  , y, lado, lado, 90, 180)//superior izquierdo

}


//modulo 4
else {

//fondo       
fill(159, 101, 247) 
noStroke() 
rect(x, y, lado)

//Arcos

 fill(77, 247, 210)
noStroke()

arc(x , y ,lado, lado, 0, 90)//relleno superior izquierdo

arc(x + lado , y, lado, lado, 90, 180)//relleno superior derecho

//Arcos stroke

stroke(77, 247, 210)
noFill()
strokeWeight(3)

arc(x, y + lado/2, lado, lado, 0, 90)//inferior derecho stroke
        
arc(x + lado , y + lado/2, lado, lado, 90,270) //inferior izquierdo stroke

       }  

  ///
       
 x = x + lado
       
 if (x >= width) {
  y= y + lado
 x =0
          
}
        
   
}