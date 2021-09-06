let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado  -550 < scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);



var btn = document.querySelector('.botonmenu')

btn.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
});

