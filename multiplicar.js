function generarTablas() {

    let numero = parseInt(document.getElementById("txtNumero").value);

    if (isNaN(numero)) {
        alert("Ingrese un número.");
        return;
    }

    let tabla = document.getElementById("tabla");
    let contenido = "";

    for (let i = 1; i <= 10; i++) {

        contenido += `
            <div class="fila">
                <div class="celda">${numero} × ${i}</div>
                <div class="celda">=</div>
                <div class="celda">${numero * i}</div>
            </div>
        `;

    }

    tabla.innerHTML = contenido;

}