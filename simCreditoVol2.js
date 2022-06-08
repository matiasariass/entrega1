function credito() {
  
  let username = prompt("Por favor, ingrese su nombre:")
  let paisIngresado = capitalizeFirstLetter(prompt('Introduzca su pais')) 
  let interesBruto = calcularInteres(paisIngresado)
  let interesConDescuentoAplicado = aplicarDescuento(interesBruto)
  
  let creditoAceptado = false;

  while (!creditoAceptado) {

    let monto = parseInt(prompt("Ingrese el monto del credito!"))
    let montoPermitido = (monto < 2000000);

    while (!montoPermitido) {
      monto = parseInt(prompt("Ingreso un monto mayor a 2.000.000, por favor ingrese uno nuevo."))
      montoPermitido = (monto < 2000000);
    }

    let meses = parseInt(prompt("Ingrese la cantidad de cuotas a pagar!"))
    let impuestoTotal = (0.15 + interesConDescuentoAplicado) // 0.15 = impuesto de plataforma
    let resultadoTotal = (monto * impuestoTotal).toFixed(2)
    let resultadoPorMes = (resultadoTotal / meses).toFixed(2)

    creditoAceptado = confirm(username + (", Usted en total pagara: " + resultadoTotal))

    if (creditoAceptado)
      alert("¡Credito aceptado! Usted pagara: " + resultadoPorMes + " por mes. ¡Gracias por confiar!");
  }
}

const paises = [{
  id: 1,
  nombre: "Argentina",
  importe: 1.21,
}, {
  id: 2,
  nombre: "Colombia",
  importe: 1.31,
}, {
  id: 3,
  nombre: "Chile",
  importe: 1.91,
}, {
  id: 4,
  nombre: "Brasil",
  importe: 1.41,
}, {
  id: 5,
  nombre: "Venezuela",
  importe: 1.51,
}]


function calcularInteres(paisIngresado) {

  let resultadoBusqueda = paises.find(pais => pais.nombre === paisIngresado)

  if (resultadoBusqueda) {
    return resultadoBusqueda.importe
  } else {
    alert("Solo los siguientes paises estan habilitados: Argentina, Brasil, Chile, Uruguay, Venezuela")
  }

  // EXTRAER DATOS DE OBJETOS - retorna el id de cada pais
  let idReales = paises.map(pais => pais.id);
  console.log(idReales)

}
 // DESCUENTO DEL 15% SI EL IMPORTE ES MAYOR A 1.50
function aplicarDescuento(interesBruto) {
  if (interesBruto > 1.50) {
    return interesBruto * 0.85; 
  } else {
    return interesBruto;
  }
}
function capitalizeFirstLetter(paisIngresado) {
  return paisIngresado.charAt(0).toUpperCase() + paisIngresado.slice(1);
}

console.log(capitalizeFirstLetter('foo')); 
  
credito()
