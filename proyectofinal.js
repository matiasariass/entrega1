const nameIngresado = document.querySelector("#nombreInput");
const interesIngresado = document.querySelector("#interesInput");
const montoIngresado = document.querySelector("#montoInput");
const cuotasIngresadas = document.querySelector("#cuotasInput");

const nameError = document.querySelector("#nombreError");
const interesError = document.querySelector("#interesError");
const montoError = document.querySelector("#montoError");
const cuotasError = document.querySelector("#cuotasError");

const button = document.querySelector("#boton");

// NO SE REFRESCA LA PAGINA
const getForm = document.querySelector("form");
getForm.addEventListener("submit", (e) => {
    e.preventDefault();
})
// BOTON
button.addEventListener('click',(event)=>{
    validateEmpty(nameIngresado.value, nameIngresado, nameError, "Nombre");
    validateEmpty(interesIngresado.value, interesIngresado, interesError, "Interès");
    validateEmpty(montoIngresado.value, montoIngresado, montoError, "Monto");
    validateEmpty(cuotasIngresadas.value, cuotasIngresadas, cuotasError, "Cuotas");
});

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nameInput);

    }else{
        hideError(divInput, divError);
        saveInStorage();
   }
}

/*Guado todo en un array para luego guardar este array en el storage*/
const arr = [];
function saveInStorage(){
    let findName = arr.findIndex(x => x.name == nameIngresado.value);
    let findInt = arr.findIndex(x => x.int == interesIngresado.value);
    let findAmount = arr.findIndex(x => x.amount == montoIngresado.value);
    let findInstallments = arr.findIndex(x => x.Installments == cuotasIngresadas.value);
    if((findName && findInt && findAmount && findInstallments) == -1){
        arr.push({name : nameIngresado.value});
        arr.push({int: interesIngresado.value});
        arr.push({amount : montoIngresado.value});
        arr.push({Installments: cuotasIngresadas.value});

        let objToString = JSON.stringify(arr);

        localStorage.setItem("user", objToString);
    }
}


// POPUP
function showError(divInput, divError, nameInput){
   event.preventDefault();
   divInput.style.border='1px solid red';
   divError.innerHTML = `<img class="icon-error" src="./icon-error.svg" alt="">
   <p class="error">${nameInput} no puede estar vacío</p>`; 
}
function hideError(divInput, divError){
    divInput.style.border='1px solid hsl(246,25%,77%)';
    divError.innerHTML = ``;
}

let popup = document.getElementById ("popup");

function abrirPopup(){
    // if (false) 
    popup.classList.add("open-popup");
}

function cerrarPopup(){
    popup.classList.remove("open-popup");
    
}


// function credito() {
  

//   let paisIngresado = capitalizeFirstLetter(prompt('Introduzca su pais')) 
//   let interesBruto = calcularInteres(paisIngresado)
//   let interesConDescuentoAplicado = aplicarDescuento(interesBruto)
  
//   let creditoAceptado = false;

//   while (!creditoAceptado) {

//     let monto = parseInt(prompt("Ingrese el monto del credito!"))
//     let montoPermitido = (monto < 2000000);

//     while (!montoPermitido) {
//       monto = parseInt(prompt("Ingreso un monto mayor a 2.000.000, por favor ingrese uno nuevo."))
//       montoPermitido = (monto < 2000000);
//     }

//     let meses = parseInt(prompt("Ingrese la cantidad de cuotas a pagar!"))
//     let impuestoTotal = (0.15 + interesConDescuentoAplicado) // 0.15 = impuesto de plataforma
//     let resultadoTotal = (monto * impuestoTotal).toFixed(2)
//     let resultadoPorMes = (resultadoTotal / meses).toFixed(2)

//     creditoAceptado = confirm(username + (", Usted en total pagara: " + resultadoTotal))

//     if (creditoAceptado)
//       alert("¡Credito aceptado! Usted pagara: " + resultadoPorMes + " por mes. ¡Gracias por confiar!");
//   }
// }

// const paises = [{
//   id: 1,
//   nombre: "Argentina",
//   importe: 1.21,
// }, {
//   id: 2,
//   nombre: "Colombia",
//   importe: 1.31,
// }, {
//   id: 3,
//   nombre: "Chile",
//   importe: 1.91,
// }, {
//   id: 4,
//   nombre: "Brasil",
//   importe: 1.41,
// }, {
//   id: 5,
//   nombre: "Venezuela",
//   importe: 1.51,
// }]


// function calcularInteres(paisIngresado) {

//   let resultadoBusqueda = paises.find(pais => pais.nombre === paisIngresado)

//   if (resultadoBusqueda) {
//     return resultadoBusqueda.importe
//   } else {
//     alert("Solo los siguientes paises estan habilitados: Argentina, Brasil, Chile, Uruguay, Venezuela")
//   }

// }
//  // DESCUENTO DEL 15% SI EL IMPORTE ES MAYOR A 1.50
// function aplicarDescuento(interesBruto) {
//   if (interesBruto > 1.50) {
//     return interesBruto * 0.85; 
//   } else {
//     return interesBruto;
//   }
// }
// function capitalizeFirstLetter(paisIngresado) {
//   return paisIngresado.charAt(0).toUpperCase() + paisIngresado.slice(1);
// }

// console.log(capitalizeFirstLetter('foo')); 
  
// credito()
