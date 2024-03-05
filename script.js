const areaTexto = document.querySelector(".cuadroTexto");
const areaMensaje = document.querySelector(".cuadroMensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

areaTexto.addEventListener("input", function() {
    let texto = areaTexto.value;
    let textoModificado = "";
  
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto.charAt(i);
      if (/[a-z ]/.test(caracter)) {
        textoModificado += caracter;
      }
    }
    return areaTexto.value = textoModificado;
  });

function btnEncriptar(){
    const textoEncriptado = encriptar(areaTexto.value);
    areaMensaje.value = textoEncriptado;
    areaTexto.value = "";
    areaMensaje.style.backgroundImage = "none";
    
    return;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(areaTexto.value);
    areaMensaje.value = textoDesencriptado;
    areaTexto.value = "";
    areaMensaje.style.backgroundImage = "none";
    
    return;
}

function cambiarMensaje() {
    document.getElementById("mensajeNoEncontrado").style.display = "none";
    document.getElementById("mensajeEncriptado").style.display = "block";
    
    return;
  }

function cambiarMensajeDos() {
    document.getElementById("mensajeNoEncontrado").style.display = "none";
    document.getElementById("mensajeDesencriptado").style.display = "block";
    
    return;
  }

function encriptar(stringEncriptado){
    let codigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringEncriptado.includes(codigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let codigo = [["ufat","u"],["ober","o"],["ai","a"],["imes","i"],["enter","e"]];
    stringDesencriptado =  stringDesencriptado.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringDesencriptado.includes(codigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
return stringDesencriptado
}

function copiarTexto() {
    const areaMensaje = document.querySelector(".cuadroMensaje");
    
    areaMensaje.select();
    document.execCommand("copy");
    areaMensaje.value= "";
    areaMensaje.style.backgroundImage = "url(img/sobre.jpg)";
    document.getElementById("mensajeNoEncontrado").style.display = "block";
    document.getElementById("mensajeEncriptado").style.display = "none";
    document.getElementById("mensajeDesencriptado").style.display = "none";

    return;
  }

function textoCopiado(){
    let btnCopiar = document.getElementById("copiarBtn");
    let btnCopiado = document.getElementById("copiadoBtn");

    btnCopiar.style.display="none";
    btnCopiado.style.display= "flex";
    setTimeout(function() {
        btnCopiar.style.display="flex";
        btnCopiado.style.display="none";
      }, 1500);
  }

function reset(){
    location.reload();
}