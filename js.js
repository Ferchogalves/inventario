let nombre = document.getElementById("nombre");
let cantidad = document.getElementById("cantidad");
let precio = document.getElementById("precio");

let x = [];

function AgregarDatos() {
    if (nombre.value === "" || cantidad.value === "" || precio.value === "") {
        alert("Debe ingresar todos los datos.");
        return;
    } else {
        let datoTabla = `
        <tr>
            <td>${nombre.value}</td>
            <td>${cantidad.value}</td>
            <td>${precio.value}</td>
            <td>
                <input type="button" class="btn btn-danger editar" value="Editar">
                <input type="button" class="btn btn-danger eliminar" value="Eliminar">
            </td>
        </tr>
        `;

        x.push(datoTabla);
        document.getElementById("tabla").innerHTML = x.join("");

        nombre.value = "";
        cantidad.value = "";
        precio.value = "";
    }
}

document.getElementById("tabla").addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
        let tr = e.target.parentElement.parentElement;
        tr.remove();
      
        x = x.filter(row => !row.includes(tr.children[0].textContent));
    } else if (e.target.classList.contains("editar")) {
        let tr = e.target.parentElement.parentElement;
        nombre.value = tr.children[0].textContent;
        cantidad.value = tr.children[1].textContent;
        precio.value = tr.children[2].textContent;
        tr.remove();
    }
});

document.getElementById("EliminarT").addEventListener("click", () => {
    document.getElementById("tabla").innerHTML = "";
    x = []; 
});

let buscar = document.getElementById("buscar");

function BuscarDatos() {
    let valorBuscado = buscar.value.toLowerCase();
    let filas = document.querySelectorAll("#tabla tr");

    document.getElementById("tablab").innerHTML = "";

    if (valorBuscado === "") {
        alert("No ingresó datos para buscar.");
        return;
    } else {
        let encontrado = false;

        filas.forEach(fila => {
            let celdas = fila.getElementsByTagName("td");
            let filaContieneValor = false;

            for (let i = 0; i < celdas.length; i++) {
                if (celdas[i].textContent.toLowerCase().includes(valorBuscado)) {
                    filaContieneValor = true;
                    encontrado = true;
                    break;
                }
            }

            if (filaContieneValor) {
                let resultadoBuscar = `
                <tr>
                    <td>${celdas[0].textContent}</td>
                    <td>${celdas[1].textContent}</td>
                    <td>${celdas[2].textContent}</td>
                      <td>
                <input type="button" class="btn btn-danger editarv" value="Editar">
                <input type="button" class="btn btn-danger eliminarv" value="Eliminar">
            </td>
                </tr>
                `;
                document.getElementById("tablab").innerHTML += resultadoBuscar;
            }
        });

        if (!encontrado) {
            alert("El dato no está en la tabla.");
        }
    }
}

document.getElementById("bbuscar").addEventListener("click", () => {
    BuscarDatos();
    buscar.value = ""; 
});
document.getElementById("tablab").addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminarv")) {
        let tr = e.target.parentElement.parentElement;
        tr.remove();

        x = x.filter(row => !row.includes(tr.children[0].textContent));
    } else if (e.target.classList.contains("editarv")) {
        let tr = e.target.parentElement.parentElement;
        nombre.value = tr.children[0].textContent;
        cantidad.value = tr.children[1].textContent;
        precio.value = tr.children[2].textContent;
        tr.remove(); 
    }
})