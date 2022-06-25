document.getElementById(`form-ch`).addEventListener(`submit`, calculateResults);

const nameIngresado = document.querySelector("#nombreInput");
const interesIngresado = document.querySelector("#interesInput");
const montoIngresado = document.querySelector("#montoInput");
const aniosIngresados = document.querySelector("#aniosInput");

const nameError = document.querySelector("#nombreError");
const interesError = document.querySelector("#interesError");
const montoError = document.querySelector("#montoError");
const aniosError = document.querySelector("#aniosError");

const button = document.querySelector("#boton");

function calculateResults(e) {
    console.log(`calculando...`);

    const principio = parseFloat(montoIngresado.value);
    const calcularInteres = parseFloat(interesIngresado.value) / 100 / 12;
    const calcularPagos = parseFloat(aniosIngresados.value) * 12;

 //Pago por mes

 const x = Math.pow(1 + calcularInteres, calcularPagos);
 const mensual = (principio * x * calcularInteres) / (x - 1);
 const pagoMensual = mensual.toFixed(2);

 //Calcular interes

 const totalInteres = (mensual * calcularPagos - principio).toFixed(2);

 //Pago total

 const pagoTotal = (mensual * calcularPagos).toFixed(2);

    
console.log (pagoMensual, pagoTotal);

e.preventDefault();

}

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
    validateEmpty(aniosIngresados.value, aniosIngresados, aniosError, "Años");
});

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nameInput);

    }else{
        hideError(divInput, divError);
        saveInStorage()
   }
}

/*Guado todo en un array para luego guardar este array en el storage*/

const arr = [];
function saveInStorage(){
    let findName = arr.findIndex(x => x.name == nameIngresado.value);
    let findInt = arr.findIndex(x => x.int == interesIngresado.value);
    let findAmount = arr.findIndex(x => x.amount == montoIngresado.value);
    let findInstallments = arr.findIndex(x => x.Installments == aniosIngresados.value);
    if((findName && findInt && findAmount && findInstallments) == -1){
        arr.push({name : nameIngresado.value});
        arr.push({int: interesIngresado.value});
        arr.push({amount : montoIngresado.value});
        arr.push({Installments: aniosIngresados.value});

        let objToString = JSON.stringify(arr);

        localStorage.setItem("user", objToString);
    }
}

// ERRORES

function showError(divInput, divError, nameInput){
   divInput.style.border='1px solid red';
   divError.innerHTML = `<img class="icon-error" src="./icon-error.svg" alt="">
   <p class="error">${nameInput} no puede estar vacío</p>`; 
}
function hideError(divInput, divError){
    divInput.style.border='1px solid hsl(246,25%,77%)';
    divError.innerHTML = ``;
}
// POPUP

let popup = document.getElementById ("popup");

function abrirPopup(){  
    if(nameIngresado.value && interesIngresado.value && montoIngresado.value && aniosIngresados.value){
        popup.classList.add("open-popup");

        
       
        }else{
            
        }
    
}

function cerrarPopup(){
    popup.classList.remove("open-popup");
}

