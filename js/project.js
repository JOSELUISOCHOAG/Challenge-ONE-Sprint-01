var reglaLetras = ["a", "e", "i", "o", "u"];
var reglaCambio = ["ai", "enter", "imes", "ober", "ufat"];
var fraseUsuario = document.getElementById("texto1");
var fraseResultado = document.getElementById("texto2");
var btnEncripta = document.getElementById("btn-encripta");
var btnDesencripta = document.getElementById("btn-desencripta");
var btnCopiar = document.getElementById("btn-copiar");
var btnLimpiar = document.getElementById("btn-limpiar");
var procesed = false;

document.getElementById("texto1").addEventListener("keypress", verificar);
function verificar(e) {
    // comprovamos con una expresion regular que el caracter pulsado sea
    // una letra minuscula, espacio o enter
    if (event.keyCode === 13) {
        // Si se presiona Enter
        return true; // Permitir su uso
    }

    if (e.key.match(/^[a-z\s\n]+$/) === null) {
        // Si la tecla pulsada no es la correcta, eliminado la pulsación
        let mensaje = document.getElementById("msgletras");
        agrandarElemento(mensaje);
        // alert("Solo letras minusculas");
        e.preventDefault();
    }
}

function encriptar() {
    let fraseOriginal = fraseUsuario.value;
    if (validacion(fraseOriginal)) {
        let fraseCambiada = "";
        let caracter = "";
        for (i = 0; i <= fraseOriginal.length; i++) {
            caracter = fraseOriginal.charAt(i);
            if (reglaLetras.indexOf(caracter) >= 0) {
                /* alert(caracter+" "+reglaLetras.indexOf(caracter)+" "+reglaCambio[reglaLetras.indexOf(caracter)]) */
                fraseCambiada =
                    fraseCambiada + reglaCambio[reglaLetras.indexOf(caracter)];
            } else {
                fraseCambiada = fraseCambiada + caracter;
            }
        }
        if (procesed === false) {
            document
                .getElementById("cuadro-mostrar")
                .classList.toggle("mostrar-resultado");
            procesed = true;
        }
        fraseResultado.value = fraseCambiada;
        fraseResultado.focus();
    }
    return;
}

function desencriptar() {
    let fraseOriginal = fraseUsuario.value;
    if (validacion(fraseOriginal)) {
        let fraseCambiada = "";
        let caracter = "";
        let pos = 0;
        while (pos <= fraseOriginal.length) {
            caracter = fraseOriginal.charAt(pos);
            if (reglaLetras.indexOf(caracter) >= 0) {
                fraseCambiada =
                    fraseCambiada + reglaLetras[reglaLetras.indexOf(caracter)];
                pos = pos + reglaCambio[reglaLetras.indexOf(caracter)].length;
            } else {
                fraseCambiada = fraseCambiada + caracter;
                pos = pos + 1;
            }
        }
        if (procesed === false) {
            document
                .getElementById("cuadro-mostrar")
                .classList.toggle("mostrar-resultado");
            procesed = true;
        }
        fraseResultado.value = fraseCambiada;
        fraseResultado.focus();
    }
}

function validacion(frase) {
    if (frase.length <= 0) {
        let mensaje = document.getElementById("msgalert");
        rotarElemento(mensaje);
        // alert("Texto no puede estar vacio");
        fraseUsuario.focus();
        //mensaje = document.getElementById("msgalert");
        //mensaje.style.transition = "transform 1s ease-in-out";
        //mensaje.style.transform = "none";
        return false;
    } else if (frase.length < 4) {
        alert("Longitud debe ser mayor");
        fraseUsuario.focus();
        return false;
    }
    return true;
}

function rotarElemento(elemento) {
    elemento.style.transform = "rotate(360deg)";
    elemento.style.transitionDuration = "1s";
    setTimeout(function(){
        elemento.style.transform = "none";
    }, 1000);
    return;
}

function agrandarElemento(elemento){
    elemento.style.transform = "scale(1.1)";
    elemento.style.color = "yellow";
    elemento.style.transitionDuration = "1s";
    setTimeout(function(){
        elemento.style.color = "white";
        elemento.style.transform = "none";
    }, 500);
    return;
}


function limpiar() {
    if (procesed === true) {
        document
            .getElementById("cuadro-mostrar")
            .classList.toggle("mostrar-resultado");
        procesed = false;
    }
    fraseUsuario.value = "";
    fraseResultado.value = "";
    fraseUsuario.focus();
    return true;
}

function copiarResultado(fraseResultado) {
    var fraseResultado = document.getElementById("texto2");
    if (fraseResultado.length === 0) {
        alert("Nada que copiar");
        return false;
    } else {
        fraseResultado.select();
        document.execCommand("copy");
        window.alert("Resultado copiado al portapapeles.!");
    }
    fraseUsuario.value = "";
    return true;
}

btnEncripta.onclick = encriptar;
btnDesencripta.onclick = desencriptar;
btnCopiar.onclick = copiarResultado;
btnLimpiar.onclick = limpiar;
