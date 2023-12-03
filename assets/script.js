
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

    let ancho = document.documentElement.scrollWidth/2 - 90;
    let alto = document.documentElement.scrollHeight/2 - 70;

    var x = aleatorio(-ancho,ancho);
    var y = aleatorio(-alto,alto);

    BtnNo.setAttribute("style", "position: relative; left: " + x + "px; top: " + y + "px;");
}

function traerValoresDeLaURL(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var pregunta = traerValoresDeLaURL('pregunta');

document.getElementById("pregunta").innerHTML = pregunta;

console.log(pregunta);