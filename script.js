const textArea = document.querySelector(".text-area");
const mensajeDevuelto = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensajeDevuelto.value = textoEncriptado
    textArea.value = "";
    mensajeDevuelto.style.backgroundImage = "none"
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}
function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensajeDevuelto.value = textoDesencriptado
    textArea.value = "";
    mensajeDevuelto.style.backgroundImage = "none"
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
 


