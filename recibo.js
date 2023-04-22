let contador = parseInt(localStorage.getItem("contador") || "0");
let generarBtn = document.getElementById("generar");
let resetearBtn = document.getElementById("resetear");
item=0;
let itemBtn = document.getElementById("item");


function generarRecibo() {

  let formulario = document.querySelector('form');
  let formulariocliente = document.getElementById("clienteform");
  let formularioreparacion = document.getElementById("reparacionform");
  let formulariopago = document.getElementById("pagoform");
  
  

  if (formulario.checkValidity()&formulariocliente.checkValidity()&formularioreparacion.checkValidity()&formulariopago.checkValidity()) {
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
    

    // Crear el HTML del recibo 1 fila

    if (item==0){

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
    
    

    "<table id='tablarecibo' class='table table-hover'>" +
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

    "Total: $" + precioUnitario*cantidad + "<br>" +

    "Forma de pago: " + formaPago + "<br>" +
    "Equipos y accesorios: " + equiposAccesorios + "<br>" +


    "<div class='border-top border-3 my-3'></div>"+
    "PLAZO DE GARANTIA: " + garantia + " DIAS" + "<br>" +
    "POR FAVOR CONSERVE ESTE RECIBO PARA PODER RECLAMAR LA GARANTIA" + "<br>" + 
    "MUCHAS GRACIAS POR SU PREFERENCIA";


    document.getElementById("recibo").innerHTML = recibo;

    }


    // Crear el HTML del recibo 2 fila

    if (item==1){

    let descripcion1 = document.getElementById("descripcion1").value;
    let cantidad1 = parseInt(document.getElementById("cantidad1").value);
    let precioUnitario1 = parseInt(document.getElementById("precioUnitario1").value);

    

      let recibo1 =
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
    
    

    "<table id='tablarecibo' class='table table-hover'>" +
    "<tr>" +
    "<th>Descripcion</th>" +
    "<th>Cantidad</th>" +
    "<th>Precio unitario</th>" +
    "<th>Subtotal</th>" +
    "</tr>" +
    "<tr>" +
    "<td>" + descripcion + "</td>" +
    "<td>" + cantidad + "</td>" +
    "<td>$" + precioUnitario + "</td>" +
    "<td>$" + precioUnitario*cantidad + "</td>" +
    "</tr>" +
    "</tr>" +
    "<tr>" +
    "<td>" + descripcion1 + "</td>" +
    "<td>" + cantidad1 + "</td>" +
    "<td>$" + precioUnitario1 + "</td>" +
    "<td>$" + precioUnitario1*cantidad1 + "</td>" +
    "</tr>" +
    "</table>" +

    "Total: $" + (precioUnitario*cantidad+precioUnitario1*cantidad1) + "<br>" +

    "Forma de pago: " + formaPago + "<br>" +
    "Equipos y accesorios: " + equiposAccesorios + "<br>" +


    "<div class='border-top border-3 my-3'></div>"+
    "PLAZO DE GARANTIA: " + garantia + " DIAS" + "<br>" +
    "POR FAVOR CONSERVE ESTE RECIBO PARA PODER RECLAMAR LA GARANTIA" + "<br>" + 
    "MUCHAS GRACIAS POR SU PREFERENCIA";


    document.getElementById("recibo").innerHTML = recibo1;

    }

    // Crear el HTML del recibo 3 fila

    if (item==2){

      let descripcion1 = document.getElementById("descripcion1").value;
      let cantidad1 = parseInt(document.getElementById("cantidad1").value);
      let precioUnitario1 = parseInt(document.getElementById("precioUnitario1").value);
  
      

      let descripcion2 = document.getElementById("descripcion2").value;
      let cantidad2 = parseInt(document.getElementById("cantidad2").value);
      let precioUnitario2 = parseInt(document.getElementById("precioUnitario2").value);
  
      
  
        let recibo2 =
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
      
      
  
      "<table id='tablarecibo' class='table table-hover'>" +
      "<tr>" +
      "<th>Descripcion</th>" +
      "<th>Cantidad</th>" +
      "<th>Precio unitario</th>" +
      "<th>Subtotal</th>" +
      "</tr>" +
      "<tr>" +
      "<td>" + descripcion + "</td>" +
      "<td>" + cantidad + "</td>" +
      "<td>$" + precioUnitario + "</td>" +
      "<td>$" + precioUnitario*cantidad + "</td>" +
      "</tr>" +
      "</tr>" +
      "<tr>" +
      "<td>" + descripcion1 + "</td>" +
      "<td>" + cantidad1 + "</td>" +
      "<td>$" + precioUnitario1 + "</td>" +
      "<td>$" + precioUnitario1*cantidad1 + "</td>" +
      "</tr>" +
      "</tr>" +
      "<tr>" +
      "<td>" + descripcion2 + "</td>" +
      "<td>" + cantidad2 + "</td>" +
      "<td>$" + precioUnitario2 + "</td>" +
      "<td>$" + precioUnitario2*cantidad2 + "</td>" +
      "</tr>" +
      "</table>" +
  
      "Total: $" + (precioUnitario*cantidad+precioUnitario1*cantidad1+precioUnitario2*cantidad2) + "<br>" +
  
      "Forma de pago: " + formaPago + "<br>" +
      "Equipos y accesorios: " + equiposAccesorios + "<br>" +
  
  
      "<div class='border-top border-3 my-3'></div>"+
      "PLAZO DE GARANTIA: " + garantia + " DIAS" + "<br>" +
      "POR FAVOR CONSERVE ESTE RECIBO PARA PODER RECLAMAR LA GARANTIA" + "<br>" + 
      "MUCHAS GRACIAS POR SU PREFERENCIA";
  
  
      document.getElementById("recibo").innerHTML = recibo2;
  
      }

      // Crear el HTML del recibo 4 fila

    if (item==3){

      let descripcion1 = document.getElementById("descripcion1").value;
      let cantidad1 = parseInt(document.getElementById("cantidad1").value);
      let precioUnitario1 = parseInt(document.getElementById("precioUnitario1").value);
  
      

      let descripcion2 = document.getElementById("descripcion2").value;
      let cantidad2 = parseInt(document.getElementById("cantidad2").value);
      let precioUnitario2 = parseInt(document.getElementById("precioUnitario2").value);

      let descripcion3 = document.getElementById("descripcion3").value;
      let cantidad3 = parseInt(document.getElementById("cantidad3").value);
      let precioUnitario3 = parseInt(document.getElementById("precioUnitario3").value);
  
      
  
        let recibo3 =
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
      
      
  
      "<table id='tablarecibo' class='table table-hover'>" +
      "<tr>" +
      "<th>Descripcion</th>" +
      "<th>Cantidad</th>" +
      "<th>Precio unitario</th>" +
      "<th>Subtotal</th>" +
      "</tr>" +
      "<tr>" +
      "<td>" + descripcion + "</td>" +
      "<td>" + cantidad + "</td>" +
      "<td>$" + precioUnitario + "</td>" +
      "<td>$" + precioUnitario*cantidad + "</td>" +
      "</tr>" +
      "</tr>" +
      "<tr>" +
      "<td>" + descripcion1 + "</td>" +
      "<td>" + cantidad1 + "</td>" +
      "<td>$" + precioUnitario1 + "</td>" +
      "<td>$" + precioUnitario1*cantidad1 + "</td>" +
      "</tr>" +
      "</tr>" +
      "<tr>" +
      "<td>" + descripcion2 + "</td>" +
      "<td>" + cantidad2 + "</td>" +
      "<td>$" + precioUnitario2 + "</td>" +
      "<td>$" + precioUnitario2*cantidad2 + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>" + descripcion3 + "</td>" +
      "<td>" + cantidad3 + "</td>" +
      "<td>$" + precioUnitario3 + "</td>" +
      "<td>$" + precioUnitario3*cantidad3 + "</td>" +
      "</tr>" +
      "</table>" +
  
      "Total: $" + (precioUnitario*cantidad+precioUnitario1*cantidad1+precioUnitario2*cantidad2+precioUnitario3*cantidad3) + "<br>" +
  
      "Forma de pago: " + formaPago + "<br>" +
      "Equipos y accesorios: " + equiposAccesorios + "<br>" +
  
  
      "<div class='border-top border-3 my-3'></div>"+
      "PLAZO DE GARANTIA: " + garantia + " DIAS" + "<br>" +
      "POR FAVOR CONSERVE ESTE RECIBO PARA PODER RECLAMAR LA GARANTIA" + "<br>" + 
      "MUCHAS GRACIAS POR SU PREFERENCIA";
  
  
      document.getElementById("recibo").innerHTML = recibo3;
  
      }



    

    
  // insertar boton de guardar
    var div = document.getElementById("guardar"); // Obtener el elemento div por su id
    div.innerHTML = "<br>"+"<button class='btn btn-primary' type='button' id='imprimir'>Imprimir y guardar recibo</button>"; // Agregar un botón utilizando la etiqueta <button>
    let imprimirBtn = document.getElementById("imprimir");
    imprimirBtn.addEventListener("click", imprimirRecibo);

  //insertar boton de cancelar
    var div = document.getElementById("cancelar"); // Obtener el elemento div por su id
    div.innerHTML = "<br>"+"<button class='btn btn-primary' type='button' id='cancelar'>Cancelar</button>"; // Agregar un botón utilizando la etiqueta <button>
    let cancelarBtn = document.getElementById("cancelar");
    cancelarBtn.addEventListener("click", cancelarRecibo);


    // Resetear el formulario
    //formulario.reset();

    //ir a la parte superior
    window.scrollTo(0, 0);

  } else {
    formulario.reportValidity();
    alert("Completa todos los datos para generar el recibo")
  }
}


