
// SERVICIOS ACORDEON
function toggleService(element) {
  const parent = element.parentElement;
  
  // Cerrar otros servicios al abrir uno nuevo
  document.querySelectorAll('.services__item').forEach(item => {
    if (item !== parent) item.classList.remove('active');
  }); // Cierra otros servicios abiertos

  parent.classList.toggle('active');
}

// POPUP DE VIDEO
function openVideo() {
    
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("projectVideo");
    
    // Se verifica que existen para que no haya errores en consola si no se encuentran los elementos
    if (modal && video) {
        //Se muestra el modal
        modal.style.display = "flex";
        
        // Volumen al 100% y se reproduce el video
        video.volume = 1;
        
        //Se retrasa la reproducción del video para que este se cargue correctamente antes de intentar reproducirlo, evitando posibles problemas de reproducción.
        setTimeout(() => {
            video.play();
        }, 100);
    } else {
        console.error("No se han encontrado los elementos del video modal.");
    }
}
//Cierra el modal y reinicia el video
function closeVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("projectVideo");
    
    if (modal && video) {
        // Se oculta el modal
        modal.style.display = "none";
        
        // Se pausa y volvemos al principio
        video.pause();
        video.currentTime = 0;
    }
}

// MENÚ HAMBURGUESA
function toggleMenu() {

document.getElementById("mobileMenu").classList.toggle("active");

} // Cierra el menú al hacer click en un enlace
document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileMenu").classList.remove("active");
    });
});
