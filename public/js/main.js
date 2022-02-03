document.getElementById(`player`).addEventListener("mouseover",sumarPuntos);
document.getElementById(`player2`).addEventListener("mouseover",obj => alert("Perdiste!"));
document.getElementById(`player3`).addEventListener("mouseover",obj => alert("Perdiste!"));
document.getElementById(`player4`).addEventListener("mouseover",obj => alert("Perdiste!"));
document.getElementById(`player2`).addEventListener("mouseover",obj => puntos=0);
document.getElementById(`player3`).addEventListener("mouseover",obj => puntos=0);
document.getElementById(`player4`).addEventListener("mouseover",obj => puntos=0);

puntos=0;

let cero = "grey";
let uno = "red";
let dos = "blue";
let tres = "yellow";
let cuatro = "green";
let cinco = "brown";
let seis = "violet";
let siete = "white";
let ocho = "orange";
let nueve = "pink";



function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos +"  </b>";
    randNum= Math.round(Math.random()*420);
    randNum2= Math.round(Math.random()*420);
    randNum3= Math.round(Math.random()*420);
    randNum4= Math.round(Math.random()*420);
    randNum5= Math.round(Math.random()*420);
    randNum6= Math.round(Math.random()*420);
    randNum7= Math.round(Math.random()*420);
    randNum8= Math.round(Math.random()*420);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    document.getElementById("player2").style.marginTop = randNum3 + "px";
    document.getElementById("player2").style.marginLeft = randNum4 + "px";
    document.getElementById("player3").style.marginTop = randNum5 + "px";
    document.getElementById("player3").style.marginLeft = randNum6 + "px";
    document.getElementById("player4").style.marginTop = randNum7 + "px";
    document.getElementById("player4").style.marginLeft = randNum8 + "px";

    colorcito = Math.round(Math.random()*10);
    colorcito2 = Math.round(Math.random()*10);
    colorcito3 = Math.round(Math.random()*10);
    colorcito4 = Math.round(Math.random()*10);

    while (colorcito == colorcito2){
        colorcito2 = Math.round(Math.random()*10);
    }
    while (colorcito == colorcito3){
        colorcito3 = Math.round(Math.random()*10);
    }
    while (colorcito == colorcito4){
        colorcito4 = Math.round(Math.random()*10);
    }


    if (colorcito == 0){
        document.getElementById("player").style.background = "grey";
        document.body.style.background = "grey";
    }
    else if(colorcito == 1){
        document.getElementById("player").style.background = "red";
        document.body.style.background = "red";
    }
    else if(colorcito == 2){
        document.getElementById("player").style.background = "blue";
        document.body.style.background = "blue";
    }
    else if(colorcito == 3){
        document.getElementById("player").style.background = "yellow";
        document.body.style.background = "yellow";
    }
    else if(colorcito == 4){
        document.getElementById("player").style.background = "green";
        document.body.style.background = "green";
    }
    else if(colorcito == 5){
        document.getElementById("player").style.background = "brown";
        document.body.style.background = "brown";
    }
    else if(colorcito == 6){
        document.getElementById("player").style.background = "violet";
        document.body.style.background = "violet";
    }
    else if(colorcito == 7){
        document.getElementById("player").style.background = "white";
        document.body.style.background = "white";
    }
    else if(colorcito == 8){
        document.getElementById("player").style.background = "orange";
        document.body.style.background = "orange";
    }
    else if(colorcito == 9){
        document.getElementById("player").style.background = "pink";
        document.body.style.background = "pink";
    }
    

    



    if (colorcito2 == 0){
        document.getElementById("player2").style.background = "grey";
    }
    else if(colorcito2 == 1){
        document.getElementById("player2").style.background = "red";
    }
    else if(colorcito2 == 2){
        document.getElementById("player2").style.background = "blue";
    }
    else if(colorcito2 == 3){
        document.getElementById("player2").style.background = "yellow";
    }
    else if(colorcito2 == 4){
        document.getElementById("player2").style.background = "green";
    }
    else if(colorcito2 == 5){
        document.getElementById("player2").style.background = "brown";
    }
    else if(colorcito2 == 6){
        document.getElementById("player2").style.background = "violet";
    }
    else if(colorcito2 == 7){
        document.getElementById("player2").style.background = "white";
    }
    else if(colorcito2 == 8){
        document.getElementById("player2").style.background = "orange";
    }
    else if(colorcito2 == 9){
        document.getElementById("player2").style.background = "pink";
    }


    

    if (colorcito3 == 0){
        document.getElementById("player3").style.background = "grey";
    }
    else if(colorcito3 == 1){
        document.getElementById("player3").style.background = "red";
    }
    else if(colorcito3 == 2){
        document.getElementById("player3").style.background = "blue";
    }
    else if(colorcito3 == 3){
        document.getElementById("player3").style.background = "yellow";
    }
    else if(colorcito3 == 4){
        document.getElementById("player3").style.background = "green";
    }
    else if(colorcito3 == 5){
        document.getElementById("player3").style.background = "brown";
    }
    else if(colorcito3 == 6){
        document.getElementById("player3").style.background = "violet";
    }
    else if(colorcito3 == 7){
        document.getElementById("player3").style.background = "white";
    }
    else if(colorcito3 == 8){
        document.getElementById("player3").style.background = "orange";
    }
    else if(colorcito3 == 9){
        document.getElementById("player3").style.background = "pink";
    }
    



    

    if (colorcito4 == 0){
        document.getElementById("player4").style.background = "grey";
    }
    else if(colorcito4 == 1){
        document.getElementById("player4").style.background = "red";
    }
    else if(colorcito4 == 2){
        document.getElementById("player4").style.background = "blue";
    }
    else if(colorcito4 == 3){
        document.getElementById("player4").style.background = "yellow";
    }
    else if(colorcito4 == 4){
        document.getElementById("player4").style.background = "green";
    }
    else if(colorcito4 == 5){
        document.getElementById("player4").style.background = "brown";
    }
    else if(colorcito4 == 6){
        document.getElementById("player4").style.background = "violet";
    }
    else if(colorcito4 == 7){
        document.getElementById("player4").style.background = "white";
    }
    else if(colorcito4 == 8){
        document.getElementById("player4").style.background = "orange";
    }
    else if(colorcito4 == 9){
        document.getElementById("player4").style.background = "pink";
    }
    


    
}








