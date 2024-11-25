  <section id="section2" class="section">
        <div class="content-container">
            <!-- Div para la imagen de Adán -->
            <div class="image-adam-container">
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
                    <img src="img/6.png" alt="Python">
                    <h2>Python</h2>
                </div>
                <div class="card">
                    <img src="img/7.png" alt="Java">
                    <h2>Java</h2>
                </div>
                <div class="card">
                    <img src="img/8.png" alt="C#">
                    <h2>C#</h2>
                </div>
            </div>
        </div>
    </section>

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


/* ===============================
   Estilos Generales para la Sección 2
   =============================== */

   #section2 {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2em;
    position: relative;
    overflow: hidden;
}

/* Contenedor principal de la sección 2 */
#section2 .content-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

/* Contenedor de la imagen de Adán */
#section2 .image-adam-container {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

#section2 .image-adam img {
    width: 100%; /* La imagen ocupará el 100% del contenedor (más ancha) */
    height: 90vh; /* La imagen tendrá una altura del 80% de la altura de la vista (pantalla) */
    object-fit: contain; /* Mantiene la proporción y ajusta la imagen dentro del contenedor */
    display: block;
}

/* Contenedor de las tarjetas en la Sección 2 */
#section2 .cards-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

#section2 .card {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}

#section2 .card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-bottom: 10px;
}

#section2 .card h2 {
    font-size: 1.2em;
    margin-top: 10px;
}

  