const nav=document.querySelector("#navbarId");
const abrir=document.querySelector("#btn-abrir");
const cerrar=document.querySelector("#btn-cerrar");


abrir.addEventListener("click",()=>{
    nav.classList.add("visible");
})


cerrar.addEventListener("click",()=>{
    nav.classList.remove("visible");
})