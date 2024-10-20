let tiempoTranscurridoEnSegundos = 5; // Tiempo inicial
let idIntervalo = null; // Inicializa idIntervalo como null

// Función que se ejecuta cada segundo
const cuentaRegresiva = () => {
    if (tiempoTranscurridoEnSegundos > 0) {
        tiempoTranscurridoEnSegundos -= 1; // Restar un segundo
        document.getElementById("temporizador").innerText = tiempoTranscurridoEnSegundos; // Actualiza el texto
    } else {
        clearInterval(idIntervalo); // Detiene el intervalo cuando llega a 0
        alert("¡Tiempo terminado!"); // Muestra una alerta
    }
};

// Event listener para el botón de iniciar
document.getElementById("start").addEventListener("click", () => {
    if (idIntervalo === null) { // Solo inicia si no hay un intervalo activo
        idIntervalo = setInterval(cuentaRegresiva, 1000); // Llama a cuentaRegresiva cada segundo
    }
});

// Event listener para el botón de detener
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(idIntervalo); // Detiene el intervalo
    idIntervalo = null; // Resetea el id del intervalo
});