function cancelarRecibo(){
  location.reload();
}

function resetearContador() {
  contador = 1;
  localStorage.setItem("contador", contador);
  alert("El contador ha sido reseteado.");
  location.reload();
}

function imprimirRecibo() {
  if (item==0){
    // Ocultar elementos que no se quieren imprimir
    const elementosOcultos = document.querySelectorAll(".no-imprimir");
    elementosOcultos.forEach((elem) => {
      elem.style.visibility = "hidden";
    });

    // Agregar clase "impreso" para aplicar estilos de impresión
    const recibofinal = document.getElementById("recibo");
    recibofinal.classList.add("impreso");

    // Imprimir página
    window.print();

    // Restablecer elementos ocultos y estilos de impresión
    elementosOcultos.forEach((elem) => {
      elem.style.visibility = "";
    });
    recibofinal.classList.remove("impreso");
  }

  if (item==1){
    // Ocultar elementos que no se quieren imprimir
    const elementosOcultos = document.querySelectorAll(".no-imprimir");
    elementosOcultos.forEach((elem) => {
      elem.style.display = "none";
    });

    // Agregar clase "impreso" para aplicar estilos de impresión
    const recibofinal = document.getElementById("recibo1");
    recibofinal.classList.add("impreso");

    // Imprimir página
    window.print();

    // Restablecer elementos ocultos y estilos de impresión
    elementosOcultos.forEach((elem) => {
      elem.style.display = "";
    });
    recibofinal.classList.remove("impreso");
  }

  if (item==2){
    // Ocultar elementos que no se quieren imprimir
    const elementosOcultos = document.querySelectorAll(".no-imprimir");
    elementosOcultos.forEach((elem) => {
      elem.style.display = "none";
    });

    // Agregar clase "impreso" para aplicar estilos de impresión
    const recibofinal = document.getElementById("recibo2");
    recibofinal.classList.add("impreso");

    // Imprimir página
    window.print();

    // Restablecer elementos ocultos y estilos de impresión
    elementosOcultos.forEach((elem) => {
      elem.style.display = "";
    });
    recibofinal.classList.remove("impreso");
  }

  if (item==3){
    // Ocultar elementos que no se quieren imprimir
    const elementosOcultos = document.querySelectorAll(".no-imprimir");
    elementosOcultos.forEach((elem) => {
      elem.style.display = "none";
    });

    // Agregar clase "impreso" para aplicar estilos de impresión
    const recibofinal = document.getElementById("recibo3");
    recibofinal.classList.add("impreso");

    // Imprimir página
    window.print();

    // Restablecer elementos ocultos y estilos de impresión
    elementosOcultos.forEach((elem) => {
      elem.style.display = "";
    });
    recibofinal.classList.remove("impreso");
  }

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
itemBtn.addEventListener("click", aregaritem);


function aregaritem(){
  item++;
  if (item==1){

    let tabla1 =
    "<form>"+
  
                "<div class='mb-3'>"+
                  "<label for='descripcion' class='form-label'>Descripción:</label>"+
                  "<input type='text' class='form-control' id='descripcion1' placeholder='Detalle de la reparacion y mano de obra' required><br />" +
                "</div>" +
      
                "<div class='mb-3'>"+
                  "<label for='cantidad' class='form-label'>Cantidad:</label>"+
                  "<input type='number' class='form-control' id='cantidad1' placeholder='Ingrese cantidad' required><br />"+
                "</div>"+
      
                "<div class='mb-3'>"+
                  "<label for='precioUnitario' class='form-label'>Precio unitario:</label>"+
                  "<input type='number' class='form-control' id='precioUnitario1' placeholder='Ingrese precio del item' required><br />"+
                "</div>"+
    
              "</form>"+
              "<hr>";
  
    document.getElementById("ver1").innerHTML = tabla1;
   }
   
   if (item==2){


   let tabla2 =
    "<form>"+
  
                "<div class='mb-3'>"+
                  "<label for='descripcion' class='form-label'>Descripción:</label>"+
                  "<input type='text' class='form-control' id='descripcion2' placeholder='Detalle de la reparacion y mano de obra' required><br />" +
                "</div>" +
      
                "<div class='mb-3'>"+
                  "<label for='cantidad' class='form-label'>Cantidad:</label>"+
                  "<input type='number' class='form-control' id='cantidad2' placeholder='Ingrese cantidad' required><br />"+
                "</div>"+
      
                "<div class='mb-3'>"+
                  "<label for='precioUnitario' class='form-label'>Precio unitario:</label>"+
                  "<input type='number' class='form-control' id='precioUnitario2' placeholder='Ingrese precio del item' required><br />"+
                "</div>"+
    
              "</form>"+
              "<hr>";
  
    document.getElementById("ver2").innerHTML = tabla2;

    


    
   }
  
   if (item==3){


    let tabla3 =
     "<form>"+
   
                 "<div class='mb-3'>"+
                   "<label for='descripcion' class='form-label'>Descripción:</label>"+
                   "<input type='text' class='form-control' id='descripcion3' placeholder='Detalle de la reparacion y mano de obra' required><br />" +
                 "</div>" +
       
                 "<div class='mb-3'>"+
                   "<label for='cantidad' class='form-label'>Cantidad:</label>"+
                   "<input type='number' class='form-control' id='cantidad3' placeholder='Ingrese cantidad' required><br />"+
                 "</div>"+
       
                 "<div class='mb-3'>"+
                   "<label for='precioUnitario' class='form-label'>Precio unitario:</label>"+
                   "<input type='number' class='form-control' id='precioUnitario3' placeholder='Ingrese precio del item' required><br />"+
                 "</div>"+
     
               "</form>"+
               "<hr>";
   
     document.getElementById("ver3").innerHTML = tabla3;
 
     
 
 
     
    }


}

