
    
    function encriptado(){
        var textoRecibido = document.querySelector("#textoEntrante").value;
        
        textoRecibido.replaceAll("e","enter");
        replace(/i/igm,"imes");
        replace(/a/igm,"ai");
        replace(/o/igm,"ober");
        replace(/u/igm,"ufat");

        document.querySelector(".mensaje").innerHTML=textoCifrado;
        document.querySelector("#textoEntrante").value;
           
    }   
    var botonencriptar = document.querySelector("#botonEncriptar");
    botonencriptar.onclick = encriptado;
    

