const nav=document.querySelector("#navbarId");
const abrir=document.querySelector("#btn-abrir");
const cerrar=document.querySelector("#btn-cerrar");


abrir.addEventListener("click",()=>{
    nav.classList.add("visible");
})


cerrar.addEventListener("click",()=>{
    nav.classList.remove("visible");
})


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   form.reset();

   const serviceID = 'default_service';
   const templateID = 'template_9hhgv2g';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});