

const imagencuatro= document.getElementById('uno');

const cargarImagen=(entradas, vista)=>{

   entradas.forEach((entrada)=>{
    if(entrada.isIntersecting){
        entrada.target.classList.add('visible')
    }
   })
}

const vista= new IntersectionObserver(cargarImagen, {
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

vista.observe(imagencuatro)
