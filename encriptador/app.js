let textoPlano = document.querySelector("#texto-plano");
let textoCifrado = document.querySelector("#mensaje");
const COPY = document.querySelector("#copiar");

const letras = ["e", "i", "a", "o", "u"];
const codigos = ["enter", "imes", "ai", "ober", "ufat"];

//const regEx =/ [^A-Z(áéíóú)\s]*/g;

function esconderElementos(elemento){
   document.getElementById(elemento).setAttribute("hidden", true);
}

function mostrarElementos(elemento, atributo){
    document.getElementById(elemento).removeAttribute("hidden");
}

function encriptar(mensajeEncriptar){
    for(let cont = 0; cont < letras.length; cont++){
        if(mensajeEncriptar.includes(letras[cont])){
            mensajeEncriptar = mensajeEncriptar.replaceAll(letras[cont], codigos[cont]);
        }
    }
    return mensajeEncriptar;
}

function desencriptar(mensajeDesencriptar){
    for(let cont = 0; cont < codigos.length; cont++){
        if(mensajeDesencriptar.includes(codigos[cont])){
            mensajeDesencriptar = mensajeDesencriptar.replaceAll(codigos[cont], letras[cont]);
        }
    }
    return mensajeDesencriptar;
}

COPY.addEventListener('click', function(){
    navigator.clipboard.writeText(textoCifrado.value);
})

function btnEncrypt(){
   let mensaje = encriptar(textoPlano.value);
   textoCifrado.value = mensaje; 
}

function btnDecrypt(){
    let mensaje = desencriptar(textoPlano.value);
    textoCifrado.value = mensaje; 
}

/*function condicionesIniciales(){
    mostrarElementos("no-texto");
    esconderElementos("mensaje");
}

condicionesIniciales();*/





