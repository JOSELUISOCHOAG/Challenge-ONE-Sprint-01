var reglaLetras = ["a", "e", "i", "o", "u"];
var reglaCambio = ["ai", "enter", "imes", "ober", "ufat"];
var fraseUsuario = document.getElementById("texto1");
var fraseResultado = document.getElementById("texto2");
var btnEncripta = document.getElementById("btn-encripta");
var btnDesencripta = document.getElementById("btn-desencripta");
var btnCopiar = document.getElementById("btn-copiar");

function encriptar() {
  var fraseOriginal = fraseUsuario.value;
  if (fraseOriginal.length <= 0) {
    alert("Texto no puede estar vacio");
    fraseUsuario.focus();
    return;
  }

  var fraseCambiada = "";
  var caracter = "";
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
  fraseResultado.value = fraseCambiada;
  btnCopiar.focus();
  return;
}

function desencriptar(frase) {
  var fraseOriginal = fraseUsuario.value;
  var fraseCambiada = "";
  var caracter = "";
  var pos = 0;
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
  fraseResultado.value = fraseCambiada;
  btnCopiar.focus();
}

document.write("<p>lorem ipsum</p>");

btnEncripta.onclick = encriptar;

btnDesencripta.onclick = desencriptar;
