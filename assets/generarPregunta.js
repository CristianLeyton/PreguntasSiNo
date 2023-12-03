let inputPregunta = document.getElementById("inputPregunta");
let linkPregunta = document.getElementById("linkPregunta");


inputPregunta.addEventListener("input", (e) => {
    linkPregunta.setAttribute("href" , "pregunta.html?pregunta=" + inputPregunta.value);
    console.log(inputPregunta.value);


});

inputPregunta.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        location.href = 'pregunta.html?pregunta=' + inputPregunta.value;
    }
});
