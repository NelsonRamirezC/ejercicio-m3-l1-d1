var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var rut = document.getElementById("rut");
var formulario = document.getElementById("form-clientes");
var contador = 0;
var cuerpoTabla = document.getElementById("cuerpo-tabla");
var registro = "";

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  contador++;
  registro += `
            <tr>
              <th scope="row">${contador}</th>
              <td>${nombre.value}</td>
              <td>${apellido.value}</td>
              <td>${rut.value}</td>
            </tr>
    `;

  cuerpoTabla.innerHTML = registro;
  formulario.reset();
});
