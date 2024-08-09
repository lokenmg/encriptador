function validarTexto(textarea) {
    const regex = /^[a-z\s]*$/;
    const mensaje = document.querySelector(".info__informacion");

    if (regex.test(textarea)) {
        mensaje.style.color = "#000000";
        return true;
    } else {
        mensaje.style.color = "#ff0000";
        mensaje.innerHTML = "No aceptamos mayúsculas, acentos ni caracteres especiales";
        return false;
    }
}

function encriptar() {
    const palabraSinEncriptar = document.getElementById('textarea__texto').value;
    if (validarTexto(palabraSinEncriptar)) {
        const palabraEncriptada = encriptarPalabra(palabraSinEncriptar);
        mostrarResultado(palabraEncriptada);
    }
}

function desencriptar() {
    const textoEncriptado = document.getElementById('textarea__texto').value;
    if (validarTexto(textoEncriptado)) {
        const palabraDesencriptada = desencriptarPalabra(textoEncriptado);
        mostrarResultado(palabraDesencriptada);
    }
}

function encriptarPalabra(texto) {
    const mapaEncriptacion = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    return texto.replace(/[aeiou]/g, letra => mapaEncriptacion[letra]);
}

function desencriptarPalabra(texto) {
    const mapaDesencriptacion = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
    return texto.replace(/ai|enter|imes|ober|ufat/g, secuencia => mapaDesencriptacion[secuencia]);
}

function mostrarResultado(mensaje) {
    mostrarOcultar(".card__mensaje__imagen", "none");
    mostrarOcultar(".card__mensaje__noencontrado", "none");
    mostrarOcultar(".card__mensaje__submensaje", "none");
    document.querySelector(".card__mensaje__encriptado").innerHTML = mensaje;
    mostrarOcultar(".card__mensaje__encriptado", "block");
    mostrarOcultar(".card__mensaje__encriptado__copiar", "inline");
}

function mostrarOcultar(selector, display) {
    document.querySelector(selector).style.display = display;
}

const copiar = async () => {
    try {
        const mensajeEncriptado = document.querySelector(".card__mensaje__encriptado").value;
        await navigator.clipboard.writeText(mensajeEncriptado);
    } catch (err) {
        console.error('Error al copiar', err);
    }
}
