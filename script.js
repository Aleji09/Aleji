const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");
//Abrir carta
btnAbrir.addEventListener("click", ()=>{
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

    const h1= document.querySelector("h1");
    const p= document.querySelector("p");
    h1.style.transform = "translateY(-120px)";
    p.style.transform = "translateY(-120px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

    const icono_c= document.querySelector(".bx");
    icono_c.classList.add("bx-rotada");

    setTimeout(()=>{
        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.add("abrir-mensaje");
        ElementoSuperior.style.zIndex = -1;
    }, 700)

});


//Cerrar carta
btnCerrar.addEventListener("click", ()=>{
    const ElementoSuperior = document.querySelector(".superior");
   
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.remove("abrir-mensaje");

    setTimeout(()=>{
        const h1= document.querySelector("h1");
        const p= document.querySelector("p");
        h1.style.transform = "translateY(0px)";
        p.style.transform = "translateY(0px)";
      
        const icono_c= document.querySelector(".bx");
        icono_c.classList.remove("bx-rotada");
    
        ElementoSuperior.style.zIndex = 0; 
        ElementoSuperior.classList.remove("abrir-superior");
       
    }, 700)

});

//Click para abrir
const contenedor = document.querySelector("#AbrirContenedor");
contenedor.addEventListener("click", ()=>{
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

    const h1= document.querySelector("h1");
    const p= document.querySelector("p");
    h1.style.transform = "translateY(-120px)";
    p.style.transform = "translateY(-120px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

    const icono_c= document.querySelector(".bx");
    icono_c.classList.add("bx-rotada");

    setTimeout(()=>{
        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.add("abrir-mensaje");
        ElementoSuperior.style.zIndex = -1;
    }, 700)
});