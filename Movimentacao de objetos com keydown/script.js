var posX; 
var posY;
var dirX;
var dirY;
var vel;
var obj;
var timer;

function iniciar(){
    dirX = 0;
    dirY = 0;
    posX = 0;
    posY = 0;
    vel = 15;
    obj = document.getElementById("dv1");
    document.addEventListener("keydown",teclaDown);
    document.addEventListener("keyup", teclaUp);
    timer = setInterval(enterFrame,20);
}

/*
Agora criamos as funções teclaDown e teclaUp, para que haja deslocamento quando pressionado e pare quando não esteja mais pressionado
*/
function teclaDown(){
    var tecla = event.keyCode;
    if(tecla == 37){
        dirX=-1;
    }else if (tecla == 38){
        dirY=-1;
    }else if (tecla == 39){
        dirX=1;
    }else if (tecla == 40){
        dirY=1;
    }
}

function teclaUp(){
    var tecla = event.keyCode;
    if(tecla == 37){
        dirX=0;
    }else if (tecla == 38){
        dirY=0;
    }else if (tecla == 39){
        dirX=0;
    }else if (tecla == 40){
        dirY=0;
    }
}

function enterFrame(){
    posX+=dirX*vel;
    obj.style.left = posX+"px";
    posY+=dirY*vel;
    obj.style.top = posY+"px";
}

//função que dá início assim que a página faz o load
window.addEventListener("load",iniciar);
