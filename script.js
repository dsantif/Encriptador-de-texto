const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#texto-desencriptado");

const matriz_code = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncriptar() {
  const texto = encriptar(campo_texto.value);
  campo_mensaje.value = texto;
  document.querySelector("#persona").style.display = "none";
}

function encriptar(fraseEncriptada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseEncriptada.includes(matriz_code[i][0])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matriz_code[i][0],
        matriz_code[i][1]);
    }
  }
  return fraseEncriptada;
}

function btnDesencriptar() {
  const mensajeDesencriptado = desencriptar(campo_mensaje.value);
  campo_mensaje.value = mensajeDesencriptado;
  document.querySelector("#persona").style.display = "none";
}

function desencriptar(fraseDesencriptada) {
  for (let i = 0; i < matriz_code.length; i++) {
    if (fraseDesencriptada.includes(matriz_code[i][1])) {
      fraseDesencriptada = fraseDesencriptada.replaceAll(
        matriz_code[i][1],
        matriz_code[i][0]);
    }
  }
  return fraseDesencriptada;
}

function copiarTexto() {
  var texto = document.getElementById("texto-desencriptado").value;

  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log("¡Texto copiado!");
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
}