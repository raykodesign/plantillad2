/* --- VARIABLES --- */
var enterScreen = document.getElementById("enter-screen");
var mainScreen = document.getElementById("main");
var audio = document.getElementById("audio");
var video = document.getElementById("bg-video");
var typewriter = document.getElementById("typewriter");

/* --- CLICK TO ENTER --- */
enterScreen.addEventListener("click", function() {
    enterScreen.style.opacity = 0;
    setTimeout(function() {
        enterScreen.style.display = "none";
        mainScreen.classList.remove("hidden");
        
        // Reproducir medios
        video.play();
        audio.volume = 0.4; // Ajusta el volumen aquí
        audio.play();
        
        // Iniciar máquina de escribir
        typeText();
    }, 800);
});

/* --- TÍTULO DE PESTAÑA ANIMADO --- */
// Esto hace el efecto de scroll en el título de la pestaña del navegador
var titleText = " @xsmari | welcome ";
function titleScroll() {
    titleText = titleText.substring(1) + titleText.substring(0, 1);
    document.title = titleText;
    setTimeout(titleScroll, 200);
}
titleScroll();

/* --- TYPEWRITER EFFECT --- */
var textArray = ["developer", "gamer", "discord lover", "visuals"]; // TUS TEXTOS AQUÍ
var typeSpeed = 100;
var backSpeed = 50;
var loopDelay = 2000;
var i = 0; // índice del array
var j = 0; // índice del caracter
var isDeleting = false;

function typeText() {
    var currentText = textArray[i];
    
    if (isDeleting) {
        typewriter.textContent = currentText.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % textArray.length;
            setTimeout(typeText, 200);
        } else {
            setTimeout(typeText, backSpeed);
        }
    } else {
        typewriter.textContent = currentText.substring(0, j++);
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(typeText, loopDelay);
        } else {
            setTimeout(typeText, typeSpeed);
        }
    }
}