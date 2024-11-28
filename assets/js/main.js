// Cuando el usuario hace scroll hacia abajo 20px desde la parte superior de la página, muestra el botón 
window.onscroll = function() {scrollFunction()}; 
function scrollFunction() { 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
        document.getElementById("top-button").style.display = "block"; 
    }
    else { 
        document.getElementById("top-button").style.display = "none"; 
    } 
} 
// Cuando el usuario hace clic en el botón, sube al tope de la página 
function topFunction() { 
    document.body.scrollTop = 0; // Para Safari 
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera 
}