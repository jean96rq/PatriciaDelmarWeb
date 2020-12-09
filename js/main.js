const logo=document.querySelector('.logo')
const iconMenu=document.querySelector('.icon-menu')
const btnCerrarmenu=document.querySelector('.btn-cerrar')
const menuList=document.querySelector('.menu-list')
let formulario=document.getElementById('formularioContacto')
// if(window.innerWidth<900){
//     logo.classList.remove('m-auto')
// }

AOS.init();

    

window.onload =()=>{
    let links = document.querySelectorAll('.link')
    let inicio = links[0]
    inicio.addEventListener('click',()=>{
        scrollSuave('#banner',500,90)
        menuList.classList.remove('abrirMenu')
        btnCerrarmenu.style.left='20px'
        btnCerrarmenu.style.transition='all ease 0.5s';
    })
    let inicioDos = links[1]
    inicioDos.addEventListener('click',()=>{
        scrollSuave('#sobreMi',500,90)
        menuList.classList.remove('abrirMenu')
        btnCerrarmenu.style.left='20px'
        btnCerrarmenu.style.transition='all ease 0.5s';
    })
    let acercaDe = links[2]
    acercaDe.addEventListener('click',()=>{
        scrollSuave('#especialidades',500,90)
        menuList.classList.remove('abrirMenu')
        btnCerrarmenu.style.left='20px'
        btnCerrarmenu.style.transition='all ease 0.5s';
    })
    let proyectos = links[3]
    proyectos.addEventListener('click',()=>{
        
        scrollSuave('#proyectos',500,90)
        menuList.classList.remove('abrirMenu')
        btnCerrarmenu.style.left='20px'
        btnCerrarmenu.style.transition='all ease 0.5s';
    })
    let testimonios = links[4]
    testimonios.addEventListener('click',()=>{
       
        scrollSuave('#contacto',500,90)
        menuList.classList.remove('abrirMenu')
        btnCerrarmenu.style.left='20px'
        btnCerrarmenu.style.transition='all ease 0.5s';
    })
   
    
}

let scrollSuave =(objetivo,duracion,compensacion)=>{
    let elemObj = document.querySelector(objetivo);
    let elemPos = elemObj.getBoundingClientRect().top - compensacion;
    let PosActual = window.pageYOffset;
    let tiempoInical= null;

    const animacion = tiempoAhora =>{
        if(tiempoInical == null) tiempoInical = tiempoAhora
        let tiempoPasado = tiempoAhora - tiempoInical
        let auxAnimacion = easeInOutQuad(tiempoPasado,PosActual,elemPos,duracion);
        window.scrollTo(0, auxAnimacion)
        if(tiempoPasado<duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)

}

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }



iconMenu.addEventListener('click',()=>{
    menuList.classList.add('abrirMenu')
    btnCerrarmenu.style.left='20%'
    btnCerrarmenu.style.transition='all ease 0.8s';

})
btnCerrarmenu.addEventListener('click',()=>{
    menuList.classList.remove('abrirMenu')
    btnCerrarmenu.style.left='20px'
    btnCerrarmenu.style.transition='all ease 0.5s';
})

formulario.addEventListener('submit',()=>{
    console.log('el mensaje fue enviado')
})

