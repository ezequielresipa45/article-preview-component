var share = document.getElementById("nav-share"); // MODAL

var elemento = document.getElementById("contenedor-card");

var caja = document.getElementById("caja-texto-usuario"); 

// window.matchMedia("(max-width: 748px)").matches




function miniModal(params) {
    
    
    
    share.classList.toggle('display');
    // document.body.appendChild(texto);






   
   if (!share.classList.contains("display") && window.matchMedia("(max-width: 748px)").matches) {
       
       
    elemento.style.borderBottomLeftRadius = "0";
    elemento.style.borderBottomRightRadius= "0";
    caja.style.display = "none";

   




   }else{
    elemento.style.borderBottomLeftRadius = "1rem";
    elemento.style.borderBottomRightRadius= "1rem";

    caja.style.display = "flex";
    






   }













}





