// Ejercicio 1:

let expReg = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/i;

const login = (event) => {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;

    validacionNombre(nombre);
    validacionAsunto(asunto);
    validacionMensaje(mensaje);

    if (expReg.test(nombre) && expReg.test(asunto) && expReg.test(mensaje)) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
    } else {
        document.querySelector(".resultado").innerHTML = "";
    }
}

const validacionNombre = (nombre) => {
    if (nombre !== "") {
        if (expReg.test(nombre)) {
            document.querySelector(".errorNombre").innerHTML = "";
        } else {
            document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre valido.";
            alert('El formulario solo acepta caracteres de la "a" hasta la "z". Por favor, ingrese un nombre válido')
        }
    } else {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
    }
}

const validacionAsunto = (asunto) => {
    if (asunto !== "") {
        if (expReg.test(asunto)) {
            document.querySelector(".errorAsunto").innerHTML = "";
        } else {
            document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto valido.";
            alert('El formulario solo acepta caracteres de la "a" hasta la "z". Por Favor, ingrese un asunto válido')
        }
    } else {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido.";
    }
}

const validacionMensaje = (mensaje) => {
    if (mensaje !== "") {
        if (expReg.test(mensaje)) {
            document.querySelector(".errorMensaje").innerHTML = "";
        } else {
            document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje valido.";
            alert('El formulario solo acepta caracteres de la "a" hasta la "z". Por favor, ingrese un mensaje válido')
        }
    } else {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
    }
}

let form = document.getElementById("formulario");
form.addEventListener("submit", login);


//Ejercicio 2:

let rojo = document.getElementById('btn-1').style.backgroundColor;
let naranja = document.getElementById('btn-2').style.backgroundColor;
let amarillo = document.getElementById('btn-3').style.backgroundColor;
let verde = document.getElementById('btn-4').style.backgroundColor;
let celeste = document.getElementById('btn-5').style.backgroundColor;
let violeta = document.getElementById('btn-6').style.backgroundColor;

const colorRojo = () => {
    document.getElementById('caja').style.backgroundColor = rojo;
}
const colorNaranja = () => {
    document.getElementById('caja').style.backgroundColor = naranja;
}
const colorAmarillo = () => {
    document.getElementById('caja').style.backgroundColor = amarillo;
}
const colorVerde = () => {
    document.getElementById('caja').style.backgroundColor = verde;
}
const colorCeleste = () => {
    document.getElementById('caja').style.backgroundColor = celeste;
}
const colorVioleta = () => {
    document.getElementById('caja').style.backgroundColor = violeta;
}

document.getElementById("btn-1").addEventListener("click", colorRojo);
document.getElementById("btn-2").addEventListener("click", colorNaranja);
document.getElementById("btn-3").addEventListener("click", colorAmarillo);
document.getElementById("btn-4").addEventListener("click", colorVerde);
document.getElementById("btn-5").addEventListener("click", colorCeleste);
document.getElementById("btn-6").addEventListener("click", colorVioleta);


//Ejercicio 3:

let expresionRegular = /^[0-9]+(\.[0-9]+)?$/;

const sumar = () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    if (expresionRegular.test(valor1) && expresionRegular.test(valor2)) {
        res = parseFloat(valor1) + parseFloat(valor2);
        document.querySelector(".res").innerHTML = res;
        console.log(res);
    } else {
        document.querySelector(".res").innerHTML = ("Error");
    }
}

const restar = () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    if (expresionRegular.test(valor1) && expresionRegular.test(valor2)) {
        res = parseFloat(valor1) - parseFloat(valor2);
        if (res < 0) {
            document.querySelector(".res").innerHTML = 0;
        } else {
            document.querySelector(".res").innerHTML = res;
        }
        console.log(res);
    } else {
        document.querySelector(".res").innerHTML = ("Error");
    }
}

document.getElementById("btn-sumar").addEventListener("click", sumar);
document.getElementById("btn-restar").addEventListener("click", restar);


