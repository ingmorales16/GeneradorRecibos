let contador = parseInt(localStorage.getItem("contador") || "0");
let generarBtn = document.getElementById("generar");
let resetearBtn = document.getElementById("resetear");
let imprimirBtn = document.getElementById("imprimir");

function generarRecibo() {
  let formulario = document.querySelector('form');
  
  if (formulario.checkValidity()) {
    // Obtener los datos del formulario
    let cliente = document.getElementById("cliente").value;
    let telefono = document.getElementById("telefono").value;
    let formaPago = document.getElementById("formaPago").value;
    let equiposAccesorios = document.getElementById("equiposAccesorios").value;

    let descripcion = document.getElementById("descripcion").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precioUnitario = parseInt(document.getElementById("precioUnitario").value);

    let garantia = document.getElementById("garantia").value;
    let fecha = new Date().toLocaleDateString("es-ES");
    

    // Crear el HTML del recibo
    let recibo =
    "<div class='container'>"+
      "<div class='row'>" +
        "<div class='col'>"+
          "<img src='esg.jpg' class='img-thumbnail' alt='Imagen del recibo'>"+
        "</div>" +
        "<div class='col'>" +
          "<strong>ELECTRONICA SAINT GERMAIN</strong><br>" +
          "Mza 27 Lt6 B° Saint Germain<br>" +
         "ingmorales16@gmail.com<br>" +
         "3854857944//3855999097<br><br>" +
        "</div>" +
      "</div>"+
    "</div>" + 

    "<br>" +
    
    "<strong>Recibo #" + contador + "</strong>" + "<br>" +
    "Fecha: " + fecha + "<br>" +
    "Cliente: " + cliente + "<br>" +
    "Teléfono: " + telefono + "<br>" +
    
    

    "<table class='table table-hover'>" +
    "<tr>" +
    "<th>Descripcion</th>" +
    "<th>Cantidad</th>" +
    "<th>Precio unitario</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" + descripcion + "</td>" +
    "<td>" + cantidad + "</td>" +
    "<td>$" + precioUnitario + "</td>" +
    "</tr>" +
    "</table>" +

    "Total: " + precioUnitario*cantidad + "<br>" +

    "Forma de pago: " + formaPago + "<br>" +
    "Equipos y accesorios: " + equiposAccesorios + "<br>" +


    "<div class='border-top border-3 my-3'></div>"+
    "PLAZO DE GARANTIA: " + garantia + " DIAS" + "<br>" +
    "POR FAVOR CONSERVE ESTE RECIBO PARA PODER RECLAMAR LA GARANTIA" + "<br>" + 
    "MUCHAS GRACIAS POR SU PREFERENCIA";


    document.getElementById("recibo").innerHTML = recibo;


// Resetear el formulario
formulario.reset();

  } else {
    formulario.reportValidity();
  }
}

function resetearContador() {
  contador = 1;
  localStorage.setItem("contador", contador);
  alert("El contador ha sido reseteado.");
}



function imprimirRecibo() {
  let contenido = document.getElementById("recibo").innerHTML;
  let contenidoOriginal = document.body.innerHTML;

  document.body.innerHTML = contenido;

  window.print();

  document.body.innerHTML = contenidoOriginal;

}

window.addEventListener("beforeprint", function() {
  aumentarContador();
});

function aumentarContador() {
  //actualizar contador de recibo
  localStorage.setItem("contador", contador + 1);
  contador++;
}

generarBtn.addEventListener("click", generarRecibo);
resetearBtn.addEventListener("click", resetearContador);
imprimirBtn.addEventListener("click", imprimirRecibo);

