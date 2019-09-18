var  cartas = [1,1,2,2,3,3,4,4,5,5];
var cartt = new Array();
var pos = new Array();
var wins = new Array();
var intentos=0;
var puntos=0;
var intents=0;
contador_s=0;
contador_m=0;
var rs=0;
Array.prototype.barajar = function () {
    var i = this.length,j,temp;
    while(--i>0){
        j = Math.floor( Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    for(var i=1;i<=cartas.length;i++){
        document.getElementById('J'+i).value=cartas[i-1];
    }
    console.log(cartas);
}
function carga(){
    window.setInterval(
        function(){
            if(contador_s==60){
                for(var i=1;i<=cartas.length;i++){
                    document.getElementById('S'+i).src ="Img/IB.png";
                }
                contador_s=0;                    
                imagen();      
            }else if(contador_s%2==0){
                document.getElementById("BT").src = "Img/T"+contador_s+".png";
                // Faltado 30 segundos muestra la imagen CheerUp.png
                if(contador_s > 29) {
                    animo();
                }
            }
            //console.log(contador_s);
            contador_s++;
        },1000);
}
function barajear() {
    cartas.barajar();
    document.getElementById('C1').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J1').value==1){
            document.getElementById("S1").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=1;
        }else if(document.getElementById('J1').value==2){
            document.getElementById("S1").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=1;
        }else if(document.getElementById('J1').value==3){
            document.getElementById("S1").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=1;
        }else if(document.getElementById('J1').value==4){
            document.getElementById("S1").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=1;
        }else{
            document.getElementById("S1").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=1;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
                intents++;
                document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                        ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C2').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J2').value==1){
            document.getElementById("S2").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=2;
        }else if(document.getElementById('J2').value==2){
            document.getElementById("S2").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=2;
        }else if(document.getElementById('J2').value==3){
            document.getElementById("S2").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=2;
        }else if(document.getElementById('J2').value==4){
            document.getElementById("S2").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=2;
        }else{
            document.getElementById("S2").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=2;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
                intents++;
                document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C3').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J3').value==1){
            document.getElementById("S3").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=3;
        }else if(document.getElementById('J3').value==2){
            document.getElementById("S3").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=3;
        }else if(document.getElementById('J3').value==3){
            document.getElementById("S3").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=3;
        }else if(document.getElementById('J3').value==4){
            document.getElementById("S3").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=3;
        }else{
            document.getElementById("S3").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=3;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
                intents++;
                document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C4').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J4').value==1){
            document.getElementById("S4").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=4;
        }else if(document.getElementById('J4').value==2){
            document.getElementById("S4").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=4;
        }else if(document.getElementById('J4').value==3){
            document.getElementById("S4").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=4;
        }else if(document.getElementById('J4').value==4){
            document.getElementById("S4").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=4;
        }else{
            document.getElementById("S4").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=4;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
                intents++;
                document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C5').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J5').value==1){
            document.getElementById("S5").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=5;
        }else if(document.getElementById('J5').value==2){
            document.getElementById("S5").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=5;
        }else if(document.getElementById('J5').value==3){
            document.getElementById("S5").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=5;
        }else if(document.getElementById('J5').value==4){
            document.getElementById("S5").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=5;
        }else{
            document.getElementById("S5").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=5;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
                intents++;
                document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C6').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J6').value==1){
            document.getElementById("S6").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=6;
        }else if(document.getElementById('J6').value==2){
            document.getElementById("S6").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=6;
        }else if(document.getElementById('J6').value==3){
            document.getElementById("S6").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=6;
        }else if(document.getElementById('J6').value==4){
            document.getElementById("S6").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=6;
        }else{
            document.getElementById("S6").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=6;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
            intents++;
            document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C7').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J7').value==1){
            document.getElementById("S7").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=7;
        }else if(document.getElementById('J7').value==2){
            document.getElementById("S7").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=7;
        }else if(document.getElementById('J7').value==3){
            document.getElementById("S7").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=7;
        }else if(document.getElementById('J7').value==4){
            document.getElementById("S7").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=7;
        }else{
            document.getElementById("S7").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=7;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
            intents++;
            document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C8').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J8').value==1){
            document.getElementById("S8").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=8;
        }else if(document.getElementById('J8').value==2){
            document.getElementById("S8").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=8;
        }else if(document.getElementById('J8').value==3){
            document.getElementById("S8").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=8;
        }else if(document.getElementById('J8').value==4){
            document.getElementById("S8").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=8;
        }else{
            document.getElementById("S8").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=8;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
            intents++;
            document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C9').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J9').value==1){
            document.getElementById("S9").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=9;
        }else if(document.getElementById('J9').value==2){
            document.getElementById("S9").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=9;
        }else if(document.getElementById('J9').value==3){
            document.getElementById("S9").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=9;
        }else if(document.getElementById('J9').value==4){
            document.getElementById("S9").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=9;
        }else{
            document.getElementById("S9").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=9;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
            intents++;
            document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
    document.getElementById('C10').onclick=function(){
        //console.log(pos);
        intentos++;
        if(document.getElementById('J10').value==1){
            document.getElementById("S10").src = "Img/3rd-Level/I1.png";
            cartt.push(1);
            pos[intentos]=10;
        }else if(document.getElementById('J10').value==2){
            document.getElementById("S10").src = "Img/3rd-Level/I2.png";
            cartt.push(2);
            pos[intentos]=10;
        }else if(document.getElementById('J10').value==3){
            document.getElementById("S10").src = "Img/3rd-Level/I3.png";
            cartt.push(3);
            pos[intentos]=10;
        }else if(document.getElementById('J10').value==4){
            document.getElementById("S10").src = "Img/3rd-Level/I4.png";
            cartt.push(4);
            pos[intentos]=10;
        }else{
            document.getElementById("S10").src = "Img/3rd-Level/I5.png";
            cartt.push(5);
            pos[intentos]=10;
        }
        if(intentos==2){
            if(pos[1]==pos[2]){
                intentos=0;
                cartt.pop();
                cartt.pop();
                hola();
            }else{
            intents++;
            document.getElementById("score").innerHTML=intents;
                if(cartt[0]==cartt[1]){
                    wins.push(cartt[0]);
                    document.getElementById('C'+pos[1]).style.pointerEvents = "none";
                    document.getElementById('C'+pos[2]).style.pointerEvents = "none";
                    puntos++;
                    console.log(puntos);
                    // Ajuste
                    document.getElementById("puntos").innerHTML = (puntos * 2);
                    if(puntos==5){
                    ganaste();
                    }
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }else{
                    setTimeout(hola, 700);
                    intentos=0;
                    cartt.pop();
                    cartt.pop();
                }
            }
        }else if(intentos>=3){
            mas();
            intentos=0;
            cartt.pop();
            cartt.pop();
        }
    };
}
function imagen() {
    $('[data-toggle="tooltip"]').tooltip('hide');
    var modal = document.createElement("div"); 
    modal.className="row horizontal divPadre";
    var modal1 = document.createElement("div");
    modal1.className="col vertical";
    var modal2=document.createElement("img");
    modal2.src="Img/TO.png";
    modal2.className="img-responsive";
    modal2.style="max-width:50%; display: block; margin-left: auto; margin-right: auto; margin-top: 5%";
    modal2.addEventListener("click",function(){ location.href = "GameIII.html";});
    var a = document.getElementById("Cont");
    var padre = a.parentNode;
    padre.removeChild(a);
    padre.appendChild(modal); 
    modal.appendChild(modal1);
    modal1.appendChild(modal2);
    intentos=0;
    puntos=0;
    intents=0;
    // Ajustes
    document.getElementById("container").remove();
}
function ganaste(){
    // Cambia el fondo
    // $('#bground').css('background-image', 'url("./Img/Bg.png")');
    // Reproduce el sonido cuando gana el juego
    sound.pause();
    sound.currentTime = 0;
    var audioFile = "audio/ganar.mp3";
    var winSound = new Audio(audioFile);
    winSound.play();
    // $('#audioElement source').attr('src', audioFile);
    // $("#audioElement")[0].load();
    $('[data-toggle="tooltip"]').tooltip('hide');
    var modal = document.createElement("div");
    modal.className="row horizontal divPadre";
    var modal1 = document.createElement("div");
    modal1.className="col vertical";
    /*********************************/
    // Ajustes
    var modalDivContainer = document.createElement("div");
    modalDivContainer.className = "container-fluid";
    var modalDivRow = document.createElement("div");
    modalDivRow.className = "row";
    var modalImgG = document.createElement("img");
    var modalDivCol = document.createElement("div");
    modalDivCol.className = "col-12 col-md-12";
    modalImgG.width = "700";
    modalImgG.src = "Img/G.png";
    modalImgG.className = "img-fluid";
    var modalDivCaption = document.createElement("div");
    modalDivCaption.className = "caption";
    modalDivCaption.id = "wrapper";
    var modalH1Rcorners = document.createElement("h1");
    modalH1Rcorners.id = "rcorners";
    /*********************************/
    var modal2=document.createElement("span");
    modal2.className="jittery";
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
    var contraseña = "";
    for (i=0; i<5; i++) contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
    console.log(contraseña)
    modal2.innerHTML=contraseña;
    modal2.addEventListener("click",function(){ location.href = "Game.html";});
    var a = document.getElementById("Cont");
    var padre = a.parentNode;
    padre.removeChild(a);
    padre.appendChild(modal);
    modal.appendChild(modal1);
    /************************************************/
    // Ajustes
    modal1.appendChild(modalDivContainer);
    modalDivContainer.appendChild(modalDivRow);
    modalDivRow.appendChild(modalDivCol);
    modalDivCol.appendChild(modalImgG);
    modalDivCol.appendChild(modalDivCaption);
    modalDivCaption.appendChild(modalH1Rcorners);
    modalH1Rcorners.appendChild(modal2);
    /************************************************/
    // Ajustes
    // document.getElementById("container").remove();
}
function hola(){ 
    if(wins.length>=1){
        for(var i = 1; i <=10 ; i++){
            document.getElementById("S"+i).src = "Img/IB.png"; 
        }
        for(var i = 1; i <=10 ; i++){
            for(var j =0;j<wins.length;j++){
                if(document.getElementById('J'+i).value==wins[j]){
                    document.getElementById("S"+i).src = "Img/3rd-Level/I"+wins[j]+".png";
                }
            }
        }
    }else{
        for(var i = 1; i <=10 ; i++){
            document.getElementById("S"+i).src = "Img/IB.png"; 
        }
    }
}
function mas(){ 
    for(var i = 1; i <=10 ; i++){
        document.getElementById("S"+i).src = "Img/IB.png"; 
    }
    console.log(puntos);
}
function Rule(){
    if(rs<=1){
        rs++;
        if(rs==2){
            rs=0;
            document.getElementById("rules").src="Img/R"+rs+".png";
        }else{
            document.getElementById("rules").src="Img/R"+rs+".png";
        }
    }else{
        rs=0;
        document.getElementById("rules").src="Img/R"+rs+".png";
    }
}
// Función para mostrar la imagen CheerUp.png
function animo() {
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'right',
        html: true,
        trigger: 'manual',
        title: '<div class="container-fluid" id="kkk"><div class="row form-group"><div class="col-12 col-md-12"><img src="Img/CheerUp.png" id="CU" class="img-fluid"></div></div></div>'
    });
    $('[data-toggle="tooltip"]').tooltip('show');
}

// Función para reproducir archivos de audio
function playSound() {
    sound.play();
    var playButton = document.getElementById('playButton');
    var counter = document.getElementById('counter');
    playButton.hidden = true;
    counter.hidden = false;
}

function jugar() {
    $("#playDiv").prop("onclick", null).off("click");
    var seconds = 60;
    var display = document.querySelector('#time');
    startTimer(seconds, display);
    barajear();
    carga();
    playSound();
}
var sound = new Audio('audio/jugar.mp3');
