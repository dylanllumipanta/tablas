function generarTablas() {

    let tabla = document.getElementById("tabla");

    let contenido = "";

    for (let i = 1; i <= 10; i++) {

        contenido += `
            <div class="fila">
                <div class="celda">5 × ${i}</div>
                <div class="celda">=</div>
                <div class="celda">${5 * i}</div>
            </div>
        `;

    }

    tabla.innerHTML = contenido;

}