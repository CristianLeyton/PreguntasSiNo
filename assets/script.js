
BtnNo = document.getElementById("noClick");

BtnNo.addEventListener("mouseover", moverBoton, false);
BtnNo.addEventListener("click", moverBoton, false);



function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

function moverBoton() {
    BtnNo = document.getElementById("noClick");

    let ancho = document.documentElement.scrollWidth/2 - 93;
    let alto = document.documentElement.scrollHeight/2 - 72;

    var x = aleatorio(-ancho,ancho);
    var y = aleatorio(-alto,alto);
    console.log( "ancho = " + ancho + " alto = " + alto );
    console.log( "x = " + x + " y = " + y );

    BtnNo.setAttribute("style", "position: relative; left: " + x + "px; top: " + y + "px;");
}

