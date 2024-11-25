<section id="section2" class="section">
        <div class="image-container">
            <!-- Imagen de Adán de la obra de Miguel Ángel -->
            <div class="image-adam">
                <img src="img/ada.png" alt="Adán" class="adam-image">
            </div>
        </div>
        <!-- Galería de lenguajes de programación en tarjetas (cards) -->
        <div class="cards-container">
            <div class="card">
                <img src="img/5.png" alt="JavaScript">
                <h2>JavaScript</h2>
            </div>
            <div class="card">
                <img src="img/6.png alt="Python">
                <h2>Python</h2>
            </div>
            <div class="card">
                <img src="img/7.png" alt="Java">
                <h2>Java</h2>
            </div>
            <div class="card">
                <img src="img/8.png alt="C#">
                <h2>C#</h2>
            </div>
          
        </div>
    </section>
  
* ===============================
   Estilos Generales
   =============================== */

/* Importar fuente Perpetua desde Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Perpetua&display=swap');

/* Estilos globales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Perpetua', serif;
}

body {
    font-family: Arial, sans-serif;
}

/* ===============================
   Estilos de la Barra de Navegación
   =============================== */
.navbar {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 8px;
    z-index: 1000;
}

.navbar ul {
    list-style-type: none;
}

.navbar ul li {
    margin: 5px 0;
}

.navbar ul li a {
    color: white;
    text-decoration: none;
}

/* ===============================
   Estilos de las Secciones
   =============================== */
.section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2em;
    position: relative;
    overflow: hidden;
}

Para la seccion doss haremos unos cambios hrabn dos mini div uno para la foto de ada y otro para las imagenes en columnas

las dos secciones tendran la misma altura per el ancho de div de la font de adan opcupara el 70% y el tro 30% para la columna de imagen, la imagen debe de quedar centrica y grande 