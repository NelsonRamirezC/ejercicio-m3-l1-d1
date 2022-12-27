//var nombre = document.getElementById("nombre");
//var apellido = document.getElementById("apellido");
//var rut = document.getElementById("rut");
var formulario = document.getElementById("form-clientes");
var cuerpoTabla = document.getElementById("cuerpo-tabla");
var registro = "";
let contador = 0;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  /* EVALUAMOS SI EL CLIENTE ES MAYOR DE EDAD (<=18 AÑOS) */
  let edadCliente = parseInt(edad.value);
  //console.log(typeof edadCliente);

  if (edadCliente >= 18) {
    contador++;
    registro += `
            <tr>
              <th scope="row">${contador}</th>
              <td>${nombre.value}</td>
              <td>${apellido.value}</td>
              <td>${rut.value}</td>
              <td>${edad.value}</td>
            </tr>    
    `;

    cuerpoTabla.innerHTML = registro;
    formulario.reset();
  } else {
    alert(
      "Atención! el cliente no tiene la edad requerida por sistema (18 años.)"
    );
  }
});
